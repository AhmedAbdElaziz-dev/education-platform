import { BookmarkIcon } from "@heroicons/react/20/solid";

function CourseCard() {
  const progress = "36";
  return (
    <div className=" flex bg-gray-100 h-fit rounded p-1">
      <div className="w-56">
        <img src="./src/assets/profile.jpg" className="rounded-lg" />
      </div>
      <div className="w-full p-3">
        <div className=" flex justify-between mb-1">
          <h1 className="font-semibold">Recommended Courses</h1>
          <div className="border-solid border-x-black border-y-black border rounded-md p-1 ">
            <BookmarkIcon className="h-4 w-4" />
          </div>
        </div>

        <p className="text-sm mb-2">Digital Markting 101</p>
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
