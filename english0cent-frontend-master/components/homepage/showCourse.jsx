import Link from "next/link"

const courses = [
    {
      title: "English for Beginners",
      description: "Learn the fundamentals of English grammar, vocabulary, and conversation.",
      imgSrc: "/assets/placeholder.svg",
      href: "#"
    },
    {
      title: "English for Beginners",
      description: "Learn the fundamentals of English grammar, vocabulary, and conversation.",
      imgSrc: "/assets/placeholder.svg",
      href: "#"
    },
    {
      title: "English for Beginners",
      description: "Learn the fundamentals of English grammar, vocabulary, and conversation.",
      imgSrc: "/assets/placeholder.svg",
      href: "#"
    },
    {
      title: "English for Beginners",
      description: "Learn the fundamentals of English grammar, vocabulary, and conversation.",
      imgSrc: "/assets/placeholder.svg",
      href: "#"
    },
  ];

const showCourse = () => {
  return (
    <div className="w-full py-10 bg-white rounded-3xl">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popular English Courses</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our top-rated courses and take your skills to the next level.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {courses.map((course, index) => (
              <div key={index} className="group rounded-lg border transition-all hover:shadow-lg dark:border-gray-800">
                <div className="flex-center p-5">
                  <img
                    alt="Course Image"
                    className="h-[100px] w-[100px] rounded-t-lg object-cover object-center transition-all group-hover:scale-105"
                    height="100"
                    src={course.imgSrc}
                    width="100"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-50">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
                    {course.description}
                  </p>
                  <Link
                    className="mt-4 inline-flex h-9 flex-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href={course.href}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default showCourse