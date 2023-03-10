import * as UI from "@/ui";
import { FC, ReactNode } from "react";
import sx from "classnames";

interface Props {
  title: string;
  styles?: string;
  children?: ReactNode;
}

const Header: FC<Props> = ({ title, styles, children }) => (
  <header
    className={sx(
      "py-3 pl-4 bg-green-200 rounded-[42px] mt-10 flex justify-between items-center pr-4 sm:pl-8",
      styles
    )}
  >
    <h2 className="font-comforta text-green-100 text-2xl sm:text-3xl">
      {title}
    </h2>
    {children}
  </header>
);

export default Header;
