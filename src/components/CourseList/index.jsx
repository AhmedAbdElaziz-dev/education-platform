/* eslint-disable react/prop-types */
import CourseCard from "../CourseCard";

function CourseList({ cources }) {
  return (
    <>
      {cources.map((course, index) => (
        <CourseCard
          key={index}
          imgSrc={course.imgSrc}
          title={course.title}
          discription={course.discription}
          progress={course.progress}
        />
      ))}
    </>
  );
}
export default CourseList;
