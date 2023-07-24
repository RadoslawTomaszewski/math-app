import { NavLink } from "react-router-dom";
// import { useState } from "react";
//import { ReactComponent as Hamburger } from "../../assets/icons/hamburger.svg";
import Title from "../../utilities/Title";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col">
        <Title text={"Funkcje"} size={"H2"} />
        <NavLink to="funkcja-liniowa">
          <Title text={"Funkcja liniowa"} size={"H3"} />
        </NavLink>
        <NavLink to="funkcja-kwadratowa">
          <Title text={"Funkcja kwadratowa"} size={"H3"} />
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;