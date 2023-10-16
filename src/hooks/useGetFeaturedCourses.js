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

  const featuredCourses = get(data, "data");
  return { featuredCourses, isError, isLoading };
};

export default useGetFeaturedCourses;
