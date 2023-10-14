import CourseList from "../../components/CourseList";
import FeaturesCourse from "../../components/FeaturedCourse";
import { LineChart } from "../../components/LineChart";
import { cources, featuredCourses } from "./constants";

function Home() {
  return (
    <div className="w-full">
      <div className="w-full flex p-10">
        <div className=" w-1/2">
          <h1 className="text-3xl font-medium mb-5">Performance</h1>
          <LineChart />
        </div>
        <div className=" w-1/2 ">
          <h1 className="text-3xl font-medium mb-5">MyProgress</h1>
          <div className="h-96 overflow-x-auto">
            <CourseList cources={cources} />
          </div>
        </div>
      </div>
      <div className="w-3/4 m-auto mt-10 ">
        <h1 className="text-3xl font-medium mb-5 ">Featured Courses</h1>
        <div className="flex overflow-x-auto">
          {featuredCourses.map((featuredCours, index) => (
            <div className=" mr-6" key={index}>
              <FeaturesCourse />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
