import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import { ArticleWrapper } from "../../../../components/Wrappers/ArticleWrapper";
import QuadranglesContent from "./QuadranglesContent";

const QuadranglesPage: FC = () => {
    const grandparent = { link: "../", name: "Baza Wiedzy" };
    const parent = {
        link: "../czworokąty",
        name: "Czworokąty",
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
                <QuadranglesContent />
            </ArticleWrapper>
        </div>
    );
};

export default QuadranglesPage;
