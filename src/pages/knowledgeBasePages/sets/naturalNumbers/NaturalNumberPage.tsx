import { FC } from "react";
import LinksHeader from "../../../../utilities/LinksHeader";
import NaturalNumberContent from "./NaturalNumberContent";
import { Wrapper } from "../../../../components/Wrapper/Wrapper";

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
      <Wrapper>
        <NaturalNumberContent />
      </Wrapper>
    </div>
  );
};

export default NaturalNumberPage;
