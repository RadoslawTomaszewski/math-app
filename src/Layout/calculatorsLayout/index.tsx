import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

export const CalculatorsLayout = () => {
  return (
    <div>
      <div className="relative flex flex-row">
        <div className="min-w-[200px] p-2 hidden md:block bg-sideColor">
          <Sidebar />
        </div>
        <div className="max-w-full">
          <div className="min-h-[calc(100vh-114px)] min-w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
