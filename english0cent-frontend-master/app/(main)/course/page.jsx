"use client"
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const categories = [
  { id: "category-beginner", label: "Beginner" },
  { id: "category-intermediate", label: "Intermediate" },
  { id: "category-advanced", label: "Advanced" },
  { id: "category-business", label: "Business" }
];

const levels = [
  { id: "level-beginner", label: "Beginner" },
  { id: "level-intermediate", label: "Intermediate" },
  { id: "level-advanced", label: "Advanced" }
];

const prices = [
  { id: "price-free", label: "Free" },
  { id: "price-paid", label: "Paid" }
];

const courses = [
  {
    title: "Beginner English",
    description: "Start your English language journey with our comprehensive beginner-level course.",
    duration: "40 hours"
  },
  {
    title: "Intermediate English",
    description: "Take your English skills to the next level with our intermediate-level course.",
    duration: "60 hours"
  },
  {
    title: "Advanced English",
    description: "Achieve fluency and mastery with our advanced-level English course.",
    duration: "80 hours"
  },
  {
    title: "Business English",
    description: "Develop your professional English skills for the workplace.",
    duration: "50 hours"
  },
  {
    title: "Conversational English",
    description: "Improve your speaking and listening skills for everyday conversations.",
    duration: "45 hours"
  },
  {
    title: "IELTS Preparation",
    description: "Get ready for the IELTS exam with our comprehensive preparation course.",
    duration: "60 hours"
  }
];

export default function Component() {
  return (
    <div className="w-full">
      <section className="p-4 bg-white rounded-3xl flex space-x-5">
        <div className="w-60 p-4 sticky top-4 h-full">
          <h3 className="text-xl font-bold mb-4">Filter Courses</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium mb-2">Category</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div className="flex items-center" key={category.id}>
                    <Checkbox id={category.id} />
                    <Label className="ml-2" htmlFor={category.id}>
                      {category.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Level</h4>
              <div className="space-y-2">
                {levels.map((level) => (
                  <div className="flex items-center" key={level.id}>
                    <Checkbox id={level.id} />
                    <Label className="ml-2" htmlFor={level.id}>
                      {level.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Price</h4>
              <div className="space-y-2">
                {prices.map((price) => (
                  <div className="flex items-center" key={price.id}>
                    <Checkbox id={price.id} />
                    <Label className="ml-2" htmlFor={price.id}>
                      {price.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card key={index}>
                <CardContent>
                  <h3 className="text-xl font-bold py-5">{course.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Duration: {course.duration}</span>
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      Enroll
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
