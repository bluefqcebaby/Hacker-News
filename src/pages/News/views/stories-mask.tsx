import { SingleStoryMask } from "./single-story-mask";
import { Template } from "./template";

const arr = Array.from({ length: 30 }).fill(1);

export const StoriesMask = () => {
  return (
    <Template>
      {arr.map((_, i) => (
        <SingleStoryMask key={i} />
      ))}
    </Template>
  );
};
