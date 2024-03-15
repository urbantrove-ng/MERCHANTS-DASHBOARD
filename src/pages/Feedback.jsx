import React from "react";
import rating from "../assets/Rating.png";
import { RxAvatar } from "react-icons/rx";

const data = [
  {name: "Ayodele", time: "1 Month Ago", rating: rating, avatar: <RxAvatar/>, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {name: "Abraham", time: "1 Week Ago", rating: rating, avatar: <RxAvatar/>, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {name: "Fatima", time: "2 Days Ago", rating: rating, avatar: <RxAvatar/>, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {name: "Astro Dev", time: "2 Months Ago", rating: rating, avatar: <RxAvatar/>, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {name: "Usman", time: "3 Months Ago", rating: rating, avatar: <RxAvatar/>, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
]
export default function Feedback() {
  return (
    <div className="grid gap-[1rem] mt-[10rem] overflow-y-auto max-h-[80vh] justify-center py-[3rem] px-[1rem] font-inter">
      <div className="w-[45rem] rounded-[10px] py-[0.5rem] px-[2rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
        <h1 className="font-[600] text-[1.5rem]">Feedback</h1>
      </div>
      <div className="grid justify-center gap-[1rem]">
        {data.map((data, index) => {
          const { name, time, rating, avatar, text } = data;

          return (
            <div
              key={index}
              className="bg-primaryTwo w-[40rem] grid gap-[1rem] px-[2rem] py-[1rem] rounded-[5px]"
            >
              <div className="flex items-center gap-[2rem]">
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
