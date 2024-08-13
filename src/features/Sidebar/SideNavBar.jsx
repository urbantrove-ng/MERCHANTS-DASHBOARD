import logo from "../../assets/logos.svg";
import {  NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../../components/NavLink";
import { IoLogOutOutline } from "react-icons/io5";
import useLogOut from "../../Auth/useLogOut";

export default function SideNavBar() {
  const location = useLocation();
  const Logout = useLogOut();
  const logOutHandler = async () => {
    window.alert("Are you sure you want to logout?");

    if (window.confirm) Logout();
  };

  return (
    <nav className="flex justify-center items-center">
      <div className="lg:border-r-[#DFDBD8] lg:border-[1px] relative bg-[#FBF7F4] lg:w-[300px] lg:shadow-lg shadow-lg flex flex-col items-center w-[60px] h-[100vh] overflow-y-scroll lg:scrollbar scrollbar-thumb-primaryOne scrollbar-track-primaryTwo">
        <header className="flex justify-center items-center mt-4">
          <div className="w-[5rem] h-[5rem]">
            <img src={logo} alt="Urban Trove logo" className="w-full h-full" />
          </div>
          <span className="text-[1.4rem] font-[600] hidden lg:block">
            Urban Trove
          </span>
        </header>

        <ul className="flex flex-col gap-2 m-auto item-center w-[17vw] mt-4">
          {navLinks.map((menuItem, index) => {
            const { icon, path, name } = menuItem;

            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#e3e5da] text-black flex items-center justify-between m-auto gap-[0.5rem] py-[0.8rem] px-[1.3rem] text-[1.5rem] lg:rounded-r-[50px] sm:rounded-r-[10px] font-[600]"
                      : "bg-[#FBF7F4] text-primaryOne flex items-center m-auto gap-[0.5rem] py-[0.8rem] lg:px-[1.2rem] sm:px-[0.4rem] px-[1.8rem] sm:ml-[-0.3rem] text-[1.5rem] rounded-r-[50px] hover:bg-[#f0f0ec] transition duration-300"
                  }
                  end
                >
                  <div className="flex items-center gap-2">
                    <span>{icon}</span>
                    <span className="lg:block hidden">{name}</span>
                  </div>
                  {path === location.pathname && (
                    <span className="lg:block hidden">
                      <p className="w-[40px] h-[38px] bg-white rounded-[50%] flex justify-center items-center">
                        &rarr;
                      </p>
                    </span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <hr className="w-full mt-4" />

        <div className="flex m-6 items-center gap-[1rem] hover:bg-[#9ca3af] lg:hover:bg-transparent transition duration-300 p-[1rem] lg:p-0 rounded-[10px] cursor-pointer">
          <button
            className="w-full flex items-center"
            onClick={() => logOutHandler()}
          >
            <span className="w-[2.5rem] h-[2.5rem] lg:ml-[-0.5rem] sm:ml-[-1.3rem] bg-[#111111] rounded-[50px] relative text-white">
              <IoLogOutOutline className="h-[1.7rem] w-[1.7rem] top-1/2 left-1/2 mt-[17%] ml-[0.5rem]" />
            </span>
            <h1 className="font-[600] lg:block hidden">Log Out</h1>
          </button>
        </div>
      </div>
    </nav>
  );
}
