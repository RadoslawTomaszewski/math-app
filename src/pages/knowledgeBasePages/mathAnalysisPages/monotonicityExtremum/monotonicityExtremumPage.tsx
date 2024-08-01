import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import { ArticleWrapper } from "../../../../components/Wrappers/ArticleWrapper";
import MonotonicityExtremumContent from "./monotonicityExtremumContent";

const MonotonicityExtremumPage: FC = () => {
    const grandparent = { link: "../", name: "Baza Wiedzy" };
    const parent = {
        link: "../analiza-matematyczna",
        name: "Analiza Matematyczna",
    };
    const childName = "Monotoniczność i ekstremum funkcji";

    return (
        <div className="p-2 justify-center flex flex-col">
            <Breadcrumb
                grandparent={grandparent}
                parent={parent}
                childName={childName}
            />
            <ArticleWrapper>
                <MonotonicityExtremumContent />
            </ArticleWrapper>
        </div>
    );
};

export default MonotonicityExtremumPage;
