"use client"

import { useState, useEffect } from "react";

import Footer from "@/components/homepage/footer"
import Hero from "@/components/homepage/hero"
import Newsletter from "@/components/homepage/newsletter"
import Numbers from "@/components/homepage/numbers"
import ShowBlog from "@/components/homepage/showBlog";
import ShowCourse from "@/components/homepage/showCourse"

import fetchCourses from "@/helpers/fetchCourses"
import fetchBlogs from "@/helpers/fetchBlogs"

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const coursesData = await fetchCourses(``);
      setCourses(coursesData.data);
      const blogsData = await fetchBlogs(``);
      setBlogs(blogsData.data);
    };
    fetchData();
  }, []);

  return (
    <main className="flex-col space-y-5">
      <Hero />
      <Numbers />
      <ShowCourse courses={courses}/>
      <ShowBlog blogs={blogs}/>
      <Newsletter />
      <Footer />
    </main>
  )
}