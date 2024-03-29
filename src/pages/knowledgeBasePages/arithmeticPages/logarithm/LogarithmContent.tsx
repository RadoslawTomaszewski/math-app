import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import { NavLink } from "react-router-dom";
import { CoreCurriculum, CoreCurriculumTypes } from "../../../../components/CoreCurriculum/CoreCurriculum";
import Proof from "../../../../components/articleItems/Proof";
import { arithmeticEquations } from "../../../../types/equations";
import { logarithmDivideProof, logarithmProductProof, logarithmicBaseExpressedAsPowerProof, logarithmicBaseExpressedAsPower_1Proof } from "../../../../types/proofs";

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
        <p>Szczególne przypadki:</p>
        <p><b>(1) logarytm o liczbie logarytmowanej równej 1</b> </p>
        <Formula formula={`\\log_{a}1=0`} />
        <Proof steps={["\\log_{a}1=0\\Leftrightarrow a^0=1"]} text={"Dowód"} styles="min-w-[165px]" />
        <p><b>(2) logarytm o podstawie logarytmu równej liczbie logarytmowanej</b> </p>
        <Formula formula={`\\log_{a}a=1`} />
        <Proof steps={["\\log_{a}1=0\\Leftrightarrow a^1=a"]} text={"Dowód"} styles="min-w-[165px]" />
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
      <Title text={"Podstawowe wzory działań na logarytmach"} type="main-article" />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>

        <p><b>(1) Logarytm o liczbie logarytmowanej w postaci potęgi</b></p>
        <Formula formula={arithmeticEquations.logarithmicBaseExpressedAsPower} styles="min-w-[155px]" />
        <Proof steps={logarithmicBaseExpressedAsPowerProof} text={"Dowód"} styles="min-w-[380px]" />
        <p><b>(1.1) Logarytm o liczbie logarytmowanej o podstawie potęgi równej podstawie logarytmu </b> - szczególny przypadek wzoru (1)</p>
        <Formula formula={arithmeticEquations.logarithmicBaseExpressedAsPower_1} styles="min-w-[155px]" />
        <Proof steps={logarithmicBaseExpressedAsPower_1Proof} text={"Dowód"} styles="min-w-[380px]" />
        <p><b>(2) Logarytm iloczynu</b></p>
        <Formula formula={arithmeticEquations.logarithmProduct} styles="min-w-[225px]" />
        <Proof steps={logarithmProductProof} text={"Dowód"} styles="min-w-[380px]" />
        <p><b>(3) Logarytm ilorazu</b></p>
        <Formula formula={`\\log_{a}\\left(\\frac{x}{y}\\right)=\\log_{a}x-\\log_{a}y`} styles="min-w-[225px]" />
        <p>założenie:</p>
        <Formula formula="y\neq 0" />
        <Proof steps={logarithmDivideProof} text={"Dowód"} styles="min-w-[385px]" />
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
        <p><b>(4) Wzór na zamianę podstawy logarytmu</b></p>
        <Formula formula={`\\log_{a}x = \\frac{\\log_{b}x}{\\log_{b}a}`} />
        <p><b>(4.1) relacja logarytmów o liczbie logarytmowanej i podstawie logarytmu po zamienie miejsc </b> - szczególny przypadek wzoru (4)</p>
        <Formula formula={`\\log_{a}x = \\frac{1}{\\log_{x}a}`} />
      </CoreCurriculum>
    </>
  );
};

export default LogarithmContent;
