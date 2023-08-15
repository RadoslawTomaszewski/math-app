import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import SubtractionContent from "./SubtractionContent";
import { ArticleWrapper } from "../../../../components/ArticleWrapper/ArticleWrapper";

const SubtractionPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = {
    link: "../arytmetyka",
    name: "Arytmetyka",
  };
  const childName = "Odejmowanie";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <SubtractionContent />
      </ArticleWrapper>
    </div>
  );
};

export default SubtractionPage;
