import React, { FC, ReactNode } from "react";
import { classNames } from "../../utilities";

interface IArticleWrapperProps {
  children: ReactNode;
  className?: string;
}

export const ArticleWrapper: FC<IArticleWrapperProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "p-3 flex flex-col border-2 border-navColor bg-articleColor rounded max-w-full items-center",
        className || ""
      )}
    >
      <div className="max-w-full xl:max-w-[1200px]">
        {children}
      </div>
    </div>
  );
};
