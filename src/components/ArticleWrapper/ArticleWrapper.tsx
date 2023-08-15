import React, { FC, ReactNode } from "react";
import { classNames } from "../../utilities";
import { ArticleWrapperStyle } from "../../utilities/styles";

interface IArticleWrapperProps {
  children: ReactNode;
  className?: string;
}

export const ArticleWrapper: FC<IArticleWrapperProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        ArticleWrapperStyle,
        className || ""
      )}
    >
      {children}
    </div>
  );
};
