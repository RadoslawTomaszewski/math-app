import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import MultiplicationContent from "./MultiplicationContent";
import { ArticleWrapper } from "../../../../components/ArticleWrapper/ArticleWrapper";

const MultiplicationPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = {
    link: "../arytmetyka",
    name: "Arytmetyka",
  };
  const childName = "Mnożenie";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <MultiplicationContent />
      </ArticleWrapper>
    </div>
  );
};

export default MultiplicationPage;
