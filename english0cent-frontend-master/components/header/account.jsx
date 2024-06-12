import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"

// Signout function
const handleSignout = () => {
  const token = localStorage.getItem("token");

  // If token is not available, redirect the user to sign-in page
  if (!token) {
    window.location.href = "/auth/signin";
    return;
  }

  localStorage.removeItem("token"); // Remove the token from storage

  // Optionally, you can make a request to the server to invalidate the token
  fetch("http://localhost:5000/auth/signout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message);
      // Redirect the user to the sign-in page
      window.location.href = "/";
    })
    .catch((err) => console.error(err));
};

const Account = () => {
  const token = localStorage.getItem("token");

  // If no token is found, render the Sign In button
  if (!token) {
    return (
      <Button onClick={() => (window.location.href = "/auth/signin")} className="px-8">
        Sign In
      </Button>
    );
  }

  // If a token is found, render the account dropdown menu
  return (
    <div className='cursor-pointer'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="mt-4">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignout}>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Account;
