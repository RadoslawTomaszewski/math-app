import { FC } from "react";
import Breadcrumb from "../../../../../components/Breadcrumb/Breadcrumb";
import { ArticleWrapper } from "../../../../../components/Wrappers/ArticleWrapper";
import ParallelogramContent from "./ParallelogramContent";

const ParallelogramPage: FC = () => {
    const grandparent = { link: "../", name: "Baza Wiedzy" };
    const parent = {
        link: "../czworokaty",
        name: "Czworokaty",
    };
    const childName = "Równoległobok";

    return (
        <div className="p-2 justify-center flex flex-col">
            <Breadcrumb
                grandparent={grandparent}
                parent={parent}
                childName={childName}
            />
            <ArticleWrapper>
                <ParallelogramContent />
            </ArticleWrapper>
        </div>
    );
};

export default ParallelogramPage;
