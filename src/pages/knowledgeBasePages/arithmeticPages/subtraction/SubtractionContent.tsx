import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";

const SubtractionContent: FC = () => {

  return (
    <>
      <Title text={"Odejmowanie"} type={"main-article"} />
      <p>
        <b>Odejmowanie</b> to jedno z czterech podstawowych działań arytmetycznych (obok dodawania, mnożenia i dzielenia).
      </p>
      <br />
      <p>Oznaczenia:</p>
      <Formula formula={`a-b=c`} />
      <LegendParagraph
        type="short"
        notation="a"
        explanation="odjemna"
      />
      <LegendParagraph
        type="top"
        notation="b"
        explanation="odjemnik"
      />
      <LegendParagraph type="short" notation="c" explanation="różnica" />
      <ArticleBorder />
      <p>Odejmowanie definiuje się jako działanie odwrotne do dodawania</p>
      <Formula formula={"a-b=c\\Leftrightarrow a=b+c."} />
      <br />
      <p>Odejmowanie zawsze można zapisać w postaci sumy, gdzie drugim składnikiem jest element przeciwny odjemnika</p>
      <Formula formula={"a-b=c\\Leftrightarrow a+(-b)=c."} />
      <br />
      <p>Odejmowanie&nbsp;<b>nie jest przemienne.</b>&nbsp;Zamiana argumentów stronami spowoduje zmianę znaku różnicy</p>
      <Formula formula="a-b=-(b-a)"></Formula>
      <br />
      <p>Odejmowanie&nbsp;<b>nie jest łączne</b>&nbsp;i wykonuje się je od lewej do prawej</p>
      <Formula formula="a-b-c=(a-b)-c"></Formula>
      <br />
      <p><b>Element neutralny odejmowania</b> występuje jednostronnie</p>
      <Formula formula="a-0=a"></Formula>
      <p>Natomiast</p>
      <Formula formula="0-a=-a"></Formula>
      <br />
      <p><b>Odejmowanie liczb wymiernych</b></p>
      <Formula formula="\frac{a}{b}-\frac{c}{d}=\frac{ad}{bd}-\frac{bc}{bd}=\frac{ad-bc}{bd}"></Formula>
      <br />
      <ArticleBorder />
      <p>Odejmowanie liczb należących do poszczególnych zbiorów:</p>
      <div className="flex flex-col justify-center text-center items-center font-bold gap-2">
        <p>parzysta-parzysta=parzysta</p>
        <p>nieparzysta-nieparzysta=parzysta</p>
        <p>parzysta-nieparzysta=nieparzysta</p>
        <p>naturalna-naturalna=całkowita</p>
        <p>całkowita-całkowita=całkowita</p>
        <p>całkowita-niecałkowita=niecałkowita</p>
        <p>wymierna-wymierna=wymierna</p>
        <p>wymierna-niewymierna=niewymierna</p>
        <p>ujemna-dodatnia=ujemna</p>
        <p>rzeczywista-rzeczywista=rzeczywista</p>
        <p>zespolona-zespolona=zespolona</p>
      </div>
    </>
  );
};

export default SubtractionContent;
