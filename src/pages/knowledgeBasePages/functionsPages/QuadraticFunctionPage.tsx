import { FC } from "react";
import Title from "../../../utilities/Title";
import LegendParagraph from "../../../utilities/articleItems/LegendParagraph";
import Formula from "../../../utilities/articleItems/Formula";
import ArticleBorder from "../../../utilities/articleItems/ArticleBorder";
import Proof from "../../../utilities/articleItems/Proof";
import MathExpression from "../../../utilities/articleItems/MathExpression";
import kwadratowaUjemna from "../../../assets/images/function-graphs/kwadratowa-ujemna.png";
import kwadratowaDodatnia from "../../../assets/images/function-graphs/kwadratowa-dodatnia.png";
import kwadratowaRowna from "../../../assets/images/function-graphs/kwadratowa-rownolegla.png";
import wierzcholek from "../../../assets/images/function-graphs/wierzcholek.png";
import GraphImage from "../../../utilities/articleItems/GraphImage";

const QuadraticFunctionPage: FC = () => {
  const zeroPlaceProof = [
    `ax^2 + bx + c = 0`,
    `x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0`,
    `x^2 + \\frac{b}{a}x = -\\frac{c}{a}`,
    `x^2 + \\frac{b}{a}x + \\frac{b^2}{4a^2} = -\\frac{c}{a} + \\frac{b^2}{4a^2}`,
    `\\left(x + \\frac{b}{2a}\\right)^2 = -\\frac{c}{a} + \\frac{b^2}{4a^2}`,
    `\\left(x + \\frac{b}{2a}\\right)^2 = -\\frac{4ac}{4a^2} + \\frac{b^2}{4a^2}`,
    `\\left({x} + \\frac{b}{2a}\\right)^2 = \\frac{b^2-4ac}{4a^2}`,
    `\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{\\Delta}{4a^2}`,
    `\\sqrt{\\left(x + \\frac{b}{2a}\\right)^2} = \\sqrt{\\frac{\\Delta}{4a^2}}`,
    `\\left|x + \\frac{b}{2a}\\right| = \\frac{\\sqrt{\\Delta}}{2a}`,
    `x + \\frac{b}{2a} = \\frac{\\sqrt{\\Delta}}{2a} \\lor x + \\frac{b}{2a} = -\\frac{\\sqrt{\\Delta}}{2a}`,
    `x = -\\frac{b}{2a} + \\frac{\\sqrt{\\Delta}}{2a} \\lor x = -\\frac{b}{2a} - \\frac{\\sqrt{\\Delta}}{2a}`,
    `x = \\frac{-b - \\sqrt{\\Delta}}{2a} \\lor x = \\frac{-b + \\sqrt{\\Delta}}{2a}`,
    `x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}`,
  ];

  return (
    <div className="p-5 justify-center flex flex-col">
      <div>Baza wiedzy → Średnia → Funkcje → Funkcja Kwadratowa</div>
      <div className="p-3 border-2 border-navColor rounded w-fit">
        <Title text={"Funkcja kwadratowa"} size={"H2"} />
        <p>
          <b>Funkcja kwadratowa</b> to funkcja, której wykres jest parabolą.
        </p>
        <p>Ogólny wzór funkcji kwadratowej:</p>
        <Formula formula={`f(x) = ax^2 + bx + c`} />
        <LegendParagraph
          type="short"
          notation="a"
          explanation="współczynnik kierunkowy"
        />
        <LegendParagraph type="top" notation="b" explanation="wyraz środkowy" />
        <LegendParagraph type="short" notation="c" explanation="wyraz wolny" />
        <ArticleBorder />
        <p>
          <b>Wyróżnik</b> funkcji kwadratowej (delta) to wartość wyrażona
          wzorem:
        </p>
        <Formula formula={`\\Delta = b^2 - 4ac`} />
        <p>Jeżeli Δ &gt; 0, to funkcja ma dwa pierwiastki rzeczywiste.</p>
        <p>Jeżeli Δ = 0, to funkcja ma jeden pierwiastek rzeczywisty.</p>
        <p>Jeżeli Δ &lt; 0, to funkcja nie ma pierwiastków rzeczywistych.</p>
        <ArticleBorder />
        <p>
          <b>Miejsce zerowe</b> funkcji kwadratowej wyraża się wzorem:
        </p>
        <Formula formula={`x_0 = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}`} />
        <Proof steps={zeroPlaceProof} text="Dowód" />
        <ArticleBorder />
        <p>
          <b>Współczynnik "a"</b> decyduje o kształcie paraboli:
        </p>
        <div className="my-2 grid md:grid-cols-3">
          <div>
            <GraphImage
              src={kwadratowaUjemna}
              size="full"
              alt="wykres funkcji kwadratowej z ujemnym współczynnikiem a"
            />
            <div className="flex flex-wrap ml-2 my-2 justify-center">
              <p>Jeżeli&nbsp;</p>
              <MathExpression expression={`a < 0`} />
              <p>&nbsp;parabola skierowana jest w dół</p>
            </div>
          </div>
          <div>
            <GraphImage
              src={kwadratowaDodatnia}
              size="full"
              alt="wykres funkcji kwadratowej z dodatnim współczynnikiem a"
            />
            <div className="flex flex-wrap ml-2 my-2 justify-center">
              <p>Jeżeli&nbsp;</p>
              <MathExpression expression={`a > 0`} />
              <p>&nbsp;parabola skierowana jest w górę</p>
            </div>
          </div>
          <div>
            <GraphImage
              src={kwadratowaRowna}
              size="full"
              alt="wykres funkcji kwadratowej równoległej do osi X"
            />
            <div className="flex flex-wrap ml-2 my-2 justify-center">
              <p>Jeżeli&nbsp;</p>
              <MathExpression expression={`a = 0`} />
              <p>&nbsp;funkcja jest równoległa do osi X</p>
            </div>
          </div>
        </div>
        <ArticleBorder />
        <p>
          <b>Wyznaczanie wierzchołka</b> paraboli:
        </p>
        <GraphImage src={wierzcholek} size="small" alt="Wierzchołek paraboli" />
        <Formula formula={`p = \\frac{-b}{2a}`} />
        <Formula formula={`q = f(p) = f\\left(\\frac{-b}{2a}\\right)`} />
        <ArticleBorder />
        <b>Rysowanie wykresu funkcji kwadratowej:</b>
        <p>
          Aby narysować wykres funkcji kwadratowej, można zastosować kilka
          metod, w tym znalezienie wierzchołka, wyznaczenie punktów przecięcia z
          osiami, lub skorzystanie z dodatkowych punktów charakterystycznych.
        </p>
        <ArticleBorder />
        <p>
          Każda funkcja kwadratowa jest <b>równaniem wykresu paraboli</b>
        </p>
      </div>
    </div>
  );
};

export default QuadraticFunctionPage;
