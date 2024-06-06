"use client";

import SearchBar from "@/components/header/searchbar";
import Donate from "@/components/header/donate";
import Feedback from "@/components/header/feedback";
import Notification from "@/components/header/notification";
import Calendar from "@/components/header/calendar";
import Account from "@/components/header/account";

export default function RootLayout({ children }) {
  return (
    <section className="w-full h-full flex hide-scrollbar">
      {/* Layout with header bar */}
      <div className="w-full h-auto flex-col space-y-4">
        <div className="w-full flex-center bg-white rounded-3xl p-4">
          <div className="w-1/2 flex-center">
            <SearchBar />
          </div>
          <div className="w-1/2 flex justify-end items-center space-x-8">
              <Feedback />
              <Donate />
              <Notification />
              <Calendar />
              <Account />
          </div>
        </div>
        {/* Content */}
        <div className="w-full h-[608px] overflow-auto rounded-3xl hide-scrollbar">{children}</div>
      </div>
    </section>
  );
}