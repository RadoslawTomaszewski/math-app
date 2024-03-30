import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import TetrationContent from "./TetrationContent";
import { ArticleWrapper } from "../../../../components/ArticleWrapper/ArticleWrapper";

const TetrationPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = {
    link: "../arytmetyka",
    name: "Arytmetyka",
  };
  const childName = "Tetracja";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <TetrationContent />
      </ArticleWrapper>
    </div>
  );
};

export default TetrationPage;
