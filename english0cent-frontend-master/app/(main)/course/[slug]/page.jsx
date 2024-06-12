/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pvQxyzPIvuT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"


export default function Component() {
  return (
    <main className="w-full mx-auto p-10 bg-white rounded-3xl">
      <div className="grid gap-8 md:gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              English for Beginners: A Comprehensive Course
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Unlock your English language potential with our beginner-friendly course. Develop essential skills in
              reading, writing, listening, and speaking through interactive lessons and engaging activities.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Course Overview</h2>
            <p className="text-gray-500 dark:text-gray-400">
              This comprehensive English course is designed for individuals with little to no prior experience in the
              language. Through a structured curriculum, you'll learn the fundamentals of grammar, vocabulary,
              pronunciation, and communication. Practical exercises and real-world scenarios will help you apply your
              newfound knowledge and gain confidence in using English in everyday situations.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Whether you're preparing for international travel, seeking professional advancement, or simply wanting to
              expand your linguistic horizons, this course will provide you with the tools and guidance to become a
              proficient English speaker.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Meet Your Instructor</h2>
            <div className="flex items-start gap-4">
              <img
                alt="Instructor"
                className="rounded-full"
                height={80}
                src="/assets/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80}
              />
              <div>
                <h3 className="text-lg font-semibold">Emily Wilkins</h3>
                <p className="text-gray-500 dark:text-gray-400">Experienced English Language Educator</p>
                <p className="text-gray-500 dark:text-gray-400">
                  With over 10 years of teaching experience, Emily is passionate about helping students of all
                  backgrounds achieve their English language goals. Her engaging teaching style and deep understanding
                  of the language make her the perfect guide for your learning journey.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Course Modules</h2>
            <div className="grid gap-4">
              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <div>
                  <h3 className="text-lg font-semibold">Module 1: Basics of English</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Covers the fundamentals of English grammar, vocabulary, and pronunciation.
                  </p>
                </div>
                <ChevronRightIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <div>
                  <h3 className="text-lg font-semibold">Module 2: Conversational English</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Focuses on developing fluency and confidence in everyday conversations.
                  </p>
                </div>
                <ChevronRightIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <div>
                  <h3 className="text-lg font-semibold">Module 3: Reading and Writing</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Covers essential skills for reading comprehension and effective written communication.
                  </p>
                </div>
                <ChevronRightIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <div>
                  <h3 className="text-lg font-semibold">Module 4: Listening and Speaking</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Focuses on improving listening comprehension and developing clear, articulate speech.
                  </p>
                </div>
                <ChevronRightIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <h2 className="text-2xl font-bold">Enroll Now</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Pricing</h3>
                <p className="text-gray-500 dark:text-gray-400">$99 for lifetime access to the course</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Payment Options</h3>
                <p className="text-gray-500 dark:text-gray-400">We accept all major credit cards and PayPal</p>
              </div>
              <Button className="w-full">Enroll Now</Button>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <h2 className="text-2xl font-bold">Student Reviews</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage alt="User" src="/assets/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-medium">5.0</p>
                  </div>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    "This course has been a game-changer for my English skills. The lessons are well-structured, and the
                    instructor's teaching style is engaging and effective."
                  </p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">- John Doe</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage alt="User" src="/assets/placeholder.svg" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5 fill-gray-300 stroke-gray-300" />
                    </div>
                    <p className="text-sm font-medium">4.0</p>
                  </div>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    "I've been struggling with English for years, but this course has helped me make significant
                    progress. The practice exercises and feedback from the instructor have been invaluable."
                  </p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">- Sarah Anderson</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <h2 className="text-2xl font-bold">Discussion Forum</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage alt="User" src="/assets/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Question about Module 2 exercises</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    I'm having trouble with the conversational exercises in Module 2. Can someone provide some tips or
                    guidance?
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <ClockIcon className="h-4 w-4" />
                    <span>2 days ago</span>
                    <Button className="ml-auto" size="sm" variant="ghost">
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage alt="User" src="/assets/placeholder.svg" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Feedback on course materials</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    I've been really impressed with the course materials so far. The explanations are clear, and the
                    practice exercises are helpful. Do you have any suggestions for additional resources?
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <ClockIcon className="h-4 w-4" />
                    <span>1 week ago</span>
                    <Button className="ml-auto" size="sm" variant="ghost">
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <h2 className="text-2xl font-bold">Supplementary Materials</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <div>
                  <h3 className="text-lg font-semibold">Course Notes</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Downloadable PDF files with key concepts and summaries.
                  </p>
                </div>
                <Button size="sm" variant="ghost">
                  Download
                </Button>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <div>
                  <h3 className="text-lg font-semibold">Practice Exercises</h3>
                  <p className="text-gray-500 dark:text-gray-400">Interactive exercises to reinforce your learning.</p>
                </div>
                <Button size="sm" variant="ghost">
                  Access
                </Button>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <div>
                  <h3 className="text-lg font-semibold">Closed Captions</h3>
                  <p className="text-gray-500 dark:text-gray-400">Subtitles for all video lessons.</p>
                </div>
                <Button size="sm" variant="ghost">
                  Enable
                </Button>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <div>
                  <h3 className="text-lg font-semibold">Screen Reader Support</h3>
                  <p className="text-gray-500 dark:text-gray-400">Optimized for accessibility.</p>
                </div>
                <Button size="sm" variant="ghost">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}