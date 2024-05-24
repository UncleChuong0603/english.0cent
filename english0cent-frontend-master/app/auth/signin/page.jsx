"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = async () => {
    try {
        const response = await fetch('http://localhost:5000/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            const token = data.token;

            // Store the token in local storage or cookies
            localStorage.setItem('token', token);

            // Redirect to the dashboard
            router.push('/dashboard');
        } else {
            const data = await response.json();
            setErrorMessage(data.message);
        }
    } catch (error) {
        console.error('Error signing in:', error);
        setErrorMessage('An error occurred. Please try again.');
    }
};
  
  return (
    <section className="w-full h-full flex space-x-5">
      <div className="w-1/2 h-full bg-white rounded-3xl flex-center p-20">
        <Carousel>
          <CarouselContent>
            {sliderItem.map((item, index) => (
              <CarouselItem key={index}>
                <div className="w-full h-auto flex-center rounded-3xl">
                  <Image
                    src={item.src}
                    width={400}
                    height={400}
                    alt={item.alt}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="w-1/2 h-full bg-white flex-center rounded-3xl">
        <div className="h-full flex-center">
          <div className="w-full max-w-md bg-white p-6">
            <div className="space-y-10">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Sign in</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Enter your email and password to Sign in.
                </p>
              </div>
              <div className="space-y-5">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="m@example.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button className="w-full" onClick={handleSignIn}>
                  Sign in
                </Button>
                <Button className="w-full" variant="outline">
                  <ChromeIcon className="mr-2 h-4 w-4" />
                  Sign in with Google
                </Button>
              </div>
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                Don't have an account?
                <Link className="font-medium underline pl-3" href="/auth/signup">
                  Sign up
                </Link>
              </div>
              {errorMessage && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

const sliderItem = [
  { href: "#", src: "/assets/images/AboutMe.png", alt: "Test", label: "Test" },
  { href: "#", src: "/assets/images/Analytics.png", alt: "Test", label: "Test" },
  { href: "#", src: "/assets/images/Blogs.png", alt: "Test", label: "Test" }
];

function ChromeIcon(props) {
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
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}