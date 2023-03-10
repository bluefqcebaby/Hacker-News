import * as UI from "@/ui";
import { CommentMask } from "./comment-mask";

const arr = Array.from({ length: 5 }).fill(1);

export const SingleNewsMask = () => {
  return (
    <div className="container">
      <UI.Header title="Loading...">
        <UI.LoadingBlock h={30} w={200} styles="bg-green-100" />
      </UI.Header>
      <div className="mt-10 px-4">
        <div className="flex justify-between ">
          <UI.LoadingBlock h={20} w={130} />
          <UI.LoadingBlock h={20} w={130} />
        </div>
        <UI.LoadingBlock styles="mt-10 mb-3" h={25} w={350} />
        <UI.LoadingBlock h={20} w={150} />
      </div>
      <div>
        {arr.map((_, i) => (
          <CommentMask key={i} />
        ))}
      </div>
    </div>
  );
};
