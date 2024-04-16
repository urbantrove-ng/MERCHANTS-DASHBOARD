import React, { useContext, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Feedback from "./pages/Feedback";
import Performance from "./pages/Performance";
import PremiumService from "./pages/PremiumService";
import UserProduct from "./pages/UserProduct";
import Wallet from "./pages/Wallet";
import Faq from "./pages/Faq";
import Bid from "./pages/Bid";
import Services from "./pages/Services";
import Header from "./features/Header/Header";
import SideNavBar from "./features/Sidebar/SideNavBar";
import { RightSideBar } from "./features/RightSideBar/RightSideBar";
import DashboardTopBar from "./features/Dash/components/DashboardTopBar";
import Dash from "./pages/Dashboard";


export default function ProjectRoutes() {
  return (
    <>
      <Router>
        <div className="flex">
          <div className="flex-none w-[20%] lg:w-[10%] sm:w-[15%] fixed top-0 left-0 h-full overflow-y-auto z-50">
            <SideNavBar />
          </div>
          <div className="flex-grow">
            <div className="fixed w-full z-20">
              <Header />
            </div>
            <div className="fixed w-full left-[18rem] lg:left-[5rem] sm:left-[3rem] top-[2px] z-20">
              <DashboardTopBar />
            </div>
            <div className="flex items-center ml-[18rem] lg:ml-[5rem] sm:ml-[3rem]">
              <div className="flex-none w-[65%] lg:w-[99.8%] z-10">
                <Routes>
                  <Route path="/" element={<Dash />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/feedback" element={<Feedback />} />
                  <Route path="/performance" element={<Performance />} />
                  <Route path="/premium" element={<PremiumService />} />
                  <Route path="/products" element={<UserProduct />} />
                  <Route path="/wallet" element={<Wallet />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/faq" element={<Faq />} />
                  {/* <Route path="/bid" element={<Bid />} />  */}
                </Routes>
              </div>
              <div className="bg-[#fbf7f4] flex-grow lg:flex-none lg:w-[1px] lg:mt-[2rem]] mt-[10rem] lg:hidden">
                <RightSideBar />
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}
