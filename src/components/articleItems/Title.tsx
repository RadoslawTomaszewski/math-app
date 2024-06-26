import { FC } from "react";
import { classNames } from "../../utilities";

export interface ITitleProps {
  text: string;
  type?: string;
  color?: string;
}

const Title: FC<ITitleProps> = ({ text, type, color }) => {
  let styles = "font-amatic text-xl text-center font-bold py-1";

  switch (type) {
    case "main-article":
      // styles = "font-amatic text-4xl text-center font-bold pb-2";
      styles = "text-3xl text-center font-bold pb-2";
      break;
    case "submain-article":
      styles = "font-amatic text-2xl text-center font-bold pb-2";
      break;
    case "main-article-smaller":
      styles =
        "font-amatic text-3xl font-bold text-center hover:font-borderColor title-with-underline-animation";
      break;
    case "sidebar-category":
      styles =
        "font-amatic text-3xl text-start font-bold hover:font-borderColor";
      break;
    case "sidebar-link":
      if (color) styles = classNames("font-amatic ml-3 px-2 text-2xl font-bold hover:font-borderColor", color);
      else styles = "font-amatic text-2xl ml-3 px-2 font-bold hover:font-borderColor  hover:bg-[#9790f5fc]";
      break;
    case "mainpage-link":
      if (color) styles = classNames("font-amatic text-2xl font-bold hover:font-borderColor py-[5px]", color);
      else styles = "font-amatic text-2xl font-bold hover:font-borderColor title-with-underline-animation";
      break;

    default:
      styles = "text-red-600 text-center font-bold border-red border-2";
      break;
  }

  return <div className={styles}>{text}</div>;
};

export default Title;
