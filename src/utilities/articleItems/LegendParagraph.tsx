import { FC } from "react";
import { ILegendParagraph } from "../../interfaces/interfaces";
import { MathComponent } from "mathjax-react";

const LegendParagraph: FC<ILegendParagraph> = ({
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
