import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RightSideBar } from "./RightSideBar";
import { useSpring, animated } from "react-spring";

export default function DisplaySideBar() {
  const [openSidebar, setOpenSidebar] = useState(false); 

  function openBurger() {
    setOpenSidebar(!openSidebar);
  }
  const fade = useSpring({
    transform: openSidebar ? "translateX(0%)" : "translateX(100%)",
    config: {duration: '500'}
  })

  return (
    <div className="relative 2xl:hidden lg:block">
      <div className="bg-primaryTwo w-[1.8rem] sm:w-[5vw] h-[4rem] sm:h-[6vh] py-[1rem] sm:py-[0.9rem] sm:pl-[0.1rem] rounded-bl-[5px] rounded-tl-[5px]" onClick={openBurger}>
        {openSidebar ? <IoIosArrowForward className="text-[1.5rem] sm:text-[1rem]"/> : <IoIosArrowBack className="text-[1.5rem] sm:text-[1rem]"/>}
      </div>
      <animated.div style={fade} className="absolute right-0 z-[6000] overflow-y-auto max-h-[60vh]"><RightSideBar/></animated.div>
    </div>
  );
}
