import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import ArithmeticSequenceContent from "./ArithmeticSequenceContent";
import { ArticleWrapper } from "../../../../components/ArticleWrapper/ArticleWrapper";

const ArithmeticSequencePage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = { link: "../ciagi", name: "Ciągi" };
  const childName = "Ciąg arytmetyczny";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <ArithmeticSequenceContent />
      </ArticleWrapper>
    </div>
  );
};

export default ArithmeticSequencePage;
