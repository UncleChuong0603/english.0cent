import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <section className="flex-col py-5">
      <div className='w-52 h-auto py-3 space-x-5 flex-start rounded-2xl cursor-pointer transform transition duration-500 hover:scale-105 hover:bg-yellow-300'>
        <div className='w-1/4 flex-center px-3'>
          <Image
            src="/assets/icons/DashBoard.png"
            width={30}
            height={30}
            alt="Icon of Dashboard"
          />
        </div>
          <Link href="/dashboard" className="w-3/4 text-base font-bold flex-start">Dash Board</Link>
      </div>
      <div className='w-52 h-auto py-3 space-x-5 flex-start rounded-2xl cursor-pointer transform transition duration-500 hover:scale-105 hover:bg-yellow-300'>
        <div className='w-1/4 flex-center px-3'>
          <Image
            src="/assets/icons/Analytics.png"
            width={30}
            height={30}
            alt="Icon of Analytics"
          />
        </div>
          <Link href="/analytics" className="w-3/4 text-base font-bold flex-start">Analytics</Link>
      </div>
      <div className='w-52 h-auto py-3 space-x-5 flex-start rounded-2xl cursor-pointer transform transition duration-500 hover:scale-105 hover:bg-yellow-300'>
        <div className='w-1/4 flex-center px-3'>
          <Image
            src="/assets/icons/Notifications.png"
            width={30}
            height={30}
            alt="Icon of Notifications"
          />
        </div>
          <Link href="/notifications" className="w-3/4 text-base font-bold flex-start">Notifications</Link>
      </div>
      <div className='flex-col py-5'>
      <div className='w-52 h-auto py-3 space-x-5 flex-start rounded-2xl cursor-pointer transform transition duration-500 hover:scale-105 hover:bg-yellow-300'>
        <div className='w-1/4 flex-center px-3'>
          <Image
            src="/assets/icons/Courses.png"
            width={30}
            height={30}
            alt="Icon of Courses"
          />
        </div>
          <Link href="/courses" className="w-3/4 text-base font-bold flex-start">Courses</Link>
      </div>
      <div className='w-52 h-auto py-3 space-x-5 flex-start rounded-2xl cursor-pointer transform transition duration-500 hover:scale-105 hover:bg-yellow-300'>
        <div className='w-1/4 flex-center px-3'>
          <Image
            src="/assets/icons/Library.png"
            width={30}
            height={30}
            alt="Icon of Library"
          />
        </div>
          <Link href="/library" className="w-3/4 text-base font-bold flex-start">Library</Link>
      </div>
      <div className='w-52 h-auto py-3 space-x-5 flex-start rounded-2xl cursor-pointer transform transition duration-500 hover:scale-105 hover:bg-yellow-300'>
        <div className='w-1/4 flex-center px-3'>
          <Image
            src="/assets/icons/Blogs.png"
            width={30}
            height={30}
            alt="Icon of Blogs"
          />
        </div>
          <Link href="/blogs" className="w-3/4 text-base font-bold flex-start">Blogs</Link>
      </div>
      <div className='flex-col py-5'>
      <div className='w-52 h-auto py-3 space-x-5 flex-start rounded-2xl cursor-pointer transform transition duration-500 hover:scale-105 hover:bg-yellow-300'>
        <div className='w-1/4 flex-center px-3'>
          <Image
            src="/assets/icons/Donate.png"
            width={30}
            height={30}
            alt="Icon of Donate"
          />
        </div>
          <Link href="/donate" className="w-3/4 text-base font-bold flex-start">Donate</Link>
      </div>
      <div className='w-52 h-auto py-3 space-x-5 flex-start rounded-2xl cursor-pointer transform transition duration-500 hover:scale-105 hover:bg-yellow-300'>
        <div className='w-1/4 flex-center px-3'>
          <Image
            src="/assets/icons/AboutMe.png"
            width={30}
            height={30}
            alt="Icon of About Me"
          />
        </div>
          <Link href="/about_me" className="w-3/4 text-base font-bold flex-start">About me</Link>
      </div>
      </div>
      </div>  
    </section>
  )
}

export default Nav