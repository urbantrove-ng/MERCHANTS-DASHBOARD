import React from "react";
import { IoIosArrowForward } from "react-icons/io";


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
    <div className="grid gap-[1rem] mt-[10rem] overflow-y-auto max-h-[80vh] justify-center py-[3rem] px-[1rem] font-inter">
      <div className="w-[45rem] rounded-[10px] py-[0.5rem] px-[2rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
        <h1 className="font-[600] text-[1.5rem]">FAQ</h1>
      </div>
      <div className="grid justify-center gap-[1rem]">
          {dataText.map((data, index) => {
            return (
              <div
                key={index}
                className="bg-primaryTwo w-[40rem] flex gap-[1rem] px-[2rem] py-[1rem] rounded-[5px]"
              >
                <h1>{data.text}</h1>
                <button className="bg-white px-[1rem] rounded-[10px]"><IoIosArrowForward/></button>
              </div>
            );
          })}
        </div>
    </div>
  );
}
