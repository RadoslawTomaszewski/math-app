import { FC } from "react";
import Breadcrumb from "../../../../../components/Breadcrumb/Breadcrumb";
import { ArticleWrapper } from "../../../../../components/Wrappers/ArticleWrapper";
import TheoremsContent from "./TheoremsContent";

const TheoremsPage: FC = () => {
    const grandparent = { link: "../", name: "Baza Wiedzy" };
    const parent = {
        link: "../trojkaty",
        name: "Trójkąty",
    };
    const childName = "Twierdzenia";

    return (
        <div className="p-2 justify-center flex flex-col">
            <Breadcrumb
                grandparent={grandparent}
                parent={parent}
                childName={childName}
            />
            <ArticleWrapper>
                <TheoremsContent />
            </ArticleWrapper>
        </div>
    );
};

export default TheoremsPage;
