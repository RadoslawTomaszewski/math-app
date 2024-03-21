import React, { FC, ReactNode } from "react";
import { classNames } from "../../utilities";

export enum CoreCurriculumTypes {
    CKEPP = "CKE PP 2025",
    CKEPR = "CKE PR 2025",
    extra = "EXTRA",
}

interface ICoreCurriculumProps {
    type: CoreCurriculumTypes;
    children: ReactNode;
    className?: string;
}

export const CoreCurriculum: FC<ICoreCurriculumProps> = ({ children, className, type }) => {
    return (
        <div
            className={classNames(
                className || ""
            )}
        >
            <div className="border-[#68B9FF] border-2 p-[2px] px-2 w-fit rounded-xl m-2 font-bold bg-white">{type}</div>
            {children}
        </div>
    );
};
