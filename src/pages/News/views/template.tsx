import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Template: FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-4 mb-10 sm:grid-cols-2">
      {children}
    </div>
  );
};
