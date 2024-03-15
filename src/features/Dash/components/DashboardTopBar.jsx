import { BarChart2, ChevronDown, Share2 } from "lucide-react";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DashboardTopBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="flex gap-[35rem] items-center bg-white px-[2rem] mt-[5.5rem]">
      <div className="flex flex-col h-20 font-[600] justify-center ">
        Dashboard
        <p
          className="relative text-[#8C8C8C] font-normal text-[1rem]"
        >
          Hi, welcome to task management dashboard
        </p>
      </div>
      <div className="flex justify-center gap-[1rem]">
        <Link
          to="/myproducts"
          className="flex items-center gap-[0.6rem] rounded-lg p-2 bg-[#e3e5da] hover:bg-primaryOne hover:text-white transition duration-300 cursor-pointer"
        >
          My Products
          <FaChevronDown className="text-[0.8rem]"/>
        </Link>
        <Link
          to="/performance"
          className="rounded-lg p-2 bg-[#e3e5da]  hover:bg-primaryOne hover:text-white transition duration-300 cursor-pointer"
        >
          <BarChart2 />
        </Link>
      </div>
    </div>
  );
}
