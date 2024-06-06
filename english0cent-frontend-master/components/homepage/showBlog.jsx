import React from 'react'

const blogs = [
    {
      title: "Mastering English Idioms: A Comprehensive Guide",
      description: "Unlock the power of English idioms and learn how to use them effectively in your conversations.",
      imgSrc: "/assets/placeholder.svg"
    },
    {
      title: "Improving Your English Pronunciation: Tips and Tricks",
      description: "Enhance your English speaking skills with these effective pronunciation techniques.",
      imgSrc: "/assets/placeholder.svg"
    },
    {
      title: "Navigating English Grammar: A Beginner's Guide",
      description: "Unlock the secrets of English grammar and become a confident communicator.",
      imgSrc: "/assets/placeholder.svg"
    }
  ];

const showblog = () => {
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <div key={index} className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-900">
                <img
                  alt="Blog Post Thumbnail"
                  className="h-48 w-full object-cover"
                  height="200"
                  src={blog.imgSrc}
                  style={{ aspectRatio: "400/200", objectFit: "cover" }}
                  width="400"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {blog.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {blog.description}
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