import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import CookiesInfo from "../components/CookiesInfo/CookiesInfo";
import AccountBar from "../components/Auth/AccountBar";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative flex-grow">
        <Navbar />
        <AccountBar />
        <div className="min-h-full max-w-full bg-bgColor flex-grow">
          <CookiesInfo />
          <Outlet />
        </div>
      </div>
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
};
