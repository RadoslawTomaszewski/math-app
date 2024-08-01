import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import NaturalNumberContent from "./SetOperationsContent";
import { ArticleWrapper } from "../../../../components/Wrappers/ArticleWrapper";

const SetOperationsPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = {
    link: "../zbiory",
    name: "Zbiory",
  };
  const childName = "Działania na zbiorach";

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

export default SetOperationsPage;
