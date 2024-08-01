import { FC } from "react";
import Breadcrumb from "../../../../../components/Breadcrumb/Breadcrumb";
import { ArticleWrapper } from "../../../../../components/Wrappers/ArticleWrapper";
import RectangularTrapeziumContent from "./RectangularTrapeziumContent";

const RectangularTrapeziumPage: FC = () => {
    const grandparent = { link: "../", name: "Baza Wiedzy" };
    const parent = {
        link: "../czworokaty",
        name: "Czworokąty",
    };
    const childName = "Trapez prostokątny";

    return (
        <div className="p-2 justify-center flex flex-col">
            <Breadcrumb
                grandparent={grandparent}
                parent={parent}
                childName={childName}
            />
            <ArticleWrapper>
                <RectangularTrapeziumContent />
            </ArticleWrapper>
        </div>
    );
};

export default RectangularTrapeziumPage;
