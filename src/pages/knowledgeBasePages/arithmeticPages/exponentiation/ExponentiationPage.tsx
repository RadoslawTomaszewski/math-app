import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import ExponentiationContent from "./ExponentiationContent";
import { ArticleWrapper } from "../../../../components/Wrappers/ArticleWrapper";

const ExponentiationPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = {
    link: "../arytmetyka",
    name: "Arytmetyka",
  };
  const childName = "Potęgowanie";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <ExponentiationContent />
      </ArticleWrapper>
    </div>
  );
};

export default ExponentiationPage;
