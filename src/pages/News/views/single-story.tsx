import { FC, memo } from "react";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  rating: number;
  author: string;
  viewTime: string;
  id: number;
}

const SingleStory: FC<Props> = ({ title, rating, author, viewTime, id }) => {
  return (
    <Link
      to={`/news/${id}`}
      className="p-3 shadow-md border-2 rounded-3xl border-white flex flex-col bg-white hover:border-green-100 hover:shadow-sm cursor-pointer transition-all"
    >
      <div className="flex gap-5 justify-between items-center mb-3">
        <p className="font-bold text-ellipsis text-base sm:text-lg sm:max-h-10 max-h-12 sm:leading-5 overflow-hidden">
          {title}
        </p>
        <div className="flex items-center gap-1">
          <MdDateRange />
          <p className="whitespace-nowrap text-sm sm:text-base">{viewTime}</p>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-auto">
        {rating} {rating === 1 ? "point" : "points"} by {author}
      </p>
    </Link>
  );
};

export default memo(SingleStory);
