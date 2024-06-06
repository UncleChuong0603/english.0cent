"use client";

// Next imports
import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

// Font import
const inter = Inter({ subsets: ["latin"] });

// Check if token is valid
const isTokenValid = () => {
  const token = localStorage.getItem('token');
  return !!token; // Returns true if token exists, false otherwise
};

// Nav items
const navItems = [
  { href: "/", src: "/assets/icons/Home.png", alt: "Logo of Home Page", label: "Home" },
  { href: "/dashboard", src: "/assets/icons/DashBoard.png", alt: "Logo of Dashboard", label: "Dashboard", requiresAuth: true },
  { href: "/analytics", src: "/assets/icons/Analytics.png", alt: "Icon of Analytics", label: "Analytics" },
  { href: "/course", src: "/assets/icons/Courses.png", alt: "Icon of Courses", label: "Course" },
  { href: "/document", src: "/assets/icons/Document.png", alt: "Icon of Document", label: "Document" },
  { href: "/blog", src: "/assets/icons/Blogs.png", alt: "Icon of Blogs", label: "Blog" },
];

// Layout
const RootLayout = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  // Handle link click
  const handleLinkClick = (e, item) => {
    e.preventDefault();
    if (item.requiresAuth && !isTokenValid()) {
      router.push('/auth/signin');
    } else {
      router.push(item.href);
    }
    setActiveLink(item.href);
  };

  return (
    <html lang="en" suppressHydrationWarning scroll-mood="smooth">
      <body className={inter.className}>
        <section className="w-full h-screen flex hide-scrollbar p-4">
          {/* Layout with header bar */}
          <div className="w-1/12 h-auto bg-white rounded-3xl flex-col space-y-4 p-4">
            {navItems.map((item, index) => (
              <div
                key={index}
                className={`w-auto h-auto py-5 rounded-2xl cursor-pointer transform transition duration-500 hover:scale-105 ${activeLink === item.href ? 'bg-yellow-300' : 'hover:bg-yellow-300'}`}
                onClick={(e) => handleLinkClick(e, item)}
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
          
          {/* Layout with content */}
          <div className="w-11/12 h-full flex-col pl-4">
            <div className="w-full h-full overflow-auto rounded-3xl hide-scrollbar">{children}</div>
          </div>
        </section>
      </body>
    </html>
  );
};

export default RootLayout;
