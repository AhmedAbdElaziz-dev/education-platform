/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { sidebarItems } from "./constants";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

function Sidebar({ isCollapse, setIsCollapse }) {
  const handleSidebarCollapse = () => {
    setIsCollapse((isCollapse) => !isCollapse);
  };
  return (
    <div className={`h-full bg-zinc-100 flex flex-col justify-between  fixed`}>
      <div
        className={`${
          isCollapse ? "block" : "hidden"
        } w-10 h-14 p-1 bg-zinc-200 flex items-center justify-center rounded-r-full absolute top-1 left-[-11px] hover:cursor-pointer 
       
          `}
        onClick={handleSidebarCollapse}
      >
        <ChevronRightIcon className="h-6 w-6" />
      </div>
      <div
        className={`${
          isCollapse ? "hidden" : "block"
        } h-full flex flex-col justify-between relative 
          
          `}
      >
        <ul>
          <li className=" mt-10 mb-16 w-14 m-auto ">
            <img src="./src/assets/logo.png" />
          </li>
          {sidebarItems.map((item, index) => (
            <Link to={item.to} key={index}>
              <div className="p-2 flex flex-col items-center">
                <item.icon className="h-6 w-6 max-md:w-4" />
                <li className=" max-md:text-sm">{item.label}</li>
              </div>
            </Link>
          ))}
        </ul>

        <div className="w-20 mt-5 p-2">
          <img src="./src/assets/profile.jpg" className="rounded-full" />
        </div>

        <div
          className="w-10 h-14 bg-white flex items-center justify-center rounded-full absolute left-14 bottom-40  hover:cursor-pointer "
          onClick={handleSidebarCollapse}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
