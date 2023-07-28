import { FC } from "react";
import LinksHeader from "../../../../utilities/LinksHeader";
import ShortMultiplicationFormulasContent from "./ShortMultiplicationFormulasContent";

const ShortMultiplicationFormulasPage: FC = () => {
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
      <div className="p-3 border-2 border-navColor bg-articleColor rounded">
        <ShortMultiplicationFormulasContent />
      </div>
    </div>
  );
};

export default ShortMultiplicationFormulasPage;
