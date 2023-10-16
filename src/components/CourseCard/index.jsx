/* eslint-disable react/prop-types */
import { BookmarkIcon } from "@heroicons/react/20/solid";

function CourseCard({
  imgSrc = "./src/assets/profile.jpg",
  title = "Recommended Courses",
  discription = "Digital Markting 101",
  progress = 36,
  setCourseId,
  selectedCourseId = 1,
  id,
}) {
  const isSelected = selectedCourseId === id;
  return (
    <div
      className={` flex ${
        isSelected ? "bg-white" : "bg-gray-100"
      } hover:cursor-pointer h-fit rounded p-1 mb-5 max-[450px]:flex-col`}
      onClick={() => {
        setCourseId(id);
      }}
    >
      <div className="w-56 max-[450px]:w-full">
        <img src={imgSrc} className="rounded-lg" />
      </div>
      <div className="w-full p-3">
        <div className=" flex justify-between mb-1">
          <h1 className="font-semibold">{title}</h1>
          <div className="h-fit border-solid border-x-black border-y-black border rounded-md p-1 ">
            <BookmarkIcon className="h-4 w-4" />
          </div>
        </div>

        <p className="text-sm mb-2">{discription}</p>
        <div className="flex rounded-full h-2 bg-gray-200 mb-3">
          <div
            style={{ width: `${progress}%` }}
            className="flex transition-transform transform translate-x-0 bg-gray-500 rounded-full"
          ></div>
        </div>
        <label className="text-xs">69% complete</label>
      </div>
    </div>
  );
}

export default CourseCard;
