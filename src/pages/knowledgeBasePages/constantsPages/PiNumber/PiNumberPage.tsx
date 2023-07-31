import { FC } from "react";
import LinksHeader from "../../../../utilities/LinksHeader";
import PiNumberContent from "./PiNumberContent";

const PiNumberPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = {
    link: "../wyrazenia-algebraiczne",
    name: "Wyrażenia algebraiczne",
  };
  const childName = "Liczba Pi";

  return (
    <div className="p-2 justify-center flex flex-col">
      <LinksHeader
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <div className="p-3 border-2 border-navColor bg-articleColor rounded">
        <PiNumberContent />
      </div>
    </div>
  );
};

export default PiNumberPage;
