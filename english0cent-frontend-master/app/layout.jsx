"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [activeLink, setActiveLink] = useState("/"); // Set default active link to "/"
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Full Screen */}
        <section className="w-full h-screen flex hide-scrollbar p-5">
          {/* Navbar */}
          <div className="w-1/12 h-full bg-white rounded-3xl flex-col space-y-5 p-3">
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
          {/* Layout without header bar */}
          <div className="w-11/12 h-full flex-col pl-5">
            <div className="w-full h-full overflow-auto rounded-3xl hide-scrollbar">{children}</div>
          </div>
        </section>
      </body>
    </html>
  );
}

const navItems = [
  { href: "/", src: "/assets/icons/Logo.png", alt: "Icon of Logo", label: "Logo" },
  { href: "/dashboard", src: "/assets/icons/DashBoard.png", alt: "Icon of Dashboard", label: "Dash Board" },
  { href: "/analytics", src: "/assets/icons/Analytics.png", alt: "Icon of Analytics", label: "Analytics" },
  { href: "/courses", src: "/assets/icons/Courses.png", alt: "Icon of Courses", label: "Courses" },
  { href: "/library", src: "/assets/icons/Library.png", alt: "Icon of Library", label: "Library" },
  { href: "/blogs", src: "/assets/icons/Blogs.png", alt: "Icon of Blogs", label: "Blogs" },
];
