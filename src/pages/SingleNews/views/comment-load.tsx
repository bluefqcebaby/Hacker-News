import { useComment } from "@/hooks/useComment";
import { FC } from "react";
import { Comment } from "./comment";
import { CommentMask } from "./comment-mask";

interface Props {
  id: number;
}

export const CommentLoad: FC<Props> = ({ id }) => {
  const { data, isLoading } = useComment(id);
  if (isLoading) return <CommentMask />;
  if (!data) return null;
  if (data?.deleted)
    return <div className="border p-3 rounded-xl my-5">[comment deleted]</div>;
  return (
    <Comment by={data?.by} text={data.text} kids={data.kids} time={data.time} />
  );
};
