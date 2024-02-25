import { FC } from "react";
import { MathComponent } from "mathjax-react";

export interface IFormulaProps {
  formula: string;
  margin?: string;
}

const Formula: FC<IFormulaProps> = ({ formula, margin }) => {
  if (margin === "none")
    return (
      <div className="flex justify-center">
        <MathComponent tex={formula} />
      </div>
    );
  else
    return (
      <div className="flex justify-center m-3 max-w-full">
        <MathComponent tex={formula} />
      </div>
    );
};

export default Formula;
