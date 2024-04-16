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
  const currentMenuItem = navLinks.find((menuItem) => menuItem.path === location.pathname); 
  
  return (
    <div className="flex gap-[35rem] lg:gap-0 lg:justify-around items-center bg-white px-[1rem] lg:px-[2rem] sm:h-[3rem] mt-[5.5rem] sm:mt-[6.4rem]">
      <div className="flex flex-col h-20 font-[600] justify-center lg:ml-[-6rem] sm:ml-[-10rem]">
        <span className="sm:hidden">{currentMenuItem.name}</span>
        <p
          className="relative text-[#8C8C8C] font-normal text-[1rem] sm:text-[0.8rem] sm:ml-[1.5rem]"
        >
          Hi, welcome to {currentMenuItem.subName}
        </p>
      </div>
      <div className="flex justify-center gap-[1rem] sm:gap-[0.5rem] sm:ml-[-10rem] sm:hidden">
        <Link
          to="/products"
          className="flex items-center gap-[0.6rem] sm:gap-[0.5rem] rounded-lg p-2 bg-[#e3e5da] hover:bg-primaryOne hover:text-white transition duration-300 cursor-pointer"
        >
          <h1 className="sm:text-[0.5rem]">My Products</h1>
          <FaChevronDown className="text-[0.8rem]"/>
        </Link>
        <Link
          to="/performance"
          className="rounded-lg p-2 bg-[#e3e5da]  hover:bg-primaryOne hover:text-white transition duration-300 cursor-pointer"
        >
          <BarChart2/>
        </Link>
      </div>
    </div>
  );
}
