import { getSingleStory } from "@/api/stories";
import { useQuery } from "react-query";

export const useComment = (id: number) => {
  const { data, isLoading } = useQuery(["comment", id], () =>
    getSingleStory(id)
  );

  return { data, isLoading };
};
