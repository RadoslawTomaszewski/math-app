import React, { FC, useState, useRef, useEffect } from "react";
import Brand from "../../assets/images/majza.eu_logo.png";
import { NavLink } from "react-router-dom";
import { ReactComponent as Hamburger } from "../../assets/icons/hamburger.svg";
import GraphImage from "../articleItems/GraphImage";

const Navbar: FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navbarRef} className="sticky top-0 z-50 h-[60px] bg-navColor md:relative">
      <div className="container max-w-[1100px] my-0 mx-auto flex justify-between items-center h-full flex-row">

        <NavLink to="/">
          <GraphImage size={"logo"} src={Brand} alt={"Logo majza.eu"} />
        </NavLink>

        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger className="h-[50px] w-[50px]" />
        </div>
        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul className="justify-between list-none z-20">
            <li className="mx-4 z-20 whitespace-nowrap">
              <NavLink to="/baza-wiedzy" onClick={handleShowNavbar}>
                <b>Baza Wiedzy</b>
              </NavLink>
            </li>
            <li className="mx-4 z-20 whitespace-nowrap">
              <NavLink to="/kalkulatory" onClick={handleShowNavbar}>
                <b>Kalkulatory</b>
              </NavLink>
            </li>
            <li className="mx-4 z-20 whitespace-nowrap">
              <NavLink to="/cke" onClick={handleShowNavbar}>
                <b>Materiały od CKE</b>
              </NavLink>
            </li>
            <li className="mx-4 z-20 whitespace-nowrap">
              <NavLink to="/wsparcie" onClick={handleShowNavbar}>
                <b>Wsparcie</b>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
