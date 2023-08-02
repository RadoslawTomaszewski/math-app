import { FC } from "react";
import LinksHeader from "../../../../utilities/LinksHeader";
import ShortMultiplicationFormulasContent from "./ShortMultiplicationFormulasContent";
import { Wrapper } from "../../../../components/Wrapper/Wrapper";

const ShortMultiplicationPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = {
    link: "../wyrazenia-algebraiczne",
    name: "Wyrażenia algebraiczne",
  };
  const childName = "Wzory skróconego mnożenia";

  return (
    <div className="p-2 justify-center flex flex-col">
      <LinksHeader
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <Wrapper>
        <ShortMultiplicationFormulasContent />
      </Wrapper>
    </div>
  );
};

export default ShortMultiplicationPage;
