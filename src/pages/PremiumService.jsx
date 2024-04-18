import React, { useState } from "react";
import greenegg from "../assets/basic.png";
import purpleegg from "../assets/purpleegg.png";
import DisplaySideBar from "../features/RightSideBar/DisplaySideBar";

export default function PremiumService() {
  const [selectedContent, setSelectedContent] = useState("Basic");

  const handleContentClick = (content) => {
    setSelectedContent(content);
  };
  return (
    <div className="relative grid gap-[1rem] mt-[10rem] sm:mt-[8.5rem] overflow-y-auto max-h-[80vh] lg:max-h-[90vh] justify-center py-[3rem] px-[1rem] sm:px-[0.1rem] font-inter">
      <div className="fixed top-[10.6rem] sm:top-[9.3rem] right-0 z-10">
        <DisplaySideBar />
      </div>
      <div className="w-[45rem] lg:w-[40rem] sm:w-[87vw] rounded-[10px] py-[0.5rem] px-[1rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
        <h1 className="font-[600] text-[1.5rem] sm:text-[1.2rem]">Premium</h1>
      </div>
      <div className="px-[3rem] sm:px-[0.2rem] mt-[2rem] sm:mt-[0.5rem]">
        <h1 className="text-[1.2rem] mb-[1rem] ">Billing Plan</h1>
        <div className="px-[1rem] sm:px-0 flex gap-[2rem] sm:gap-[0.5rem]">
          <div
            className={`border-[1px] border-primaryOne w-[17rem] lg:w-[16rem] sm:w-[39vw] py-[2rem] sm:py-[1rem] text-center rounded-[25px] cursor-pointer ${selectedContent === 'Basic' ? 'bg-primaryTwo' : 'bg-[#fbf7f4]'}`}
            onClick={() => handleContentClick("Basic")}
          >
            <img src={greenegg} alt="" className="m-auto" />
            <h1 className="text-[1.1rem] font-[100]">Billed Monthly</h1>
            <h1 className="text-[#836427] uppercase text-[2rem] sm:text-[1.3rem]">
              Basic
            </h1>
            <h1 className="text-primaryOne text-[3rem] sm:text-[1.5rem]">
              ₦12500
            </h1>
            <ul className="text-left ml-[1.8rem] sm:ml-[0.5rem] sm:text-[0.8rem]">
              <li className="flex items-center gap-[0.5rem] sm:gap-[0.4rem]">
                <span className={`w-[0.7rem] h-[0.7rem] bg-primaryTwo   rounded-[10rem]`}></span>
                Maximum of 5 ads
              </li>
              <li className="flex items-center sm:items-start gap-[0.5rem] sm:gap-[0.3rem]">
                <span className="w-[0.7rem] h-[0.7rem] bg-primaryTwo rounded-[10rem] sm:mt-[0.3rem]"></span>
                Customer Support 24/7
              </li>
            </ul>
          </div>
          <div
            className={`border-[1px] border-primaryOne w-[17rem] lg:w-[16rem] sm:w-[43vw] py-[2rem] sm:py-[1rem] text-center rounded-[25px] cursor-pointer ${selectedContent === 'Premium' ? 'bg-primaryTwo' : 'bg-[#fbf7f4]'}`}
            onClick={() => handleContentClick("Premium")}
          >
            <img src={purpleegg} alt="" className="m-auto" />
            <h1 className="text-[1.1rem] font-[100]">Billed Monthly</h1>
            <h1 className="text-[#836427] uppercase text-[2rem] sm:text-[1.3rem]">
              Premium
            </h1>
            <h1 className="text-primaryOne text-[3rem] sm:text-[1.5rem]">
              ₦15000
            </h1>
            <ul className="text-left ml-[1.8rem] sm:ml-[0.5rem] sm:text-[0.8rem]">
              <li className="flex items-center sm:items-left gap-[0.5rem] sm:gap-[0.4rem]">
                <span className="w-[0.7rem] h-[0.7rem] bg-primaryTwo rounded-[10rem]"></span>
                Maximum of 10 ads
              </li>
              <li className="flex items-center gap-[0.5rem] sm:gap-[0.3rem]">
                <span className="w-[0.7rem] h-[0.7rem] bg-primaryTwo rounded-[10rem]"></span>
                Customer Support 24/7
              </li>
              <li className="flex items-center  gap-[0.5rem] sm:gap-[0.3rem]">
                <span className="w-[0.7rem] h-[0.7rem] bg-primaryTwo rounded-[10rem]"></span>
                More Product Exposure
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[2rem] px-[1.5rem] sm:px-0 font-sans">
          {selectedContent === "Basic" && (
            <>
              <h1 className="border-b-[1px] border-[#d4d4d8] py-[0.6rem] text-[1.2rem] font-[300]">
                Basic Plan
              </h1>
              <h1 className="border-b-[1px] border-[#d4d4d8] py-[0.6rem] text-[1.2rem] font-[300] flex items-center">
                5 Ads
              </h1>
              <h1 className="border-b-[1px] border-[#d4d4d8] py-[0.6rem] text-[1.2rem] font-[300]">
                Customer Support 24/7
              </h1>
              <div className="bg-primaryTwo px-[0.4rem] rounded-[5px]">
                <div className="flex justify-between border-b-[1px] border-[#d4d4d8] py-[0.6rem] px-[0.4rem]">
                  <h1 className="font-[700] text-[1.6rem] sm:text-[1.3rem]">Total</h1>
                  <h1 className="font-[700] text-[1.6rem] sm:text-[1.3rem]">₦12500</h1>
                </div>
                <h1 className="py-[0.6rem] text-[1.2rem] sm:text-[1rem] font-[300]">
                  Renews for ₦12500 every month
                </h1>
              </div>
            </>
          )}
          {selectedContent === "Premium" && (
            <>
              <h1 className="border-b-[1px] border-[#d4d4d8] py-[0.6rem] text-[1.2rem] font-[300]">
                Premium Plan
              </h1>
              <h1 className="border-b-[1px] border-[#d4d4d8] py-[0.6rem] text-[1.2rem] font-[300] flex items-center">
                10 Ads
              </h1>
              <h1 className="border-b-[1px] border-[#d4d4d8] py-[0.6rem] text-[1.2rem] font-[300]">
                Customer Support 24/7
              </h1>
              <h1 className="border-b-[1px] border-[#d4d4d8] py-[0.6rem] text-[1.2rem] font-[300]">
                More Product Exposure
              </h1>
              <div className="bg-primaryTwo px-[0.4rem] rounded-[5px]">
                <div className="flex justify-between border-b-[1px] border-[#d4d4d8] py-[0.6rem] px-[0.4rem]">
                  <h1 className="font-[700] text-[1.6rem] sm:text-[1.3rem]">Total</h1>
                  <h1 className="font-[700] text-[1.6rem] sm:text-[1.3rem]">₦15000</h1>
                </div>
                <h1 className="py-[0.6rem] text-[1.2rem] sm:text-[1rem] font-[300]">
                  Renews for ₦15000 every month
                </h1>
              </div>
            </>
          )}
          <button className="flex m-auto mt-[1.5rem] bg-primaryOne px-[5rem] py-[0.5rem] rounded-[5px] text-white text-[1.1rem]">
            Upgrade
          </button>
        </div>
      </div>
      <div className="w-[45rem] lg:w-[40rem] sm:w-[85vw] rounded-[10px] py-[0.5rem] px-[1rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
        <h1 className="font-[600] text-[1.5rem] sm:text-[1.2rem]">Service</h1>
      </div>
      <form action="" className="px-[4rem] sm:px-[1rem] grid">
        <label htmlFor="" className="text-[1.3rem] sm:text-[1rem] text-[#444B59]">
          Enter Amount
        </label>
        <input
          type="number"
          className="border-primaryOne border-[2px] w-[25rem] sm:w-[80vw] sm:h-[1.5rem] py-[1rem] px-[0.4rem] focus:outline-none rounded-[10rem]"
        />
        <h1 className="mt-[0.6rem]">
          The higher the price the higher the advantage you have
        </h1>
        <button className="flex m-auto mt-[1.5rem] sm:mt-[1rem] bg-primaryOne px-[5rem] py-[0.5rem] rounded-[5px] text-white text-[1.1rem]">
          Proceed
        </button>
      </form>
    </div>
  );
}
