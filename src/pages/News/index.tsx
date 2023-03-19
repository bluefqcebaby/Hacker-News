import { useNews } from "@/hooks/useNews";
import * as UI from "@/ui";
import { Stories } from "./views/stories";
import { StoriesMask } from "./views/stories-mask";

function News() {
  const { data, isLoading, refetch, isRefetching, isFetching } = useNews();
  const onClickHandler = () => refetch();
  return (
    <div className="container">
      <UI.Header title="hacker news">
        <UI.Button
          title="refresh"
          onClick={onClickHandler}
          disabled={isFetching}
        />
      </UI.Header>
      <div className="flex items-center justify-center h-10">
        {isRefetching && <p className="select-none">fetching...</p>}
      </div>

      {isLoading ? <StoriesMask /> : <Stories data={data} />}
    </div>
  );
}

export default News;
