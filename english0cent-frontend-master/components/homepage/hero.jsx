// Next imports
import Link from "next/link"

const hero = () => {
  return (
    <div className="w-full p-10 bg-gray-900 text-white rounded-3xl">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="flex-center space-x-6">
            <div className="w-2/3 space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                Learn English for work, for free
              </h1>
              <p className="text-lg text-gray-300 md:text-xl">
                We are here for free courses, You are here for your freedom.
              </p>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                href="#"
              >
                Start Learning
              </Link>
            </div>
            <div className="w-1/3 flex-center">
              <img
                alt="Hero Image"
                className="rounded-lg"
                src="/assets/placeholder.svg"
                height="400"
                width="400"
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default hero