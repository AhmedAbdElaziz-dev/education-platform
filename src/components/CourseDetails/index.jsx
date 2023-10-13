import { ClockIcon, StarIcon } from "@heroicons/react/20/solid";

function CourseDetails() {
  return (
    <div className="flex flex-col justify-between bg-zinc-100 p-10">
      <div className="h-1/2 mb-5 ">
        <img
          src="./src/assets/profile.jpg"
          className="w-full h-full rounded-lg "
        />
      </div>
      <div>
        <h1 className="text-xl mb-5 font-medium">Recomended Courses</h1>
        <div className="flex items-center text-sm">
          <ClockIcon className="h-4 w-4 mr-1" />
          <label> 45m</label>
        </div>
        <div className="flex items-center text-sm">
          <StarIcon className="h-4 w-4 mr-1" />
          <label> 3.5/5.0</label>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-xl mb-2 font-medium">Course Discription</h1>
        <p className="text-sm">
          This online course was created for you if you are interestd in
          mastering digital markting and learning how to promote your business{" "}
        </p>
      </div>
      <div className="flex justify-around mt-5">
        <button className="w-1/3 border p-2 rounded-md bg-white border-black">
          Review course
        </button>
        <button className="w-1/3 border p-2 rounded-md text-white bg-red-700 ">
          Continue learning
        </button>
      </div>
    </div>
  );
}
export default CourseDetails;
