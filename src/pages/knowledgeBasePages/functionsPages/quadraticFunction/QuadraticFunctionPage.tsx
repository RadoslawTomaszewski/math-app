import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import QuadraticFunctionContent from "./QuadraticFunctionContent";
import { ArticleWrapper } from "../../../../components/Wrappers/ArticleWrapper";

const QuadraticFunctionPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = { link: "../funkcje", name: "Funkcje" };
  const childName = "Funkcja kwadratowa";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <QuadraticFunctionContent />
      </ArticleWrapper>
    </div>
  );
};

export default QuadraticFunctionPage;
