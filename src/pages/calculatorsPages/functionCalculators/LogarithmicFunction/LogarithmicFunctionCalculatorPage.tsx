import { FC } from "react";
import { ArticleWrapper } from "../../../../components/ArticleWrapper/ArticleWrapper";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import LogarithmicFunctionCalculatorContent from "./LogarithmicFunctionCalculatorContent";

const LogarithmicFunctionCalculatorPage: FC = () => {
    const grandparent = { link: "../", name: "Kalkulatory" };
    const parent = { link: "../funkcje", name: "Funkcje" };
    const childName = "Kalkulator funkcji logarytmicznej";

    return (
        <div className="p-2 justify-center flex flex-col">
            <Breadcrumb
                grandparent={grandparent}
                parent={parent}
                childName={childName}
            />
            <ArticleWrapper>
                <div className="p-2 flex flex-col items-center min-h-[350px]">
                    <LogarithmicFunctionCalculatorContent />
                </div>
            </ArticleWrapper>
        </div>
    );
};

export default LogarithmicFunctionCalculatorPage;
