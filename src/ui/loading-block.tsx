import { FC } from "react";
import sx from "classnames";

interface Props {
  w?: number;
  h?: number;
  styles?: string;
}

const LoadingBlock: FC<Props> = ({ w, h, styles }) => (
  <div
    className={sx("bg-gray-500 animate-pulse rounded-xl", styles)}
    style={{
      width: w ? `${w}px` : "100%",
      height: h ? `${h}px` : "100%",
    }}
  />
);

export default LoadingBlock;
