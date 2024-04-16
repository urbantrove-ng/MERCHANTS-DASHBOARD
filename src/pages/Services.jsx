import React from "react";
import checklist from "../assets/checklist.png";
import { LuPlus } from "react-icons/lu";
import { TfiPlus } from "react-icons/tfi";
import DisplaySideBar from "../features/RightSideBar/DisplaySideBar";

export default function Services() {
  return (
    <div className="relative grid gap-[1rem] mt-[10rem] sm:mt-[8.5rem] overflow-y-auto max-h-[80vh] lg:max-h-[90vh] justify-center py-[3rem] px-[1rem] sm:px-[0.5rem] font-inter">
      <div className="fixed top-[10.6rem] sm:top-[9.3rem] right-0 z-[5000]">
      <DisplaySideBar/>
      </div>
      <div className="flex items-center mb-[2rem] gap-[7rem] sm:gap-[2rem] w-[45rem] lg:w-[40rem] sm:w-[81vw] h-[8rem] sm:h-[1rem] rounded-[10px] py-[2.5rem] px-[1rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
        <div className="ml-[3rem] sm:ml-[0.5rem] w-[8rem] sm:mt-[0.8rem] sm:w-[6rem] h-[12rem] sm:h-[7rem] sm:mb-[2rem]">
          <img src={checklist} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="ml-[-10rem] sm:ml-[-5.5rem] mt-[1rem] sm:mt-[-1rem] w-[5rem] sm:w-[4rem] h-[6rem] sm:h-[5rem]">
          <img src={checklist} className="w-full h-full object-cover" alt="" />
        </div>
        <h1 className="font-[600] text-[1.8rem] sm:text-[1.4rem]">Services</h1>
      </div>

      <div className="grid gap-[0.5rem] w-[45rem] lg:w-[40rem] sm:w-[81vw] bg-white px-[2rem] sm:px-[0.5rem] py-[1rem] rounded-[10px]">
        <h1 className="text-[1.4rem] sm:text-[1rem] font-[600]">Update Service Information</h1>
        <div className="flex justify-center gap-[2rem] sm:gap-[0.8rem]">
          <div className="w-[10rem] sm:w-[23vw] h-[10rem] sm:h-[7rem] grid justify-center bg-primaryTwo rounded-[5px] text-[#a7a7a7] hover:text-black cursor-pointer transition-all duration-300">
            <TfiPlus className="m-auto text-[2rem] sm:text-[1.5rem] mt-[2rem]" />
            <h1 className="sm:text-[0.7rem]">
              Add Image
            </h1>
          </div>
          <div className="w-[10rem] sm:w-[23vw] h-[10rem] sm:h-[7rem] grid justify-center bg-primaryTwo rounded-[5px] text-[#a7a7a7] hover:text-black cursor-pointer transition-all duration-300">
            <TfiPlus className="m-auto text-[2rem] mt-[2rem]" />
            <h1 className="sm:text-[0.7rem]">
              Add Image
            </h1>
          </div>
          <div className="w-[10rem] sm:w-[23vw] h-[10rem] sm:h-[7rem] grid justify-center bg-primaryTwo rounded-[5px] text-[#a7a7a7] hover:text-black cursor-pointer transition-all duration-300">
            <TfiPlus className="m-auto text-[2rem] mt-[2rem]" />
            <h1 className="sm:text-[0.7rem]">
              Add Image
            </h1>
          </div>
        </div>
        <div className="grid justify-center">
          <form action="">
            <div className="mb-[0.7rem]">
              <input
                type="text"
                placeholder="Add Address"
                className="bg-primaryTwo w-[34rem] sm:w-[75vw] px-[0.5rem] py-[0.5rem] rounded-[5px] focus:outline-none"
              />
            </div>
            <div className="mb-[0.2rem]">
              <textarea
                placeholder="Add Description"
                className="bg-primaryTwo w-[34rem] sm:w-[75vw] px-[0.5rem] py-[0.5rem] rounded-[5px] focus:outline-none"
                name=""
                id=""
                cols="30"
                rows="4"
              ></textarea>
            </div>
            <button className="flex m-auto bg-primaryOne px-[3rem] py-[0.7rem] rounded-[5px] text-white">
              Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
