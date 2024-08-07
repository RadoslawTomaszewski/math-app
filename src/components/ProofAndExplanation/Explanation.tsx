import { FC, ReactNode, useState } from "react";
import { ReactComponent as ExpandIcon } from "../../assets/icons/expand.svg";
import { ReactComponent as CollapseIcon } from "../../assets/icons/collapse.svg";
import PremiumContent from "../PremiumContent/PremiumContent";

export interface IExplanationProps {
    text: string;
    styles?: string;
    children: ReactNode;
}

const Explanation: FC<IExplanationProps> = ({ children, text, styles }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <button onClick={toggleExpansion} className="w-full flex justify-center overflow-y-hidden" type="button">
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
                    <>
                        <PremiumContent>
                            {children}
                        </PremiumContent>
                    </>
                )}
            </div>
        </>

    );
};

export default Explanation;
