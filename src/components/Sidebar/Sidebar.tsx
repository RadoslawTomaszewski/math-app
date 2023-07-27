import { FC } from "react";
import { SidebarCategoryItem } from "./SidebarCategoryItem";
import { SidebarCategory } from "./SidebarCategoryItem";

export interface ISidebarProps {
  sidebarLinks: SidebarCategory[];
}

const Sidebar: FC<ISidebarProps> = ({ sidebarLinks }) => {
  return (
    <>
      <div className="flex flex-col">
        {sidebarLinks.map((item) => (
          <SidebarCategoryItem
            key={item.category.text}
            category={item.category}
            links={item.links}
          />
        ))}
      </div>
    </>
  );
};

export default Sidebar;
