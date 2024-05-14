import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <section className="flex-col mb-10 px-6 py-6">
      <div className='flex items-center cursor-pointer'>
        <Image
          src="/assets/images/logo.jpg"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <div className='ml-6'>
          <Link href="/dashboard" className="text-base font-bold">Dash Board</Link>
        </div>
      </div>
      <div className='flex items-center cursor-pointer'>
        <Image
          src="/assets/images/logo.jpg"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <div className='ml-6'>
          <Link href="/analytics" className="text-base font-bold">Analytics</Link>
        </div>
      </div>
      <div className='flex items-center cursor-pointer'>
        <Image
          src="/assets/images/logo.jpg"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <div className='ml-6'>
          <Link href="/notifications" className="text-base font-bold">Notifications</Link>
        </div>
      </div>
      <div className='flex-col mt-10'>
      <div className='flex items-center cursor-pointer'>
        <Image
          src="/assets/images/logo.jpg"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <div className='ml-6'>
          <Link href="/courses" className="text-base font-bold">Courses</Link>
        </div>
      </div>
      <div className='flex items-center cursor-pointer'>
        <Image
          src="/assets/images/logo.jpg"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <div className='ml-6'>
          <Link href="/library" className="text-base font-bold">Library</Link>
        </div>
      </div>
      <div className='flex items-center cursor-pointer'>
        <Image
          src="/assets/images/logo.jpg"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <div className='ml-6'>
          <Link href="/blog" className="text-base font-bold">Blog</Link>
        </div>
      </div>
      <div className='flex-col mt-10'>
      <div className='flex items-center cursor-pointer'>
        <Image
          src="/assets/images/logo.jpg"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <div className='ml-6'>
          <Link href="/donate" className="text-base font-bold">Donate</Link>
        </div>
      </div>
      <div className='flex items-center cursor-pointer'>
        <Image
          src="/assets/images/logo.jpg"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <div className='ml-6'>
          <Link href="/about_me/resume" className="text-base font-bold">About Me</Link>
        </div>
      </div>
      </div>
      </div>  
    </section>
  )
}

export default Nav