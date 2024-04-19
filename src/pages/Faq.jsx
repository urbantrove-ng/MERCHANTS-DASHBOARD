import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import DisplaySideBar from "../features/RightSideBar/DisplaySideBar";


const dataText = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
export default function Faq() {
  return (
    <div className="relative grid gap-[1rem] mt-[10rem] sm:mt-[8.5rem] overflow-y-auto max-h-[80vh] lg:max-h-[90vh] justify-center py-[3rem] px-[1rem] sm:px-[0.2rem] font-inter">
      <div className="fixed top-[10.6rem] sm:top-[9.3rem] right-0 z-10">
      <DisplaySideBar/>
      </div>
      <div className="w-[50vw] lg:w-[40rem] sm:w-[83vw] rounded-[10px] py-[0.5rem] px-[2rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
        <h1 className="font-[600] text-[1.5rem]">FAQ</h1>
      </div>
      <div className="grid justify-center gap-[1rem]">
          {dataText.map((data, index) => {
            return (
              <div
                key={index}
                className="bg-primaryTwo w-[44.5vw] lg:w-[38rem] sm:w-[83vw] flex gap-[1rem] sm:gap-[0.7rem] px-[2rem] sm:px-[0.8rem] py-[1rem] rounded-[5px]"
              >
                <h1>{data.text}</h1>
                <button className="bg-white px-[1rem] sm:h-[4rem] sm:m-auto rounded-[10px]"><IoIosArrowForward/></button>
              </div>
            );
          })}
        </div>
    </div>
  );
}
