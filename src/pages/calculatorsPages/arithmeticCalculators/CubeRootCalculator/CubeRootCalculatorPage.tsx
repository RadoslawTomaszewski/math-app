import { FC } from "react";
import { ArticleWrapper } from "../../../../components/ArticleWrapper/ArticleWrapper";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import CubeRootCalculatorContent from "./CubeRootCalculatorContent";

const CubeRootCalculatorPage: FC = () => {
  const grandparent = { link: "../", name: "Kalkulatory" };
  const parent = { link: "../arytmetyka", name: "Arytmetyka" };
  const childName = "Wyciąganie czynnika przed pierwiastek sześcienny";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <div className="p-2 flex flex-col items-center min-h-[350px]">
          <CubeRootCalculatorContent />
        </div>
      </ArticleWrapper>
    </div>
  );
};

export default CubeRootCalculatorPage;
