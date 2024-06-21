"use client";

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

import config from "@/config";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await fetch(`${config.server}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const { status, message, token } = data;

        if (status === "SUCCESS" && message === "User signed in successfully!") {
          // Store the token in local storage or cookies
          localStorage.setItem("token", token);

          // Redirect to the dashboard
          router.push("/dashboard");
        } else {
          setErrorMessage(message);
        }
      } else {
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error signing in:", error);
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
                  <Image src={item.src} width={400} height={400} alt={item.alt} />
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
                {errorMessage && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <Link className="font-medium underline" href="/auth/reset-password">
                    Reset Password
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button className="w-full" onClick={handleSignIn}>
                  Sign in
                </Button>
                <Button className="w-full" variant="outline">
                  Sign in with Google
                </Button>
              </div>
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                Don't have an account?
                <Link className="font-medium underline pl-3" href="/auth/signup">
                  Sign up
                </Link>
              </div>
            </div>
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


