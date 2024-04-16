import React from "react";

const data = [
  { heading: "Handbag Ordered", date: "03 April,2021", time: "02:00pm" },
  { heading: "Bonus Received", date: "04 April,2021", time: "02:00pm" },
  { heading: "Review Made", date: "05 April,2021", time: "02:00pm" },
  { heading: "Shorts Ordered", date: "06 April,2021", time: "02:00pm" },
  { heading: "Shoe Ordered", date: "07 April,2021", time: "02:00pm" },
];
export default function SidebarNotifications() {
  return (
    <div className="">
      {data.map((ordered, index) => {
        const { heading, date, time } = ordered;
        const initials = heading
          .split(" ")
          .map((word) => word[0])
          .join("");

        return (
          <div key={index} className="flex gap-[2rem] sm:gap-[1rem] items-center px-[1rem] bg-[#e3e5da] mb-[1rem] sm:mb-[0.5rem] py-[0.2rem] rounded-[5px]">
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
  );
}
