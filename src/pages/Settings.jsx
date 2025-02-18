import { useEffect, useState } from "react";
import { IoSettingsSharp, IoPersonSharp } from "react-icons/io5";
import { FaGlobeAfrica, FaMoon } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BsQuestionCircle } from "react-icons/bs";
import DisplaySideBar from "../features/RightSideBar/DisplaySideBar";
import axios, { axiosPrivate } from "../Api/axios";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function Settings() {
  const [genderValue, setGenderValue] = useState("Female");
  const [user, setUser] = useState({});
  const [inputValue, setInputValue] = useState(
    user?.fullname || "Enter Full Name"
  );

  const [emailValue, setEmailValue] = useState(user?.email || "");
  const [banks, setBanks] = useState([]);
  const [bankname, setBankName] = useState(user?.bankDetails?.bankName || "");
  const [accountNo, setAccountNo] = useState(
    user?.bankDetails?.accountNo || ""
  );
  const [accountName, setAccountName] = useState(
    user?.bankDetails?.accountName || ""
  );

  const getUser = async () => {
    const response = await axiosPrivate.get("/user/details", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    const fetchedUser = response.data.data.user;
    setUser(fetchedUser);
    setInputValue(fetchedUser?.fullname || "Enter Full Name");
    setEmailValue(fetchedUser?.email || "");
    setBankName(fetchedUser?.bankDetails?.bankName || "");
    setAccountNo(fetchedUser?.bankDetails?.accountNo || "");
    setAccountName(fetchedUser?.bankDetails?.accountName || "");
  };
  console.log(user?.bankDetails?.bankName);
  useEffect(() => {
    getUser();
  }, []);
  const otherbanks = [
    {
      name: "Opay",
    },
    {
      name: "Moniepoint",
    },
    {
      name: "kuda MFB",
    },
  ];

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

  const fetchNigerianBanks = async () => {
    const response = await axios.get(`https://nigerianbanks.xyz`);
    setBanks([...response.data, ...otherbanks]);
    getUser();
  };
  useEffect(() => {
    fetchNigerianBanks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosPrivate.patch(
      "/user/bankdetails",
      JSON.stringify({
        accountNo,
        accountName,
        bankName: bankname,
        fullname: inputValue,
      }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
  };
  return (
    <div className="relative grid gap-[2rem] lg:w-[812px] w-full h-[100vh]  scrollbar-thumb-rounded-full scrollbar-track-rounded-full lg:scrollbar scrollbar-thumb-primaryOne scrollbar-track-primaryTwo  overflow-y-scroll max-h-[75vh] lg:h-[90vh] justify-center lg:py-6 py-6  font-inter">
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
      <div className="w-full flex justify-center items-center">
        <form
          className=" flex flex-col items-center gap-6 py-10 w-[600px] h-[400px] bg-white"
          onSubmit={handleSubmit}
        >
          <p className=" font-bold text-[22px]">Bank Account Details</p>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-[295px] bg-white border-2 border-black  items-center justify-around gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold  shadow-sm   ">
                {bankname !== "" ? bankname : "Bank Name"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-[295px] h-[200px] overflow-y-scroll border-2 border-black origin-top-right rounded-md bg-white  shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              {banks.map((bank) => {
                return (
                  <div
                    className="py-1"
                    key={bank.name}
                    onClick={() => setBankName(bank.name)}
                  >
                    <MenuItem>
                      <p className="block px-4 py-2 text-sm text-gray-700 cursor-pointer data-[focus]:bg-gray-100 data-[focus]:text-gray-900 border-none">
                        {bank.name}
                      </p>
                    </MenuItem>
                  </div>
                );
              })}
            </MenuItems>
          </Menu>
          <input
            type="number"
            placeholder=" Enter Account Number"
            value={accountNo}
            onChange={(e) => setAccountNo(e.target.value)}
            className=" w-[400px] h-[38px] border-primaryOne rounded-md pl-4 border-2"
          />
          <input
            type="text"
            value={accountName}
            placeholder=" Enter Account Name"
            onChange={(e) => setAccountName(e.target.value)}
            className=" w-[400px] h-[38px] border-primaryOne rounded-md pl-4 border-2"
          />
          <button className=" bg-primaryOne p-2 text-white" type="submit">
            Save Details
          </button>
        </form>
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
