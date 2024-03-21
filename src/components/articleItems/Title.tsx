import { FC } from "react";

export interface ITitleProps {
  text: string;
  type?: string;
}

const Title: FC<ITitleProps> = ({ text, type }) => {
  let classNames = "font-amatic text-xl text-center font-bold py-1";

  switch (type) {
    case "main-article":
      classNames = "font-amatic text-4xl text-center font-bold pb-2";
      break;
    case "submain-article":
      classNames = "font-amatic text-2xl text-center font-bold pb-2";
      break;
    case "main-article-smaller":
      classNames =
        "font-amatic text-3xl font-bold text-center hover:font-borderColor title-with-underline-animation";
      break;
    case "sidebar-category":
      classNames =
        "font-amatic text-3xl text-start font-bold hover:font-borderColor";
      break;
    case "sidebar-link":
      classNames =
        "font-amatic text-2xl mx-2 font-bold hover:font-borderColor title-with-underline-animation";
      break;
    case "mainpage-link":
      classNames =
        "font-amatic text-2xl font-bold hover:font-borderColor title-with-underline-animation";
      break;

    default:
      classNames = "text-red-600 text-center font-bold border-red border-2";
      break;
  }

  return <div className={classNames}>{text}</div>;
};

export default Title;
