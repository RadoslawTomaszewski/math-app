import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import HomographicFunctionContent from "../homographicFunction/HomographicFunctionContent";
import { ArticleWrapper } from "../../../../components/Wrappers/ArticleWrapper";

const HomographicFunctionPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = { link: "../funkcje", name: "Funkcje" };
  const childName = "Funkcja Homograficzna";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <HomographicFunctionContent />
      </ArticleWrapper>
    </div>
  );
};

export default HomographicFunctionPage;
