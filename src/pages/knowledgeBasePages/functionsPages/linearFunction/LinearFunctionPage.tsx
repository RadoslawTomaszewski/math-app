import { FC } from "react";
import LinksHeader from "../../../../utilities/LinksHeader";
import LinearFunctionContent from "../linearFunction/LinearFunctionContent";
import { Wrapper } from "../../../../components/Wrapper/Wrapper";

const LinearFunctionPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = { link: "../funkcje", name: "Funkcje" };
  const childName = "Funkcja liniowa";

  return (
    <div className="p-2 justify-center flex flex-col">
      <LinksHeader
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <Wrapper>
        <LinearFunctionContent />
      </Wrapper>
    </div>
  );
};

export default LinearFunctionPage;
