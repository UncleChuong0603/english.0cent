import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const page = () => {
  return (
    <main className="flex-col space-y-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Top Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="font-medium">Introduction to Web Development</div>
                <div>42 hrs</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">Advanced JavaScript Concepts</div>
                <div>38 hrs</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">Design Thinking Fundamentals</div>
                <div>35 hrs</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Certificates Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="font-medium">Front-End Development</div>
                <div>May 15, 2023</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">UI/UX Design Fundamentals</div>
                <div>April 20, 2023</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">Agile Project Management</div>
                <div>March 28, 2023</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ongoing Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="font-medium">Advanced React Patterns</div>
                <div className="flex items-center">
                  <Progress className="mr-2 w-24" value={75} />
                  75%
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">Machine Learning for Beginners</div>
                <div className="flex items-center">
                  <Progress className="mr-2 w-24" value={60} />
                  60%
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">Responsive Web Design</div>
                <div className="flex items-center">
                  <Progress className="mr-2 w-24" value={85} />
                  85%
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-full h-auto flex gap-4">
        <div className="w-1/2 h-auto bg-white rounded-xl">
        <div className="grid gap-4 md:p-6">
          <div className="grid gap-2 rounded-l dark:bg-gray-800/40">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Upcoming Lessons</h3>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                View all
              </Link>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md dark:bg-gray-950">
                <div className="grid gap-1">
                  <h4 className="text-base font-medium">Introduction to Web Development</h4>
                  <div className="grid grid-cols-2 gap-1">
                    <Badge variant="" className={"flex-center"}>Grammar is Easy</Badge>
                    <Badge variant="secondary" className={"flex-center"}>Road to TOEIC 650</Badge>
                  </div>
                </div>
                <Link
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View Details
                </Link>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md dark:bg-gray-950">
                <div className="grid gap-1">
                  <h4 className="text-base font-medium">Intermediate JavaScript Concepts</h4>
                  <div className="grid grid-cols-2 gap-1">
                    <Badge variant="" className={"flex-center"}>Grammar is Easy</Badge>
                    <Badge variant="secondary" className={"flex-center"}>Road to TOEIC 650</Badge>
                  </div>
                  </div>
                <Link
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View Details
                </Link>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md dark:bg-gray-950">
                <div className="grid gap-1">
                  <h4 className="text-base font-medium">Advanced React Patterns</h4>
                  <div className="grid grid-cols-2 gap-1">
                    <Badge variant="" className={"flex-center"}>Grammar is Easy</Badge>
                    <Badge variant="secondary" className={"flex-center"}>Road to TOEIC 650</Badge>
                  </div>
                </div>
                <Link
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="w-1/2 h-auto bg-white rounded-xl">
        <div className="grid gap-4 md:p-6">
          <div className="grid gap-2 rounded-l dark:bg-gray-800/40">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Awaiting Assignments</h3>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Finish
              </Link>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md dark:bg-gray-950">
                <div className="grid gap-1">
                  <h4 className="text-base font-medium">Introduction to Web Development</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Badge variant="" className={"flex-center"}>Grammar is Easy</Badge>
                  </div>
                </div>
                <Link
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Finish
                </Link>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md dark:bg-gray-950">
                <div className="grid gap-1">
                  <h4 className="text-base font-medium">Intermediate JavaScript Concepts</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Badge variant="" className={"flex-center"}>Grammar is Easy</Badge>
                  </div>                
                </div>
                <Link
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Finish
                </Link>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md dark:bg-gray-950">
                <div className="grid gap-1">
                  <h4 className="text-base font-medium">Advanced React Patterns</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Badge variant="" className={"flex-center"}>Grammar is Easy</Badge>
                  </div>
                </div>
                <Link
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Finish
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </main>
  )
}

export default page