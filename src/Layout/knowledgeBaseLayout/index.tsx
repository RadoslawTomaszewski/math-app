import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

import { sidebarLinksKnowledgeBase } from "../../components/Sidebar/sidebarData";

export const KnowledgeBaseLayout = () => {
  return (
    <div>
      <div className="relative flex flex-row min-w-full">
        <div className="min-w-[240px] p-2 hidden md:block bg-sideColor">
          <Sidebar sidebarLinks={sidebarLinksKnowledgeBase} />
        </div>
        <div className="w-full">
          <div className="min-h-[calc(100vh-114px)] max-w-[100vw]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
