import { FC } from "react";
import Breadcrumb from "../../../../../components/Breadcrumb/Breadcrumb";
import { ArticleWrapper } from "../../../../../components/ArticleWrapper/ArticleWrapper";
import TriangleCategoryContent from "./TriangleCategoriesContent";
const TriangleCategoryPage: FC = () => {
    const grandparent = { link: "../", name: "Baza Wiedzy" };
    const parent = {
        link: "../trojkaty",
        name: "Trójkąty",
    };
    const childName = "Podział trójkątów";

    return (
        <div className="p-2 justify-center flex flex-col">
            <Breadcrumb
                grandparent={grandparent}
                parent={parent}
                childName={childName}
            />
            <ArticleWrapper>
                <TriangleCategoryContent />
            </ArticleWrapper>
        </div>
    );
};

export default TriangleCategoryPage;
