import { Bell, CircleUserRound, Search } from "lucide-react";
import { IoSearch } from "react-icons/io5";
import { BsFillBellFill } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { navLinks } from "../../components/NavLink";
import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation();
  const currentMenuItem = navLinks.find(
    (menuItem) => menuItem.path === location.pathname
  );

  function toNotifs(){
    navigate("/notifications")
  }

  return (
    <div className="ml-[18rem] lg:ml-[5rem] sm:ml-[1.5rem]">
      <nav className="bg-white py-[1.5rem] sm:py-[1rem] px-[2rem] flex sm:flex-col-reverse justify-between w-[100%] items-center">
        <div className="flex items-center">
          <div className="relative text-black">
            <input
              type="search"
              name="search"
              placeholder="Search Here"
              className="bg-[#e3e5da] h-10 sm:h-[2.5rem] px-5 w-[30rem] sm:w-[82vw] sm:ml-[1rem] rounded-[5px] sm:rounded-[10px] focus:outline-none focus:w-[35rem] sm:mb-[-13rem] placeholder:text-primaryOne placeholder:uppercase sm:placeholder:text-[0.9rem]"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-[0.6rem] mr-4 text-[1.3rem] text-primaryOne"
            >
              <IoSearch />
            </button>
          </div>
        </div>

        <div className="flex sm:px-[1rem] items-center justify-between sm:w-[85vw] sm:h-[5vh] sm:ml-[1.3rem] sm:mt-[-0.5rem] sm:mb-[0.5rem]">
          <div className="flex items-center gap-[0.2rem] ml-[-0.7rem]">
            <span className="2xl:hidden sm:block font-[600] sm:text-[1.3rem]">
              {currentMenuItem.icon}
            </span>
            <span className="2xl:hidden sm:block font-[600] sm:text-[1.1rem]">
              {currentMenuItem.name}
            </span>
          </div>
          <div className="flex items-center gap-[2rem] sm:gap-[0.8rem]" onClick={toNotifs}>
            <div className="relative cursor-pointer" >
              <BsFillBellFill className="text-[1.5rem] sm:text-[1.2rem]" />
              <div className="absolute top-[-0.4rem] right-[-0.2rem] bg-[#b91c1c] rounded-full w-[1.2rem] sm:w-[1rem] h-[1.2rem] sm:h-[1rem] flex items-center justify-center text-xs text-white">
                15
              </div>
            </div>
            <div className="relative cursor-pointer">
              <RxAvatar className="text-[2.2rem] sm:text-[1.5rem]" />
            </div>
          </div>
        </div>
      </nav>
      <hr className="bg-primaryOne h-[2px]" />
    </div>
  );
}
