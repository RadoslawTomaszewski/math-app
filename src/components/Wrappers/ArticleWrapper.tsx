import React, { FC, ReactNode } from "react";
import { classNames } from "../../utilities";
import ArticleComments from "../ArticleComments/ArticleComments";

interface IArticleWrapperProps {
  children: ReactNode;
  className?: string;
}

export const ArticleWrapper: FC<IArticleWrapperProps> = ({ children, className }) => {
  return (
    <>
      <div
        className={classNames(
          "p-3 min-h-full flex flex-col border-2 border-navColor bg-articleColor rounded max-w-full items-center",
          className || ""
        )}
      >
        <div className="w-[1200px] max-w-full xxl:max-w-[1200px]">
          {children}
        </div>
      </div>
      <ArticleComments />
    </>);
};
