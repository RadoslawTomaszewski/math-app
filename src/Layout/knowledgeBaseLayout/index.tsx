import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

import { sidebarLinksKnowledgeBase } from "../../routes/navigationData";

export const KnowledgeBaseLayout = () => {
  return (
    <div>
      <div className="relative flex flex-row min-w-full">
        <div className="min-w-[240px] hidden lg:block bg-sideColor">
          <Sidebar sidebarLinks={sidebarLinksKnowledgeBase} />
        </div>
        <div className="w-full flex justify-center">
          <div className="min-h-[calc(100vh-114px)] w-full lg:max-w-[calc(100vw-250px)]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
