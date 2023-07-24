import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

export const KnowledgeBaseLayout = () => {
  return (
    <div>
      <div className="relative flex flex-row">
        <div className="min-w-[200px] p-2 hidden md:block bg-sideColor">
          <Sidebar />
        </div>
        <div>
          <div className="min-h-[calc(100vh-114px)] max-w-[100vw]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
