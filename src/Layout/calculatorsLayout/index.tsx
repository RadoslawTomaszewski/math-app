import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { sidebarLinksCalculators } from "../../components/Sidebar/sidebarData";

export const CalculatorsLayout = () => {
  return (
    <div>
      <div className="relative flex flex-row min-w-full">
        <div className="min-w-[240px] p-2 hidden md:block bg-sideColor">
          <Sidebar sidebarLinks={sidebarLinksCalculators} />
        </div>
        <div className="w-full">
          <div className="min-h-[calc(100vh-114px)] md:max-w-[calc(100vw-260px)]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
