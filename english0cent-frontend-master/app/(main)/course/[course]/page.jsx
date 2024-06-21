"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import fetchCourses from "@/helpers/fetchCourses";
import fetchModules from "@/helpers/fetchModules";

const CoursePage = (props) => {
  console.log('Props:', props);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modules, setModules] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const coursesData = await fetchCourses(`filters[slug][$eq]=${props.params.course}`);
        const initialCourse = coursesData.data[0];
        setCourse(initialCourse);
        const modulesData = await fetchModules(initialCourse.attributes.Modules.data[0]?.id);
        setModules(modulesData?.data || []);
        setLoading(false);
      } catch (error) {
        setError("Error fetching course data");
        setLoading(false);
      }
    };
    fetchInitialData();
  }, [props.params.course]);

  const toggleDropdown = (id) => {
    setOpenDropdown((prevOpenDropdown) => (prevOpenDropdown === id ? null : id));
  };

  if (loading) {
    return (
      <div className="w-full h-[608px] bg-white rounded-3xl flex-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[608px] bg-white rounded-3xl flex-center">
        {error}
      </div>
    );
  }

  return (
    <main className="w-full mx-auto p-10 bg-white rounded-3xl h-[608px]">
      <div className="grid gap-8 md:gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {course.attributes.Title}
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              {course.attributes.Summary}
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Course Modules</h2>
            <div className="mt-4 space-y-4">
              {course.attributes.Modules.data.map((module) => (
                <div className='flex-col space-y-4'>
                <div
                  key={module.id}
                  className="flex-col space-y-4 items-center justify-between rounded-lg p-4 border border-gray-200 cursor-pointer"
                  onClick={() => toggleDropdown(module.id)}
                >
                  <div>
                    <h3 className="text-lg font-semibold">
                      {module.attributes.Title}
                    </h3>
                    <p className="text-sm">{module.attributes.Summary}</p>
                  </div>
                  {openDropdown === module.id && (
                    <div className="space-y-4">
                      {modules
                        .flatMap((module) => module.attributes.Lessons.data)
                        .map((lesson) => (
                          <Link
                            key={lesson.id}
                            className="flex items-center justify-between rounded-lg"
                            href={`/course/${props.params.course}/${module.attributes.slug}/${lesson.attributes.slug}`}
                          >
                            <div className='pl-8'>
                              <h4 className="text-base font-semibold">
                                {lesson.attributes?.Title}
                              </h4>
                            </div>
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              </div>
              ))}
            </div>
            <div className="flex-col space-y-4 items-center justify-between rounded-lg p-4 border border-gray-200 text-lg font-semibold cursor-pointer">
              <Link href={`/course/${props.params.course}/final-test`} >Final Test</Link>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <h2 className="text-2xl font-bold">Let's start now</h2>
            <div className="mt-4 space-y-4">
              <Button className="w-full">Enroll Now</Button>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <h2 className="text-2xl font-bold">Related Documents</h2>
            <div className="mt-4 space-y-4">
              {course.attributes.Documents.data.map((document) => (
                <div
                  key={document.id}
                  className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{document.attributes.Title}</h3>
                  </div>
                  <Link href={document.attributes.Link} target="_blank">
                    <Button>Download</Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoursePage