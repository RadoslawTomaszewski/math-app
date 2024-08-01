import { FC } from "react";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import { ArticleWrapper } from "../../../components/Wrappers/ArticleWrapper";
import ArithmeticContent from "./ArithmeticContent";

const ArithmeticPage: FC = () => {
    const grandparent = { link: "../", name: "Baza Wiedzy" };
    const parent = {
        link: "../arytmetyka",
        name: "Arytmetyka",
    };
    const childName = "";

    return (
        <div className="p-2 justify-center flex flex-col">
            <Breadcrumb
                grandparent={grandparent}
                parent={parent}
                childName={childName}
            />
            <ArticleWrapper>
                <ArithmeticContent />
            </ArticleWrapper>
        </div>
    );
};

export default ArithmeticPage;
