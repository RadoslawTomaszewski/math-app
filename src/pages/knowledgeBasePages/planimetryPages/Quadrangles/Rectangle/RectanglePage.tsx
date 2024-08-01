import { FC } from "react";
import Breadcrumb from "../../../../../components/Breadcrumb/Breadcrumb";
import { ArticleWrapper } from "../../../../../components/Wrappers/ArticleWrapper";
import RectangleContent from "./RectangleContent";

const RectanglePage: FC = () => {
    const grandparent = { link: "../", name: "Baza Wiedzy" };
    const parent = {
        link: "../czworokaty",
        name: "Czworokaty",
    };
    const childName = "Prostokąt";

    return (
        <div className="p-2 justify-center flex flex-col">
            <Breadcrumb
                grandparent={grandparent}
                parent={parent}
                childName={childName}
            />
            <ArticleWrapper>
                <RectangleContent />
            </ArticleWrapper>
        </div>
    );
};

export default RectanglePage;
