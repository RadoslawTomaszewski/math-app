import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";

const HomographicFunctionContent: FC = () => {

  return (
    <>
      <Title text={"Funkcja homograficzna"} type={"main-article"} />
      <p>
        <b>Funkcja homograficzna</b> to rodzaj funkcji wymiernej, której wykres jest hiperbolą.
      </p>
      <br />
      <p>Ogólny wzór funkcji homograficznej:</p>
      <Formula formula={`f(x)=\\frac{ax+b}{cx+d}`} />
      <p>Założenie:</p>
      <Formula formula='ad-bc \\\neq 0' />
      <LegendParagraph
        type="top"
        notation="a, b, c, d"
        explanation="współczynniki funkcji homograficznej"
      />
      <ArticleBorder />
      <p>
        <b>Asymptoty</b> to linie, do których wykres funkcji dąży, ale nigdy ich nie przecina.</p>
      <p><b>Asymptota pionowa</b> jest postaci:</p>
      <Formula formula='x= \frac{-d}{c}' />
      <p> i wyznacza <b>dziedzinę</b> funkcji homograficznej:</p>
      <Formula formula='x \in \mathbb{R} - \left\{ \frac{-d}{c} \right\}' />
      <p><b>Asymptota pozioma</b> jest postaci:</p>
      <Formula formula='y= \frac{a}{c}' />
      <p> i wyznacza <b>zbiór wartości</b> funkcji homograficznej:</p>
      <Formula formula='y \in \mathbb{R} - \left\{ \frac{a}{c} \right\}' />
      <ArticleBorder />
      <p>
        <b>Wyznacznik funkcji homograficznej:</b>
      </p>
      <Formula formula={`∆=ad-bc`} />
    </>
  );
};

export default HomographicFunctionContent;
