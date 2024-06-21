import { useEffect, useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import config from "@/config";

const Account = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${config.server}/user/profile`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        if (data.status === "SUCCESS") {
          setUser(data.user);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        const expirationTime = JSON.parse(atob(storedToken.split('.')[1])).exp * 1000;
        if (expirationTime < new Date().getTime()) {
          setToken(null);
        } else {
          setToken(storedToken);
        }
      }
      setLoading(false);
    }
  }, []);

  // Show loading indicator or nothing while checking the token
  if (loading) {
    return null;
  }

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
    <>
      <div className='relative cursor-pointer'>
        <Link href="/profile">
          <Avatar className="w-12 h-12">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback>{user?.fullName[0]}</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </>
  );
};

export default Account;
