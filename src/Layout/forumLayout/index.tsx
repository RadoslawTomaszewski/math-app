import { Outlet } from "react-router-dom";
import { ArticleWrapper } from "../../components/ArticleWrapper/ArticleWrapper";
import Title from "../../components/articleItems/Title";


export const ForumLayout = () => {
    return (
        <div className="p-3 justify-center flex flex-col items-center">
            <ArticleWrapper>
                <div className="flex flex-col items-center bg-articleColor">
                    <Title text={"Forum majza.eu"} type="main-article" />
                    <Outlet />
                </div>
            </ArticleWrapper>
        </div>
    );
};
