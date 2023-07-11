import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <div className="relative">
        <Navbar />
        <div className="min-h-[calc(100vh-114px)] max-w-[100vw]  bg-bgColor">
          <Outlet />
        </div>
      </div>
      <div className="relative bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};
