import Welcome from "../features/Dash/components/Welcome";
import {
  FaPenSquare,
  FaEnvelope,
  FaWallet,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { SiSailsdotjs } from "react-icons/si";
import { AiFillMessage } from "react-icons/ai";
import { RiBarChartBoxFill } from "react-icons/ri";
import { IoSettingsSharp, IoDiamondOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import DisplaySideBar from "../features/RightSideBar/DisplaySideBar";

const data = [
  { name: "Products", icon: <FaPenSquare />, path: "/products" },
  { name: "Service", icon: <SiSailsdotjs />, path: "/services" },
  { name: "Feedback", icon: <AiFillMessage />, path: "/feedback" },
  { name: "Performance", icon: <RiBarChartBoxFill />, path: "/performance" },
  { name: "Notifications", icon: <FaEnvelope />, path: "/notifications" },
  { name: "Settings", icon: <IoSettingsSharp />, path: "/settings" },
  { name: "Wallet", icon: <FaWallet />, path: "/wallet" },
  // { name: "Bid", icon: <FaHandshakeAngle />, path: "/bid" },
  { name: "FAQ", icon: <FaRegQuestionCircle />, path: "/faq" },
  { name: "Premium", icon: <IoDiamondOutline />, path: "/premium" },
];
export default function DashBoard() {
  const navigate = useNavigate();
  return (
    <div className="relative grid gap-[2rem] lg:w-[812px] w-[330px]  scrollbar-thumb-rounded-full scrollbar-track-rounded-full lg:scrollbar scrollbar-thumb-primaryOne scrollbar-track-primaryTwo  overflow-y-scroll max-h-[75vh] lg:h-[90vh] justify-center py-[3rem] lg:px-[3rem] px-[1rem]  font-inter">
      <div className="fixed top-[10.6rem] sm:top-[9.3rem] right-0 z-10">
        <DisplaySideBar />
      </div>
      <Welcome />
      <div className=" flex justify-center items-center">
        <div className=" flex flex-col items-center ">
          <div className="grid lg:grid-cols-4 grid-cols-3 lg:gap-8 gap-2 lg:w-[700px]   ">
            {data.map((data, index) => {
              const { name, icon, path } = data;

              return (
                <div
                  key={index}
                  onClick={() => navigate(path)}
                  className="flex justify-center items-center text-center w-[90px] h-[90px] lg:w-[136px] lg:h-[128px] rounded-[10px]  bg-primaryTwo cursor-pointer hover:translate-y-[-0.5rem] transition-all duration-300"
                >
                  <div className=" flex flex-col items-center gap-[4px]">
                    <span className="text-primaryOne lg:text-[4rem] text-[3rem]">
                      {icon}
                    </span>
                    <h1 className="lg:text-[0.8rem] text-[0.7rem]">{name}</h1>
                  </div>
                </div>
              );
            })}
            <div className="flex  items-center justify-center lg:w-[18rem] w-[18rem] h-[140px] lg:h-[128px] rounded-[10px] bg-white ">
              <div className=" flex flex-col items-center gap-2">
                <div className="flex gap-[3rem] text-[0.9rem] ">
                  <h1>Events</h1>
                  <h1 className="text-primaryOne">View All</h1>
                </div>
                <div className="flex gap-[1rem]">
                  <div className="grid justify-center w-[10rem] h-[5rem] bg-primaryTwo rounded-[10px]">
                    <IoPersonSharp className="text-[2rem] text-[#A7A7A7] m-auto pt-[0.3rem]" />
                    <h1>Manager&apos;s Call</h1>
                    <span className="flex items-center gap-[0.5rem] text-[0.8rem] text-[#a7a7a7]">
                      <FaClock />
                      <h1>2:30 PM, Today</h1>
                    </span>
                  </div>
                  <div className="w-[3rem] h-[5rem] bg-primaryTwo rounded-[10px] relative">
                    <FaPlus className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[1.5rem] text-[#a7a7a7]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
