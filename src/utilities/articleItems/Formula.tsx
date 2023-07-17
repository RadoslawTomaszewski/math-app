import { FC } from "react";
import { MathComponent } from "mathjax-react";
import { IFormula } from "../../interfaces/interfaces";

const Formula: FC<IFormula> = ({ formula }) => {
  return (
    <div className="flex justify-center m-3">
      <MathComponent tex={formula} />
    </div>
  );
};

export default Formula;
