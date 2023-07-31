import { FC } from "react";
import LinksHeader from "../../../../utilities/LinksHeader";
import NaturalNumberContent from "./NaturalNumberContent";

const NaturalNumberPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = {
    link: "../zbiory",
    name: "Zbiory",
  };
  const childName = "Liczby Naturalne";

  return (
    <div className="p-2 justify-center flex flex-col">
      <LinksHeader
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <div className="p-3 border-2 border-navColor bg-articleColor rounded">
        <NaturalNumberContent />
      </div>
    </div>
  );
};

export default NaturalNumberPage;
