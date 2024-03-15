import React from "react";
import checklist from "../assets/checklist.png";
import { LuPlus } from "react-icons/lu";
import { TfiPlus } from "react-icons/tfi";

export default function Services() {
  return (
    <div className="grid gap-[1rem] mt-[10rem] overflow-y-auto max-h-[80vh] justify-center py-[3rem] px-[1rem] font-inter">
      <div className="flex items-center mb-[2rem] gap-[7rem] w-[45rem] h-[8rem] rounded-[10px] py-[2.5rem] px-[1rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
        <div className="ml-[3rem] w-[8rem] h-[12rem] ">
          <img src={checklist} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="ml-[-10rem] mt-[1rem] w-[5rem] h-[6rem]">
          <img src={checklist} className="w-full h-full object-cover" alt="" />
        </div>
        <h1 className="font-[600] text-[1.8rem]">Service</h1>
      </div>

      <div className="grid gap-[0.5rem] w-[45rem] bg-white px-[2rem] py-[1rem] rounded-[10px]">
        <h1 className="text-[1.4rem] font-[600]">Update Service Information</h1>
        <div className="flex justify-center gap-[2rem]">
          <div className="w-[10rem] h-[10rem] grid justify-center bg-primaryTwo rounded-[5px] text-[#a7a7a7] hover:text-black cursor-pointer transition-all duration-300">
            <TfiPlus className="m-auto text-[2rem] mt-[2rem]" />
            <h1 className="">
              Add Image
            </h1>
          </div>
          <div className="w-[10rem] h-[10rem] grid justify-center bg-primaryTwo rounded-[5px] text-[#a7a7a7] hover:text-black cursor-pointer transition-all duration-300">
            <TfiPlus className="m-auto text-[2rem] mt-[2rem]" />
            <h1 className="">
              Add Image
            </h1>
          </div>
          <div className="w-[10rem] h-[10rem] grid justify-center bg-primaryTwo rounded-[5px] text-[#a7a7a7] hover:text-black cursor-pointer transition-all duration-300">
            <TfiPlus className="m-auto text-[2rem] mt-[2rem]" />
            <h1 className="">
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
                className="bg-primaryTwo w-[34rem] px-[0.5rem] py-[0.5rem] rounded-[5px] focus:outline-none"
              />
            </div>
            <div className="mb-[0.2rem]">
              <textarea
                placeholder="Add Description"
                className="bg-primaryTwo w-[34rem] px-[0.5rem] py-[0.5rem] rounded-[5px] focus:outline-none"
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
