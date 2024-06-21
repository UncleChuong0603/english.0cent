"use client"

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import config from "@/config";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // If passwords match, proceed with sign-up logic
    try {
      const response = await fetch(`${config.server}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === "SUCCESS" && data.message === "User created successfully. Check your email for verification!") {
          setSuccessMessage(true);
        } else {
          setErrorMessage(data.message);
        }
      } else {
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setErrorMessage("An error occurred. Please try again.");
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
            {successMessage ? (
              <Card className="mx-auto max-w-md">
                <CardHeader className="space-y-1 text-center">
                  <CardTitle className="text-2xl font-bold">Sign Up Successful</CardTitle>
                  <CardDescription>Please check your email for the verification link.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center gap-6 py-8">
                  <CircleCheckIcon className="h-16 w-16 text-green-500" />
                  <div className="text-center space-y-4">
                    <p className="text-lg font-medium">Thank you for signing up!</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      We've sent a verification link to your email. Please check your inbox and follow the instructions to
                      activate your account.
                    </p>
                    <div className="mt-4"><Link href={"/auth/signin"} className="text-gray-500 underline">Back to Sign in</Link></div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-10">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold">Sign up</h2>
                  <p>
                    Enter your email and password to sign up.
                  </p>
                </div>
                <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="m@example.com"
                    required
                    type="email"
                    pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}"
                    title="Email must be a valid format, e.g. john@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      const emailInput = e.target;
                      if (!emailInput.validity.valid) {
                        setErrorMessage("");
                      } else {
                        setTimeout(() => {
                          if (!emailInput.validity.valid) {
                            setErrorMessage("Invalid email format");
                          } else {
                            setErrorMessage("");
                          }
                        }, 500);
                      }
                    }}
                    onBlur={(e) => {
                      const emailInput = e.target;
                      if (!emailInput.validity.valid) {
                        setErrorMessage("Invalid email format");
                      } else {
                        setErrorMessage("");
                      }
                    }}
                  />
                </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="flex items-center">
                      <Input
                        id="password"
                        required
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="ml-2 p-1 rounded-full hover:bg-gray-200"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <div className="flex items-center">
                      <Input
                        id="confirm-password"
                        required
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="ml-2 p-1 rounded-full hover:bg-gray-200"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                  {errorMessage && (
                    <p className="text-red-500">{errorMessage}</p>
                  )}
                </div>
                <div className="flex flex-col gap-4">
                  <Button className="w-full" onClick={handleSignUp}>
                    Sign up
                  </Button>
                  <Button className="w-full" variant="outline">
                    <ChromeIcon className="mr-2 h-4 w-4" />
                    Sign up with Google
                  </Button>
                </div>
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Have an account already?
                  <Link className="font-medium underline pl-3" href="/auth/signin">
                    Sign in
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

const sliderItem = [
  { href: "#", src: "/assets/images/AboutMe.png", alt: "Test", label: "Test" },
  { href: "#", src: "/assets/images/Analytics.png", alt: "Test", label: "Test" },
  { href: "#", src: "/assets/images/Blogs.png", alt: "Test", label: "Test" },
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

function CircleCheckIcon(props) {
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
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}