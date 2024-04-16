import React, { useState } from "react";
import Calendar from "../../components/Calender/Calender";
import Notification from "../../pages/Notifications";
import {
  FaChevronDown,
  FaChevronUp,
  FaCircleChevronLeft,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Notifications from "../Notifi/SidebarNotifications";
import { FaChevronLeft } from "react-icons/fa";
// import 'react-calendar/dist/Calendar.css';

export const RightSideBar = () => {
  const navigate = useNavigate();
  const [showCalendar, setShowCalendar] = useState(true);

  function shouldShow() {
    setShowCalendar(!showCalendar);
  }

  return (
    <> 
      <div className={`py-[2rem] sm:py-[0.5rem] overflow-y-auto lg:overflow-none lg:max-h-[100vh] px-[1rem] sm:px-[0.3rem] h-[40rem] lg:h-[50rem] lg:bg-[#fbf7f4] lg:rounded-tl-[5px] lg:rounded-bl-[5px]`}>
        <div className="grid justify-center gap-[1rem]">
          <div
            onClick={shouldShow}
            className="flex items-center gap-[15rem] sm:gap-[10rem] hover:bg-[#e3e5da] transition duration-300 rounded-[5px] px-[0.4rem] py-[0.7rem] cursor-pointer"
          >
            <h1>Calendar</h1>
            {showCalendar ? (
              <FaChevronDown className="text-[0.8rem]" />
            ) : (
              <FaChevronUp className="text-[0.8rem]" />
            )}
          </div>
          <div
            className={`w-[20rem] sm:w-[60vw] h-[17rem] ${
              showCalendar ? "block" : "hidden"
            }`}
          >
            <Calendar />
          </div>
        </div>
        <div className="grid justify-center">
          <div className="flex justify-center gap-[13rem] sm:gap-[9rem] mt-[2rem]">
            <h1>Activity</h1>
            <h1
              className="text-primaryOne cursor-pointer"
              onClick={() => navigate("/notifications")}
            >
              View All
            </h1>
          </div>
          <div className="w-[20rem] sm:w-[70vw] sm:px-[1rem] rounded-[5px] h-[3rem] bg-[#fbf7f4] mt-[1rem] m-auto">
            <Notifications />
          </div>
        </div>
      </div>
    </>
  );
};
