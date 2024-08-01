import { FC } from "react";
import { ArticleWrapper } from "../../../../components/Wrappers/ArticleWrapper";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import QuadraticFunctionCalculatorContent from "./QuadraticFunctionCalculatorContent";

const QuadraticFunctionCalculatorPage: FC = () => {
  const grandparent = { link: "../", name: "Kalkulatory" };
  const parent = { link: "../funkcje", name: "Funkcje" };
  const childName = "Kalkulator Funkcji Kwadratowej";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <div className="p-2 flex flex-col items-center min-h-[350px]">
          <QuadraticFunctionCalculatorContent />
        </div>
      </ArticleWrapper>
    </div>
  );
};

export default QuadraticFunctionCalculatorPage;
