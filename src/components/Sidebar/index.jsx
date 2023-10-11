import { sidebarItems } from "./constants";

function Sidebar() {
  return (
    <>
      <div className="h-screen w-1/12 bg-slate-200 flex flex-col items-center">
        <img src="./src/assets/logo.png" className="w-14 mt-10 mb-10" />
        <ul>
          {sidebarItems.map((item, index) => (
            <div className="p-2 flex flex-col items-center" key={index}>
              <item.icon className="h-6 w-6" />
              <li>{item.label}</li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Sidebar;
