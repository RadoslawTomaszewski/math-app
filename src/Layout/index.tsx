import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import CookiesInfo from "../components/CookiesInfo/CookiesInfo";

export const Layout = () => {
  return (
    <div>
      <div className="relative">
        <Navbar />
        <div className="min-h-[calc(100vh-114px)] max-w-[full]  bg-bgColor">
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
