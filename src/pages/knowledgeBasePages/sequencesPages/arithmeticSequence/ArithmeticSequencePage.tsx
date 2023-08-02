import { FC } from "react";
import LinksHeader from "../../../../utilities/LinksHeader";
import ArithmeticSequenceContent from "./ArithmeticSequenceContent";
import { Wrapper } from "../../../../components/Wrapper/Wrapper";

const ArithmeticSequencePage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = { link: "../ciagi", name: "Ciągi" };
  const childName = "Ciąg arytmetyczny";

  return (
    <div className="p-2 justify-center flex flex-col">
      <LinksHeader
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <Wrapper>
        <ArithmeticSequenceContent />
      </Wrapper>
    </div>
  );
};

export default ArithmeticSequencePage;
