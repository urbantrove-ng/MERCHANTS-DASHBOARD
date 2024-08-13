import React from "react";
import Header from "./features/Header/Header";
import SideNavBar from "./features/Sidebar/SideNavBar";
import { Outlet } from "react-router-dom";
import { RightSideBar } from "./features/RightSideBar/RightSideBar";

function AppLayout() {
  return (
    <div className=" flex h-[100vh] w-full">
      <div className="">
        <SideNavBar />
      </div>
      <div className=" flex flex-col w-[100vw]">
        <Header />
        <div className=" flex w-full ">
          <div className=" w-full bg-[#FBF7F4]">
            <Outlet />
          </div>
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
