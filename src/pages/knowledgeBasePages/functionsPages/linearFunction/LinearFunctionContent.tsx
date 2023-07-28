import { FC } from "react";
import Title from "../../../../utilities/Title";
import LegendParagraph from "../../../../utilities/articleItems/LegendParagraph";
import Formula from "../../../../utilities/articleItems/Formula";
import ArticleBorder from "../../../../utilities/articleItems/ArticleBorder";
import Proof from "../../../../utilities/articleItems/Proof";
import MathExpression from "../../../../utilities/articleItems/MathExpression";
import liniowaRosnaca from "../../../../assets/images/function-graphs/liniowa-rosnaca.png";
import liniowaMalejaca from "../../../../assets/images/function-graphs/liniowa-malejaca.png";
import liniowaStala from "../../../../assets/images/function-graphs/liniowa-stała.png";
import wyrazWolny from "../../../../assets/images/function-graphs/liniowa-wyraz-wolny.png";
import GraphImage from "../../../../utilities/articleItems/GraphImage";

const LinearFunctionContent: FC = () => {
  const zeroPlaceProof = [`ax+b=0`, `ax=-b`, `x = \\frac{-b}{a}`];

  return (
    <>
      <Title text={"Funkcja liniowa"} type={"main-article"} />
      <p>
        <b>Funkcja liniowa</b> to funkcja, której wykres jest linią prostą.
      </p>
      <br />
      <p>Ogólny wzór funkcji liniowej:</p>
      <Formula formula={`f(x)=ax+b`} />
      <LegendParagraph
        type="short"
        notation="a"
        explanation="współczynnik kierunkowy"
      />
      <LegendParagraph type="top" notation="b" explanation="wyraz wolny" />
      <ArticleBorder />
      <p>
        <b>Miejsce zerowe</b> funkcji liniowej wyraża się wzorem:
      </p>
      <Formula formula={`x_0 = \\frac{-b}{a}`} />
      <Proof steps={zeroPlaceProof} text="Dowód" />
      <ArticleBorder />
      <p>
        <b>Współczynnik kierunkowy</b> funkcji liniowej określa jej
        <b> monotoniczność</b>:
      </p>
      <div className="my-2 grid md:grid-cols-3">
        <div>
          <GraphImage
            src={liniowaRosnaca}
            size="full"
            alt="wykres funkcji liniowej rosnącej"
          />
          <div className="flex flex-wrap ml-2 my-2 justify-center">
            <p>Jeżeli&nbsp;</p>
            <MathExpression expression={`a>0`} />
            <p>&nbsp;funkcja jest rosnąca</p>
          </div>
        </div>
        <div>
          <GraphImage
            src={liniowaStala}
            size="full"
            alt="wykres funkcji liniowej stałej"
          />
          <div className="flex flex-wrap ml-2 my-2 justify-center">
            <p>Jeżeli&nbsp;</p>
            <MathExpression expression={`a=0`} />
            <p>&nbsp;funkcja jest stała</p>
          </div>
        </div>
        <div>
          <GraphImage
            src={liniowaMalejaca}
            size="full"
            alt="wykres funkcji liniowej malejącej"
          />
          <div className="flex flex-wrap ml-2 my-2 justify-center">
            <p>Jeżeli&nbsp;</p>
            <MathExpression expression={`a<0`} />
            <p>&nbsp;funkcja jest malejąca</p>
          </div>
        </div>
      </div>
      <ArticleBorder />
      <p>
        <b>Wyraz wolny</b> funkcji liniowej pozwala określić współrzędne punktu
        przecięcia wykresu funkcji z osią OY:
      </p>
      <GraphImage
        src={wyrazWolny}
        size="small"
        alt="Punkt przecięcia z osią oy"
      />
      <Formula formula={`P_{oy} = (0,b)`} />
      <ArticleBorder />
      <b>Rysowanie wykresu funkcji liniowej:</b>
      <p>
        Aby narysować wykres funkcji liniowej wystarczy znać dwa punkty, których
        współrzędne spełniają równanie danej funkcji. Następnie należy
        poprowadzić prostą przechodzącą przez oba punkty.
      </p>
      <ArticleBorder />
      <p>
        Każda funkcja liniowa jest <b>równaniem wykresu prostej</b>
      </p>
    </>
  );
};

export default LinearFunctionContent;
