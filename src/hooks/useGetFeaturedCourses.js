import { useQuery } from "react-query";
import get from "lodash/get";
import courcesEndpoints from "../apis/courses";

const useGetFeaturedCourses = () => {
  const { data, isError, isLoading } = useQuery(
    ["FeaturedCourses"],
    courcesEndpoints.getFeaturedCourses,
    {
      cacheTime: 2 * 60 * 1000,
      staleTime: 0,
    }
  );
  const courcessData = get(data, "data.data");
  return { courcessData, isError, isLoading };
};

export default useGetFeaturedCourses;
