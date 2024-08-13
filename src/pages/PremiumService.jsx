import { useState } from "react";

import DisplaySideBar from "../features/RightSideBar/DisplaySideBar";

export default function PremiumService() {
  const [selectedContent, setSelectedContent] = useState("Basic");

  const handleContentClick = (content) => {
    setSelectedContent(content);
  };
  return (
    <div className="relative grid gap-[2rem] lg:w-[812px]   scrollbar-thumb-rounded-full scrollbar-track-rounded-full lg:scrollbar scrollbar-thumb-primaryOne scrollbar-track-primaryTwo  overflow-y-scroll max-h-[75vh] lg:h-[90vh] justify-center lg:py-6  font-inter">
      <div className="fixed top-[10.6rem] sm:top-[9.3rem] right-0 z-10">
        <DisplaySideBar />
      </div>
      <div className="flex justify-center items-center">
        <div className="lg:w-[761px] h-[60px] w-[100%] rounded-[10px] flex justify-start items-center pl-4 bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
          <p className="font-[600] text-[1.5rem] lg:text-[1.2rem]">Premium</p>
        </div>
      </div>
      <div className=" flex flex-col items-center gap-4">
        <h1 className="text-[1.2rem] ">Billing Plan</h1>
        <div className=" flex justify-center items-center gap-[0.2rem] lg:gap-[0.5rem]">
          <div
            className={`border-[1px] border-primaryOne lg:w-[17rem] w-[10rem] h-[10rem] lg:h-[17rem] flex justify-center items-center  text-center rounded-[25px] cursor-pointer ${
              selectedContent === "Basic" ? "bg-primaryTwo" : "bg-[#fbf7f4]"
            }`}
            onClick={() => handleContentClick("Basic")}
          >
            <div>
              <div>
                <input
                  type="radio"
                  id="basic"
                  name="plan"
                  value="Basic"
                  checked={selectedContent === "Basic"}
                  onChange={() => handleContentClick("Basic")}
                  className="lg:w-6 lg:h-6 w-3 h-3 accent-primaryOne"
                />
                <label htmlFor="basic"></label>
              </div>
              <p className="lg:text-[1.1rem] text-[12px] font-[100]">
                Billed Monthly
              </p>
              <p className="text-[#836427] uppercase text-[12px] lg:text-[1.3rem]">
                Basic
              </p>
              <p className="text-primaryOne text-[16px] lg:text-[1.5rem]">
                ₦12500
              </p>
              <ul className="text-[12px] lg:text-[0.8rem] flex flex-col items-start">
                <li className="flex items-center gap-[0.5rem] sm:gap-[0.4rem]">
                  <span
                    className={`w-[0.7rem] h-[0.7rem] bg-primaryTwo   rounded-[10rem]`}
                  ></span>
                  Maximum of 5 ads
                </li>
                <li className="flex items-center sm:items-start gap-[0.5rem] sm:gap-[0.3rem]">
                  <span className="w-[0.7rem] h-[0.7rem] bg-primaryTwo rounded-[10rem] "></span>
                  Customer Support 24/7
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`border-[1px] border-primaryOne lg:w-[17rem] w-[10rem] h-[10rem] lg:h-[17rem] flex justify-center items-center  text-center rounded-[25px] cursor-pointer ${
              selectedContent === "Premium" ? "bg-primaryTwo" : "bg-[#fbf7f4]"
            }`}
            onClick={() => handleContentClick("Premium")}
          >
            <div>
              <div>
                <input
                  type="radio"
                  id="premium"
                  name="plan"
                  value="Premium"
                  checked={selectedContent === "Premium"}
                  onChange={() => handleContentClick("Premium")}
                  className="lg:w-6 lg:h-6 w-3 h-3 accent-primaryOne"
                />
                <label htmlFor="premium"></label>
              </div>
              <p className="lg:text-[1.1rem] text-[12px] font-[100]">
                Billed Monthly
              </p>
              <p className="text-[#836427] uppercase text-[12px] lg:text-[1.3rem]">
                Premium
              </p>
              <h1 className="text-primaryOne text-[16px] lg:text-[1.5rem]">
                ₦15000
              </h1>
              <ul className="text-[12px] lg:text-[0.8rem] flex flex-col items-start">
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
                  <h1 className="font-[700] text-[1.6rem] sm:text-[1.3rem]">
                    Total
                  </h1>
                  <h1 className="font-[700] text-[1.6rem] sm:text-[1.3rem]">
                    ₦12500
                  </h1>
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
                  <h1 className="font-[700] text-[1.6rem] sm:text-[1.3rem]">
                    Total
                  </h1>
                  <h1 className="font-[700] text-[1.6rem] sm:text-[1.3rem]">
                    ₦15000
                  </h1>
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
      <div className="flex justify-center items-center">
        <div className="lg:w-[761px] h-[60px] w-[100%] rounded-[10px] flex justify-start items-center pl-4 bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
          <p className="font-[600] text-[1.5rem] sm:text-[1.2rem]">Service</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {" "}
        <form
          action=""
          className=" w-[300px]  flex items-center flex-col gap-2"
        >
          <label
            htmlFor=""
            className="text-[1.3rem] sm:text-[1rem] text-[#444B59]"
          >
            Enter Amount
          </label>
          <input
            type="number"
            className="border-primaryOne border-[2px] w-[60vw] lg:w-[30rem]  lg:h-[1.5rem]  focus:outline-none rounded-[10rem]"
          />
          <p className=" text-center">
            The higher the price the higher the advantage you have
          </p>
          <button className="flex m-auto mt-[1.5rem] sm:mt-[1rem] bg-primaryOne px-[5rem] py-[0.5rem] rounded-[5px] text-white text-[1.1rem]">
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
}
