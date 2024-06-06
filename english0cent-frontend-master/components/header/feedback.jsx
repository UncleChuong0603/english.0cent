"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const feedback = () => {
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission logic here
    console.log("Feedback submitted:", feedbackData);
    // Reset form
    setFeedbackData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <FeedbackIcon className="mr-2 h-5 w-5" />
            Feedback
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] mt-4 p-4">
          <Card>
            <CardHeader className="flex-center">
              <CardTitle>Feedback</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={feedbackData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={feedbackData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={feedbackData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-black text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors">
                  Submit Feedback
                </Button>
              </form>
            </CardContent>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default feedback;

function FeedbackIcon(props) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
