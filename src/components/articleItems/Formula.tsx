import { FC } from "react";
import { MathComponent } from "mathjax-react";
import { classNames } from "../../utilities";

export interface IFormulaProps {
  formula: string;
  margin?: string;
  styles?: string;
}

const Formula: FC<IFormulaProps> = ({ formula, margin, styles }) => {

  if (styles) {
    if (margin === "none")
      return (
        <div className={classNames("flex justify-center", styles)}>
          <MathComponent tex={formula} />
        </div>
      );
    return (
      <div className="overflow-x-auto">
        <div className={classNames("flex justify-center my-3", styles)}>
          <div className="flex justify-center m-3">
            <MathComponent tex={formula} />
          </div>
        </div>
      </div>
    )
  }
  else
    if (margin === "none")
      return (
        <div className={classNames("flex justify-center")}>
          <MathComponent tex={formula} />
        </div>
      );
  return (
    <div className="flex justify-center m-3 max-w-full">
      <MathComponent tex={formula} />
    </div>
  );
};

export default Formula;
