import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Account = () => {
  const isUserLoggedIn = false;

  const accountInfo = {
    linkText: isUserLoggedIn ? 'Account' : 'Click to Login',
    levelText: isUserLoggedIn ? 'Level 1' : 'No Level'
  };

  return (
    <div className='w-60 cursor-pointer transform transition duration-500 hover:scale-105'>
      <div className={`flex ${isUserLoggedIn ? 'items-center' : 'justify-center'} w-full bg-gray-100 rounded-3xl px-6 py-2`}>
        <Image
          src="/assets/images/logo.jpg"
          width={50}
          height={50}
          alt="Picture of the author"
          className='rounded-full'
        />
        <div className='flex-col'>
          <Link href="/account" className="text-base font-bold ml-6">{accountInfo.linkText}</Link>
          <p className='text-sm ml-6'>{accountInfo.levelText}</p>
        </div>
      </div>
    </div>
  );
}

export default Account;
