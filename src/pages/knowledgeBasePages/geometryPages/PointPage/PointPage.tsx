import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import { ArticleWrapper } from "../../../../components/ArticleWrapper/ArticleWrapper";
import PointContent from "./PointContent";

const PointPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = { link: "../geometria", name: "Geometria" };
  const childName = "Punkt";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <PointContent />
      </ArticleWrapper>
    </div>
  );
};

export default PointPage;
