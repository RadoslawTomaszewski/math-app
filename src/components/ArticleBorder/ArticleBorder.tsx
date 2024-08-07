import { FC } from "react";
import { classNames } from "../../utilities";


export interface IArticleBorderProps {
  styles?: string;
}

const ArticleBorder: FC<IArticleBorderProps> = ({ styles }) => {
  let styleWrapper = "flex justify-center m-3 w-full";
  if (styles) styleWrapper = classNames(styleWrapper, styles);



  return (
    <div className={styleWrapper}>
      <div className="flex border-b-2 border-solid border-navColor w-full"></div>
    </div>
  );
};

export default ArticleBorder;
