import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const donateContent = [
    {
      value: "account",
      title: "Vietcombank",
      qrSrc: "/assets/placeholder.svg",
      qrAlt: "QR Vietcombank",
      account: "1014 306 540",
      name: "Mai Phung Chuong",
    },
    {
      value: "password",
      title: "MOMO",
      qrSrc: "/assets/placeholder.svg",
      qrAlt: "QR MOMO",
      account: "038 921 7724",
      name: "Mai Phung Chuong",
    },
  ];

const donate = () => {
  return (
    <div>
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">
                <HeartIcon className="mr-2 h-5 w-5" />
                Donate
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[400px] flex mt-4">
                <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    {donateContent.map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value}>{tab.title}</TabsTrigger>
                    ))}
                </TabsList>
                {donateContent.map((tab) => (
                    <TabsContent key={tab.value} value={tab.value}>
                    <Card>
                        <CardHeader className="flex-center">
                        <CardTitle>{tab.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-center flex-col space-y-3">
                        <div className="flex-center rounded-3xl">
                            <Image
                            src={tab.qrSrc}
                            width={250}
                            height={250}
                            alt={tab.qrAlt}
                            className="rounded-3xl"
                            />
                        </div>
                        <div className="font-bold text-xl">{tab.account}</div>
                        <div className="font-bold text-xl">{tab.name}</div>
                        </CardContent>
                        <CardFooter className="flex-center">
                          <Button>Thank you very much<span><HeartIcon className="ml-4 h-5 w-5" /></span></Button>
                        </CardFooter>
                    </Card>
                    </TabsContent>
                ))}
                </Tabs>
            </PopoverContent>
            </Popover>
    </div>
  )
}

export default donate

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
    );
  }