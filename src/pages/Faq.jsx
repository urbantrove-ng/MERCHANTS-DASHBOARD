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
    <div className="relative grid gap-[2rem] lg:w-[812px]   scrollbar-thumb-rounded-full scrollbar-track-rounded-full lg:scrollbar scrollbar-thumb-primaryOne scrollbar-track-primaryTwo  overflow-y-scroll max-h-[75vh] lg:h-[90vh] justify-center lg:py-6  font-inter">
      <div className="fixed top-[10.6rem] sm:top-[9.3rem] right-0 z-10">
        <DisplaySideBar />
      </div>
      <div className=" flex justify-center items-center">
        <div className="lg:w-[761px] h-[60px] w-[300px] rounded-[10px] flex justify-start items-center pl-4 bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
          <h1 className="font-[600] text-[1.5rem] sm:text-[1.2rem]">FAQ</h1>
        </div>
      </div>
      <div className="grid justify-center gap-[1rem]">
        {dataText.map((data, index) => {
          return (
            <div
              key={index}
              className="bg-primaryTwo w-[300px] lg:w-[600px] lg:h-[101px] flex justify-center items-center rounded-[5px]"
            >
              <p className=" lg:w-[495px] w-[250px] text-[12px] lg:text-[1.1rem]">{data.text}</p>
              <button className="bg-white h-[38px] w-[38px] flex justify-center items-center rounded-[10px]">
                <IoIosArrowForward />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
