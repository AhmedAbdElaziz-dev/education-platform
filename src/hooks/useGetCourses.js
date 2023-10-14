import { useQuery } from "react-query";
import get from "lodash/get";
import courcesEndpoints from "../api/courses";

const useGetCourses = () => {
  const { data, isError, isLoading } = useQuery(
    ["AllCourses"],
    courcesEndpoints.getCourses,
    {
      cacheTime: 2 * 60 * 1000,
      staleTime: 0,
    }
  );
  const courcessData = get(data, "data.data");
  return { courcessData, isError, isLoading };
};

export default useGetCourses;
