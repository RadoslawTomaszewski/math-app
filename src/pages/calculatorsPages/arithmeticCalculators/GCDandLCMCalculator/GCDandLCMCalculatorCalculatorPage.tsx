import { FC } from "react";
import { ArticleWrapper } from "../../../../components/ArticleWrapper/ArticleWrapper";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import GCDandLCMCalculatorContent from "./GCDandLCMCalculatorContent";

const GCDandLCMCalculatorPage: FC = () => {
  const grandparent = { link: "../", name: "Kalkulatory" };
  const parent = { link: "../arytmetyka", name: "Arytmetyka" };
  const childName = "Rozkład liczby na czynniki pierwsze";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <div className="p-2 flex flex-col items-center min-h-[350px]">
          <GCDandLCMCalculatorContent />
        </div>
      </ArticleWrapper>
    </div>
  );
};

export default GCDandLCMCalculatorPage;
