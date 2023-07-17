import { FC } from "react";
import { MathComponent } from "mathjax-react";
import { IMathExpression } from "../../interfaces/interfaces";

const MathExpression: FC<IMathExpression> = ({ expression }) => {
  return (
    <div className="mt-[0.24rem]">
      <MathComponent tex={expression} />
    </div>
  );
};

export default MathExpression;
