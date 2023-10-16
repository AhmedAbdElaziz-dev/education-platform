import { useQuery } from "react-query";
import get from "lodash/get";
import courcesEndpoints from "../apis/courses";

const useGetPerformenceChart = () => {
  const { data, isError, isLoading } = useQuery(
    ["PerformenceChart"],
    courcesEndpoints.getPerformanceChart,
    {
      cacheTime: 2 * 60 * 1000,
      staleTime: 0,
    }
  );

  const performanceData = get(data, "data");
  return { performanceData, isError, isLoading };
};

export default useGetPerformenceChart;
