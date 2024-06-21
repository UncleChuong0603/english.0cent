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

import config from "@/config";

const page = () => {
  
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleResetPassword = async () => {
    try {
      const response = await fetch(`${config.server}/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const message = data.message;
        setErrorMessage(message);
      } else {
        const error = await response.json();
        setErrorMessage(error.message);
      }
    } catch (error) {
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
            <div className="space-y-10">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Reset Password</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Enter your email to reset your password.
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button className="w-full" onClick={handleResetPassword}>
                  Reset Password
                </Button>
              </div>
              {errorMessage && (
                <div className="flex-col space-y-4 text-center">
                    <p className="text-sm">{errorMessage}</p>
                    <Link href={"/auth/signin"} className="font-medium underline">Back to Sign in</Link>
                </div>
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