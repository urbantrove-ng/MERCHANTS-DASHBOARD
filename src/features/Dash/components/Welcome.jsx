import React, { useState } from "react";
import woman from "../../../assets/icons/kindd.svg";
import squares from "../../../assets/squares.png";
import square2 from "../../../assets/square2.png";
import square3 from "../../../assets/square3.png";
import { LiaTimesSolid } from "react-icons/lia";

export default function Welcome() {
  const [closeWelcome, setCloseWelcome] = useState(false);

  function openWelcome() {
    setCloseWelcome(!closeWelcome);
  }
  return (
    <div className="mt-[9rem]">
      <div
        className={`${
          closeWelcome ? "hidden" : "block"
        } flex gap-[1px] sm:gap-0 w-[40rem] sm:w-[83vw] h-[15rem] sm:h-[9rem] bg-gradient-to-br from-[rgba(208,212,197,1)] to-[rgba(151,173,177,1)] mt-[-10rem] relative rounded-[10px]`}
      >
        <div className="w-[12rem] sm:ml-[-0.3rem] sm:w-[8rem] h-[16rem] sm:h-[10rem] ml-[1rem] mt-[-1.6rem] sm:mt-[-1.5rem]">
          <img src={woman} alt="" className="w-full h-full object-cover sm:object-cover" />
        </div>
        <div className="absolute top-[1.5rem] right-[7rem]">
          <img src={squares} alt="" />
        </div>
        <div className="absolute top-[3.5rem] right-[2rem]">
          <img src={square2} alt="" />
        </div>
        <div className="absolute top-0 right-[11rem]">
          <img src={square3} alt="" />
        </div>
        <div
          className="absolute top-[0.5rem] right-[1rem] text-white hover:text-black cursor-pointer"
          onClick={openWelcome}
        >
          <LiaTimesSolid />
        </div>
        <div className="grid w-[25rem] sm:w-[12rem] h-[10rem] py-[0.5rem] mt-[2rem] sm:mt-0 ml-[1.5rem] sm:ml-0">
          <h1 className="text-[#1A1A1A] text-[0.9rem] sm:mt-[0.6rem]">Hi, Fatima Yusuf</h1>
          <h1 className="font-[600] text-[2rem] sm:text-[1rem] sm:mt-[-1rem]">Welcome to Urban Trove</h1>
          <h1 className="text-[0.8rem] sm:pr-[0.3rem] sm:text-[0.7rem] sm:mt-[-1rem]">
            Product activity will be updated here. Click on the name section to
            set your configuration.
          </h1>
        </div>
      </div>
    </div>
  );
}
