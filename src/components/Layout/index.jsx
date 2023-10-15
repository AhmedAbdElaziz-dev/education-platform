import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { useState } from "react";

function Layout() {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <div className="p-0 m-0 flex flex-col relative">
      <Header />
      <div className="p-0 m-0 flex">
        <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
        <div className={isCollapse ? "w-full" : "w-[calc(100%-80px)]"}>
          <Outlet />
        </div>
        {/* <Sidebar />
        <Outlet /> */}
      </div>
    </div>
  );
}

export default Layout;
