import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image";
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const notification = () => {
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
            <Card>
                <CardHeader className="flex-center">
                <CardTitle>Notification</CardTitle>
                </CardHeader>
                <CardContent className="flex-center flex-col space-y-3">
                <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
                </div>
                <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
                </div>
                <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
                </div>
                <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
                </div>
                </CardContent>
            </Card>
            </PopoverContent>
        </Popover>
    </div>
  )
}

export default notification