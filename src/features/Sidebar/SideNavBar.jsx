import React, { useState } from "react";
import logo from "../../assets/logos.svg";
import ArrowRight from "../../assets/icons/ArrowRight.svg";
import { motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BsGridFill } from "react-icons/bs";
import { FaPenSquare, FaEnvelope, FaWallet, FaRegQuestionCircle } from "react-icons/fa";
import { SiSailsdotjs } from "react-icons/si";
import { AiFillMessage } from "react-icons/ai";
import { RiBarChartBoxFill } from "react-icons/ri";
import { IoSettingsSharp, IoDiamondOutline, IoLogOutOutline } from "react-icons/io5";
import { FaHandshakeAngle } from "react-icons/fa6"; 


const navLinks = [
  { name: "Dashboard", icon: <BsGridFill />, path: "/" }, 
  { name: "Products", icon: <FaPenSquare />, path: "/products" },
  { name: "Service", icon: <SiSailsdotjs />, path: "/services" },
  { name: "Feedback", icon: <AiFillMessage />, path: "/feedback" },
  { name: "Performance", icon: <RiBarChartBoxFill />, path: "/performance" },
  { name: "Notification", icon: <FaEnvelope />, path: "/notifications" },
  { name: "Settings", icon: <IoSettingsSharp />, path: "/settings" },
  { name: "Wallet", icon: <FaWallet />, path: "/wallet" },
  { name: "Bid", icon: <FaHandshakeAngle />, path: "/bid" },
  { name: "FAQ", icon: <FaRegQuestionCircle />, path: "/faq" },
  { name: "Premium Service", icon: <IoDiamondOutline />, path: "/premium" },
];
const varaints = {
  expanded: { width: "15%" },
  nonExpanded: { width: "5%" },
};

export default function SideNavBar() { 

  return (
    <>
      <div className="px-[1rem] flex flex-col gap-[0.5rem] border-r-[#DFDBD8] border-[1px] md:w-[20%] relative bg-[#FBF7F4]">
        <div className="flex mt-[1rem] ml-[-2rem] justify-center items-center">
          <div className="w-[5rem] h-[5rem]">
            <img src={logo} alt="logo" className="w-full h-full" />
          </div>
          <span className="text-[1.4rem] font-[600]">Urban Trove</span>
        </div>

        <div className="flex flex-col m-auto justify-center w-[15rem]">
          {navLinks.map((menuItem, index) => {
            const { icon, path, name } = menuItem;

            return (
              <div key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#e3e5da] text-black flex items-center m-auto gap-[0.5rem] py-[0.8rem] px-[2.3rem] text-[1.1rem] rounded-r-[50px] font-[600]"
                      : "bg-[#FBF7F4] text-primaryOne flex items-center m-auto gap-[0.5rem] py-[0.8rem] px-[1.8rem] text-[1.1rem] rounded-r-[50px] hover:bg-[#f0f0ec] transition duration-300"
                  }
                  end
                >
                  <span>{icon}</span>
                  <span>{name}</span>
                </NavLink>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="flex m-6 items-center gap-[1rem] hover:bg-[#9ca3af] transition duration-300 p-[1rem] rounded-[10px] cursor-pointer">
          <span className="w-[2.5rem] h-[2.5rem] bg-[#111111] rounded-[50px] relative text-white">
            <IoLogOutOutline className="h-[1.7rem] w-[1.7rem] top-1/2 left-1/2 mt-[17%] ml-[0.5rem]"/>
          </span>
          <h1 className="font-[600]">Log Out</h1>
        </div>
      </div>
    </>
  );
}

// export const RightSideBar = () => {
//   return (
//     <>
//       <div
//         className="hidden md:block w-1/4 p-2 shadow absolute right-0 mt-10"
//         style={{ background: "CCC1BE" }}
//       >
//         {/* Sidebar */}
//         <div className=" md:block bg-gray-200  shadow">
//           {/* Your calendar content goes here */}
//           <h2 className="text-2xl font-semibold ml-2"> Calendar</h2>
//           <Calendar />
//           {/* Add your calendar components and styling here */}
//         </div>

//         {/* Main Content */}
//         <div className=" ">
//           <div className="text-2xl font-semibold mb-4 flex">
//             Activities
//             <span className=" ">
//               {" "}
//               <MoreVertical />
//             </span>
//           </div>
//           <Notification />
//           {/* Add your main content components and styling here */}
//         </div>
//       </div>
//     </>
//   );
// };
