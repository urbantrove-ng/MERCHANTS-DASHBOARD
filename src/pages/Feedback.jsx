import React from "react";
import rating from "../assets/Rating.png";
import { RxAvatar } from "react-icons/rx";
import DisplaySideBar from "../features/RightSideBar/DisplaySideBar";

const data = [
  {name: "Ayodele", time: "1 Month Ago", rating: rating, avatar: <RxAvatar/>, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {name: "Abraham", time: "1 Week Ago", rating: rating, avatar: <RxAvatar/>, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {name: "Fatima", time: "2 Days Ago", rating: rating, avatar: <RxAvatar/>, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {name: "Astro Dev", time: "2 Months Ago", rating: rating, avatar: <RxAvatar/>, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {name: "Usman", time: "3 Months Ago", rating: rating, avatar: <RxAvatar/>, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
]
export default function Feedback() { 
  return (
    <div className="relative grid gap-[1rem] mt-[10rem] sm:mt-[8.5rem] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-primaryTwo  overflow-y-scroll max-h-[80vh] lg:max-h-[90vh] justify-center py-[3rem] px-[1rem] sm:px-[0.2rem] font-inter">
      <div className="fixed top-[10.6rem] sm:top-[9.3rem] right-0 z-10">
      <DisplaySideBar/>
      </div>
      <div className="w-[47vw] lg:w-[40rem] sm:w-[83vw] rounded-[10px] py-[0.5rem] px-[2rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
        <h1 className="font-[600] text-[1.5rem] sm:text-[1.2rem]">Feedback</h1>
      </div>
      <div className="grid justify-center gap-[1rem]">
        {data.map((data, index) => {
          const { name, time, rating, avatar, text } = data;

          return (
            <div
              key={index}
              className="bg-primaryTwo w-[44.5vw] lg:w-[37rem] sm:w-[82vw] grid gap-[1rem] px-[2rem] py-[1rem] rounded-[5px]"
            >
              <div className="flex items-center gap-[2rem] sm:gap-[1rem]">
                <div className="text-[3.5rem]">{avatar}</div>
                <div className="grid gap-[0.2rem]">
                  <h1>{name}</h1>
                  <img src={rating} alt="" />
                </div>
                <h1 className="text-[0.8rem] mt-[-1.4rem] text-[#7F7F7F]">
                  {time}
                </h1>
              </div>
              <h1>{text}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
