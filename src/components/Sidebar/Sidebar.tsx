import { NavLink } from "react-router-dom";
import Title from "../../utilities/Title";
import { FC } from "react";

interface SidebarLink {
  to: string;
  text: string;
}

export interface SidebarCategory {
  category: string;
  links: SidebarLink[];
}

export interface ISidebarProps {
  sidebarLinks: SidebarCategory[];
}

const Sidebar: FC<ISidebarProps> = ({ sidebarLinks }) => {
  return (
    <>
      <div className="flex flex-col">
        {sidebarLinks.map((item) => (
          <div key={item.category}>
            <Title text={item.category} size={"H2"} />
            <div className="flex flex-col">
              {item.links.map((navlink) => (
                <NavLink key={navlink.to} to={navlink.to}>
                  <Title text={navlink.text} size={"NavHover"} />
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
