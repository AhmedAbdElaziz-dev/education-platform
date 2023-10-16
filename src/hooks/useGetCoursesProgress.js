import { useQuery } from "react-query";
import get from "lodash/get";
import courcesEndpoints from "../apis/courses";

const useGetCoursesProgress = () => {
  const { data, isError, isLoading } = useQuery(
    ["CoursesProgress"],
    courcesEndpoints.getCoursesProgress,
    {
      cacheTime: 2 * 60 * 1000,
      staleTime: 0,
    }
  );
  const courcessProgress = get(data, "data");
  return { courcessProgress, isError, isLoading };
};

export default useGetCoursesProgress;
