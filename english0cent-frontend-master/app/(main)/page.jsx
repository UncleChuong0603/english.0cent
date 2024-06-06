"use client"

import Footer from "@/components/homepage/footer"
import Hero from "@/components/homepage/hero"
import Newsletter from "@/components/homepage/newsletter"
import Numbers from "@/components/homepage/numbers"
import ShowBlog from "@/components/homepage/showBlog";
import ShowCourse from "@/components/homepage/showCourse"

export default function Home() {
  
  return (
    <main className="flex-col space-y-5">
      <Hero />
      <Numbers />
      <ShowCourse />
      <ShowBlog />
      <Newsletter />
      <Footer />
    </main>
  )
}
