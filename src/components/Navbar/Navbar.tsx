import Brand from "../../assets/images/majza.eu_logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as Hamburger } from "../../assets/icons/hamburger.svg";
import GraphImage from "../articleItems/GraphImage";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar h-[60px] bg-navColor .relative">
      <div className="container max-w-[1100px] my-0 mx-auto flex justify-between items-center h-full flex-row">

        <NavLink to="/">
          <GraphImage size={"logo"} src={Brand} alt={"Logo majza.eu"} />
        </NavLink>

        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger className="h-[50px] w-[50px]" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul className="justify-between list-none z-20">
            <li className="mx-4 z-20">
              <NavLink to="/baza-wiedzy" onClick={handleShowNavbar}>
                <b>Baza Wiedzy</b>
              </NavLink>
            </li>
            <li className="mx-4 z-20">
              <NavLink to="/kalkulatory" onClick={handleShowNavbar}>
                <b>Kalkulatory</b>
              </NavLink>
            </li>
            <li className="mx-4 z-20">
              <NavLink to="/cke" onClick={handleShowNavbar}>
                <b>Materiały od CKE</b>
              </NavLink>
            </li>
            <li className="mx-4 z-20">
              <NavLink to="/wsparcie" onClick={handleShowNavbar}>
                <b>Wsparcie</b>
              </NavLink>
            </li>
            {/* <li className="mx-4 z-20">
              <NavLink to="/pogotowie" onClick={handleShowNavbar}>
                <b>Pogotowie Matematyczne</b>
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
