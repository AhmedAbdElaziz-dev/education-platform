import { Link } from "react-router-dom";
import { sidebarItems } from "./constants";

function Sidebar() {
  return (
    <>
      <div className="w[80px] h-screen bg-zinc-100 flex flex-col justify-between ">
        <ul>
          <li className=" mt-10 mb-16 w-14 m-auto ">
            <img src="./src/assets/logo.png" />
          </li>
          {sidebarItems.map((item, index) => (
            <Link to={item.to} key={index}>
              <div className="p-2 flex flex-col items-center">
                <item.icon className="h-6 w-6" />
                <li>{item.label}</li>
              </div>
            </Link>
          ))}
        </ul>

        <div className="w-20 mt-5 p-2">
          <img src="./src/assets/profile.jpg" className="rounded-full" />
        </div>
      </div>
    </>
  );
}
export default Sidebar;
