"use client";

import { useEffect, useState, useRef, useCallback } from 'react';
import fetchBlogs from '@/helpers/fetchBlogs';
import getRandomBlogs from '@/helpers/getRandomBlogs';
import calculateReadingTime from '@/helpers/calculateReadingTime';
import { Badge } from "@/components/ui/badge";
import { useRouter } from 'next/navigation'; // Import the router

const BlogDetails = (props) => {
  const [blogContent, setBlogContent] = useState(null);
  const [randomBlogs, setRandomBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toc, setToc] = useState([]);
  const contentRef = useRef(null);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blogs = await fetchBlogs(`filters[slug][$eq]=${props.params.slug}`);
        if (blogs.data.length === 0) {
          setError('Blog not found');
        } else {
          const blog = blogs.data[0];
          setBlogContent(blog);

          const randomBlogData = await getRandomBlogs(blog.id);
          setRandomBlogs(randomBlogData);
        }
      } catch (err) {
        setError('Error fetching blog data');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [props.params.slug]);

  useEffect(() => {
    if (blogContent) {
      const headings = blogContent.attributes.Content.filter(item => item.type === 'heading');
      setToc(headings);
    }
  }, [blogContent]);

  const handleIntersect = useCallback((entries) => {
    entries.forEach(entry => {
      const tocItems = document.querySelectorAll('.toc-item');
      const itemId = entry.target.id;
      tocItems.forEach(item => {
        const itemTocId = item.getAttribute('data-id');
        if (itemTocId === itemId) {
          if (entry.isIntersecting) {
            item.classList.add('rounded-lg', 'bg-yellow-300', 'font-bold', 'p-4');
          } else {
            item.classList.remove('rounded-lg', 'bg-yellow-300', 'font-bold', 'p-4');
          }
        }
      });
    });
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    });

    const headings = contentRef.current.querySelectorAll('h2, h3');
    headings.forEach(heading => observer.observe(heading));

    return () => {
      headings.forEach(heading => observer.unobserve(heading));
    };
  }, [handleIntersect, toc]);

  if (loading) return <div className='w-full h-[608px] bg-white rounded-3xl flex-center'>Loading...</div>;
  if (error) return <div className='w-full h-[608px] bg-white rounded-3xl flex-center'>{error}</div>;

  const renderContent = (content) => {
    return content.map((item, index) => {
      if (item.type === 'heading') {
        const Tag = `h${item.level}`;
        return <Tag key={index} id={`heading-${index}`} className="mt-12" dangerouslySetInnerHTML={{ __html: item.children[0].text }} />;
      } else if (item.type === 'paragraph') {
        return <p key={index} className="mt-4" dangerouslySetInnerHTML={{ __html: item.children[0].text }} />;
      }
      return null;
    });
  };

  const handleBadgeClick = (category) => {
    router.push(`/blog?category=${category}`); // Redirect to /blog with the category as a query parameter
  };

  return (
    <div className='flex space-x-4'>
      <div className='w-1/4 h-[608px] rounded-3xl bg-white sticky top-0 p-8 space-y-4'>
        <div className="text-2xl font-bold">Table of Content</div>
        <ul className='space-y-4'>
          {toc.map((item, index) => (
            <li key={index} className='toc-item' data-id={`heading-${index}`}>
              <a href={`#heading-${index}`}>{item.children[0].text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-3/4 h-[608px] rounded-3xl bg-white hide-scrollbar' ref={contentRef}>
        <div className="p-8 flex-col space-y-4">
          <h1>{blogContent.attributes.Title}</h1>
          <div className="flex space-x-8">
            <Badge className="p-4 cursor-pointer" variant="secondary" onClick={() => handleBadgeClick(blogContent.attributes.Category)}>
              {blogContent.attributes.Category}
            </Badge>
            <div className="flex-center">{calculateReadingTime(blogContent.attributes.Content)}</div>
          </div>
          <p>{blogContent.attributes.Summary}</p>
          <div className="flex-col">
            {renderContent(blogContent.attributes.Content)}
          </div>
          {randomBlogs.length >= 2 && (
            <div className='flex space-x-4 pt-12'>
              <div className='w-1/2 p-4 border-gray-400 border-2 rounded-3xl flex-center'>
                <a href={`/blog/${randomBlogs[0].attributes.slug}`}>
                  {randomBlogs[0].attributes.Title}
                </a>
              </div>
              <div className='w-1/2 p-4 border-gray-400 border-2 rounded-3xl flex-center'>
                <a href={`/blog/${randomBlogs[1].attributes.slug}`}>
                  {randomBlogs[1].attributes.Title}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
