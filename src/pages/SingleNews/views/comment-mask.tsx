import * as UI from "@/ui";

export const CommentMask = () => {
  return (
    <div className="border p-3 rounded-xl my-5 flex flex-col gap-2">
      <UI.LoadingBlock w={100} h={15} />
      <UI.LoadingBlock w={75} h={10} styles="mb-2" />
      <UI.LoadingBlock h={13} />
      <div className="w-3/4">
        <UI.LoadingBlock h={13} />
      </div>
      <div className="w-11/12">
        <UI.LoadingBlock h={13} />
      </div>
    </div>
  );
};
