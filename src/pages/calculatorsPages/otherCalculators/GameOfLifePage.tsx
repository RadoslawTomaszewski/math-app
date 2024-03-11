import { FC } from "react";
import { ArticleWrapper } from "../../../components/ArticleWrapper/ArticleWrapper";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import GameOfLifeContent from "./GameOfLifeContent";

const GameOfLifePage: FC = () => {
    const grandparent = { link: "../", name: "Kalkulatory" };
    const parent = { link: "../pozostale", name: "Pozostałe" };
    const childName = "Gra w życie";

    return (
        <div className="p-2 justify-center flex flex-col">
            <Breadcrumb
                grandparent={grandparent}
                parent={parent}
                childName={childName}
            />
            <ArticleWrapper>
                <GameOfLifeContent />
            </ArticleWrapper>
        </div>
    );
};

export default GameOfLifePage;
