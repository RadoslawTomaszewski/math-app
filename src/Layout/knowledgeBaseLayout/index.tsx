import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { SidebarCategory } from "../../components/Sidebar/Sidebar";

const sidebarLinksKnowledgeBase: SidebarCategory[] = [
  {
    category: "Funkcje",
    links: [
      { to: "funkcja-liniowa", text: "Funkcja liniowa" },
      { to: "funkcja-kwadratowa", text: "Funkcja kwadratowa" },
    ],
  },
  {
    category: "Ciągi",
    links: [
      { to: "ciag-arytmetyczny", text: "Ciąg arytmetyczny" },
      { to: "ciag-geometryczny", text: "Ciąg geometryczny" },
    ],
  },
];

export const KnowledgeBaseLayout = () => {
  return (
    <div>
      <div className="relative flex flex-row">
        <div className="min-w-[200px] p-2 hidden md:block bg-sideColor">
          <Sidebar sidebarLinks={sidebarLinksKnowledgeBase} />
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
