import { FC } from "react";
import { MathComponent } from "mathjax-react";

//TODO: REFACTOR THIS CODE

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
  else if (type === "long") {
    marginTop = (
      <>
        <div>
          <div className="flex min-w-[80px] justify-center mt-[0.24rem]">
            <MathComponent tex={notation} />
          </div>
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
