import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import Proof from "../../../../components/articleItems/Proof";

const ExponentiationContent: FC = () => {
  const exp1Proof = ['a ^ x \\cdot a ^ y',
    '\\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{x \\text{ razy}} \\cdot \\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{y \\text{ razy}}',
    '\\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{x+y \\text{ razy}}',
    'a^{x+y}'];
  const exp2Proof = ['\\frac{a ^ x}{ b ^ x}',
    '\\underbrace{a \\cdot a \\cdot \\ldots \\cdot a \\cdot a}_{x \\text{ razy}}\\cdot\\frac{1}{\\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{y \\text{ razy}}}',
    '\\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{x-y \\text{ razy}}',
    'a^{x-y}'];
  const exp3Proof = ['a^x \\cdot b^x',
    '\\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{x \\text{ razy}} \\cdot \\underbrace{b \\cdot b \\cdot \\ldots \\cdot b}_{x \\text{ razy}}',
    '\\underbrace{ab \\cdot ab \\cdot \\ldots \\cdot ab}_{x \\text{ razy}}',
    '(a \\cdot b)^x'];
  const exp4Proof = ['\\frac{a^x}{b^x}',
    '\\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{x \\text{ razy}} \\cdot \\frac{1}{\\underbrace{b \\cdot b \\cdot \\ldots \\cdot b}_{x \\text{ razy}}}',
    '\\underbrace{\\frac{a}{b} \\cdot \\frac{a}{b} \\cdot \\ldots \\cdot \\frac{a}{b}}_{x \\text{ razy}}',
    '\\left(\\frac{a}{b}\\right)^x'];
  const exp5Proof = ['\\left(a^x\\right)^y',
    '\\left(\\underbrace{ a \\cdot \\ldots \\cdot a \\cdot a}_{x \\text{ razy}}\\right)^y',
    '\\underbrace{\\underbrace{ a \\cdot \\ldots \\cdot a \\cdot a}_{x \\text{ razy}} \\cdot \\underbrace{a \\cdot \\ldots \\cdot a \\cdot a}_{x \\text{ razy}} \\cdot \\ldots \\cdot \\underbrace{a \\cdot \\ldots \\cdot a \\cdot a}_{x \\text{ razy}}}_{y \\text{ razy}}',
    'a^{x \\cdot y}']
  return (
    <>
      <Title text={"Potęgowanie"} type={"main-article"} />
      <p>
        <b>Potęgowanie</b> działanie arytmetyczne mające wiele definicji w zależności od kontekstu użycia.
      </p>
      <br />
      <p>Oznaczenia:</p>
      <Formula formula={`a^b=c`} />
      <LegendParagraph
        type="short"
        notation="a"
        explanation="podstawa potęgi"
      />
      <LegendParagraph
        type="top"
        notation="b"
        explanation="wykładnik potęgi"
      />
      <LegendParagraph type="short" notation="c" explanation="potęga" />
      <br />
      <ArticleBorder />
      <p>Powszechnie używa się sformułowań:</p>
      <div className="my-2 grid sm:grid-cols-2">
        <div>
          <Formula formula="a^2" />
          <p className="text-center"><b>kwadrat liczby</b></p>
        </div>
        <div>
          <Formula formula="a^3" />
          <p className="text-center"><b>sześcian liczby</b></p>
        </div>
      </div>
      <p>Powyższe nazwy mają powiązanie z geometrią i wzorami na pole kwadratu oraz objętość sześcianu</p>
      <ArticleBorder />
      <Title text={"Potęga o wykładniku naturalnym"} type="submain-article" />
      <p>Potęgowanie definiuje się jako skrócona forma zapisu wielokrotnego mnożenia tego samego czynnika</p>
      <Formula formula="a ^ b = \underbrace{a \cdot a \cdot \ldots \cdot a}_{b \text{ razy}}" />
      <p>w szczególności</p>
      <Formula formula="a ^ 1 = a" />
      <p>Dodatkowo przyjmuje się zasadę</p>
      <Formula formula="a ^ 0 = 1" />
      <ArticleBorder />
      <Title text={"Podstawowe wzory działań na potęgach"} type="submain-article" />
      <p><b>Iloczyn potęg o tej samej podstawie</b></p>
      <Formula formula="a^x \cdot a^y = a^{x+y}" />
      <Proof steps={exp1Proof} text={"Dowód"} />
      <br />
      <p><b>Iloraz potęg o tej samej podstawie</b></p>
      <Formula formula="\frac{a^x}{a^y} = a^{x-y}" />
      <Proof steps={exp2Proof} text={"Dowód"} />
      <br />
      <p><b>Iloczyn potęg o tym samym wykładniku</b></p>
      <Formula formula="a^x \cdot b^x = (a \cdot b)^x" />
      <Proof steps={exp3Proof} text={"Dowód"} />
      <br />
      <p><b>Iloraz potęg o tym samym wykładniku</b></p>
      <Formula formula="\frac{a^x}{b^x} = \left(\frac{a}{b}\right)^x" />
      <Proof steps={exp4Proof} text={"Dowód"} />
      <br />
      <p><b>Potęga potęgi</b></p>
      <Formula formula="\left(a^x\right)^y=a^{x \cdot y}" />
      <Proof steps={exp5Proof} text={"Dowód"} />
      <br />
    </>
  );
};

export default ExponentiationContent;
