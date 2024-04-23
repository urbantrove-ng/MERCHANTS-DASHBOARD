import React, { useState } from "react";
import logo from "../../assets/logos.svg";
import ArrowRight from "../../assets/icons/ArrowRight.svg";
import { motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../../components/NavLink";
import { IoSettingsSharp, IoDiamondOutline, IoLogOutOutline } from "react-icons/io5";



export default function SideNavBar() { 

  return (
    <>
      <div className="px-[1rem] lg:px-0 flex flex-col gap-[0.5rem] border-r-[#DFDBD8] border-[1px] relative bg-[#FBF7F4] lg:w-[5rem] sm:w-[2.9rem]">
        <div className="flex mt-[1rem] ml-[-2rem] justify-center items-center">
          <div className="w-[5rem] h-[5rem] lg:ml-[1.1rem] sm:mr-[-0.5rem]">
            <img src={logo} alt="logo" className="w-full h-full"/> 
          </div>
          <span className="text-[1.4rem] font-[600] lg:hidden">Urban Trove</span>
        </div>

        <div className="flex flex-col m-auto justify-center w-[17vw] lg:w-[4rem] sm:w-[2rem]">
          {navLinks.map((menuItem, index) => {
            const { icon, path, name } = menuItem;

            return (
              <div key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#e3e5da] text-black flex items-center m-auto gap-[0.5rem] py-[0.8rem] px-[2.3rem] lg:px-[1.2rem] sm:px-[0.7rem] sm:w-[2.6rem] sm:ml-[-0.5rem] text-[1.5rem] rounded-r-[50px] sm:rounded-r-[10px] lg:rounded-r-none font-[600]"
                      : "bg-[#FBF7F4] text-primaryOne flex items-center m-auto gap-[0.5rem] py-[0.8rem] lg:px-[1.2rem] sm:px-[0.4rem] px-[1.8rem] sm:ml-[-0.3rem] text-[1.5rem] rounded-r-[50px] hover:bg-[#f0f0ec] transition duration-300"
                  }
                  end
                >
                  <span>{icon}</span>
                  <span className="lg:hidden">{name}</span>
                </NavLink>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="flex m-6 items-center gap-[1rem] hover:bg-[#9ca3af] lg:hover:bg-transparent transition duration-300 p-[1rem] lg:p-0 rounded-[10px] cursor-pointer">
          <span className="w-[2.5rem] h-[2.5rem] lg:ml-[-0.5rem] sm:ml-[-1.3rem] bg-[#111111] rounded-[50px] relative text-white">
            <IoLogOutOutline className="h-[1.7rem] w-[1.7rem] top-1/2 left-1/2 mt-[17%] ml-[0.5rem]"/>
          </span>
          <h1 className="font-[600] lg:hidden">Log Out</h1>
        </div>
      </div>
    </>
  );
}

