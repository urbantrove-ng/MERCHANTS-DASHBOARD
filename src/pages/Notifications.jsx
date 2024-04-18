import React from "react";
import DisplaySideBar from "../features/RightSideBar/DisplaySideBar";

const data = [
  { heading: "Handbag Ordered", date: "03 April,2021", time: "02:00pm" },
  { heading: "Bonus Received", date: "04 April,2021", time: "02:00pm" },
  { heading: "Review Made", date: "05 April,2021", time: "02:00pm" },
  { heading: "Shorts Ordered", date: "06 April,2021", time: "02:00pm" },
  { heading: "Shoe Ordered", date: "07 April,2021", time: "02:00pm" },
  { heading: "Handbag Ordered", date: "03 April,2021", time: "02:00pm" },
  { heading: "Bonus Received", date: "04 April,2021", time: "02:00pm" },
  { heading: "Review Made", date: "05 April,2021", time: "02:00pm" },
  { heading: "Shorts Ordered", date: "06 April,2021", time: "02:00pm" },
  { heading: "Shoe Ordered", date: "07 April,2021", time: "02:00pm" },
];
export default function Notifications() {
  return (
    <div className="relative grid gap-[1rem] mt-[10rem] sm:mt-[8.5rem] overflow-y-auto max-h-[80vh] lg:max-h-[90vh] justify-center py-[3rem] px-[1rem] sm:px-[0.2rem] font-inter">
      <div className="fixed top-[10.6rem] sm:top-[9.3rem] right-0 z-10">
      <DisplaySideBar/>
      </div>
      <div className="w-[45rem] lg:w-[40rem] sm:w-[83vw] rounded-[10px] py-[0.5rem] px-[1rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
        <h1 className="font-[600] text-[1.5rem] sm:text-[1.2rem]">My Notifications</h1>
      </div>
      <div className="grid justify-center gap-[0.5rem]">
      {data.map((ordered, index) => {
        const { heading, date, time } = ordered;
        const initials = heading
          .split(" ")
          .map((word) => word[0])
          .join("");

        return (
          <div key={index} className="w-[40rem] lg:w-[37rem] sm:w-[83vw] flex gap-[2rem] items-center px-[1rem] bg-primaryTwo mb-[1rem] sm:mb-0 py-[0.5rem] rounded-[5px]">
            <div className="w-[2.5rem] h-[2.5rem] rounded-[50px] relative bg-primaryOne">
              <h1 className="font-[600] text-white text-[1.2rem] top-1/2 left-1/2 mt-[15%] ml-[0.40rem]">{initials}</h1>
            </div>
            <div>
              <h1 className="font-[500]">{heading}</h1>
              <span className="text-[0.9rem] text-[#708099]">
                {date} | {time}
              </span>
            </div>
          </div>
        );
      })}
      </div>

    </div>
  );
}
