import { FC } from "react";
import { ArticleWrapper } from "../../../../components/Wrappers/ArticleWrapper";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import BankDepositCalculatorContent from "./BankDepositCalculatorContent";

const BankDepositCalculatorPage: FC = () => {
    const grandparent = { link: "../", name: "Kalkulatory" };
    const parent = { link: "../pozostale", name: "Pozostałe" };
    const childName = "Kalkulator lokat";

    return (
        <div className="p-2 justify-center flex flex-col">
            <Breadcrumb
                grandparent={grandparent}
                parent={parent}
                childName={childName}
            />
            <ArticleWrapper>
                <BankDepositCalculatorContent />
            </ArticleWrapper>
        </div>
    );
};

export default BankDepositCalculatorPage;
