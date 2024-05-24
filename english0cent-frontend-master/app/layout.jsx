"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

const isTokenValid = () => {
  const token = localStorage.getItem('token');
  return !!token; // Returns true if token exists, false otherwise
};

const RootLayout = ({ children }) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("/");

  const handleDashboardClick = (e) => {
    e.preventDefault();
    if (isTokenValid()) {
      router.push('/dashboard');
    } else {
      router.push('/auth/signin');
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <section className="w-full h-screen flex hide-scrollbar p-5">
          <div className="w-1/12 h-full bg-white rounded-3xl flex-col space-y-5 p-3">
            <div
              className={`w-auto h-auto py-5 rounded-2xl cursor-pointer transform transition duration-500 hover:scale-105 ${activeLink === "/dashboard" ? 'bg-yellow-300' : 'hover:bg-yellow-300'}`}
              onClick={(e) => {
                handleDashboardClick(e);
                setActiveLink("/dashboard");
              }}
            >
              <div className='flex-center px-3'>
                <Link href="/dashboard">
                  <Image
                    src="/assets/icons/DashBoard.png"
                    width={30}
                    height={30}
                    alt={"Logo of Dashboard"}
                  />
                </Link>
              </div>
            </div>
            {navItems.map((item, index) => (
              <div
                key={index}
                className={`w-auto h-auto py-5 rounded-2xl cursor-pointer transform transition duration-500 hover:scale-105 ${activeLink === item.href ? 'bg-yellow-300' : 'hover:bg-yellow-300'}`}
                onClick={() => setActiveLink(item.href)}
              >
                <div className='flex-center px-3'>
                  <Link href={item.href}>
                    <Image
                      src={item.src}
                      width={30}
                      height={30}
                      alt={item.alt}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="w-11/12 h-full flex-col pl-5">
            <div className="w-full h-full overflow-auto rounded-3xl hide-scrollbar">{children}</div>
          </div>
        </section>
      </body>
    </html>
  );
};

const navItems = [
  { href: "/", src: "/assets/icons/Home.png", alt: "Icon of Home Page", label: "Home Page" },
  { href: "/analytics", src: "/assets/icons/Analytics.png", alt: "Icon of Analytics", label: "Analytics" },
  { href: "/courses", src: "/assets/icons/Courses.png", alt: "Icon of Courses", label: "Courses" },
  { href: "/library", src: "/assets/icons/Library.png", alt: "Icon of Library", label: "Library" },
  { href: "/blogs", src: "/assets/icons/Blogs.png", alt: "Icon of Blogs", label: "Blogs" },
];

export default RootLayout;
