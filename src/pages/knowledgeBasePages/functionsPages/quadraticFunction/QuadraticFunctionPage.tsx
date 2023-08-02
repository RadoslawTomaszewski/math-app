import { FC } from "react";
import LinksHeader from "../../../../utilities/LinksHeader";
import QuadraticFunctionContent from "./QuadraticFunctionContent";
import { Wrapper } from "../../../../components/Wrapper/Wrapper";

const QuadraticFunctionPage: FC = () => {
  const grandparent = { link: "../", name: "Baza Wiedzy" };
  const parent = { link: "../funkcje", name: "Funkcje" };
  const childName = "Funkcja kwadratowa";

  return (
    <div className="p-2 justify-center flex flex-col">
      <LinksHeader
        grandparent={grandparent}
        parent={parent}
        childName={childName}
      />
      <Wrapper>
        <QuadraticFunctionContent />
      </Wrapper>
    </div>
  );
};

export default QuadraticFunctionPage;
