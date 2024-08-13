import { useEffect, useState } from "react";
import { IoSettingsSharp, IoPersonSharp } from "react-icons/io5";
import { FaGlobeAfrica, FaMoon } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BsQuestionCircle } from "react-icons/bs";
import DisplaySideBar from "../features/RightSideBar/DisplaySideBar";
import { useAuth } from "../context/AuthContext";

export default function Settings() {
  const [inputValue, setInputValue] = useState("Fatima Yusuf");
  const [genderValue, setGenderValue] = useState("Female");
  const { auth } = useAuth();
  const [emailValue, setEmailValue] = useState(auth?.email || "");

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
    <div className="relative grid gap-[2rem] lg:w-[812px] w-full  scrollbar-thumb-rounded-full scrollbar-track-rounded-full lg:scrollbar scrollbar-thumb-primaryOne scrollbar-track-primaryTwo  overflow-y-scroll max-h-[75vh] lg:h-[90vh] justify-center lg:py-6 py-6  font-inter">
      <div className="fixed top-[10.6rem] sm:top-[9.3rem] right-0 z-10">
        <DisplaySideBar />
      </div>
      <div className="lg:w-[761px] lg:h-[139px] h-[100px] w-[300px]  relative rounded-[10px] flex justify-center items-center sm:px-[0.5rem] bg-gradient-to-r from-[rgba(233,230,206,1)] to-[rgba(151,173,177,1)]">
        <div className=" text-primaryOne">
          <IoSettingsSharp className=" lg:w-[118px] lg:h-[124px] w-[130px] h-[80px] top-0 -left-6  absolute lg:-top-8 lg:left-2" />
          <IoSettingsSharp className=" lg:w-[64px] lg:h-[63px] h-[40px] w-[40px] top-0 left-20 absolute lg:-top-0 lg:left-28" />
          <IoSettingsSharp className="lg:w-[90px] lg:h-[94px] w-[60px] h-[60px] absolute lg:left-24 left-14" />
        </div>
        <div className="">
          <h1 className="font-[600] lg:text-[40px] text-[24px] pl-8 lg:pl-0 text-center">
            My Settings
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[300px]  flex flex-col items-center">
          <div className="flex items-center gap-[0.5rem] lg:gap-[1rem]">
            <div className=" flex flex-col items-center">
              <h1 className="text-[12px] lg:text-[1rem] font-[600] ">
                Account
              </h1>
              <div className=" flex flex-col items-center">
                <div className="bg-primaryTwo lg:w-[140px] lg:h-[140px] flex justify-center items-center rounded-[10px] ">
                  <IoPersonSharp className=" w-[50px] h-[60px]  text-[#474747]" />
                </div>
                <h1 className="cursor-pointer text-[#48D3FF] text-[0.5rem] lg:text-[1rem] ">
                  Upload Image
                </h1>
              </div>
            </div>

            <div>
              <form
                action=""
                className="grid gap-[1.1rem] lg:w-[414px] w-[200px]"
              >
                <div className="flex items-center gap-2 border-b-[1px] lg:w-[414px] w-[70%]">
                  <label
                    htmlFor=""
                    className="  text-[#8C8C8C] text-[12px] lg:text-[1rem]  "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="focus:outline-none lg:w-[414px] bg-[#fbf7f4]  text-[0.8rem] lg:text-[1rem]"
                  />
                </div>
                <div className="flex items-center gap-2 border-b-[1px] w-[70%] lg:w-[414px]">
                  <label
                    htmlFor=""
                    className=" text-[#8C8C8C] text-[12px] lg:text-[1rem] "
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    value={emailValue}
                    onChange={handleEmailChange}
                    className="focus:outline-none lg:w-[414px] bg-[#fbf7f4]  text-[12px] lg:text-[1rem]"
                  />
                </div>
                <div className="flex items-center gap-2 border-b-[1px] lg:w-[414px] w-[70%]">
                  <label
                    htmlFor=""
                    className=" text-[#8C8C8C] text-[0.8rem] lg:text-[1rem] "
                  >
                    Gender
                  </label>
                  <input
                    type="text"
                    value={genderValue}
                    onChange={handleGenderChange}
                    className="focus:outline-none lg:w-[414px] bg-[#fbf7f4]  text-[0.8rem] lg:text-[1rem]"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center">
        <div className=" flex flex-col items-center gap-8 lg:w-[44.5vw] w-[240px] lg:gap-8">
          <div className="flex justify-between w-[240px]  border-b-[1px] border-[#D2D2D2] items-center lg:gap-[0.3rem]  lg:w-[30rem]">
            <div className=" flex items-center gap-2">
              <FaGlobeAfrica className=" text-[1.5rem] lg:text-[3rem]" />
              <h1 className="text-[0.8rem] lg:text-[1rem] font-[600]">
                Language
              </h1>
            </div>
            <div className="flex items-center gap-[1rem]">
              <h1 className="text-[0.8rem]">English</h1>
              <button className="bg-white px-[0.4rem] py-[0.4rem] rounded-[5px]">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div className="flex justify-between  border-b-[1px] border-[#D2D2D2]  w-[240px] items-center lg:gap-[0.3rem]  lg:w-[30rem]">
            <div className=" flex items-center gap-2">
              <FaMoon className=" text-[1.5rem] lg:text-[3rem]" />
              <h1 className="text-[1.2rem] sm:text-[1rem] font-[600]">
                Dark Mode
              </h1>
            </div>

            <div className="flex items-center gap-[1rem]">
              <h1 className="text-[0.8rem]">Off</h1>
              <button className="bg-white px-[0.4rem] py-[0.4rem] rounded-[5px]">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div className="flex justify-between  border-b-[1px] border-[#D2D2D2]  w-[240px] items-center lg:gap-[0.3rem]  lg:w-[30rem]">
            <div className=" flex items-center gap-2">
              <BsQuestionCircle className=" text-[1.5rem] lg:text-[3rem]" />
              <h1 className="text-[1.2rem] sm:text-[1rem] font-[600]">Help</h1>
            </div>

            <div className="flex items-center gap-[1rem]">
              <button className="bg-white px-[0.4rem] py-[0.4rem] rounded-[5px]">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
