import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

import { sidebarLinksKnowledgeBase } from "../../data/navigationData";

export const KnowledgeBaseLayout = () => {
  return (
    <div>
      <div className="relative flex flex-row min-w-full">
        <div className="min-w-[240px] hidden xl:block bg-sideColor">
          <Sidebar sidebarLinks={sidebarLinksKnowledgeBase} />
        </div>
        <div className="w-full flex justify-center">
          <div className="min-h-[calc(100vh-114px)] w-full xl:max-w-[calc(100vw-250px)]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
