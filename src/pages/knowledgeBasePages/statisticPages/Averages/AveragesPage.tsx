import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import AveragesContent from "./AveragesContent";
import { ArticleWrapper } from "../../../../components/Wrappers/ArticleWrapper";

const AveragesPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = {
    link: "../statystyka",
    name: "Statystyka",
  };
  const childName = "Średnie Liczbowe";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <AveragesContent />
      </ArticleWrapper>
    </div>
  );
};

export default AveragesPage;
