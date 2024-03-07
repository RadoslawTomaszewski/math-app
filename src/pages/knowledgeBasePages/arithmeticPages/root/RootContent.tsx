import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";

const RootContent: FC = () => {

  return (
    <>
      <Title text={"Pierwiastkowanie"} type={"main-article"} />
      <p><b>Pierwiastek arytmetyczny</b> to wynik działania odwrotnego do potęgowania definiowany jako podstawa potęgi n-tej, której rezultat jest równy liczbie pierwiastkowanej</p>
      <p>Oznaczenia:</p>
      <Formula formula={`\\sqrt[n]{a}`} />
      <p>Założenia:</p>
      <Formula formula={`n \\in \\mathbb{N} - \\{0,1\\}`} />
      <div className="flex justify-around">
        <div>
          <span>gdy n jest parzyste:</span>
          <Formula formula={`a \\geq 0`} />
        </div>
        <div>
          <span>gdy n jest nieparzyste:</span>
          <Formula formula={`a \\in \\mathbb{R} `} />
        </div>

      </div>


      <LegendParagraph
        type="short"
        notation="a"
        explanation="liczba pierwiastkowana"
      />
      <LegendParagraph
        type="short"
        notation="n"
        explanation="stopień pierwiastka"
      />
      <br />
      <p>Definicja:</p>
      <Formula formula={`\\sqrt[n]{c}=a\\Leftrightarrow a^n=c`} />
      <br />
      <ArticleBorder />
      <Title text="Pierwiastek kwadratowy" type="submain-article" />
      <p><b>Pierwiastek kwadratowy</b> to pierwiastek, którego stopień jest równy 2</p>
      <Formula formula={`\\sqrt{x}=\\sqrt[2]{x}`} />
      <p> Przyjęto pomijanie w zapisie stopnia takiego pierwiastka i taktuje się liczbę 2 jako "domyślny" stopień pierwiastka</p>
      <ArticleBorder />
      <Title text="Pierwiastek sześcienny" type="submain-article" />
      <p><b>Pierwiastek sześcienny</b> to pierwiastek, którego stopień jest równy 3</p>
      <Formula formula={`\\sqrt[3]{x}`} />
      <ArticleBorder />
      <Title text={"Podstawowe wzory działań na pierwiastkach"} type="submain-article" />
      <p>Prawdziwe są równości:</p>
      <Formula formula={`\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{a \\cdot b}`} />
      <Formula formula={`\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}`} />
      Wzór zamiany pierwiastka na potęge:
      <Formula formula={`\\sqrt[n]{a^k} = a^{\\frac{k}{n}}`} />
      <p>Szczególny przypadek:</p>
      <Formula formula={`\\sqrt[n]{a} = a^{\\frac{1}{n}}`} />
    </>
  );
};

export default RootContent;
