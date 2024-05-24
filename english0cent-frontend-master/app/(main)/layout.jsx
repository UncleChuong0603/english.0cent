"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { CommandInput, CommandEmpty, CommandItem, CommandList, Command } from "@/components/ui/command"
import React from 'react';


const handleSignout = () => {
  const token = localStorage.getItem('token'); // Retrieve the token
  localStorage.removeItem('token'); // Or sessionStorage, or cookies

  // Optionally, you can make a request to the server to invalidate the token
  fetch('http://localhost:5000/auth/signout', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
  }).then(response => response.json())
    .then(data => {
        console.log(data.message);
        // Redirect the user to the sign-in page or home page
        window.location.href = '/auth/signin';
    }).catch(err => console.error(err));
};
export default function RootLayout({ children }) {
  return (
    <section className="w-full h-full flex hide-scrollbar">
      {/* Layout with header bar */}
      <div className="w-full h-full flex-col">
        <div className="w-full h-28 flex space-x-5">
          <div className="w-1/2 h-24 flex-center bg-white rounded-3xl p-5">
          <div className="flex items-center gap-5 w-full">
            <Input className="flex-1" placeholder="Search about Course, Blog, Library,..." type="search" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-10" variant="outline">
                  <span className="p-10">Topic</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel>Select a topic</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>All</DropdownMenuItem>
                <DropdownMenuItem>Design</DropdownMenuItem>
                <DropdownMenuItem>Development</DropdownMenuItem>
                <DropdownMenuItem>Marketing</DropdownMenuItem>
                <DropdownMenuItem>Business</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button>
              <SearchIcon className="w-5 h-5" />
            </Button>
          </div>
          </div>
          <div className="w-1/2 h-24 flex justify-end items-center p-3 space-x-3">
            <div className="w-1/3 h-full flex-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button className="flex items-center gap-2 w-[200px] justify-between" role="combobox" variant="">
                  <GlobeIcon className="h-5 w-5" />
                  <span>Vietnamese</span>
                  <ChevronsUpDownIcon className="h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput className="h-9" placeholder="Search language..." />
                  <CommandEmpty>No language found.</CommandEmpty>
                  <CommandList>
                    <CommandItem>English</CommandItem>
                    <CommandItem>Vietnamese</CommandItem>
                    <CommandItem>French</CommandItem>
                    <CommandItem>Spanish</CommandItem>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            </div>
            <div className="w-1/3 h-full flex-center">
            <Button className="bg-black text-white rounded-md px-4 py-2 hover:bg-black/90 transition-colors">
              <HeartIcon className="mr-2 h-5 w-5" />
              Donate
            </Button>
            </div>
            <div className="w-1/6 h-auto flex-center">
              <Image
                src={"/assets/icons/Calendar.png"}
                width={40}
                height={40}
                alt={"Icon of Calendar"}
              />
            </div>
            <div className="w-1/6 h-auto flex-center">
              <Image
                src={"/assets/icons/Notifications.png"}
                width={40}
                height={40}
                alt={"Icon of Notifications"}
              />
            </div>
            <div className="w-1/6 h-auto flex-center">
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignout}>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <div className="w-full h-5/6 overflow-auto rounded-3xl hide-scrollbar">{children}</div>
      </div>
    </section>
  );
}

function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
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

function ChevronsUpDownIcon(props) {
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
      <path d="m7 15 5 5 5-5" />
      <path d="m7 9 5-5 5 5" />
    </svg>
  )
}


function GlobeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}