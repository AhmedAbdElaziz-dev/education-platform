/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import CourseList from "../../components/CourseList";
import FeaturesCourse from "../../components/FeaturedCourse";
import { LineChart } from "../../components/LineChart";
import { Skeleton } from "../../components/Skeletons";
import useGetCoursesProgress from "../../hooks/useGetCoursesProgress";
import useGetFeaturedCourses from "../../hooks/useGetFeaturedCourses";
import useGetPerformenceChart from "../../hooks/useGetPerformenceChart";
import { cources, featuredCourses } from "./constants";
import { UserGroupIcon } from "@heroicons/react/20/solid";

function Home() {
  return (
    <div className="w-full">
      <div className="flex items-center pt-10 pl-10 border-box">
        <div className="w-24 mr-5">
          <img src="./src/assets/profile.jpg" className="rounded-full" />
        </div>
        <div>
          <h1 className="text-xl font-medium">John Doe</h1>
          <div className="flex">
            <UserGroupIcon className="h-6 w-6 mr-2" />
            <p>Advitalize LLC</p>
          </div>
        </div>
      </div>
      <div className="w-full flex p-10 max-md:flex-col border-box">
        <div className=" w-1/2 max-md:w-full">
          <h1 className="text-3xl font-medium mb-5">Performance</h1>
          <LineChart />
        </div>
        <div className=" w-1/2 max-md:w-full ">
          <h1 className="text-3xl font-medium mb-5">MyProgress</h1>
          <div className="h-80 overflow-x-auto">
            <CourseList cources={cources} />
          </div>
        </div>
      </div>
      <div className="w-3/4 m-auto border-box">
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

export default () => {
  const {
    featuredCourses,
    isError: isFeaturedCoursesError,
    isLoading: isFeaturedCoursesLoading,
  } = useGetFeaturedCourses();
  const {
    courcessProgress,
    isError: isCoursesProgressError,
    isLoading: isCoursesProgressLoading,
  } = useGetCoursesProgress();
  const {
    performanceData,
    isError: isPerformenceChartError,
    isLoading: isPerformenceChartLoading,
  } = useGetPerformenceChart();
  if (
    !courcessProgress ||
    !performanceData ||
    !featuredCourses ||
    isFeaturedCoursesLoading ||
    isCoursesProgressLoading ||
    isPerformenceChartLoading
  ) {
    return <Skeleton />;
  }
  const homeData = { courcessProgress, performanceData, featuredCourses };
  return <Home homeData={homeData} />;
};
