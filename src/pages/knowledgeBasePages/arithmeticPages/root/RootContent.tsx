import { FC } from "react";
import Title from "../../../../components/Title/Title";
import Formula from "../../../../components/Formula/Formula";
import ArticleBorder from "../../../../components/ArticleBorder/ArticleBorder";
import LegendParagraph from "../../../../components/LegendParagraph/LegendParagraph";
import { CoreCurriculum, CoreCurriculumTypes } from "../../../../components/CoreCurriculum/CoreCurriculum";
import Proof from "../../../../components/ProofAndExplanation/Proof";

const RootContent: FC = () => {

  return (
    <>
      <Title text={"Pierwiastkowanie"} type={"main-article"} />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p><b>Pierwiastek arytmetyczny</b> to wynik działania odwrotnego do potęgowania definiowany jako podstawa potęgi n-tej, której rezultat jest równy liczbie pierwiastkowanej.</p>
        <Formula formula={`\\sqrt[n]{a}`} />
        <p>Założenia:</p>
        <Formula formula={`n \\in \\mathbb{N} - \\{0,1\\}`} />
        <div className="grid md:grid-cols-2 text-center">
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
        <Formula formula={`\\sqrt[n]{a}=x\\Leftrightarrow x^n=a`} />
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p><b>Pierwiastek kwadratowy</b> to pierwiastek, którego stopień jest równy 2.</p>
        <Formula formula={`\\sqrt{x}=\\sqrt[2]{x}`} />
        <p> Przyjęto pomijanie w zapisie stopnia takiego pierwiastka i taktuje się liczbę 2 jako "domyślny" stopień pierwiastka.</p>
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p><b>Pierwiastek sześcienny</b> to pierwiastek, którego stopień jest równy 3.</p>
        <Formula formula={`\\sqrt[3]{x}`} />
      </CoreCurriculum >
      <ArticleBorder />
      <Title text={"Podstawowe wzory działań na pierwiastkach"} type="main-article" />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p><b>(1) Iloczyn pierwiastków</b></p>
        <Formula formula={`\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{a \\cdot b}`} styles="min-w-[140px]" />
        <p><b>(2) Iloraz pierwiastków</b></p>
        <Formula formula={`\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}`} styles="min-w-[100px]" />
        założenie:
        <Formula formula={`b\\neq0`} />
        <p><b>(3) Zamiana pierwiastka na potęgę</b></p>
        <Formula formula={`\\sqrt[n]{a^k} = a^{\\frac{k}{n}}`} />
        <p>w szczególności:</p>
        <Formula formula={`\\sqrt[n]{a} = a^{\\frac{1}{n}}`} />
        <p><b>(4) Pierwiastek złożony:</b></p>
        <Formula formula={`\\sqrt[n]{\\sqrt[k]{a}} = \\sqrt[n\\cdot k]{a}`} />
        <Proof steps={["\\sqrt[n]{\\sqrt[k]{a}}", "\\sqrt[n]{a^{\\frac{1}{k}}}", "\\left(a^{\\frac{1}{k}}\\right)^{\\frac{1}{n}}", "a^{\\frac{1}{k}\\cdot\\frac{1}{n}}", "a^{\\frac{1}{k\\cdot n}}", "\\sqrt[n\\cdot k]{a}"]} text={"Dowód"} styles="min-w-[100px]" />
      </CoreCurriculum >
    </>
  );
};

export default RootContent;
