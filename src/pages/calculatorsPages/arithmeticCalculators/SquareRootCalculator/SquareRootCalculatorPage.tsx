import { useState, FC, ChangeEvent } from "react";
import { ArticleWrapper } from "../../../../components/ArticleWrapper/ArticleWrapper";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import SquareRootCalculatorContent from "./SquareRootCalculatorContent";

const SquareRootCalculatorPage: FC = () => {
  const grandparent = { link: "../", name: "Kalkulatory" };
  const parent = { link: "../arytmetyka", name: "Arytmetyka" };
  const childName = "Wyciąganie czynnika przed pierwiastek kwadratowy";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <SquareRootCalculatorContent />
      </ArticleWrapper>
    </div>
  );
};

export default SquareRootCalculatorPage;
