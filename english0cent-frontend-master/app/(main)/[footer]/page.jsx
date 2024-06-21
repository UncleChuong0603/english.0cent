"use client";

import { useEffect, useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { useRouter } from 'next/navigation';

import fetchFooters from '@/helpers/fetchFooters';
import slugifyHeading from '@/helpers/slugifyHeading';

const FooterDetails = (props) => {
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [footerContent, setFooterContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        console.log(props);
        console.log('Fetching footer document data...');
        const footerContents = await fetchFooters(`filters[slug][$eq]=${props.params.footer}`);
        console.log('Footer document fetched:', footerContents);
        if (footerContents.data.length === 0) {
          setError('Footer document not found');
          console.error('Footer document not found');
        } else {
          const footer = footerContents.data[0];
          console.log('Footer content:', footer);
          setFooterContent(footer);
        }
      } catch (err) {
        setError('Error fetching footer data');
        console.error('Error fetching footer data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFooterData();
  }, [props.params.slug]);

  useEffect(() => {
    if (footerContent) {
      console.log('Setting table of contents...');
      const headings = footerContent.attributes.Content
        .filter(item => item.type === 'heading')
        .map((item, index) => ({
          id: slugifyHeading(item.children[0].text),
          text: item.children[0].text,
          level: item.level
        }));
      console.log('Headings:', headings);
      setToc(headings);
    }
  }, [footerContent]);

  useEffect(() => {
    const handleScroll = () => {
      const tocElement = document.querySelector('.table-of-contents');
      const contentElement = document.querySelector('.footer-content');
  
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

  return (
    <div className='flex space-x-4'>
      <div className='w-1/4 h-[608px] rounded-3xl bg-white sticky top-0 p-8 space-y-4'>
        <div className="text-2xl font-bold table-of-contents">Table of Contents</div>
        <ul className='space-y-4'>
          {toc.filter(item => item.level < 4).map((item, index) => (
            <li key={index} className={`toc-item ${activeId === item.id ? 'rounded-lg bg-yellow-300 font-bold p-4' : ''}`} data-id={item.id}>
              <a href={`#${item.id}`}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-3/4 h-[608px] rounded-3xl bg-white hide-scrollbar footer-content'>
        <div className="p-8 flex-col space-y-4">
          <h1>{footerContent.attributes.Title}</h1>
          <div className="flex-col">
            {renderContent(footerContent.attributes.Content)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDetails;

