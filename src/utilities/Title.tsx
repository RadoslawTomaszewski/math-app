import { FC } from "react";
import { ITitle } from "../interfaces/interfaces";

const Title: FC<ITitle> = ({ text, size }) => {
  if (size === "H1")
    return <div className="text-4xl text-center font-bold py-2">{text}</div>;
  else if (size === "H2")
    return (
      <div className="font-amatic text-3xl text-center font-bold py-1 hover:font-borderColor">
        {text}
      </div>
    );
  else if (size === "H3")
    return (
      <div className="font-amatic text-2xl text-center font-bold hover:font-borderColor">
        {text}
      </div>
    );
  else if (size === "NavHover")
    return (
      <div className="bghover font-amatic text-2xl text-center font-bold">
        {text}
      </div>
    );
  return (
    <div className="font-amatic text-xl text-center font-bold py-1 hover:font-borderColor">
      {text}
    </div>
  );
};

export default Title;
