import { NavLink } from "react-router-dom";
import Title from "../../utilities/Title";
import { FC, useState } from "react";
import { ReactComponent as ExpandIcon } from "../../assets/icons/expand.svg";
import { ReactComponent as CollapseIcon } from "../../assets/icons/collapse.svg";

interface SidebarLink {
  to: string;
  text: string;
}

export interface SidebarCategory {
  category: SidebarLink;
  links: SidebarLink[];
}

interface SidebarCategoryItemProps {
  category: SidebarLink;
  links: SidebarLink[];
}

export const SidebarCategoryItem: FC<SidebarCategoryItemProps> = ({
  category,
  links,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <NavLink to={category.to}>
          <Title text={category.text} type={"sidebar-category"} />
        </NavLink>
        <div onClick={handleToggleExpanded} style={{ cursor: "pointer" }}>
          {isExpanded ? (
            <CollapseIcon className="w-[16px] h-[16px]" />
          ) : (
            <ExpandIcon className="w-[16px] h-[16px]" />
          )}
        </div>
      </div>
      {isExpanded && (
        <div className="flex flex-col">
          {links.map((navlink) => (
            <NavLink key={navlink.to} to={navlink.to}>
              <Title text={navlink.text} type={"sidebar-link"} />
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};
