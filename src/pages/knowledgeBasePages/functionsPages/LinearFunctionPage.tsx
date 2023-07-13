import { FC } from "react";
import Title from "../../../utilities/Title";
import { MathComponent } from "mathjax-react";

const LinearFunctionPage: FC = () => {
  return (
    <div className="p-5 justify-center flex">
      <div className="p-3 border-2 border-navColor rounded w-fit">
        <Title text={"Funkcja liniowa"} size={"H2"} />
        <p>
          <b>Funkcja liniowa</b> to funkcja, której wykres wyraża się linią
          prostą
        </p>
        <br />
        <p>Ogólny wzór funkcji liniowej:</p>
        <div className="flex justify-center">
          <MathComponent tex={`f(x)=ax^2+b`} />
        </div>
        <p>gdzie:</p>
        <div className="flex mr-1">
          <MathComponent tex={`a`} />
          <p className="mb-0">- współczynnik kierunkowy</p>
        </div>
        <div className="flex mr-1">
          <MathComponent tex={`b`} />
          <p className="mb-0">- wyraz wolny</p>
        </div>
        <br />
        <p>
          <b>Miejsce zerowe</b> funkcji liniowej wyraża się wzorem:
        </p>
        <div className="flex justify-center">
          <MathComponent tex={`x_0 = \\frac{-b}{2a}`} />
        </div>
      </div>
    </div>
  );
};

export default LinearFunctionPage;
