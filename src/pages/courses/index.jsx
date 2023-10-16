/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import CourseDetails from "../../components/CourseDetails";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import CourseList from "../../components/CourseList";
import { cources } from "./constants";
import useGetCourses from "../../hooks/useGetCourses";
import { Skeleton } from "../../components/Skeletons";
import { useState } from "react";

function Courses() {
  const [courseId, setCourseId] = useState();
  return (
    <div className="w-full h-full md:flex ">
      <div className="w-1/2 max-md:w-full flex flex-col pt-14 pl-5 pr-5 box-border">
        <header className="flex justify-between mb-10 ">
          <h1 className="text-3xl f">Discover</h1>
          <div className="flex items-center">
            <div className="border-x-black border-y-black border rounded-md p-1">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </div>
            <label className="ml-2">Find new</label>
          </div>
        </header>
        <div className="md:w-full overflow-auto mb-10">
          <CourseList
            cources={cources}
            setCourseId={setCourseId}
            courseId={courseId}
          />
        </div>
      </div>
      <div className=" h-full grow bg-zinc-100 pt-10">
        <CourseDetails id={courseId} />
      </div>
    </div>
  );
}
export default () => {
  const { cources, isError, isLoading } = useGetCourses();
  if (!cources || isLoading) {
    return <Skeleton />;
  }
  return <Courses />;
};
