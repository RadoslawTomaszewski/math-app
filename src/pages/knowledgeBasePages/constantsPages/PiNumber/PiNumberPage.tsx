import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import PiNumberContent from "./PiNumberContent";
import { ArticleWrapper } from "../../../../components/ArticleWrapper/ArticleWrapper";

const PiNumberPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = {
    link: "../wyrazenia-algebraiczne",
    name: "Wyrażenia algebraiczne",
  };
  const childName = "Liczba Pi";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <PiNumberContent />
      </ArticleWrapper>
    </div>
  );
};

export default PiNumberPage;
