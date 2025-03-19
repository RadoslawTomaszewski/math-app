import { FC } from "react";
import { MathComponent } from "mathjax-react";

export interface IInlineMathProps {
  text: string;
}

const FormulaInline: FC<IInlineMathProps> = ({ text }) => {
  const renderTextWithMath = (text: string) => {
    // Wyszukaj fragmenty tekstu otoczone `//start` i `//end` i przekształć je w MathComponent
    const parts = text.split(/(\/\/start.*?\/\/end)/g);
    return parts.map((part, index) =>
      part.startsWith("//start") && part.endsWith("//end") ? (
        <MathComponent key={index} tex={part.slice(8, -5).trim()} display={false} />
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return <div className="flex flex-wrap">{renderTextWithMath(text)}</div>;
};

export default FormulaInline;
