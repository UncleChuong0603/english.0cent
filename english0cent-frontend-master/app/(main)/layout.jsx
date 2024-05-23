import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const metadata = {
  title: "English 0 Cent",
  description: "This is the dream of a regular learner who was asked to be advisor many times before",
};

export default function RootLayout({ children }) {
  return (
    <section className="w-full h-full flex hide-scrollbar">
      {/* Layout with header bar */}
      <div className="w-full h-full flex-col">
        <div className="w-full h-28 flex space-x-5">
          <div className="w-2/3 h-24 flex bg-white rounded-3xl p-3">
            <div className="w-1/2 h-auto flex items-center p-5">Type here to search</div>
            <div className="w-1/2 h-auto flex items-center justify-end space-x-3">
              <div className="w-2/3 h-full flex-center bg-gray-200 rounded-3xl">Topic</div>
              <div className="w-1/3 h-full flex-center bg-black text-white rounded-3xl">Search</div>
            </div>
          </div>
          <div className="w-1/3 h-24 flex justify-end items-center p-3 space-x-3">
            <div className="w-1/2 h-full bg-gray-100 rounded-full"></div>
            <div className="w-1/4 h-full bg-gray-100 rounded-full"></div>
            <div className="w-1/4 h-full bg-gray-100 rounded-full"></div>
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="w-full h-5/6 overflow-auto rounded-3xl hide-scrollbar">{children}</div>
      </div>
    </section>
  );
}
