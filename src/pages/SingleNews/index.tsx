import { useSingleNews } from "@/hooks/useSingleNews";
import * as UI from "@/ui";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { CommentLoad } from "./views/comment-load";
import { SingleNewsMask } from "./views/single-news-mask";

//we could use here cache from react query
const SingleNews = () => {
  const { newsId } = useParams();

  const {
    data: story,
    isLoading,
    refetch,
    isRefetching,
  } = useSingleNews(+newsId!);
  if (isLoading) return <SingleNewsMask />;
  return (
    <div className="container">
      <UI.Header title="story">
        <div className="flex items-center gap-2 text-xs sm:text-base sm:mr-4">
          <MdDateRange className="text-green-100" />
          <p className="text-green-100 text-center">
            {story?.viewTime} by {story?.by}
          </p>
        </div>
      </UI.Header>
      <div className="mt-5">
        <div className="flex justify-between align-center flex-wrap-reverse sm:px-2">
          <div className="flex gap-2 items-center group cursor-pointer w-fit">
            <BsArrowLeft className="text-blue-500 group-hover:-translate-x-1 transition" />
            <Link to="/" className="text-blue-500 group-hover:underline">
              Go back
            </Link>
          </div>
          <div className="flex gap-2 items-center group cursor-pointer w-fit">
            <a
              href={story?.url}
              className="text-blue-500 group-hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              To story
            </a>
            <BsArrowRight className="text-blue-500 group-hover:translate-x-1 transition" />
          </div>
        </div>
      </div>
      <div className="px-1 sm:px-5 mt-10 mb-10">
        <div className="flex justify-between flex-wrap gap-3 items-center">
          <div>
            <h2 className="sm:pl-3 font-bold text-xl">{story?.title}</h2>
            <p className="sm:pl-3">total comments: {story?.descendants}</p>
          </div>
          {story!.descendants > 0 && (
            <UI.Button
              title={isRefetching ? "updating..." : "update comments"}
              onClick={() => refetch()}
              disabled={isRefetching}
            />
          )}
        </div>
        {story?.kids?.map((elem) => (
          <CommentLoad id={elem} key={elem} />
        ))}
      </div>
    </div>
  );
};
export default SingleNews;
