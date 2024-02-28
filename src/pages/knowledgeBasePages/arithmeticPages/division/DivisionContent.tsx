import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";

const DivisionContent: FC = () => {

  return (
    <>
      <Title text={"Dzielenie"} type={"main-article"} />
      <p>
        <b>Dzielenie</b> to jedno z czterech podstawowych działań arytmetycznych (obok dodawania, odejmowania i mnożenia).
      </p>
      <br />
      <p>Oznaczenia:</p>
      <Formula formula={`a:b=c \\ \\lor \\ \\frac{a}{b}=c`} />
      <p>Założenie:</p>
      <Formula formula="b \ne 0" />
      <LegendParagraph
        type="short"
        notation="a"
        explanation="dzielna"
      />
      <LegendParagraph
        type="top"
        notation="b"
        explanation="dzielnik"
      />
      <LegendParagraph type="short" notation="c" explanation="iloraz" />
      <ArticleBorder />
      <p>Dzielenie definiuje się jako działanie odwrotne do mnożenia</p>
      <Formula formula={"a:b=c\\Leftrightarrow a=b \\cdot c."} />
      <p>Z powodu tej definicji dzielenie przez zero nie jest możliwe, ponieważ zero nie posiada wartości odwrotnej</p>
      <br />
      <p>Dzielenie zawsze można zapisać w postaci iloczynu, gdzie drugim czynnikiem jest element odwrotny dzielnej</p>
      <Formula formula={"a:b=c\\Leftrightarrow a \\cdot \\frac{1}{b}=c."} />
      <br />
      <p>Dzielenie&nbsp;<b>nie jest przemienne.</b>&nbsp;Zamiana argumentów stronami da w rezultacie liczbę odwrotną</p>
      <Formula formula="a:b=\frac{1}{b:a}"></Formula>
      <br />
      <p>Dzielenie&nbsp;<b>nie jest łączne</b>&nbsp;i wykonuje się je od lewej do prawej</p>
      <Formula formula="a:b:c=(a:b):c"></Formula>
      <br />
      <p><b>Element neutralny dzielenia</b> występuje jednostronnie</p>
      <Formula formula="a:1=a"></Formula>
      <p>Natomiast</p>
      <Formula formula="1:a=\frac{1}{a}"></Formula>
      <br />
      <p><b>Dzielenie liczb wymiernych</b></p>
      <Formula formula="\frac{a}{b}:\frac{c}{d}=\frac{a}{b}\cdot\frac{d}{c}=\frac{ad}{bc}"></Formula>
      <br />
    </>
  );
};

export default DivisionContent;
