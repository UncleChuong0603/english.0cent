'use client';

import courses  from '@data/courses';
import CoursePost from '@components/course/course_post';

const page = () => {
  return (
    <section className='flex-col px-10 py-10 space-y-10 text-justify'>
        {courses.map(course => (
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
            
        )
}

export default page