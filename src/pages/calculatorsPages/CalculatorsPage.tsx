import { NavLink } from "react-router-dom";
import Title from "../../components/articleItems/Title";
import { SidebarCategory } from "../../components/Sidebar/SidebarCategoryItem";
import { sidebarLinksCalculators } from "../../routes/navigationData";
import Masonry from "react-masonry-css";

export default function CalculatorsPage() {
  const breakpointColumnsObj = {
    default: 4,
    2000: 3,
    1740: 2,
    1260: 1,
  };
  return (
    <div className="p-5 min-w-full flex justify-center items-center">
      <Masonry breakpointCols={breakpointColumnsObj} className="flex flex-wrap">
        {sidebarLinksCalculators.map((item: SidebarCategory) => (
          <div
            key={item.category.text}
            className="grid m-3 md:grid-cols p-2 border-borderColor border-2 rounded max-h-fit w-[95vw] md:w-[450px] bg-articleColor"
          >
            <div className="col-span-2">
              <NavLink key={item.category.to} to={item.category.to}>
                <Title text={item.category.text} type={"main-article"} />
              </NavLink>
            </div>
            {item.links.map((link) => (
              <NavLink key={link.to} to={link.to}>
                <div className="px-3">
                  <Title text={link.text} type={"mainpage-link"} />
                </div>
              </NavLink>
            ))}
          </div>
        ))}
      </Masonry>
    </div>
  );
}
