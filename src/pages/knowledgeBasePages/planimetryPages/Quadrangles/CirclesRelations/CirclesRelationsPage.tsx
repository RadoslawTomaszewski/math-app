import { FC } from "react";
import Breadcrumb from "../../../../../components/Breadcrumb/Breadcrumb";
import { ArticleWrapper } from "../../../../../components/ArticleWrapper/ArticleWrapper";
import CirclesRelationsContent from "./CirclesRelationsContent";

const CirclesRelationsPage: FC = () => {
    const grandparent = { link: "../", name: "Baza Wiedzy" };
    const parent = {
        link: "../czworokaty",
        name: "Czworokąty",
    };
    const childName = "Relacja czworokąt, a okrąg";

    return (
        <div className="p-2 justify-center flex flex-col">
            <Breadcrumb
                grandparent={grandparent}
                parent={parent}
                childName={childName}
            />
            <ArticleWrapper>
                <CirclesRelationsContent />
            </ArticleWrapper>
        </div>
    );
};

export default CirclesRelationsPage;
