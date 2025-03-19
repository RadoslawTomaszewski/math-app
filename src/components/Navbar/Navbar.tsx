import React, { FC, useState, useRef, useEffect } from "react";
import './navbar.css';
import Brand from "../../assets/images/majza.eu_logo.png";
import BrandPremium from "../../assets/images/majza.eu_logo_premium_black.png";
import { NavLink } from "react-router-dom";
import { ReactComponent as Hamburger } from "../../assets/icons/hamburger.svg";
import GraphImage from "../imageComponents/GraphImage";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { classNames } from "../../utilities";
import { LoginButton, LogoutButton } from "../Auth/styles";
import usePremiumStatus from "../../hooks/usePremiumStatus";


const Navbar: FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(String(auth.currentUser?.email));
  const { isPremium, loading } = usePremiumStatus();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUserEmail(user.email);
      } else {
        setCurrentUserEmail(null);
      }
    });
    return unsubscribe;
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      window.location.reload();
    }
    catch (err) {
      console.log(err);
    }
  }

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
    <>
      <nav ref={navbarRef} className="sticky top-0 z-50 h-[60px] bg-navColor md:relative">
        <div className="container max-w-[1100px] my-0 mx-auto flex justify-between items-center h-full flex-row">

          <NavLink to="/">
            {(loading || !isPremium) && <GraphImage size={"logo"} src={Brand} alt={"Logo majza.eu"} />}
            {(!loading && isPremium) && <GraphImage size={"logo"} src={BrandPremium} alt={"Logo majza.eu premium"} />}
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
                <NavLink to="/zadania-maturalne" onClick={handleShowNavbar}>
                  <b>Zadania maturalne</b>
                </NavLink>
              </li>
              <li className="mx-4 z-20 whitespace-nowrap">
                <NavLink to="/wsparcie" onClick={handleShowNavbar}>
                  <b>Współpraca</b>
                </NavLink>
              </li>
              <div className="mx-4 z-20 whitespace-nowrap">
                <NavLink to="/logowanie" onClick={handleShowNavbar}>
                  {!currentUserEmail && <button className={classNames(LoginButton, "hidden lg:block")}>Logowanie</button>}
                </NavLink>
                {currentUserEmail && <button onClick={logout} className={classNames(LogoutButton, "hidden lg:block")}>Wyloguj</button>}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
