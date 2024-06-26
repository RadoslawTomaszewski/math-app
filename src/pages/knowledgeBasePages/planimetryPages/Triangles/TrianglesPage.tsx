import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import { ArticleWrapper } from "../../../../components/ArticleWrapper/ArticleWrapper";
import TrianglesContent from "./TrianglesContent";

const TrianglesPage: FC = () => {
    const grandparent = { link: "../", name: "Baza Wiedzy" };
    const parent = {
        link: "../trojkaty",
        name: "Trójkąty",
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
                <TrianglesContent />
            </ArticleWrapper>
        </div>
    );
};

export default TrianglesPage;
