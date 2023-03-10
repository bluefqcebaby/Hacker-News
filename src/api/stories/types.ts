export type StoryType = "job" | "story" | "comment" | "poll" | "pollopt";

export interface ApiItem {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  text: string;
  time: number;
  title: string;
  type: StoryType;
  deleted: boolean;
}

export interface Item {
  by: string;
  descendants: number;
  id: number;
  kids?: number[];
  score: number;
  text: string;
  viewTime: string;
  title: string;
  time: number;
  url?: string;
  deleted: boolean;
  type: StoryType;
}
