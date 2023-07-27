import { NavLink } from "react-router-dom";
import Title from "../../utilities/Title";
import { SidebarCategory } from "../../components/Sidebar/SidebarCategoryItem";
import { sidebarLinksCalculators } from "../../components/Sidebar/sidebarData";

export default function CalculatorsPage() {
  return (
    <div className="p-5 flex min-w-full">
      <div className="flex flex-wrap min-w-full gap-2">
        {sidebarLinksCalculators.map((item: SidebarCategory) => (
          <div
            key={item.category.text}
            className="flex flex-col p-2 border-borderColor border-2 rounded min-w-[220px]"
          >
            <NavLink key={item.category.to} to={item.category.to}>
              <Title text={item.category.text} type={"sidebar-category"} />
            </NavLink>
            {item.links.map((link) => (
              <NavLink key={link.to} to={link.to}>
                <Title text={link.text} type={"mainpage-link"} />
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
