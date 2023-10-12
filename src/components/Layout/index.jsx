import CourseCard from "../CourseCard";
import Sidebar from "../Sidebar";

function Layout() {
  return (
    <>
      <div className="w-screen h-screen p-0 m-0 flex">
        <Sidebar />
        <CourseCard />
      </div>
    </>
  );
}

export default Layout;
