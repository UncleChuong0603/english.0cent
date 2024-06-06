import React from 'react'

const statistics = [
  { count: "99+", label: "Fighting Members" },
  { count: "99+", label: "Free Courses" },
  { count: "99+", label: "Updated Documents" },
  { count: "99+", label: "Latest Blogs" }
];

const numbers = () => {
  return (
    <div className="w-full py-10 bg-white dark:bg-gray-800 rounded-3xl">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">It's all about your effort</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We empower learners with our free English eLearning platform.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md hover:shadow-md dark:bg-gray-950 dark:shadow-none">
                <div className="text-4xl font-bold text-gray-900 dark:text-gray-50">{stat.count}</div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default numbers