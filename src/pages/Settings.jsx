import React, { useEffect, useState } from "react";
import { IoSettingsSharp, IoPersonSharp } from "react-icons/io5";
import { FaGlobeAfrica, FaMoon } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BsQuestionCircle } from "react-icons/bs";

export default function Settings() {
  const [inputValue, setInputValue] = useState("Fatima Yusuf");
  const [emailValue, setEmailValue] = useState("fatimayusuf@gmail.com");
  const [genderValue, setGenderValue] = useState("Female");

  // Load the input value from localStorage on component mount
  useEffect(() => {
    const storedValue = localStorage.getItem("inputValue");
    if (storedValue) {
      setInputValue(storedValue);
    }
  }, []);
  useEffect(() => {
    const storedValue = localStorage.getItem("emailValue");
    if (storedValue) {
      setEmailValue(storedValue);
    }
  }, []);
  useEffect(() => {
    const storedValue = localStorage.getItem("genderValue");
    if (storedValue) {
      setGenderValue(storedValue);
    }
  }, []);

  // Update localStorage whenever the input value changes
  useEffect(() => {
    localStorage.setItem("inputValue", inputValue);
  }, [inputValue]);
  useEffect(() => {
    localStorage.setItem("emailValue", emailValue);
  }, [emailValue]);
  useEffect(() => {
    localStorage.setItem("genderValue", genderValue);
  }, [genderValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGenderValue(event.target.value);
  };
  return (
    <div className="grid gap-[1rem] mt-[10rem] overflow-y-auto max-h-[80vh] justify-center py-[3rem] px-[1rem] font-inter">
      <div className="w-[45rem] flex gap-[2rem] items-center rounded-[10px] py-[0.5rem] px-[3rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
        <div className="w-[7rem] h-[7rem] mt-[-2rem] text-primaryOne">
          <IoSettingsSharp className="text-[5rem]" />
          <IoSettingsSharp className="text-[5rem] ml-[2.8rem] mt-[-1.8rem]" />
          <IoSettingsSharp className="text-[5rem] ml-[4.1rem] mt-[-9rem]" />
        </div>
        <h1 className="font-[600] text-[1.5rem]">My Settings</h1>
      </div>
      <div className="p-[2rem]">
        <h1 className="text-[1.3rem] font-[600] mb-[0.8rem]">Account</h1>
        <div className="flex gap-[2rem]">
          <div>
            <div className="w-[7rem] h-[8rem] rounded-[10px] bg-primaryTwo relative">
              <IoPersonSharp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] text-[#474747]" />
            </div>
            <h1 className="cursor-pointer text-[#48D3FF] text-[0.9rem] ml-[0.5rem]">
              Upload Image
            </h1>
          </div>
          <div>
            <form action="" className="grid gap-[1.1rem]">
              <div className="flex items-center">
                <label
                  htmlFor=""
                  className="border-b-[1px] border-[#D2D2D2] text-[#8C8C8C] text-[1rem] mt-[0.5rem]"
                >
                  Name
                </label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="focus:outline-none w-[25rem] pl-[0.8rem] bg-[#fbf7f4] border-b-[1px] border-[#D2D2D2] text-[1.3rem]"
                />
              </div>
              <div className="flex items-center">
                <label
                  htmlFor=""
                  className="border-b-[1px] border-[#D2D2D2] text-[#8C8C8C] text-[1rem] mt-[0.45rem]"
                >
                  Email
                </label>
                <input
                  type="text"
                  value={emailValue}
                  onChange={handleEmailChange}
                  className="focus:outline-none w-[25rem] pl-[0.8rem] bg-[#fbf7f4] border-b-[1px] border-[#D2D2D2] text-[1.3rem]"
                />
              </div>
              <div className="flex items-center">
                <label
                  htmlFor=""
                  className="border-b-[1px] border-[#D2D2D2] text-[#8C8C8C] text-[1rem] mt-[0.45rem]"
                >
                  Gender
                </label>
                <input
                  type="text"
                  value={genderValue}
                  onChange={handleGenderChange}
                  className="focus:outline-none w-[25rem] pl-[0.8rem] bg-[#fbf7f4] border-b-[1px] border-[#D2D2D2] text-[1.3rem]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="px-[2rem] grid gap-[2rem]">
        <div className="flex gap-[2rem]">
          <div className="w-[4.5rem] h-[4.5rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)] relative rounded-[10px]">
            <FaGlobeAfrica className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[3.5rem]"/>
          </div>
          <div className="flex items-end border-b-[1px] border-[#D2D2D2] pb-[0.7rem] w-[20rem] justify-between">
            <h1 className="text-[1.2rem] font-[600]">Language</h1>
            <div className="flex items-center gap-[1rem]">
              <h1 className="text-[0.8rem]">English</h1>
              <button className="bg-white px-[0.4rem] py-[0.4rem] rounded-[5px]"><IoIosArrowForward/></button>
            </div>
          </div>
        </div>
        <div className="flex gap-[2rem]">
          <div className="w-[4.5rem] h-[4.5rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)] relative rounded-[10px]">
            <FaMoon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[3.5rem]"/>
          </div>
          <div className="flex items-end border-b-[1px] border-[#D2D2D2] pb-[0.7rem] w-[20rem] justify-between">
            <h1 className="text-[1.2rem] font-[600]">Dark Mode</h1>
            <div className="flex items-center gap-[1rem]">
              <h1 className="text-[0.8rem]">Off</h1>
              <button className="bg-white px-[0.4rem] py-[0.4rem] rounded-[5px]"><IoIosArrowForward/></button>
            </div>
          </div>
        </div>
        <div className="flex gap-[2rem]">
          <div className="w-[4.5rem] h-[4.5rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)] relative rounded-[10px]">
            <BsQuestionCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[3.5rem]"/>
          </div>
          <div className="flex items-end border-b-[1px] border-[#D2D2D2] pb-[0.7rem] w-[20rem] justify-between">
            <h1 className="text-[1.2rem] font-[600]">Help</h1>
            <div className="flex items-center gap-[1rem]">
              <button className="bg-white px-[0.4rem] py-[0.4rem] rounded-[5px]"><IoIosArrowForward/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
