import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import LinearFunctionContent from "../linearFunction/LinearFunctionContent";
import { ArticleWrapper } from "../../../../components/ArticleWrapper/ArticleWrapper";

const LinearFunctionPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = { link: "../funkcje", name: "Funkcje" };
  const childName = "Funkcja liniowa";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <LinearFunctionContent />
      </ArticleWrapper>
    </div>
  );
};

export default LinearFunctionPage;
