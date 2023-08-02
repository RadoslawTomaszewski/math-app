import { FC } from "react";
import LinksHeader from "../../../../utilities/LinksHeader";
import PiNumberContent from "./PiNumberContent";
import { Wrapper } from "../../../../components/Wrapper/Wrapper";

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
      <Wrapper>
        <PiNumberContent />
      </Wrapper>
    </div>
  );
};

export default PiNumberPage;
