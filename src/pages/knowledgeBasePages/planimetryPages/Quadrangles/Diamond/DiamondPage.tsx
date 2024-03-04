import { FC } from "react";
import Breadcrumb from "../../../../../components/Breadcrumb/Breadcrumb";
import { ArticleWrapper } from "../../../../../components/ArticleWrapper/ArticleWrapper";
import DiamondContent from "./DiamondContent";

const DiamondPage: FC = () => {
    const grandparent = { link: "../", name: "Baza Wiedzy" };
    const parent = {
        link: "../czworokaty",
        name: "Czworokaty",
    };
    const childName = "Romb";

    return (
        <div className="p-2 justify-center flex flex-col">
            <Breadcrumb
                grandparent={grandparent}
                parent={parent}
                childName={childName}
            />
            <ArticleWrapper>
                <DiamondContent />
            </ArticleWrapper>
        </div>
    );
};

export default DiamondPage;
