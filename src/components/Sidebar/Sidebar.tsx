import { NavLink } from "react-router-dom";
import Title from "../../utilities/Title";
import { FC } from "react";

export const sidebarLinksKnowledgeBase = [
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

interface ISidebarProps {}

const Sidebar: FC = () => {
  // const sidebarLinksKnowledgeBase = [
  //   {
  //     category: "Funkcje",
  //     links: [
  //       { to: "funkcja-liniowa", text: "Funkcja liniowa" },
  //       { to: "funkcja-kwadratowa", text: "Funkcja kwadratowa" },
  //     ],
  //   },
  //   {
  //     category: "Ciągi",
  //     links: [
  //       { to: "ciag-arytmetyczny", text: "Ciąg arytmetyczny" },
  //       { to: "ciag-geometryczny", text: "Ciąg geometryczny" },
  //     ],
  //   },
  // ];

  return (
    <>
      <div className="flex flex-col">
        {sidebarLinksKnowledgeBase.map((item) => (
          <>
            <Title text={item.category} size={"H2"} />
            {item.links.map((navlink) => (
              <>
                <NavLink to={navlink.to}>
                  <Title text={navlink.text} size={"NavHover"} />
                </NavLink>
              </>
            ))}
          </>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
