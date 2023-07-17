import { FC, useState } from "react";
import { MathComponent } from "mathjax-react";
import { ReactComponent as ExpandIcon } from "../../assets/icons/expand.svg";
import { ReactComponent as CollapseIcon } from "../../assets/icons/collapse.svg";
import { IProof } from "../../interfaces/interfaces";

const Proof: FC<IProof> = ({ steps, text }) => {
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
            <li key={index} className="flex justify-center m-2">
              <MathComponent tex={step} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Proof;
