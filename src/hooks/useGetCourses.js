import { useQuery } from "react-query";
import get from "lodash/get";
import courcesEndpoints from "../apis/courses";

const useGetCourses = () => {
  const { data, isError, isLoading } = useQuery(
    ["AllCourses"],
    courcesEndpoints.getCourses,
    {
      cacheTime: 2 * 60 * 1000,
      staleTime: 0,
    }
  );
  const cources = get(data, "data");
  return { cources, isError, isLoading };
};

export default useGetCourses;
