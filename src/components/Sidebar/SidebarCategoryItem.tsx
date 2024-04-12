import { NavLink, useLocation } from "react-router-dom";
import Title from "../articleItems/Title";
import { FC, useState, useEffect } from "react";
import { ReactComponent as ExpandIcon } from "../../assets/icons/expand.svg";
import { ReactComponent as CollapseIcon } from "../../assets/icons/collapse.svg";
import { classNames } from "../../utilities";

interface SidebarLink {
  to: string;
  text: string;
  color?: string;
}

export interface SidebarCategory {
  category: SidebarLink;
  links: SidebarLink[];
}

export const SidebarCategoryItem: FC<SidebarCategory> = ({
  category,
  links,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isCurrentCategory = links.some((link) =>
      location.pathname.includes(link.to)
    );
    setIsExpanded(isCurrentCategory);
  }, [location.pathname, links]);

  const handleToggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center hover:bg-[#9790f5fc] px-2">
        <NavLink to={category.to}>
          <Title text={category.text} type={"sidebar-category"} />
        </NavLink>
        <div onClick={handleToggleExpanded} style={{ cursor: "pointer" }}>
          {isExpanded ? (
            <CollapseIcon className="w-[20px] h-[20px]" />
          ) : (
            <ExpandIcon className="w-[20px] h-[20px]" />
          )}
        </div>
      </div>
      <div></div>
      {isExpanded && (
        <div className="flex flex-col">
          {links.map((navlink) => (
            <NavLink key={navlink.to} to={navlink.to}>
              {navlink.color && (
                <Title text={navlink.text} type={"sidebar-link"} color={classNames(navlink.color, "hover:bg-[gray]")} />
              )}
              {!navlink.color && (
                <Title text={navlink.text} type={"sidebar-link"} />
              )}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};
