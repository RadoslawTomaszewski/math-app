import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import GeometricSequenceContent from "./GeometricSequenceContent";
import { ArticleWrapper } from "../../../../components/ArticleWrapper/ArticleWrapper";

const GeometricSequencePage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = { link: "../ciagi", name: "Ciągi" };
  const childName = "Ciąg geometryczny";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <GeometricSequenceContent />
      </ArticleWrapper>
    </div>
  );
};

export default GeometricSequencePage;
