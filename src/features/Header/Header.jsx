import { navLinks } from "../../components/NavLink";
import { useLocation } from "react-router-dom";
import DashboardTopBar from "../Dash/components/DashboardTopBar";

export default function Header() {
  const location = useLocation();
  const currentMenuItem = navLinks.find(
    (menuItem) => menuItem.path === location.pathname
  );

  return (
    <nav className=" flex flex-col lg:h-[158px]  w-full bg-[#FBF7F4]">
      <div className=" flex justify-between px-4 lg:h-[90px] h-[90px] lg:items-center items-baseline  border-b-4 w-full">
        <h2 className=" lg:hidden block font-bold">{currentMenuItem.name}</h2>
        <input
          className=" lg:w-[607px] w-[300px] lg:h-[48px] top-[2.6rem] lg:top-0 lg:right-0  h-[30px] bg-[#647C0C1A] rounded-[8px] pl-4 lg:relative absolute"
          placeholder="Search here"
        />
        <div className=" flex justify-center items-baseline lg:items-center gap-2">
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
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>

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
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
      </div>
      <DashboardTopBar />
    </nav>
  );
}
