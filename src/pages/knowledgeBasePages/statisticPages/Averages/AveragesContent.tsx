import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Formula from "../../../../components/articleItems/Formula";
import { statisticEquations } from "../../../../types/equations";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";

const AveragesContent: FC = () => {
  return (
    <>
      <Title text={"Średnie Liczbowe"} type={"main-article"} />
      <p>
        <b>Średnia liczbowa</b> to próba zdefiniowania środkowej wartości spośród danego zbioru.
      </p>
      <br />
      <p>Formalnie średnia to dowolna funkcja</p><Formula formula={statisticEquations.AVERAGE_DEFINITION_FUNCTION} /><p> spełniająca dla dowolnych argumentów warunek:</p>
      <div className="overflow-x-auto">
        <Formula formula={statisticEquations.AVERAGE_DEFINITION_INEQUALITY} />
      </div>
      <ArticleBorder />
      <Title text={"Mediana"} type={"submain-article"} />
      <p><b>Mediana</b> to wartość środkowa uporządkowanego w kolejności niemalejącej zbioru n liczb zdefiniowana w następujący sposób</p>
      <p>a) gdy n jest nieparzyste</p>
      <Formula formula={statisticEquations.MEDIANA_2N_1} />
      <p>b) gdy n jest parzyste</p>
      <Formula formula={statisticEquations.MEDIANA_2N} />
      <LegendParagraph type={"top"} notation={"\\bar{m}"} explanation={"mediana"} />
      <ArticleBorder />
      <Title text={"Średnia arytmetyczna"} type={"submain-article"} />
      <p><b>Średnia arytmetyczna</b> to suma liczb podzielona przez ich liczbę.</p>
      <Formula formula={statisticEquations.ARITHMETIC_MEAN} />
      <LegendParagraph type={"top"} notation={"\\bar{a}"} explanation={"średnia arytmetyczna"} />
      <ArticleBorder />
      <Title text={"Średnia geometryczna"} type={"submain-article"} />
      <p><b>Średnia geometryczna</b> to n-ty pierwiastek iloczynu liczby elementów w próbie.</p>
      <Formula formula={statisticEquations.GEOMETRIC_MEAN} />
      <LegendParagraph type={"top"} notation={"\\bar{g}"} explanation={"średnia geometryczna"} />
      <ArticleBorder />
      <Title text={"Średnia kwadratowa"} type={"submain-article"} />
      <p><b>Średnia kwadratowa</b> to pierwiastek ze średniej arytmetycznej kwadratów tych liczb.</p>
      <Formula formula={statisticEquations.SQUARE_MEAN} />
      <LegendParagraph type={"top"} notation={"\\bar{k}"} explanation={"średnia kwadratowa"} />
      <ArticleBorder />
      <Title text={"Średnia harmoniczna"} type={"submain-article"} />
      <p><b>Średnia harmoniczna</b> to iloraz liczby elementów w próbie przez sumę odwrotności tych elementów</p>
      <Formula formula={statisticEquations.HARMONIC_MEAN} />
      <LegendParagraph type={"top"} notation={"\\bar{h}"} explanation={"średnia harmoniczna"} />
      <ArticleBorder />
      <Title text={"Nierówności Cauchy'ego"} type={"submain-article"} />
      <p>Zgodnie z <b>nierównościami Cauchy'ego</b> prawdziwe są nierówności</p>
      <Formula formula={statisticEquations.CAUCHY_INEQUALITY} />
      <p>co można zapisać również jako</p>
      <div className="overflow-x-auto">
        <div className="flex justify-center my-4 min-w-[900px]">
          <Formula formula={statisticEquations.CAUCHY_INEQUALITY_FULL} />
        </div>
      </div>

      <p>przy czym warunek</p>
      <Formula formula={statisticEquations.CAUCHY_INEQUALITY_CASE} />
      <p>jest spełniony gdy wszystkie elementy próby są równe</p>
      <ArticleBorder />
      <Title text={"Dominanta"} type={"submain-article"} />
      <p><b>Dominanta (moda)</b> wartość występująca w próbie najczęściej. Dominantą może być więcej niż jeden element.</p>
      <ArticleBorder />
      <Title text={"Środek rozstępu"} type={"submain-article"} />
      <p><b>Środek rozstępu</b> (<i>eng: mid-range</i>) - średnia arytmetyczna skrajnych wartości wyznaczających punkty krańcowe rozstępu</p>
      <Formula formula={statisticEquations.RANGE_MIDDLE} />
      <LegendParagraph type={"top"} notation="\bar{M}" explanation="środek rozstępu" />
    </>
  );
};

export default AveragesContent;
