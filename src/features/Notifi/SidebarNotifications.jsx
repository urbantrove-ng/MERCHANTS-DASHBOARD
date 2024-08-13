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
    <div className=" flex flex-col items-center gap-4 rounded-[8px]">
      {data.map((ordered, index) => {
        const { heading, date, time } = ordered;
        const initials = heading
          .split(" ")
          .map((word) => word[0])
          .join("");

        return (
          <div
            key={index}
            className=" lg:w-[272.89px] h-[56.04px] flex justify-center bg-[#647C0C1A] gap-2 items-center"
          >
            <div className="w-[32px] h-[32px] flex justify-center items-center rounded-full relative text-white bg-primaryOne">
              <h1 className=" text-[12.01px]">{initials}</h1>
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
