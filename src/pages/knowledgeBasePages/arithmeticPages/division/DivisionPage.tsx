import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import DivisionContent from "./DivisionContent";
import { ArticleWrapper } from "../../../../components/ArticleWrapper/ArticleWrapper";

const DivisionPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = {
    link: "../arytmetyka",
    name: "Arytmetyka",
  };
  const childName = "Dzielenie";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <DivisionContent />
      </ArticleWrapper>
    </div>
  );
};

export default DivisionPage;
