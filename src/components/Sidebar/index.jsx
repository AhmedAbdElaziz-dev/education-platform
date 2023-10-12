import { sidebarItems } from "./constants";

function Sidebar() {
  return (
    <>
      <div className="h-screen w-1/12 bg-slate-200 flex flex-col items-center space-y-80 ">
        <ul>
          <li className="mt-10 mb-16 w-3/4 m-auto ">
            <img src="./src/assets/logo.png" />
          </li>
          {sidebarItems.map((item, index) => (
            <div className="p-2 flex flex-col items-center" key={index}>
              <item.icon className="h-6 w-6" />
              <li>{item.label}</li>
            </div>
          ))}
        </ul>

        <div className="w-20">
          <img src="./src/assets/profile.jpg" className="rounded-full" />
        </div>
      </div>
    </>
  );
}
export default Sidebar;
