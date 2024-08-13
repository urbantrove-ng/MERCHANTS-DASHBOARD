import { Outlet } from "react-router-dom";
import bg from "../assets/UT-removebg-preview 1.png";
function Auth() {
  return (
    <div className=" lg:flex block lg:w-[100vw]">
      <div className=" lg:w-[50vw] w-full">
        <Outlet />
      </div>
      <div className=" lg:w-[50vw] lg:block hidden">
        <nav className=" flex justify-center items-center h-[48px]">
          <ul className=" flex items-center gap-4">
            <li>Help</li>
            <li>Contact Us</li>
            <li>English</li>
            <li>Help</li>
            <li>Signup</li>
          </ul>
        </nav>
        <div className=" flex justify-center items-center">
          <img src={bg} className=" lg:w-[500px] object-cover lg:h-[500px]" />
        </div>
      </div>
    </div>
  );
}

export default Auth;
