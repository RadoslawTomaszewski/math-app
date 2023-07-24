import { FC } from "react";
import { MathComponent } from "mathjax-react";

export interface ILegendParagraphProps {
  type: string;
  notation: string;
  explanation: string;
}

const LegendParagraph: FC<ILegendParagraphProps> = ({
  type,
  notation,
  explanation,
}) => {
  let marginTop = <></>;
  if (type === "short")
    marginTop = (
      <>
        <div className="flex justify-center mt-[0.51rem] align-middle min-w-[15px]">
          <MathComponent tex={notation} />
        </div>
      </>
    );
  else if (type === "top") {
    marginTop = (
      <>
        <div className="flex justify-center mt-[0.24rem] min-w-[15px]">
          <MathComponent tex={notation} />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex ml-2">
        {marginTop}
        <p>&nbsp;- {explanation}</p>
      </div>
    </>
  );
};

export default LegendParagraph;
