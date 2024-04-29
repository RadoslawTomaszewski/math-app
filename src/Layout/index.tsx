import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import CookiesInfo from "../components/CookiesInfo/CookiesInfo";
import AccountBar from "../components/Auth/AccountBar";

export const Layout = () => {
  return (
    <div>
      <div className="relative">
        <Navbar />
        <AccountBar />
        <div className="min-h-[calc(100vh-190px)] lg:min-h-[calc(100vh-154px)] max-w-[full]  bg-bgColor">
          <CookiesInfo />
          <Outlet />
        </div>
      </div>
      <div className="relative bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};
