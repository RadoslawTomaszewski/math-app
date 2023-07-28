import { FC } from "react";
import LinksHeader from "../../../../utilities/LinksHeader";
import ArithmeticSequenceContent from "./ArithmeticSequenceContent";

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
      <div className="p-3 border-2 border-navColor bg-articleColor rounded">
        <ArithmeticSequenceContent />
      </div>
    </div>
  );
};

export default ArithmeticSequencePage;
