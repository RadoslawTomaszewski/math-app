import { FC } from "react";
import Breadcrumb from "../../../../../components/Breadcrumb/Breadcrumb";
import { ArticleWrapper } from "../../../../../components/Wrappers/ArticleWrapper";
import EquilateralTriangleContent from "./EquilateralTriangleContent";

const EquilateralTrianglePage: FC = () => {
    const grandparent = { link: "../", name: "Baza Wiedzy" };
    const parent = {
        link: "../trojkaty",
        name: "Trójkąty",
    };
    const childName = "Trójkąt równoboczny";

    return (
        <div className="p-2 justify-center flex flex-col">
            <Breadcrumb
                grandparent={grandparent}
                parent={parent}
                childName={childName}
            />
            <ArticleWrapper>
                <EquilateralTriangleContent />
            </ArticleWrapper>
        </div>
    );
};

export default EquilateralTrianglePage;
