import { FC } from "react";
import Title from "../../../../components/Title/Title";
import Formula from "../../../../components/Formula/Formula";
import ArticleBorder from "../../../../components/ArticleBorder/ArticleBorder";
import LegendParagraph from "../../../../components/LegendParagraph/LegendParagraph";
import { NavLink } from "react-router-dom";
import { CoreCurriculum, CoreCurriculumTypes } from "../../../../components/CoreCurriculum/CoreCurriculum";
import Proof from "../../../../components/ProofAndExplanation/Proof";
import { arithmeticEquations } from "../../../../data/equations";
import { changeOfBaseForLogarithmProof, logarithmDivideProof, logarithmProductProof, logarithmicBaseExpressedAsPowerProof, logarithmicBaseExpressedAsPower_1Proof1, logarithmicBaseExpressedAsPower_1Proof2, logarithmicBaseExpressedAsRootProof, switchOfBaseForLogarithmProof1, switchOfBaseForLogarithmProof2 } from "../../../../data/proofs";

const LogarithmContent: FC = () => {
  return (
    <>
      <Title text={"Logarytmy"} type={"main-article"} />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>
          <b>Logarytm</b> to wynik działania odwrotnego do potęgowania definiowany jako wykładnik potęgi, do jakiej należy podnieść podstawę aby otrzymać liczbę logarytmowaną.
        </p>
        <br />
        <Formula formula={`\\log_ab=c`} />
        <p>Założenia:</p>
        <Formula formula={`a > 0 \\ \\land \\ a \\neq 1`} />
        <Formula formula={`b > 0`} />
        <LegendParagraph
          type="short"
          notation="a"
          explanation="podstawa logarytmu"
        />
        <LegendParagraph
          type="top"
          notation="b"
          explanation="liczba logarytmowana (antylogarytm)"
        />
        <LegendParagraph type="short" notation="c" explanation="logarytm (wynik logarytmu)" />
        <br />
        <p>Definicja:</p>
        <Formula formula={`\\log_ab=x\\Leftrightarrow a^x=b`} styles="min-w-[160px]" />
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p><b>Logarytm dziesiętny</b> to logarytm, którego podstawa jest równa liczbie 10.</p>
        <Formula formula={`\\log_{}x=\\log_{10}x`} />
        <p> Popularne jest pomijanie w zapisie podstawy takiej potęgi i traktowanie liczby 10 jako "domyślnej" podstawy logarytmu </p>
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
        <p><b>Logarytm naturalny</b> to logarytm, którego podstawa jest równa <NavLink to="../liczba-e">liczbie eulera</NavLink></p>
        <Formula formula={`\\ln_{}x=\\log_{e}x`} />
      </CoreCurriculum>
      <ArticleBorder />
      <Title text={"Własności logarytmów"} type="main-article" />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>Dla wszystkich niżej wymienionych logarytmów muszą być spełnione założenia wymienione na początku tego artykułu (z zastosowaniem analogii dla innych symboli).</p>
        <br />
        <p>Przyjęto dodatkowo założenie:</p>
        <Formula formula={"k \\in \\mathbb{R}"} />
        <p><b>(1) logarytm o liczbie logarytmowanej równej 1</b> </p>
        <Formula formula={`\\log_{a}1=0`} />
        <Proof steps={["\\log_{a}1=0\\Leftrightarrow a^0=1"]} text={"Dowód"} styles="min-w-[165px]" />
        <p><b>(2) logarytm o podstawie logarytmu równej liczbie logarytmowanej</b> </p>
        <Formula formula={`\\log_{a}a=1`} />
        <Proof steps={["\\log_{a}a=1\\Leftrightarrow a^1=a"]} text={"Dowód"} styles="min-w-[165px]" />
        <p><b>(3) logarytm jako wykładnik potęgi o podstawie równej podstawie tego logarytmu</b></p>
        <Formula formula={`a^{\\log_{a}b}=b`} />
        <Proof steps={["a^{\\log_{a}b}=x", "\\log_{a}{x}=\\log_{a}{b}", "x=b"]} text={"Dowód"} styles="min-w-[120px]">
          <p>Dowód z użyciem <b>definicji logarytmu</b></p>
        </Proof>
        <p><b>(4) logarytm o liczbie logarytmowanej równej potędze, której podstawa jest równa podstawie tego logarytmu </b> - szczególny przypadek wzoru (7)</p>
        <Formula formula={arithmeticEquations.logarithmicBaseExpressedAsPower_1} styles="min-w-[155px]" />
        <Proof steps={logarithmicBaseExpressedAsPower_1Proof1} text={"Dowód 1"} styles="min-w-[95px]">
          <p>Dowód z użyciem <b>definicji logarytmu</b></p>
        </Proof>
        <Proof steps={logarithmicBaseExpressedAsPower_1Proof2} text={"Dowód 2"} styles="min-w-[75px]">
          <p>Alternatywny dowód z użyciem wzorów <b>(7)</b> i <b>(2)</b></p>
        </Proof>
        <p><b>(5) logarytm iloczynu</b></p>
        <Formula formula={arithmeticEquations.logarithmProduct} styles="min-w-[225px]" />
        <Proof steps={logarithmProductProof} text={"Dowód"} styles="min-w-[405px]" >
          <p>Dowód z użyciem wzoru <b>(4)</b></p>
        </Proof>
        <p><b>(6) logarytm ilorazu</b></p>
        <Formula formula={`\\log_{a}\\left(\\frac{b}{c}\\right)=\\log_{a}b-\\log_{a}c`} styles="min-w-[225px]" />
        <p>założenie:</p>
        <Formula formula="c\neq 0" />
        <Proof steps={logarithmDivideProof} text={"Dowód"} styles="min-w-[405px]" >
          <p>Dowód z użyciem wzoru <b>(4)</b></p>
        </Proof>
        <p><b>(7) logarytm o liczbie logarytmowanej w postaci potęgi</b></p>
        <Formula formula={arithmeticEquations.logarithmicBaseExpressedAsPower} styles="min-w-[155px]" />
        <Proof steps={logarithmicBaseExpressedAsPowerProof} text={"Dowód"} styles="min-w-[230px]">
          <p>Dowód z użyciem wzoru <b>(5)</b></p>
        </Proof>
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
        <p><b>(8) wzór na zmianę podstawy logarytmu</b></p>
        <Formula formula={arithmeticEquations.changeOfBaseForLogarithm} />
        <Proof steps={changeOfBaseForLogarithmProof} text={"Dowód"} styles="min-w-[139px]">
          <p>Dowód z użyciem <b>definicji logarytmu</b> oraz wzoru <b>(5)</b></p>
        </Proof>
        <p><b>(9) wzór na zamianę miejscami podstawy logarytmu oraz liczby logarytmowanej  </b> - szczególny przypadek wzoru (8)</p>
        <Formula formula={`\\log_{a}b = \\frac{1}{\\log_{b}a}`} />
        <Proof steps={switchOfBaseForLogarithmProof1} text={"Dowód 1"} styles="min-w-[95px]">
          <p>Dowód z użyciem <b>definicji logarytmu</b> oraz wzorów <b>(5)</b> i <b>(2)</b></p>
        </Proof>
        <Proof steps={switchOfBaseForLogarithmProof2} text={"Dowód 2"} styles="min-w-[75px]">
          <p>Alternatywny dowód z użyciem wzorów <b>(8)</b> i <b>(2)</b></p>
        </Proof>
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.extra}>
        <p><b>(10) logarytm z pierwiastkiem w liczbie logarytmowanej</b> - szczególny przypadek wzoru <b>(7)</b></p>
        <Formula formula={arithmeticEquations.logarithmicBaseExpressedAsRoot} styles="min-w-[155px]" />
        <Proof steps={logarithmicBaseExpressedAsRootProof} text={"Dowód"} styles="min-w-[85px]">
          <p>Dowód z użyciem wzoru <b>(7)</b></p>
        </Proof>
        <p><b>(11) wzór na zamianę podstawy potęgi z liczbą logarytmowaną logarytmu będącego wykładnikiem tej potęgi</b></p>
        <Formula formula={"a^{\\log_{b}{c}}=c^{\\log_{b}{a}}"} styles="min-w-[155px]" />
        <Proof steps={["a^{\\log_{b}{c}}", "\\left(b^{\\log_{b}{a}}\\right)^{\\log_{b}{c}}", "b^{\\log_{b}{a}\\cdot \\log_{b}{c}}", "b^{\\log_{b}{c} \\cdot \\log_{b}{a}}", "\\left(b^{\\log_{b}{c}}\\right)^{\\log_{b}{a}}", "a^{\\log_{b}{c}}"]} text={"Dowód"} styles="min-w-[95px]">
          <p>Dowód z użyciem wzoru <b>(3)</b></p>
        </Proof>
      </CoreCurriculum>
    </>
  );
};

export default LogarithmContent;
