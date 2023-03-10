import api from "@/api";
import { format } from "date-fns";
import { ApiItem, Item } from "./types";

const getLatestStories = async () => {
  const resp = await api("newstories.json");
  const storiesIds = ((await resp.json()) as number[]).slice(0, 100);
  const stories = await Promise.all(storiesIds.map(getSingleStory));
  return stories;
};

export const getSingleStory = async (itemId: number) => {
  const resp = await api(`item/${itemId}.json`);
  const item = (await resp.json()) as ApiItem;
  const story: Item = {
    ...item,
    time: item.time * 1000,
    viewTime: format(new Date(item.time * 1000), "MMM dd,yyyy"),
  };
  return story;
};

export default getLatestStories;
