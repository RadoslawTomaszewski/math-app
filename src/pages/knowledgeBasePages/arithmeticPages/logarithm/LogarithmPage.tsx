import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import LogarithmContent from "./LogarithmContent";
import { ArticleWrapper } from "../../../../components/ArticleWrapper/ArticleWrapper";

const LogarithmPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = {
    link: "../arytmetyka",
    name: "Arytmetyka",
  };
  const childName = "Mnożenie";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <LogarithmContent />
      </ArticleWrapper>
    </div>
  );
};

export default LogarithmPage;
