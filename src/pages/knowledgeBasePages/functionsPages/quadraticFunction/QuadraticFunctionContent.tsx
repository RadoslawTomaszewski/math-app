import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Proof from "../../../../components/articleItems/Proof";
import MathExpression from "../../../../components/articleItems/MathExpression";
import kwadratowaUjemna from "../../../../assets/images/function-graphs/kwadratowa-ujemna.png";
import kwadratowaDodatnia from "../../../../assets/images/function-graphs/kwadratowa-dodatnia.png";
import pseudokwadratowa from "../../../../assets/images/function-graphs/pseudokwadratowa.png";
import wierzcholek from "../../../../assets/images/function-graphs/wierzcholek.png";
import wyrazWolny from "../../../../assets/images/function-graphs/kwadratowa-wyraz-wolny.png";
import osSymetrii from "../../../../assets/images/function-graphs/kwadratowa-os-symetrii.png";
import GraphImage from "../../../../components/articleItems/GraphImage";
import { NavLink } from "react-router-dom";

const QuadraticFunctionContent: FC = () => {
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
    `x = \\frac{-b + \\sqrt{\\Delta}}{2a} \\lor x = \\frac{-b - \\sqrt{\\Delta}}{2a}`,
    `x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}`,
  ];

  const pProof = [
    `p = \\frac{x_1+x_2}{2}`,
    `p = \\frac{1}{2}\\left(\\frac{-b + \\sqrt{\\Delta}}{2a}+\\frac{-b - \\sqrt{\\Delta}}{2a}\\right)`,
    `p = \\frac{1}{2}\\left(\\frac{-2b + \\sqrt{\\Delta}-\\sqrt{\\Delta}}{2a}\\right)`,
    `p = \\frac{-b}{2a}`,
  ];

  const qProof = [
    `q = f(p)`,
    `q = ap^2 + bp + c`,
    `q = a\\left(\\frac{-b}{2a}\\right)^2 + b\\left(\\frac{-b}{2a}\\right) + c`,
    `q = a\\left(\\frac{b^2}{4a^2}\\right) + b\\left(\\frac{-b}{2a}\\right) + c`,
    `q = \\frac{b^2}{4a} + \\frac{-b^2}{2a}+ c`,
    `q = \\frac{b^2}{4a} + \\frac{-2b^2}{4a}+ \\frac{4ac}{4a}`,
    `q = \\frac{-b^2+4ac}{4a}`,
    `q = \\frac{-\\left(b^2-4ac\\right)}{4a}`,
    `q = \\frac{-\\Delta}{4a}`,
  ];

  return (
    <>
      <Title text={"Funkcja kwadratowa"} type={"main-article"} />
      <p>
        <b>Funkcja kwadratowa</b> to funkcja, której wykres jest parabolą.
      </p>
      <br />
      <p>
        Wzór funkcji kwadratowej w <b>postaci ogólnej</b>:
      </p>
      <Formula formula={`f(x) = ax^2 + bx + c`} />
      <p>Założenie:</p>
      <Formula formula={`a \\neq 0`} />
      <LegendParagraph
        type="short"
        notation="a"
        explanation="współczynnik kierunkowy"
      />
      <LegendParagraph type="top" notation="b" explanation="wyraz środkowy" />
      <LegendParagraph type="short" notation="c" explanation="wyraz wolny" />
      <ArticleBorder />
      <p>
        Wzór funkcji kwadratowej w <b>postaci kanonicznej</b>:
      </p>
      <Formula formula={`f(x) = a(x-p)^2 + q`} />
      <p>Założenie:</p>
      <Formula formula={`a \\neq 0`} />
      <LegendParagraph
        type="short"
        notation="p"
        explanation="rzędna wierzchołka paraboli"
      />
      <LegendParagraph
        type="short"
        notation="q"
        explanation="odcięta wierzchołka paraboli"
      />
      <ArticleBorder />
      <p>
        <b>Wyróżnik</b> funkcji kwadratowej (delta) to wartość wyrażona wzorem:
      </p>
      <Formula formula={`\\Delta = b^2 - 4ac`} />
      <p>Jeżeli Δ &gt; 0, to funkcja ma dwa pierwiastki rzeczywiste.</p>
      <p>Jeżeli Δ = 0, to funkcja ma jeden pierwiastek rzeczywisty.</p>
      <p>Jeżeli Δ &lt; 0, to funkcja nie ma pierwiastków rzeczywistych.</p>
      <ArticleBorder />
      <p>
        <b>Miejsce zerowe</b> (pierwiastek) funkcji kwadratowej wyraża się
        wzorem:
      </p>
      <Formula formula={`x_0 = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}`} />
      <p>Założenia:</p>
      <Formula formula={`a \\neq 0`} />
      <Formula formula={`\\Delta \\ge 0`} />
      <Proof steps={zeroPlaceProof} text="Dowód" />
      <br />
      <p className="flex">
        W przypadku gdy funkcja kwadratowa ma dwa pierwiastki rzeczywiste używa
        się oznaczeń:
      </p>
      <Formula formula={`x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}`} />
      <Formula formula={`x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}`} />
      <ArticleBorder />
      <p>
        Wzór funkcji kwadratowej w <b>postaci iloczynowej</b>
        &nbsp;nie zawsze istnieje. Należy rozpatrzyć trzy przypadki:
      </p>
      <div className="my-2 grid md:grid-cols-3">
        <div>
          <Formula
            formula={`f(x) = a\\left(x-x_1\\right)\\left(x-x_2\\right)`}
          />
          <div className="flex flex-wrap ml-2 my-2 justify-center">
            gdy Δ &gt; 0
          </div>
        </div>
        <div>
          <Formula formula={`f(x) = a\\left(x-x_0\\right)^2`} />
          <div className="flex flex-wrap ml-2 my-2 justify-center">
            gdy Δ = 0
          </div>
        </div>
        <div>
          <Formula formula={`nie~istnieje`} />
          <div className="flex flex-wrap ml-2 my-2 justify-center">
            gdy Δ &lt; 0
          </div>
        </div>
        <p>Założenie:</p>
        <Formula formula={`a \\neq 0`} />
      </div>
      <ArticleBorder />
      <p>
        <b>Współczynnik kierunkowy</b> funkcji kwadratowej określa, w którą
        stronę skierowane są ramiona paraboli
      </p>
      <div className="my-2 grid md:grid-cols-3">
        <div>
          <GraphImage
            src={kwadratowaDodatnia}
            size="full"
            alt="wykres funkcji kwadratowej z dodatnim współczynnikiem a"
          />
          <div className="flex flex-wrap ml-2 my-2 justify-center">
            <p>Jeżeli&nbsp;</p>
            <MathExpression expression={`a > 0`} />
            <p>&nbsp;ramiona paraboli są skierowane w górę</p>
          </div>
        </div>
        <div>
          <GraphImage
            src={kwadratowaUjemna}
            size="full"
            alt="wykres funkcji kwadratowej z ujemnym współczynnikiem a"
          />
          <div className="flex flex-wrap ml-2 my-2 justify-center">
            <p>Jeżeli&nbsp;</p>
            <MathExpression expression={`a < 0`} />
            <p>&nbsp;ramiona paraboli są skierowane w dół</p>
          </div>
        </div>
        <div>
          <GraphImage
            src={pseudokwadratowa}
            size="full"
            alt="wykres funkcji kwadratowej równoległej do osi X"
          />
          <div className="flex flex-wrap ml-2 my-2 justify-center">
            <p>Jeżeli&nbsp;</p>
            <MathExpression expression={`a = 0`} />
            <p>&nbsp;mamy doczynienia z&nbsp;</p>
            <NavLink to="../funkcja-liniowa">funkcją liniową</NavLink>
          </div>
        </div>
      </div>
      <ArticleBorder />
      <p>
        <b>Wierzchołek paraboli</b> to punkt położony najniżej lub najwyżej na
        wykresie funkcji w zależności od kierunku skierowania ramion.
      </p>
      <GraphImage src={wierzcholek} size="small" alt="Wierzchołek paraboli" />
      <p>Współrzędne wierzchołka są oznaczane następująco:</p>
      <Formula formula={`W = \\left(p , q \\right)`} />
      <p>
        Współrzędna iksowa wierzchołka jest równa takiej wartości argumentu,
        która jest równo odległa od symetralnych punktów o tej samej wartości
        (np miejsc zerowych):
      </p>
      <Formula formula={`p = \\frac{x_1+x_2}{2}`} />
      <p>Częściej używana postać tego wzoru to:</p>
      <Formula formula={`p = \\frac{-b}{2a}`} />
      <Proof steps={pProof} text="Dowód" />
      <br />
      <p>
        Współrzędna igrekowa wierzchołka jest równa wartości funkcji dla
        argumentu, który jest równo odległy od symetralnych punktów o tej samej
        wartości (np miejsc zerowych):
      </p>
      <Formula formula={`q = f(p)`} />
      <p>Częściej używana postać tego wzoru to:</p>
      <Formula formula={`q = \\frac{-\\Delta}{4a}`} />
      <Proof steps={qProof} text="Dowód" />
      <ArticleBorder />
      <p>
        <b>Oś symetrii</b> paraboli to równanie prostej równoległej do osi OY,
        które wyraża się wzorem:
      </p>
      <Formula formula={`x = p`} />
      <GraphImage
        src={osSymetrii}
        size="small"
        alt="Punkt przecięcia z osią oy"
      />
      <ArticleBorder />
      <p>
        <b>Wyraz wolny</b> funkcji kwadratowej pozwala określić współrzędne
        punktu przecięcia wykresu funkcji z osią OY:
      </p>
      <GraphImage
        src={wyrazWolny}
        size="small"
        alt="Punkt przecięcia z osią oy"
      />
      <Formula formula={`P_{oy} = (0,c)`} />
      <ArticleBorder />
      <b>Rysowanie wykresu funkcji kwadratowej:</b>
      <p>
        Aby narysować wykres funkcji kwadratowej najpierw należy wyznaczyć
        współrzędne wierzchołka paraboli. Następnie trzeba wyznaczyć kilka
        dowolnych punktów po lewo i prawo od wierzchołka paraboli. Wartości
        wylicza się poprzez podstawienie wybranego argumentu do wzoru funkcji
        kwadratowej w dowolnej postaci. Im więcej punktów zostanie wyznaczonych,
        tym szkic paraboli będzie dokładniejszy. Zalecane jest wyznaczenie
        punktów przecięcia wykresu funkcji z osią OY oraz OX (przez wyliczenie
        miejsc zerowych).
      </p>
    </>
  );
};

export default QuadraticFunctionContent;
