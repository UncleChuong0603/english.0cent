import React from 'react'
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"

const showblog = ({ blogs }) => {
  const limitedBlogs = blogs?.slice(0, 4)
  return (
    <div className="bg-white py-12 dark:bg-gray-800 rounded-3xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Latest from the Blog
            </h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 sm:mt-4">
              Discover the latest insights and tips from our English learning experts.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {limitedBlogs.map((blog, index) => (
              <div key={index} className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-900">
                <div className="p-4 space-y-4">
                  <Link href={`/blog/${blog.attributes.slug}`}>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {blog.attributes.Title}
                    </h3>
                  </Link>
                  <Badge variant="secondary">{blog.attributes.Category}</Badge>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {blog.attributes.Summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default showblog
