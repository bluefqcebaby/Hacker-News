import * as UI from "@/ui";

export const SingleStoryMask = () => {
  return (
    <div className="p-3 shadow-md border-2 rounded-3xl border-white flex flex-col bg-white">
      <div className="flex gap-5 justify-between items-center mb-5">
        <UI.LoadingBlock h={25} styles="flex-[4]" />
        <UI.LoadingBlock h={25} styles="flex-[1]" />
      </div>
      <UI.LoadingBlock w={150} h={15} />
    </div>
  );
};
