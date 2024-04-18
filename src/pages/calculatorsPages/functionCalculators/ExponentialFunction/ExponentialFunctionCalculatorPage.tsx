import { FC } from "react";
import { ArticleWrapper } from "../../../../components/ArticleWrapper/ArticleWrapper";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import ExponentialFunctionCalculatorContent from "./ExponentialFunctionCalculatorContent";

const ExponentialFunctionCalculatorPage: FC = () => {
    const grandparent = { link: "../", name: "Kalkulatory" };
    const parent = { link: "../funkcje", name: "Funkcje" };
    const childName = "Kalkulator funkcji wykładniczej";

    return (
        <div className="p-2 justify-center flex flex-col">
            <Breadcrumb
                grandparent={grandparent}
                parent={parent}
                childName={childName}
            />
            <ArticleWrapper>
                <div className="p-2 flex flex-col items-center min-h-[350px]">
                    <ExponentialFunctionCalculatorContent />
                </div>
            </ArticleWrapper>
        </div>
    );
};

export default ExponentialFunctionCalculatorPage;
