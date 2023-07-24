import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { SidebarCategory } from "../../components/Sidebar/Sidebar";

export const CalculatorsLayout = () => {
  const sidebarLinksKnowledgeBase: SidebarCategory[] = [
    {
      category: "Przeliczniki",
      links: [
        { to: "kalkulator-dlugosci", text: "Długości" },
        { to: "kalkulator-powierzchni", text: "Powierzchni" },
        { to: "kalkulator-objetosci", text: "Objętości" },
        { to: "kalkulator-masy", text: "Masy" },
        { to: "kalkulator-czasu", text: "Czasu" },
        { to: "kalkulator-predkosci", text: "Prędkości" },
        { to: "kalkulator-informacji", text: "Informacji" },
      ],
    },
    {
      category: "Pierwiastki",
      links: [
        { to: "czynnik-przed-pierwiastek-kwadratowy", text: "Kwadratowy" },
        { to: "czynnik-przed-pierwiastek-szescienny", text: "Sześcienny" },
      ],
    },
  ];

  return (
    <div>
      <div className="relative flex flex-row">
        <div className="min-w-[200px] p-2 hidden md:block bg-sideColor">
          <Sidebar sidebarLinks={sidebarLinksKnowledgeBase} />
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
