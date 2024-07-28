import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import PolynomialContent from "./PolynomialContent";
import { ArticleWrapper } from "../../../../components/ArticleWrapper/ArticleWrapper";

const PolynomialPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = {
    link: "../wyrazenia-algebraiczne",
    name: "Wyrażenia algebraiczne",
  };
  const childName = "Wielomiany";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <PolynomialContent />
      </ArticleWrapper>
    </div>
  );
};

export default PolynomialPage;
