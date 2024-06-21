"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import slugifyHeading from '@/helpers/slugifyHeading';

import fetchLessons from '@/helpers/fetchLessons';

const LessonDetails = (props) => {
  const [lessonContent, setLessonContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState(null);

  console.log('Props:', props);

  useEffect(() => {
    const fetchLessonData = async () => {
      try {
        const lessonsData = await fetchLessons(`filters[slug][$eq]=${props.params.lesson}`);
        if (lessonsData.data.length === 0) {
          setError('Lesson not found');
        } else {
          const lesson = lessonsData.data[0];
          setLessonContent(lesson);

          const headings = lesson.attributes.Content
            .filter(item => item.type === 'heading' && item.level < 4)
            .map((item, index) => ({
              id: slugifyHeading(item.children[0].text),
              text: item.children[0].text,
              level: item.level
            }));
          setToc(headings);
        }
      } catch (err) {
        setError('Error fetching lesson data');
      } finally {
        setLoading(false);
      }
    };

    fetchLessonData();
  }, [props.params.lesson]);

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = document.querySelector('.lesson-content');
      if (!contentElement) return; // Exit early if content element is not found
      
      const { scrollTop } = contentElement;
      let activeHeadingId = null;

      toc.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          const offsetTop = element.offsetTop - contentElement.offsetTop;
          if (offsetTop >= 200) {
            activeHeadingId = heading.id;
            return; // Exit loop early since we found the first heading that meets the condition
          }
        }
      });

      setActiveId(activeHeadingId);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toc]);
  
  if (loading) return <div className='w-full h-[608px] bg-white rounded-3xl flex-center'>Loading...</div>;
  if (error) return <div className='w-full h-[608px] bg-white rounded-3xl flex-center'>{error}</div>;

  const renderContent = (content) => {
    return content.map((item, index) => {
      if (item.type === 'heading') {
        const Tag = `h${item.level}`;
        const id = `heading-${index}`;
        return <Tag key={index} id={id} className={`mt-12 ${activeId === id ? 'rounded-lg bg-yellow-300 font-bold p-4' : ''}`} dangerouslySetInnerHTML={{ __html: item.children[0].text }} />;
      } else if (item.type === 'paragraph') {
        return <p key={index} className="mt-4" dangerouslySetInnerHTML={{ __html: item.children[0].text }} />;
      }
      return null;
    });
  };

  return (
    <section className='flex space-x-4'>
      <div className='w-1/4 h-[608px] flex-col space-y-4 rounded-3xl bg-white sticky top-0 p-8 '>
        <div className='flex-between'>
          <Link href={lessonContent.attributes.slug} className='font-bold bg-gray-200 rounded-lg p-2'>Lesson</Link>
          <Link href={`/course/${props.params.course}`} className='border border-gray-200 rounded-lg p-2'>Back to Modules</Link>
        </div>
        <ul className='flex-col space-y-4 pl-4'>
          {toc.map((item, index) => (
            <li key={index} className={`toc-item ${activeId === item.id ? 'rounded-lg bg-yellow-300 font-bold p-4' : ''}`} data-id={item.id}>
              <a href={`#${item.id}`}>{item.text}</a>
            </li>
          ))}
        </ul>
        <div><Link href={`/course/${props.params.course}/${props.params.module}/${props.params.lesson}/${lessonContent.attributes.Exercise.data.attributes.slug}`} className='font-bold bg-gray-200 rounded-lg p-2'>Move to Exercise</Link></div>
      </div>
      <div className='w-3/4 h-[608px] rounded-3xl bg-white hide-scrollbar lesson-content'>
        <div className="p-8 flex-col space-y-4">
          <h1>{lessonContent.attributes.Title}</h1>
          <div className="flex-col">
            {renderContent(lessonContent.attributes.Content)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LessonDetails;

