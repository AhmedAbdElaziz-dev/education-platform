/* eslint-disable react/prop-types */
import { ClockIcon, StarIcon, BookmarkIcon } from "@heroicons/react/20/solid";

function FeaturesCourse({
  auther = "Auther",
  title = "Power BI",
  duration = "1h 53m",
  rate = "3.5/5.0",
}) {
  return (
    <div className="w-72 bg-zinc-100 p-3 relative  rounded-xl">
      <div className="w-full h-24 mb-5 flex ">
        <img
          src="./src/assets/profile.jpg"
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="rounded-full bg-white p-1 absolute right-5 top-5">
          <BookmarkIcon className="h-4 w-4 " />
        </div>
      </div>

      <div className="w-44 flex items-center bg-white p-1 rounded-xl absolute top-20 left-6">
        <img
          src="./src/assets/profile.jpg"
          className="w-12 mr-3 rounded-full"
        />
        <label> {auther}</label>
      </div>
      <div className="mt-8">
        <h3 className="mb-2">{title}</h3>
        <div>
          <div className="flex items-center text-sm">
            <ClockIcon className="h-4 w-4 mr-1" />
            <label>{duration}</label>
          </div>
          <div className="flex items-center text-sm">
            <StarIcon className="h-4 w-4 mr-1" />
            <label> {rate}</label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeaturesCourse;
