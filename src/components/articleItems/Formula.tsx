import { FC } from "react";
import { MathComponent } from "mathjax-react";

export interface IFormulaProps {
  formula: string;
}

const Formula: FC<IFormulaProps> = ({ formula }) => {
  return (
    <div className="flex justify-center m-3">
      <MathComponent tex={formula} />
    </div>
  );
};

export default Formula;
