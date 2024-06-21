import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const showCourse = ({ courses }) => {
  const limitedCourses = courses?.slice(0, 4)
  return (
    <div className="w-full py-10 bg-white rounded-3xl">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popular English Courses</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our top-rated courses and take your skills to the next level.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 grid-rows-2 gap-4">
            {limitedCourses.slice(0, 2).map((course, index) => (
              <div key={index} className="group bg-black text-white rounded-lg border transition-all hover:shadow-lg dark:border-gray-800">
                <div className="p-4 flex-col space-y-4 ">
                  <Link href={`/course/${course.attributes.slug}`}>
                    <h3 className="text-lg font-semibold transition-colors">
                      {course.attributes.Title}
                    </h3>
                  </Link>
                  <p className="mt-2 text-sm text-white line-clamp-2 dark:text-gray-400">
                    {course.attributes.Summary}
                  </p>
                  <div className="space-x-4">
                    <Badge variant={"secondary"}>{course.attributes.Target}</Badge>
                    <Badge variant={"secondary"}>{course.attributes.Level}</Badge>
                    <Badge variant={"secondary"}>{course.attributes.Combo.combo.length} Combo</Badge>
                  </div>
                </div>
              </div>
            ))}
            {limitedCourses?.slice(2).map((course, index) => (
              <div key={index+1} className="group rounded-lg border transition-all hover:shadow-lg dark:border-gray-800">
                <div className="p-4 flex-col space-y-4 ">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-50">
                    {course.attributes.Title}
                  </h3>
                  <p className="mt-2 text-sm line-clamp-2 dark:text-gray-400">
                    {course.attributes.Summary}
                  </p>
                  <div className="space-x-4">
                    <Badge variant={"secondary"}>{course.attributes.Target}</Badge>
                    <Badge variant={"secondary"}>{course.attributes.Level}</Badge>
                    <Badge variant={"secondary"}>{course.attributes.Combo.combo.length} Combo</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default showCourse
