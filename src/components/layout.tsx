import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
const Layout = ({ children }: {children: ReactNode}) => {
  return(
    <div className="p-8 flex flex-grow bg-[#212529] text-white gap-5 h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col gap-5 w-full">
        <div className="w-full flex justify-end box-border">
          <button
            className="bg-[#DA584B] w-10 h-10 rounded-lg box-border flex items-center justify-center text-lg cursor-pointer"
            type="button"
          >
            <h1>+</h1>
          </button>
        </div>
        <main className="overflow-y-scroll w-full scrollbar-hide">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout;