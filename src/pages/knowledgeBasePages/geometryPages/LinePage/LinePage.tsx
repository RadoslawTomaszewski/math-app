import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import { ArticleWrapper } from "../../../../components/Wrappers/ArticleWrapper";
import LineContent from "./LineContent";

const LinePage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = { link: "../geometria", name: "Geometria" };
  const childName = "Prosta";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <LineContent />
      </ArticleWrapper>
    </div>
  );
};

export default LinePage;
