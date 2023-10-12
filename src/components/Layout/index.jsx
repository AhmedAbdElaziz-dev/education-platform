import CourseCard from "../CourseCard";
import CourseDetails from "../CourseDetails";
import Sidebar from "../Sidebar";

function Layout() {
  return (
    <>
      <div className="w-screen h-screen p-0 m-0 flex">
        <Sidebar />
        {/* <CourseCard /> */}
        <CourseDetails />
      </div>
    </>
  );
}

export default Layout;
