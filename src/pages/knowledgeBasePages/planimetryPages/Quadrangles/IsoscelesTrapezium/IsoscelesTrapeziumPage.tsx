import { FC } from "react";
import Breadcrumb from "../../../../../components/Breadcrumb/Breadcrumb";
import { ArticleWrapper } from "../../../../../components/ArticleWrapper/ArticleWrapper";
import IsoscelesTrapeziumContent from "./IsoscelesTrapeziumContent";

const IsoscelesTrapeziumPage: FC = () => {
    const grandparent = { link: "../", name: "Baza Wiedzy" };
    const parent = {
        link: "../czworokaty",
        name: "Czworokąty",
    };
    const childName = "Trapez równoramienny";

    return (
        <div className="p-2 justify-center flex flex-col">
            <Breadcrumb
                grandparent={grandparent}
                parent={parent}
                childName={childName}
            />
            <ArticleWrapper>
                <IsoscelesTrapeziumContent />
            </ArticleWrapper>
        </div>
    );
};

export default IsoscelesTrapeziumPage;
