import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const Account = () => {
  const isUserLoggedIn = false;
  
  return (
    <div className='cursor-pointer transform transition duration-500 hover:scale-105'>
      {isUserLoggedIn ? (
        <div className="flex items-center w-60 bg-gray-100 rounded-3xl px-6 py-2">
          <Image
            src="/assets/images/logo.jpg"
            width={50}
            height={50}
            alt="Picture of the author"
            className='rounded-full'
          />
          <div className='flex-col'>
            <Link href="/account" className="text-base font-bold ml-6">Account</Link>
            <p className='text-sm ml-6'>Level 1</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center w-60 bg-gray-100 rounded-3xl px-6 py-2">
          <Image
            src="/assets/images/logo.jpg"
            width={50}
            height={50}
            alt="Picture of the author"
            className='rounded-full'
          />
          <div className='flex-col'>
            <Link href="/account" className="text-base font-bold ml-6">Click to Login</Link>
            <p className='text-sm ml-6'>No Level</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Account