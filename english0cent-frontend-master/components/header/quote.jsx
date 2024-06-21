"use client";
import { useState, useEffect } from "react";

import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image";
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Quote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];
        setQuote(randomQuote);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div>
        <Popover>
            <PopoverTrigger asChild>
                <div className="flex-center cursor-pointer">
                    <Image
                    src={"/assets/icons/Notification.png"}
                    width={30}
                    height={30}
                    alt={"Icon of Notification"}
                    />
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-[400px] flex mt-4 mr-4">
            <Card className="w-full">
                <CardHeader className="flex-center">
                    <CardTitle>Quote of the day</CardTitle>
                </CardHeader>
                <CardContent className="flex-col space-y-4">
                    {quote ? (
                      <div className="flex-col space-y-4 border border-gray-300 rounded-lg p-4">
                          <p className="font-bold" dangerouslySetInnerHTML={{ __html: quote.text }}></p>
                          <p className="text-gray-500">- {quote.author}</p>
                      </div>
                    ) : (
                      <Skeleton />
                    )}
                </CardContent>
            </Card>
            </PopoverContent>
        </Popover>
    </div>
  )
}

export default Quote

