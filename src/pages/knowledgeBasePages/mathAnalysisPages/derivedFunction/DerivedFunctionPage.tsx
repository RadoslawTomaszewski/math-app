import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import { ArticleWrapper } from "../../../../components/Wrappers/ArticleWrapper";
import DerivedFunctionContent from "./DerivedFunctionContent";

const DerivedFunctionPage: FC = () => {
    const grandparent = { link: "../", name: "Baza Wiedzy" };
    const parent = {
        link: "../analiza-matematyczna",
        name: "Analiza Matematyczna",
    };
    const childName = "Pochodna funkcji";

    return (
        <div className="p-2 justify-center flex flex-col">
            <Breadcrumb
                grandparent={grandparent}
                parent={parent}
                childName={childName}
            />
            <ArticleWrapper>
                <DerivedFunctionContent />
            </ArticleWrapper>
        </div>
    );
};

export default DerivedFunctionPage;
