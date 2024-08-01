import { FC } from "react";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import AdditionContent from "./AdditionContent";
import { ArticleWrapper } from "../../../../components/Wrappers/ArticleWrapper";

const AdditionPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = {
    link: "../arytmetyka",
    name: "Arytmetyka",
  };
  const childName = "Dodawanie";

  return (
    <div className="p-2 justify-center flex flex-col">
      <Breadcrumb
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <ArticleWrapper>
        <AdditionContent />
      </ArticleWrapper>
    </div>
  );
};

export default AdditionPage;
