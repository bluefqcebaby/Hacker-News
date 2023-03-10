import { useComment } from "@/hooks/useComment";
import sx from "classnames";
import { FC, memo, useMemo, useState } from "react";
import parse from "html-react-parser";
import { Item } from "@/api/stories/types";
import { CommentLoad } from "./comment-load";
import { BiDownArrow } from "react-icons/bi";
import { getRelativeDate } from "@/lib/getRelativeDate";

interface Props {
  by?: string;
  time: number;
  text: string;
  kids?: number[];
}

const LENGTH = 300;

export const Comment: FC<Props> = ({ by, text, kids, time }) => {
  const isLongText = text?.length > LENGTH;
  const [isFull, setIsFull] = useState(!isLongText);
  const [showKids, setShowKids] = useState(false);

  let displayedText = text;
  if (isLongText) {
    !isFull && (displayedText = text?.slice(0, LENGTH) + "...");
  }
  return (
    <>
      <div
        className={sx(
          "flex flex-col border p-3 rounded-lg my-5 transition overflow-hidden",
          { "hover:border-green-100": kids }
        )}
        onClick={kids ? () => setShowKids((prev) => !prev) : undefined}
      >
        <h3 className="font-semibold">{by}</h3>
        <p className="text-xs text-gray-500">{getRelativeDate(time)}</p>

        <p className="text-sm text-clip">
          {displayedText && parse(displayedText)}
        </p>

        <div className="flex justify-between">
          {kids ? (
            <div className="flex gap-2 items-center text-sm text-gray-500">
              <p>Answers: {kids.length}</p>
              <BiDownArrow />
            </div>
          ) : (
            ""
          )}
          {isLongText && (
            <button
              className="text-blue-500 cursor-pointer ml-auto"
              onClick={(e) => (e.stopPropagation(), setIsFull((prev) => !prev))}
            >
              {isFull ? "show less" : "show more"}
            </button>
          )}
        </div>
      </div>
      {showKids && (
        <div className="pl-7 sm:pl-14">
          {kids?.map((elem) => (
            <CommentLoad id={elem} key={elem} />
          ))}
        </div>
      )}
    </>
  );
};
