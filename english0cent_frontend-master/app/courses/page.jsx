'use client';

import React, { useState } from 'react';
import CoursePost from '@app/courses/components/course_post';
import SearchBar from '@components/searchbar';
import courses from '@/data/courses';

const CoursesPage = () => {
  const [sortingCriteria, setSortingCriteria] = useState({
    title: '',
    level: 'Level',
    topic: 'Topic',
    certificate: 'Certificate'
  });

  const filteredCourses = courses.filter(course => {
    const titleMatches = course.title.toLowerCase().includes(sortingCriteria.title.toLowerCase());
    const tagMatches = course.tags.some(tag => tag.toLowerCase().includes(sortingCriteria.title.toLowerCase()));

    return (
      (sortingCriteria.title === '' || titleMatches || tagMatches) &&
      (sortingCriteria.level === 'Level' || course.tags.includes(sortingCriteria.level)) &&
      (sortingCriteria.topic === 'Topic' || course.tags.includes(sortingCriteria.topic)) &&
      (sortingCriteria.certificate === 'Certificate' || course.tags.includes(sortingCriteria.certificate))
    );
  });

  return (
    <section className='flex-col px-10 py-10 space-y-10 text-justify'>
      <SearchBar setSortingCriteria={setSortingCriteria} />
      {filteredCourses.map(course => (
        <CoursePost
          key={course.id}
          title={course.title}
          href={course.href}
          tags={course.tags}
          description={course.description}
          completion={course.completion}
        />
      ))}
    </section>
  );
}

export default CoursesPage;