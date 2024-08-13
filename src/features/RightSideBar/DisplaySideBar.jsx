import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSpring, animated } from "react-spring";
import Calendar from "../../components/Calender/Calender";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Notifications from "../Notifi/SidebarNotifications";
export default function DisplaySideBar() {
  const [openSidebar, setOpenSidebar] = useState(false); 

  function openBurger() {
    setOpenSidebar(!openSidebar);
  }
  const fade = useSpring({
    transform: openSidebar ? "translateX(0%)" : "translateX(100%)",
    config: {duration: '500'}
  })
  const navigate = useNavigate();
  const [showCalendar, setShowCalendar] = useState(true);

  function shouldShow() {
    setShowCalendar(!showCalendar);
  }
  return (
    <div className="relative lg:hidden block">
      <div
        className="bg-primaryTwo w-[1.8rem] sm:w-[5vw] h-[4rem] sm:h-[6vh] py-[1rem] sm:py-[0.9rem] sm:pl-[0.1rem] rounded-bl-[5px] rounded-tl-[5px]"
        onClick={openBurger}
      >
        {openSidebar ? (
          <IoIosArrowForward className="text-[1.5rem] sm:text-[1rem]" />
        ) : (
          <IoIosArrowBack className="text-[1.5rem] sm:text-[1rem]" />
        )}
      </div>
      <animated.div
        style={fade}
        className="absolute w-[75vw] right-0 z-[6000] bg-[#fbf7f4] overflow-y-auto max-h-[60vh]"
      >
        <section className="  flex justify-center items-start w-full py-4  scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-primaryOne scrollbar-track-primaryTwo  overflow-y-scroll">
          <div className=" w-[272px] ">
            <div className=" flex flex-col items-center ">
              <div
                onClick={shouldShow}
                className="flex justify-between items-center bg-[#fbf7f4] w-[276px] lg:h-[26.98px] px-2 hover:bg-[#e3e5da] transition duration-300 rounded-[5px]  cursor-pointer"
              >
                <h1 className=" text-[16px] font-medium">Calendar</h1>
                {showCalendar ? (
                  <FaChevronDown className="text-[0.8rem]" />
                ) : (
                  <FaChevronUp className="text-[0.8rem]" />
                )}
              </div>
              <div
                className={`h-[17rem] lg:w-[300px] w-[200px] ${
                  showCalendar ? "block" : "hidden"
                }`}
              >
                <Calendar />
              </div>
            </div>
            <div className="  flex-col gap-4 bg-[#fbf7f4] ">
              <div className="flex justify-around">
                <h1>Activity</h1>
                <h1
                  className="text-primaryOne cursor-pointer"
                  onClick={() => navigate("/notifications")}
                >
                  View All
                </h1>
              </div>
              <div className="  rounded-[5px] h-[3rem] lg:h-[200px] bg-[#fbf7f4] ">
                <Notifications />
              </div>
            </div>
          </div>
        </section>{" "}
      </animated.div>
    </div>
  );
}
