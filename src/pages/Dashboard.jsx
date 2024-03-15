import React, { useState } from "react";
import Welcome from "../features/Dash/components/Welcome";
import { BsGridFill } from "react-icons/bs";
import {
  FaPenSquare,
  FaEnvelope,
  FaWallet,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { SiSailsdotjs } from "react-icons/si";
import { AiFillMessage } from "react-icons/ai";
import { RiBarChartBoxFill } from "react-icons/ri";
import {
  IoSettingsSharp,
  IoDiamondOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { FaHandshakeAngle } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const data = [
  { name: "Products", icon: <FaPenSquare />, path: "/myproducts" },
  { name: "Service", icon: <SiSailsdotjs />, path: "/myservice" },
  { name: "Feedback", icon: <AiFillMessage />, path: "/feedback" },
  { name: "Performance", icon: <RiBarChartBoxFill />, path: "/performance" },
  { name: "Notifications", icon: <FaEnvelope />, path: "/notification" },
  { name: "Settings", icon: <IoSettingsSharp />, path: "/setting" },
  { name: "Wallet", icon: <FaWallet />, path: "/wallet" },
  { name: "Bid", icon: <FaHandshakeAngle />, path: "/bid" },
  { name: "FAQ", icon: <FaRegQuestionCircle />, path: "/FAQ" },
  { name: "Premium", icon: <IoDiamondOutline />, path: "/preservice" },
];
export default function DashBoard() {
  const navigate = useNavigate();
  return (
    <div className="grid gap-[2rem] mt-[11rem] overflow-y-auto max-h-[80vh] justify-center py-[3rem] px-[3rem] font-inter">
      <Welcome />
      <div className="grid grid-cols-4 gap-[1rem] p-[1rem]">
        {data.map((data) => {
          const { name, icon, path } = data;

          return (
            <div
              onClick={() => navigate(path)}
              className="grid justify-center text-center w-[8.5rem] rounded-[10px] h-[8rem] bg-primaryTwo cursor-pointer hover:translate-y-[-0.5rem] transition-all duration-300"
            >
              <div className="w-[5rem] h-[4rem] mt-[1rem] relative">
                <span className="text-primaryOne absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem]">
                  {icon}
                </span>
              </div>
              <h1 className="text-[0.8rem]">{name}</h1>
            </div>
          );
        })}
        <div className="grid justify-center w-[18rem] h-[8rem] rounded-[10px] bg-white px-[1rem]">
          <div className="flex gap-[3rem] mt-[0.3rem] text-[0.9rem] mb-[-1rem] ml-[0.3rem]">
            <h1>Events</h1>
            <h1 className="text-primaryOne">View All</h1>
          </div>
          <div className="flex gap-[1rem]">
            <div className="grid justify-center w-[10rem] h-[5rem] bg-primaryTwo rounded-[10px]">
                <IoPersonSharp className="text-[2rem] text-[#A7A7A7] m-auto"/>
                <h1>Manager's Call</h1>
                <span className="flex items-center gap-[0.5rem] text-[0.8rem] text-[#a7a7a7]">
                  <FaClock/>
                  <h1>2:30 PM, Today</h1>
                </span>
            </div>
            <div className="w-[3rem] h-[5rem] bg-primaryTwo rounded-[10px] relative">
                <FaPlus className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[1.5rem] text-[#a7a7a7]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
