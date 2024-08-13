import { BarChart2, ChevronDown, Share2 } from "lucide-react";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../../components/NavLink";

export default function DashboardTopBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const location = useLocation();
  const currentMenuItem = navLinks.find(
    (menuItem) => menuItem.path === location.pathname
  );

  return (
    <div className="lg:flex   lg:justify-between items-center bg-white lg:px-[2rem] lg:h-[80px]">
      <div className="flex flex-col  font-[600] ">
        <div className="flex justify-center items-center">
          <p className="relative text-[#8C8C8C] font-normal lg:text-[1rem] text-sm sm:font-[500] lg:w-full w-[300px] h-[30px] flex justify-center items-center ">
            Hi, welcome to {currentMenuItem.subName}
          </p>
        </div>
      </div>
      <div className="lg:flex justify-center gap-[1rem] sm:gap-[0.5rem] sm:ml-[-10rem] hidden ">
        <Link
          to="/products"
          className="flex items-center gap-[0.6rem] sm:gap-[0.5rem] lg:w-[129px] rounded-lg p-2 bg-[#e3e5da] hover:bg-primaryOne hover:text-white transition duration-300 cursor-pointer"
        >
          <h1 className="lg:text-[14px]">My Products</h1>
          <FaChevronDown className="text-[0.8rem]" />
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
