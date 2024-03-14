import { FC, useState } from "react";
import { MathComponent } from "mathjax-react";
import { ReactComponent as ExpandIcon } from "../../assets/icons/expand.svg";
import { ReactComponent as CollapseIcon } from "../../assets/icons/collapse.svg";
import { classNames } from "../../utilities";

export interface IProofProps {
  steps: string[];
  text: string;
  styles?: string;
}

const Proof: FC<IProofProps> = ({ steps, text, styles }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <button onClick={toggleExpansion} className="flex overflow-y-hidden">
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
      <div>
        {expanded && (
          <ul>
            <div className="overflow-x-auto ">
              {steps.map((step, index) => (
                <li key={index} className={styles ? classNames("flex justify-center my-4 min-w-[1000px]", styles) : "flex justify-center my-4 min-w-[1000px]"}>
                  <MathComponent tex={step} />
                </li>
              ))}
            </div>
          </ul>
        )}
      </div>
    </>

  );
};

export default Proof;
