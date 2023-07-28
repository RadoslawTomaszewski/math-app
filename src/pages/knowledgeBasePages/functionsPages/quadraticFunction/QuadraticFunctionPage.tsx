import { FC } from "react";
import LinksHeader from "../../../../utilities/LinksHeader";
import QuadraticFunctionContent from "./QuadraticFunctionContent";

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
      <div className="p-3 border-2 border-navColor bg-articleColor rounded w-fit">
        <QuadraticFunctionContent />
      </div>
    </div>
  );
};

export default QuadraticFunctionPage;
