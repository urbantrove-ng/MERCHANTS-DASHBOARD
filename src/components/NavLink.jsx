import { BsGridFill } from "react-icons/bs";
import { FaPenSquare, FaEnvelope, FaWallet, FaRegQuestionCircle } from "react-icons/fa";
import { SiSailsdotjs } from "react-icons/si";
import { AiFillMessage } from "react-icons/ai";
import { RiBarChartBoxFill } from "react-icons/ri";
import { IoSettingsSharp, IoDiamondOutline, IoLogOutOutline } from "react-icons/io5";
import { FaHandshakeAngle } from "react-icons/fa6"; 


export const navLinks = [
  { name: "Dashboard", icon: <BsGridFill />, path: "/", subName:"Task Management Dashboard"}, 
  { name: "Products", icon: <FaPenSquare />, path: "/products", subName:"Products Management"},
  { name: "Service", icon: <SiSailsdotjs />, path: "/services", subName:"Service Management"},
  { name: "Feedback", icon: <AiFillMessage />, path: "/feedback", subName:"Feedback Dashboard"},
  { name: "Performance", icon: <RiBarChartBoxFill />, path: "/performance", subName:"Performance Statistics"},
  { name: "Notifications", icon: <FaEnvelope />, path: "/notifications", subName:"Notification Dashboard"},
  { name: "Settings", icon: <IoSettingsSharp />, path: "/settings", subName:"Settings Dashboard"},
  { name: "Wallet", icon: <FaWallet />, path: "/wallet", subName:"Wallet Dashboard"},
  // { name: "Bid", icon: <FaHandshakeAngle />, path: "/bid", subName:"task Management Dashboard"},
  { name: "FAQ", icon: <FaRegQuestionCircle />, path: "/faq", subName:"FAQ Dashboard"},
  { name: "Premium", icon: <IoDiamondOutline />, path: "/premium", subName:"Premium Service"},
];