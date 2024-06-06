import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";

const navItems = [
    { label: "All" },
    { label: "Design" },
    { label: "Development" },
    { label: "Marketing" },
    { label: "Business" },
];

const searchbar = () => {
  return (
    <div className="flex items-center gap-4 w-full">
        <Input className="flex-1" placeholder="Search about Course, Blog, Document,..." type="search" />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="flex items-center gap-10" variant="outline">
                        <span className="p-4">Category</span>
                        <ChevronDownIcon className="w-4 h-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[180px]">
                    <DropdownMenuLabel>Select a topic</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {navItems.map((item, index) => (
                    <DropdownMenuItem key={index}>{item.label}</DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
  </div>
  )
}

export default searchbar

function ChevronDownIcon(props) {
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
        <path d="m6 9 6 6 6-6" />
      </svg>
    );
  }
