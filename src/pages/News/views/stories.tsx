import { Item } from "@/api/stories/types";
import { FC } from "react";
import SingleStory from "./single-story";
import { Template } from "./template";

interface Props {
  data?: Item[];
}

export const Stories: FC<Props> = ({ data }) => {
  return (
    <Template>
      {data?.map((elem) => (
        <SingleStory
          author={elem.by}
          viewTime={elem.viewTime}
          rating={elem.score}
          title={elem.title}
          key={elem.id}
          id={elem.id}
        />
      ))}
    </Template>
  );
};
