'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { href: "/dashboard", src: "/assets/icons/DashBoard.png", alt: "Icon of Dashboard", label: "Dash Board" },
  { href: "/analytics", src: "/assets/icons/Analytics.png", alt: "Icon of Analytics", label: "Analytics" },
  { href: "/notifications", src: "/assets/icons/Notifications.png", alt: "Icon of Notifications", label: "Notifications" },
  { href: "/courses", src: "/assets/icons/Courses.png", alt: "Icon of Courses", label: "Courses" },
  { href: "/library", src: "/assets/icons/Library.png", alt: "Icon of Library", label: "Library" },
  { href: "/blogs", src: "/assets/icons/Blogs.png", alt: "Icon of Blogs", label: "Blogs" },
  { href: "/donate", src: "/assets/icons/Donate.png", alt: "Icon of Donate", label: "Donate" },
  { href: "/about_me/resume", src: "/assets/icons/AboutMe.png", alt: "Icon of About Me", label: "About me" },
];

const Nav = () => {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <section className="flex-col py-5 space-y-2">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`w-52 h-auto py-3 space-x-5 flex-start rounded-2xl cursor-pointer transform transition duration-500 hover:scale-105 ${activeLink === item.href ? 'bg-yellow-300' : 'hover:bg-yellow-300'}`}
          onClick={() => setActiveLink(item.href)}
        >
          <div className='w-1/4 flex-center px-3'>
            <Image
              src={item.src}
              width={30}
              height={30}
              alt={item.alt}
            />
          </div>
          <Link href={item.href} className="w-3/4 text-base font-bold flex-start">{item.label}</Link>
        </div>
      ))}
    </section>
  );
};

export default Nav;
