import React, { useState } from "react";
import woman from "../../../assets/icons/kindd.svg";
import squares from "../../../assets/squares.png";
import square2 from "../../../assets/square2.png";
import square3 from "../../../assets/square3.png";
import { useAuth } from "../../../context/AuthContext";

export default function Welcome() {
  const { auth } = useAuth();
  return (
    <div className="">
      <div className=" flex justify-center lg:h-[221px] lg:w-full    bg-gradient-to-r from-[#E4E1C9] to-[#97ADB1]  relative rounded-[10px]">
        <div>
          {" "}
          <div className="relative lg:w-[245px] lg:h-[247px] h-[130px] w-[120px]">
            <img
              src={woman}
              alt=""
              className="absolute lg:-top-8 w-full  h-full object-cover"
            />
          </div>
          {/* <div className="absolute lg:top-[1.5rem] lg:right-[7rem]">
            <img src={squares} alt="" />
          </div>
          <div className="absolute lg:top-[3.5rem] lg:right-[2rem]">
            <img src={square2} alt="" />
          </div>
          <div className="absolute lg:top-0 lg:right-[11rem]">
            <img src={square3} alt="" />
          </div> */}
        </div>

        <div className="flex justify-start items-center lg:w-[437px] w-[170px] lg:h-full ">
          <div>
            <h1 className="text-[#1A1A1A] font-normal lg:text-[14px] text-[12px] ">
              Hi, {auth?.email}
            </h1>
            <h1 className="font-[600] lg:text-[32px] text-[14px]">
              Welcome to Urban Trove
            </h1>
            <h1 className=" lg:text-[12px] text-[10px] w-[170px] font-normal lg:w-[424px] ">
              Product activity will be updated here. Click on the name section
              to set your configuration.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
