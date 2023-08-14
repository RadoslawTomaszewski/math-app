import { FC } from "react";
import { MathComponent } from "mathjax-react";

export interface IMathExpressionProps {
  expression: string;
}

const MathExpression: FC<IMathExpressionProps> = ({ expression }) => {
  return (
    <div className="mt-[0.24rem]">
      <MathComponent tex={expression} />
    </div>
  );
};

export default MathExpression;
