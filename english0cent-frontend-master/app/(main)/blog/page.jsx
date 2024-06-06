"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation'; // Import the router from next/router
import { useSearchParams } from 'next/navigation';
import { CardContent, Card, CardTitle, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import fetchBlogs from '@/helpers/fetchBlogs';
import calculateReadingTime from '@/helpers/calculateReadingTime';

const BlogPost = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);

  const router = useRouter(); // Initialize the router

  const searchParams = useSearchParams(); // Get the query parameters from the URL

  // Fetch all blogs and categories
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blogs = await fetchBlogs(``);
        if (blogs.data.length === 0) {
          setError('No blogs found');
        } else {
          setBlogPosts(blogs.data);
          const categoryCount = blogs.data.reduce((acc, blog) => {
            const category = blog.attributes.Category;
            acc[category] = acc[category] ? acc[category] + 1 : 1;
            return acc;
          }, {});
          categoryCount["All Blogs"] = blogs.data.length; // Add All Blogs category
          setCategories(categoryCount);
        }
      } catch (err) {
        setError('Error fetching blog data');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  // Handle query parameters for category filtering
  useEffect(() => {
    const category = searchParams.get('category');
    setSelectedCategory(category);
    if (category) {
      localStorage.setItem('selectedCategory', category); // Store selected category in localStorage
    } else {
      localStorage.removeItem('selectedCategory'); // Remove category from localStorage if not selected
    }
  }, [searchParams]);

  // Retrieve selected category from localStorage
  useEffect(() => {
    const storedCategory = localStorage.getItem('selectedCategory');
    if (storedCategory) {
      setSelectedCategory(storedCategory);
    }
  }, []);

  const handleCategoryClick = (category) => {
    const newCategory = category === "All Blogs" ? null : category;
    setSelectedCategory(newCategory);
    router.push(`/blog${newCategory ? `?category=${newCategory}` : ''}`); // Update the URL when a category is clicked
  };

  // Filter and sort blog posts based on selected category
  const filteredBlogPosts = selectedCategory
    ? blogPosts.filter(blog => blog.attributes.Category === selectedCategory)
    : blogPosts;
  const sortedBlogPosts = [...filteredBlogPosts].sort((a, b) => new Date(b.attributes.PublishDate) - new Date(a.attributes.PublishDate));

  const latestBlogPosts = [...blogPosts].sort((a, b) => new Date(b.attributes.PublishDate) - new Date(a.attributes.PublishDate)).slice(0, 2);


  if (loading) return <div className='w-full h-[608px] bg-white rounded-3xl flex-center'>Loading...</div>;
  if (error) return <div className='w-full h-[608px] bg-white rounded-3xl flex-center'>{error}</div>;

  return (
    <section className={`w-full p-8 bg-white rounded-3xl ${filteredBlogPosts.length < 3 ? 'h-[608px]' : 'h-auto'}`}>
      <div className="flex space-x-8">
        <div className="w-3/4">
          <div className="space-y-8">
            {sortedBlogPosts.map(blog => (
              <div key={blog.id} className='space-y-4'>
                <div className="p-8 border border-gray-200 rounded-3xl space-y-4">
                  <Link href={`/blog/${blog.attributes.slug}`}>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                      {blog.attributes.Title}
                    </h1>
                  </Link>
                  <div className="flex space-x-8">
                    <Badge className="p-4 cursor-pointer" variant="secondary" onClick={() => handleCategoryClick(blog.attributes.Category)}>{blog.attributes.Category}</Badge>
                    <div className="flex-center">{calculateReadingTime(blog.attributes.Content)}</div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {blog.attributes.Summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/4 h-[300px] space-y-4 sticky top-8">
          <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="space-y-2">
                {Object.keys(categories).map(category => (
                  <a
                    key={category}
                    className={`flex items-center justify-between cursor-pointer ${selectedCategory === category || (!selectedCategory && category === "All Blogs") ? 'font-bold' : ''}`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    <span>{category}</span>
                    <Badge>{categories[category]}</Badge>
                  </a>
                ))}
              </nav>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Latest Blogs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {latestBlogPosts.map(blog => (
                  <Link key={blog.id} className="flex items-center gap-4 hover:underline" href={`/blog/${blog.attributes.slug}`}>
                    <div className="space-y-1">
                      <div className="font-medium">{blog.attributes.Title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default BlogPost;
