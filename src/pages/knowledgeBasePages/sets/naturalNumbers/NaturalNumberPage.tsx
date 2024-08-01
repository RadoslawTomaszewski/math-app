import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import NaturalNumberContent from "./NaturalNumberContent";
import { ArticleWrapper } from "../../../../components/Wrappers/ArticleWrapper";

const NaturalNumberPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = {
    link: "../zbiory",
    name: "Zbiory",
  };
  const childName = "Liczby Naturalne";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <NaturalNumberContent />
      </ArticleWrapper>
    </div>
  );
};

export default NaturalNumberPage;
