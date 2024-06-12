"use client";

import { useEffect, useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { useRouter } from 'next/navigation';

import fetchBlogs from '@/helpers/fetchBlogs';
import getRandomBlogs from '@/helpers/getRandomBlogs';
import calculateReadingTime from '@/helpers/calculateReadingTime';
import slugifyHeading from '@/helpers/slugifyHeading';

const BlogDetails = (props) => {
  const [blogContent, setBlogContent] = useState(null);
  const [randomBlogs, setRandomBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        console.log('Fetching blog data...');
        const blogs = await fetchBlogs(`filters[slug][$eq]=${props.params.slug}`);
        console.log('Blogs fetched:', blogs);
        if (blogs.data.length === 0) {
          setError('Blog not found');
          console.error('Blog not found');
        } else {
          const blog = blogs.data[0];
          console.log('Blog content:', blog);
          setBlogContent(blog);

          const randomBlogData = await getRandomBlogs(blog.id);
          console.log('Random blogs:', randomBlogData);
          setRandomBlogs(randomBlogData);
        }
      } catch (err) {
        setError('Error fetching blog data');
        console.error('Error fetching blog data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [props.params.slug]);

  useEffect(() => {
    if (blogContent) {
      console.log('Setting table of contents...');
      const headings = blogContent.attributes.Content
        .filter(item => item.type === 'heading')
        .map((item, index) => ({
          id: slugifyHeading(item.children[0].text),
          text: item.children[0].text,
          level: item.level
        }));
      console.log('Headings:', headings);
      setToc(headings);
    }
  }, [blogContent]);

  useEffect(() => {
    const handleScroll = () => {
      const tocElement = document.querySelector('.table-of-contents');
      const contentElement = document.querySelector('.blog-content');
  
      if (!tocElement || !contentElement) return; // Exit early if table of contents or content element is not found
      
      const tocOffsetTop = tocElement.offsetTop;
      console.log('TOC Offset Top:', tocOffsetTop);
      const { scrollTop } = contentElement;
      console.log('Scroll Top:', scrollTop);
      let activeHeadingId = null;
  
      toc.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          const offsetTop = element.offsetTop - contentElement.offsetTop;
          console.log(`Checking heading: ${heading.id}, Offset Top: ${offsetTop}`);
          if (offsetTop >= tocOffsetTop + 200) {
            activeHeadingId = heading.id;
            console.log('Active Heading ID set to:', activeHeadingId);
            return; // Exit loop early since we found the first heading that meets the condition
          }
        }
      });
  
      console.log('Final Active Heading ID:', activeHeadingId);
      setActiveId(activeHeadingId);
    };
  
    window.addEventListener('scroll', handleScroll);
    console.log('Scroll event listener added.');
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('Scroll event listener removed.');
    };
  }, [toc]);
  
  

  if (loading) return <div className='w-full h-[608px] bg-white rounded-3xl flex-center'>Loading...</div>;
  if (error) return <div className='w-full h-[608px] bg-white rounded-3xl flex-center'>{error}</div>;

  const renderContent = (content) => {
    return content.map((item, index) => {
      if (item.type === 'heading') {
        const Tag = `h${item.level}`;
        const id = slugifyHeading(item.children[0].text);
        return <Tag key={index} id={id} className="mt-12" dangerouslySetInnerHTML={{ __html: item.children[0].text }} />;
      } else if (item.type === 'paragraph') {
        return <p key={index} className="mt-4" dangerouslySetInnerHTML={{ __html: item.children[0].text }} />;
      }
      return null;
    });
  };

  const handleBadgeClick = (category) => {
    router.push(`/blog?category=${category}`);
  };

  return (
    <div className='flex space-x-4'>
      <div className='w-1/4 h-[608px] rounded-3xl bg-white sticky top-0 p-8 space-y-4'>
        <div className="text-2xl font-bold table-of-contents">Table of Contents</div>
        <ul className='space-y-4'>
          {toc.map((item, index) => (
            <li key={index} className={`toc-item ${activeId === item.id ? 'rounded-lg bg-yellow-300 font-bold p-4' : ''}`} data-id={item.id}>
              <a href={`#${item.id}`}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-3/4 h-[608px] rounded-3xl bg-white hide-scrollbar blog-content'>
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
