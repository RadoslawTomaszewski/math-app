import { FC } from "react";
import { ArticleWrapper } from "../../../../components/ArticleWrapper/ArticleWrapper";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import SumCalculatorContent from "./SumCalculatorContent";

const SumCalculatorPage: FC = () => {
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
        <div className="p-2 flex flex-col items-center min-h-[350px]">
          <SumCalculatorContent />
        </div>
      </ArticleWrapper>
    </div>
  );
};

export default SumCalculatorPage;
