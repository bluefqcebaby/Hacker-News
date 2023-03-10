import { getSingleStory } from "@/api/stories";
import { useQuery } from "react-query";

//maybe we could get data from cache
export const useSingleNews = (newsId: number) => {
  const { data, isLoading, refetch, isRefetching } = useQuery(
    ["news", newsId],
    () => getSingleStory(newsId),
    {
      refetchInterval: 1000 * 60 * 5,
    }
  );

  return { data, isLoading, refetch, isRefetching };
};
