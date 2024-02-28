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
      <p><b>Średnia geometryczna</b> to n-ty pierwiastek iloczynu n liczb.</p>
      <Formula formula={statisticEquations.GEOMETRIC_MEAN} />
      <LegendParagraph type={"top"} notation={"\\bar{g}"} explanation={"średnia geometryczna"} />
      <ArticleBorder />
      <Title text={"Średnia kwadratowa"} type={"submain-article"} />
      <p><b>Średnia kwadratowa</b> to pierwiastek ze średniej arytmetycznej kwadratów tych liczb.</p>
      <Formula formula={statisticEquations.SQUARE_MEAN} />
      <LegendParagraph type={"top"} notation={"\\bar{k}"} explanation={"średnia kwadratowa"} />
      <ArticleBorder />
      <Title text={"Średnia harmoniczna"} type={"submain-article"} />
      <Formula formula={statisticEquations.HARMONIC_MEAN} />
      <LegendParagraph type={"top"} notation={"\\bar{h}"} explanation={"średnia harmoniczna"} />
      <ArticleBorder />
      <Title text={"Nierówności Cauchy'ego"} type={"submain-article"} />
      <Formula formula={statisticEquations.CAUCHY_INEQUALITY} />
      <ArticleBorder />
      <Title text={"Średnia ważona arytmetyczna"} type={"submain-article"} />
      <p>...</p>
      <ArticleBorder />
      <Title text={"Średnia ważona geometryczna"} type={"submain-article"} />
      <p>...</p>
      <ArticleBorder />
      <Title text={"Średnia ważona kwadratowa"} type={"submain-article"} />
      <p>...</p>
      <ArticleBorder />
      <Title text={"Średnia ważona harmoniczna"} type={"submain-article"} />
      <p>...</p>
      <ArticleBorder />
      <Title text={"Średnie Potęgowe"} type={"submain-article"} />
      <p>...</p>
      <ArticleBorder />
      <Title text={"Dominanta"} type={"submain-article"} />
      <p>...</p>
      <ArticleBorder />
      <Title text={"Środek rozstępu"} type={"submain-article"} />
      <p><b>Środek rozstępu</b> (<i>eng: mid-range</i>) - średnia arytmetyczna skrajnych wartości wyznaczających punkty krańcowe rozstępu</p>
      <Formula formula={statisticEquations.RANGE_MIDDLE} />
      <LegendParagraph type={"top"} notation="\bar{M}" explanation="środek rozstępu" />
    </>
  );
};

export default AveragesContent;
