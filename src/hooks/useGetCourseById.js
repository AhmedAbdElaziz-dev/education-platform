import { useQuery } from "react-query";
import get from "lodash/get";
import courcesEndpoints from "../apis/courses";

const useGetCourseById = (id) => {
  const { data, isError, isLoading } = useQuery(
    ["CourseById", id],
    courcesEndpoints.getCourses,
    {
      cacheTime: 2 * 60 * 1000,
      staleTime: 0,
    }
  );
  const course = get(data, "data");
  return { course, isError, isLoading };
};

export default useGetCourseById;
