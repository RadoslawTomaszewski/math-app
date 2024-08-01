import { FC } from "react";
import { ArticleWrapper } from "../../../../components/Wrappers/ArticleWrapper";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import ArithmeticSequencesCalculatorContent from "./ArithmeticSequenceCalculatorContent";

const ArithmeticSequencesCalculatorPage: FC = () => {
    const grandparent = { link: "../", name: "Kalkulatory" };
    const parent = { link: "../ciągi", name: "Ciągi" };
    const childName = "Kalkulator ciągu arytmetycznego";

    return (
        <div className="p-2 justify-center flex flex-col">
            <Breadcrumb
                grandparent={grandparent}
                parent={parent}
                childName={childName}
            />
            <ArticleWrapper>
                <div className="p-2 flex flex-col items-center min-h-[350px]">
                    <ArithmeticSequencesCalculatorContent />
                </div>
            </ArticleWrapper>
        </div>
    );
};

export default ArithmeticSequencesCalculatorPage;
