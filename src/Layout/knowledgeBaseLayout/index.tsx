import { Outlet } from "react-router-dom";

export const KnowledgeBaseLayout = () => {
  return (
    <div>
      <div className="relative flex flex-row">
        <div className="min-w-[200px] hidden md:block">SIDEBAR</div>
        <div>
          <div className="min-h-[calc(100vh-114px)] max-w-[100vw]  bg-bgColor">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
