import React, { FC, ReactNode } from "react";
import { classNames } from "../../utilities";

interface IWrapperProps {
  children: ReactNode;
  className?: string;
}

export const Wrapper: FC<IWrapperProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "p-3 border-2 border-navColor bg-articleColor rounded",
        className || ""
      )}
    >
      {children}
    </div>
  );
};
