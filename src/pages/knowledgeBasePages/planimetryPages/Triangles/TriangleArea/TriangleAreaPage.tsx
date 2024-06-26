import { FC } from "react";
import Breadcrumb from "../../../../../components/Breadcrumb/Breadcrumb";
import { ArticleWrapper } from "../../../../../components/ArticleWrapper/ArticleWrapper";
import TriangleAreaContent from "./TriangleAreaContent";

const TriangleAreaPage: FC = () => {
    const grandparent = { link: "../", name: "Baza Wiedzy" };
    const parent = {
        link: "../trojkaty",
        name: "Trójkąty",
    };
    const childName = "Pole trójkąta";

    return (
        <div className="p-2 justify-center flex flex-col">
            <Breadcrumb
                grandparent={grandparent}
                parent={parent}
                childName={childName}
            />
            <ArticleWrapper>
                <TriangleAreaContent />
            </ArticleWrapper>
        </div>
    );
};

export default TriangleAreaPage;
