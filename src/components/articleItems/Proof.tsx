import { FC, useState } from "react";
import { MathComponent } from "mathjax-react";
import { ReactComponent as ExpandIcon } from "../../assets/icons/expand.svg";
import { ReactComponent as CollapseIcon } from "../../assets/icons/collapse.svg";

export interface IProofProps {
  steps: string[];
  text: string;
}

const Proof: FC<IProofProps> = ({ steps, text }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <button onClick={toggleExpansion} className="flex">
        {expanded ? (
          <>
            {text} <CollapseIcon className="w-[16px] h-[16px] mt-1" />
          </>
        ) : (
          <>
            {text} <ExpandIcon className="w-[16px] h-[16px] mt-1" />
          </>
        )}
      </button>
      {expanded && (
        <ul>
          {steps.map((step, index) => (
            <li key={index} className="flex justify-center my-4">
              <MathComponent tex={step} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Proof;
