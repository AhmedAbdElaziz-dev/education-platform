/* eslint-disable react/prop-types */
import CourseCard from "../CourseCard";

function CourseList({ cources, setCourseId, courseId }) {
  return (
    <>
      {cources.map((course, index) => (
        <CourseCard
          key={index}
          imgSrc={course.imgSrc}
          title={course.title}
          discription={course.discription}
          progress={course.progress}
          setCourseId={setCourseId}
          selectedCourseId={courseId}
          id={index}
        />
      ))}
    </>
  );
}
export default CourseList;
