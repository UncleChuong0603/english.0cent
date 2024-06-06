/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LnbNNJJRN8N
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col bg-white">
      <div className="container flex gap-8 py-5">
        <div className="hidden w-64 flex-col gap-4 md:flex">
          <div className="sticky top-4 space-y-4">
            <h3 className="text-lg font-semibold">Document Categories</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                    href="#"
                  >
                    <FileIcon className="h-5 w-5" />
                    <span>Grammar</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                    href="#"
                  >
                    <FileIcon className="h-5 w-5" />
                    <span>Vocabulary</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                    href="#"
                  >
                    <FileIcon className="h-5 w-5" />
                    <span>Pronunciation</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                    href="#"
                  >
                    <FileIcon className="h-5 w-5" />
                    <span>Idioms</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                    href="#"
                  >
                    <FileIcon className="h-5 w-5" />
                    <span>Writing</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="container flex-1">
          <h2 className="mb-4 text-2xl font-semibold md:mb-6">All Documents</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View document</span>
              </Link>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt="Document Thumbnail"
                  className="h-full w-full object-cover transition-all group-hover:scale-105"
                  height={300}
                  src="/assets/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold">English Grammar Essentials</h3>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  A comprehensive guide to mastering English grammar.
                </p>
                <Button className="w-full" size="sm">
                  Download
                </Button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View document</span>
              </Link>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt="Document Thumbnail"
                  className="h-full w-full object-cover transition-all group-hover:scale-105"
                  height={300}
                  src="/assets/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold">English Grammar Essentials</h3>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  A comprehensive guide to mastering English grammar.
                </p>
                <Button className="w-full" size="sm">
                  Download
                </Button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View document</span>
              </Link>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt="Document Thumbnail"
                  className="h-full w-full object-cover transition-all group-hover:scale-105"
                  height={300}
                  src="/assets/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold">English Grammar Essentials</h3>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  A comprehensive guide to mastering English grammar.
                </p>
                <Button className="w-full" size="sm">
                  Download
                </Button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View document</span>
              </Link>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt="Document Thumbnail"
                  className="h-full w-full object-cover transition-all group-hover:scale-105"
                  height={300}
                  src="/assets/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold">English Grammar Essentials</h3>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  A comprehensive guide to mastering English grammar.
                </p>
                <Button className="w-full" size="sm">
                  Download
                </Button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View document</span>
              </Link>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt="Document Thumbnail"
                  className="h-full w-full object-cover transition-all group-hover:scale-105"
                  height={300}
                  src="/assets/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold">English Grammar Essentials</h3>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  A comprehensive guide to mastering English grammar.
                </p>
                <Button className="w-full" size="sm">
                  Download
                </Button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View document</span>
              </Link>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt="Document Thumbnail"
                  className="h-full w-full object-cover transition-all group-hover:scale-105"
                  height={300}
                  src="/assets/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold">English Grammar Essentials</h3>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  A comprehensive guide to mastering English grammar.
                </p>
                <Button className="w-full" size="sm">
                  Download
                </Button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View document</span>
              </Link>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt="Document Thumbnail"
                  className="h-full w-full object-cover transition-all group-hover:scale-105"
                  height={300}
                  src="/assets/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold">English Grammar Essentials</h3>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  A comprehensive guide to mastering English grammar.
                </p>
                <Button className="w-full" size="sm">
                  Download
                </Button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View document</span>
              </Link>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt="Document Thumbnail"
                  className="h-full w-full object-cover transition-all group-hover:scale-105"
                  height={300}
                  src="/assets/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold">English Grammar Essentials</h3>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  A comprehensive guide to mastering English grammar.
                </p>
                <Button className="w-full" size="sm">
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function FileIcon(props) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}