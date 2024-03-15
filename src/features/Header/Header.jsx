import { Bell, CircleUserRound, Search } from "lucide-react";
import { IoSearch } from "react-icons/io5";
import { BsFillBellFill } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import React from "react";

export default function Header() { 
  return (
    <div className="ml-[18rem]">
      <nav className="bg-white py-[1.5rem] px-[2rem] flex justify-between w-[100%] items-center">
        <div className="flex items-center">
          <div className="relative text-black">
            <input
              type="search"
              name="search"
              placeholder="Search Here"
              className="bg-[#e3e5da] h-10 px-5 w-[30rem] rounded-[5px] focus:outline-none focus:w-[35rem] placeholder:text-primaryOne placeholder:uppercase"
            />
            <button type="submit" className="absolute right-0 top-0 mt-[0.6rem] mr-4 text-[1.3rem] text-primaryOne">
              <IoSearch />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-[2rem]">
          <div className="relative cursor-pointer">
            <BsFillBellFill className="text-[1.5rem]"/>
            <div className="absolute top-[-0.4rem] right-[-0.2rem] bg-[#b91c1c] rounded-full w-[1.2rem] h-[1.2rem] flex items-center justify-center text-xs text-white">
              15
            </div>
          </div>

          <div className="relative cursor-pointer">
            <RxAvatar className="text-[2.2rem]"/>
          </div>
        </div>
      </nav>
      <hr className="bg-primaryOne h-[2px]" />
    </div>
  );
}
