import { ReactNode } from "react";

import ModalTask from "./ModalTask";
import Sidebar from "./Sidebar";

const Layout = ({ children }: {children: ReactNode}) => {

  return(
    <div className="p-8 flex flex-grow bg-[#212529] text-white gap-5 h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col gap-5 w-full">
        <main className="overflow-y-scroll w-full scrollbar-hide">
          {children}
        </main>
        <ModalTask />
      </div>
    </div>
  )
}

export default Layout;