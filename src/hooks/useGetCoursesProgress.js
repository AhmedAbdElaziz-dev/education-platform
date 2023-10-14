import { useQuery } from "react-query";
import get from "lodash/get";
import courcesEndpoints from "../api/courses";

const useGetCoursesProgress = () => {
  const { data, isError, isLoading } = useQuery(
    ["CoursesProgress"],
    courcesEndpoints.getCoursesProgress,
    {
      cacheTime: 2 * 60 * 1000,
      staleTime: 0,
    }
  );
  const courcessData = get(data, "data.data");
  return { courcessData, isError, isLoading };
};

export default useGetCoursesProgress;
