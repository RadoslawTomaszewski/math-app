import { FC } from "react";
import LinksHeader from "../../../../utilities/LinksHeader";
import GeometricSequenceContent from "./GeometricSequenceContent";
import { Wrapper } from "../../../../components/Wrapper/Wrapper";

const GeometricSequencePage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = { link: "../ciagi", name: "Ciągi" };
  const childName = "Ciąg geometryczny";

  return (
    <div className="p-2 justify-center flex flex-col">
      <LinksHeader
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <Wrapper>
        <GeometricSequenceContent />
      </Wrapper>
    </div>
  );
};

export default GeometricSequencePage;
