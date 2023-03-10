import getLatestStories from "@/api/stories";
import { useQuery } from "react-query";

export const useNews = () => {
  const { data, isFetching, isLoading, refetch, isRefetching } = useQuery(
    "news",
    getLatestStories,
    {
      refetchInterval: 1000 * 60,
      refetchOnMount: false,
    }
  );

  return { data, isLoading, isFetching, refetch, isRefetching };
};
