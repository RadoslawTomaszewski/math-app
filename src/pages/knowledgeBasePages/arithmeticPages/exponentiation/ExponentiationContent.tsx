import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import Proof from "../../../../components/articleItems/Proof";
import { exp1Proof, exp2Proof, exp3Proof, exp4Proof, exp5Proof } from "../../../../types/proofs";
import { CoreCurriculum, CoreCurriculumTypes } from "../../../../components/CoreCurriculum/CoreCurriculum";
import { NavLink } from "react-router-dom";

const ExponentiationContent: FC = () => (
  <>
    <Title text={"Potęgowanie"} type={"main-article"} />
    <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
      <p>
        <b>Potęgowanie</b> - działanie arytmetyczne mające wiele definicji w zależności od kontekstu użycia.
      </p>
      <Formula formula={`a^b=c`} />
      <LegendParagraph
        type="short"
        notation="a"
        explanation="podstawa potęgi" />
      <LegendParagraph
        type="top"
        notation="b"
        explanation="wykładnik potęgi" />
      <LegendParagraph type="short" notation="c" explanation="potęga" />
    </CoreCurriculum>
    <ArticleBorder />
    <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
      <p>Powszechnie używa się określeń:</p>
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
      <p>Powyższe nazwy mają powiązanie z geometrią i wzorami na <b>pole kwadratu</b> oraz <b>objętość sześcianu</b></p>
    </CoreCurriculum>
    <ArticleBorder />
    <Title text={"Potęga o wykładniku naturalnym"} type="main-article" />
    <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
      <p><b>Potęgowanie</b> definiuje się jako skrócona forma zapisu wielokrotnego mnożenia tego samego czynnika.</p>
      <Formula formula="a ^ n = \underbrace{a \cdot a \cdot \ldots \cdot a}_{n \text{ razy}}" styles="min-w-[138px]" />
      <p>założenie:</p>
      <Formula formula={"n\\in \\mathbb{N}"} />
      <p>Dodatkowo prawdziwe są równania:</p>
      <Formula formula="a ^ 1 = a" />
      <Formula formula="a ^ 0 = 1" />
    </CoreCurriculum>
    <ArticleBorder />
    <Title text={"Potęga o wykładniku całkowitym"} type="main-article" />
    <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
      <p>Definicję <b>potęgowania</b> można rozszerzyć na liczby całkowite przyjmując założenie, że kosztem minusa z wykładnika możliwe jest dokonanie zmiany podstawy potęgi na liczbę odwrotną</p>
      <Formula formula="a^{-n}=\left(\frac{1}{a}\right)^n" styles="min-w-[115px]" />
      <p>założenie:</p>
      <Formula formula={"a\\neq 0"} />
      <Formula formula={"n\\in \\mathbb{N}"} />
    </CoreCurriculum>
    <ArticleBorder />
    <Title text={"Potęga o wykładniku wymiernym"} type="main-article" />
    <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
      <p>Kolejnym rozszerzeniem definicji <b>potęgowania</b> jest rozszerzenie na wykładniki wymierne, które jest tożsame z <NavLink to="../pierwiastkowanie"><b>pierwiastkiem arytmetycznym.</b></NavLink></p>
      <Formula formula="a^{\frac{m}{n}}=\sqrt[n]{a^m}" styles="min-w-[115px]" />
      <p>założenie:</p>
      <Formula formula={"a > 0"} />
      <Formula formula={"m\\in \\mathbb{Z}"} />
      <Formula formula={"n\\in \\mathbb{Z}-\\{0\\}"} />
    </CoreCurriculum>
    <ArticleBorder />
    <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
      <p>Potęgowanie <b>nie jest przemienne</b></p>
      <Formula formula={"a^b \\neq b^a"} />
      <p>Potęgowanie <b>nie jest łączne</b></p>
      <Formula formula={"\\left(a^b\\right)^c \\neq a^{\\left(b^c\\right)}"} />
    </CoreCurriculum>
    <ArticleBorder />
    <Title text={"Podstawowe wzory działań na potęgach"} type="main-article" />
    <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
      <p><b>(1) Iloczyn potęg o tej samej podstawie</b></p>
      <Formula formula="a^x \cdot a^y = a^{x+y}" styles="min-w-[110px]" />
      <Proof steps={exp1Proof} text={"Dowód"} styles="min-w-[205px]" />
      <br />
      <p><b>(2) Iloraz potęg o tej samej podstawie</b></p>
      <Formula formula="\frac{a^x}{a^y} = a^{x-y}" styles="min-w-[95px]" />
      <Proof steps={exp2Proof} text={"Dowód"} styles="min-w-[235px]" />
      <br />
      <p><b>(3) Iloczyn potęg o tym samym wykładniku</b></p>
      <Formula formula="a^x \cdot b^x = (a \cdot b)^x" styles="min-w-[135px]" />
      <Proof steps={exp3Proof} text={"Dowód"} styles="min-w-[200px]" />
      <br />
      <p><b>(4) Iloraz potęg o tym samym wykładniku</b></p>
      <Formula formula="\frac{a ^ x}{b ^ x} = \left(\frac{a}{b}\right)^x" styles="min-w-[107px]" />
      <Proof steps={exp4Proof} text={"Dowód"} styles="min-w-[205px]" />
      <br />
      <p><b>(5) Potęga potęgi</b></p>
      <Formula formula="\left(a^x\right)^y=a^{x \cdot y}" styles="min-w-[100px]" />
      <Proof steps={exp5Proof} text={"Dowód"} styles="min-w-[349px]" />
    </CoreCurriculum>
  </>
);

export default ExponentiationContent;
