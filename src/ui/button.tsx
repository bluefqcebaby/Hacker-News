import sx from "classnames";
import { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: FC<Props> = ({ title, ...props }) => (
  <button
    className={sx(
      "bg-green-100 rounded-3xl py-2 px-3 text-green-200 hover:scale-95",
      "disabled:opacity-50 transition-all disabled:hover:scale-100"
    )}
    {...props}
  >
    {title}
  </button>
);

export default Button;
