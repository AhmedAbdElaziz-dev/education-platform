import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

function Layout() {
  return (
    <>
      <div className="p-0 m-0 flex">
        <Sidebar />
        <div className="w-[calc(100%-80px)]">
          <Outlet />
        </div>
        {/* <Sidebar />
        <Outlet /> */}
      </div>
    </>
  );
}

export default Layout;
