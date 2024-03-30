import { FC, ReactNode, useState } from "react";
import { MathComponent } from "mathjax-react";
import { ReactComponent as ExpandIcon } from "../../assets/icons/expand.svg";
import { ReactComponent as CollapseIcon } from "../../assets/icons/collapse.svg";
import { classNames } from "../../utilities";

export interface IProofProps {
  steps: string[];
  text: string;
  styles?: string;
  children?: ReactNode;
}

const Proof: FC<IProofProps> = ({ steps, text, styles, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <button onClick={toggleExpansion} className="flex overflow-y-hidden">
        {expanded ? (
          <>
            <div className="flex flex-row border-[#12874a] border-2 p-[2px] px-2 w-fit rounded-xl m-2 font-bold bg-white">
              {text} <CollapseIcon className="w-[16px] h-[16px] mt-1" />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row border-[#12874a] border-2 p-[2px] px-2 w-fit rounded-xl m-2 font-bold bg-white">
              {text} <ExpandIcon className="w-[16px] h-[16px] mt-1" />
            </div>
          </>
        )}
      </button>
      <div>
        {expanded && (
          <ul>
            {children && <>{children}</>}
            <div className="border-2 border-[#000000] bg-[#ffffff] my-2 rounded">
              <div className="overflow-x-auto ">
                {steps.map((step, index) => (
                  <li key={index} className={styles ? classNames("flex justify-center my-4 min-w-[1000px]", styles) : "flex justify-center my-4 min-w-[1000px]"}>
                    <MathComponent tex={step} />
                  </li>
                ))}
              </div>
            </div>
          </ul>
        )}
      </div>
    </>

  );
};

export default Proof;
