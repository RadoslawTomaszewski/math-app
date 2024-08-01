import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import ShortMultiplicationFormulasContent from "./ShortMultiplicationFormulasContent";
import { ArticleWrapper } from "../../../../components/Wrappers/ArticleWrapper";

const ShortMultiplicationPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = {
    link: "../wyrazenia-algebraiczne",
    name: "Wyrażenia algebraiczne",
  };
  const childName = "Wzory skróconego mnożenia";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <ShortMultiplicationFormulasContent />
      </ArticleWrapper>
    </div>
  );
};

export default ShortMultiplicationPage;
