import { FC } from "react";
import { MathComponent } from "mathjax-react";
import { classNames } from "../../utilities";

export interface IFormulaProps {
  formula: string;
}

const FormulaNew: FC<IFormulaProps> = ({ formula}) => {

  return (
    <div className="flex justify-center m-3 max-w-full">
      <MathComponent tex={formula} />
    </div>
  );
};

export default FormulaNew;
