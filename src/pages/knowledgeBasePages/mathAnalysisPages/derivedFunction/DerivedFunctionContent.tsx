import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import GraphImage from "../../../../components/articleItems/GraphImage";
import DerivedFunctionGraph from "../../../../assets/images/knowledge_base/math_analytics/derived_definition.png"
import Formula from "../../../../components/articleItems/Formula";
import { linearEquations, mathematicalAnalyticsFormulas } from "../../../../types/equations";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import { NavLink } from "react-router-dom";
import Explanation from "../../../../components/articleItems/Explanation";
import { CoreCurriculum, CoreCurriculumTypes } from "../../../../components/CoreCurriculum/CoreCurriculum";
import Proof from "../../../../components/articleItems/Proof";
import { derivedOfPowerFunctionNaturalEqual0, derivedOfPowerFunctionNaturalEqual1, derivedOfPowerFunctionNaturalFrom2, derivedOfPowerFunctionNegativeIntegralMinus1, derivedOfPowerFunctionNegativeIntegralToMinus2, derivedOfPowerFunctionNegativeRational, proofOfEquationOfTheTangentToFunction_b, proofOfTheDifferenceRuleForDerivatives, proofOfTheProductRuleForDerivatives, proofOfTheSumRuleForDerivatives } from "../../../../types/proofs";
import { iFrameStyle } from "../../../../utilities/styles";

const DerivedFunctionContent: FC = () => {
    return (
        <>
            <Title text={"Pochodna funkcji"} type={"main-article"} />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
                <p><b>Pochodna funkcji</b> to podstawowe pojęcie <b>rachunku różniczkowego</b>, które pozwala określić tempo zmiany wartości funkcji.  </p>
            </CoreCurriculum>
            <ArticleBorder />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
                <p><b>Pochodna funkcji w punkcie</b> definiowana jest jako następująca granica ilorazu różnicowego:</p>
                <GraphImage src={DerivedFunctionGraph} alt={"Definicja pochodnej funkcji jednoargumentowej"} styles="w-[500px] max-w-full" />
                <Formula formula={mathematicalAnalyticsFormulas.derivedFunctionDefinition} styles="min-w-[240px]" />
                <p>gdzie:</p>
                <LegendParagraph type={"top"} notation={"f(x)"} explanation={"Funkcja, której pochodna jest szukana"} />
                <LegendParagraph type={"top"} notation={"f'(x)"} explanation={"Pochodna funkcji f w punkcie"} />
                <LegendParagraph type={"short"} notation={"x_0"} explanation={"rzędna punktu, w którym liczona jest pochodna"} />
                <LegendParagraph type={"top"} notation={"h"} explanation={"przyrost argumentu (spotyka się również oznaczenie Δx)"} />
                <br />
                <p>Istnieje alternatywna forma definicji pochodnej w punkcie, w którym przyjmuje się zależność:</p>
                <Formula formula={"x=x_0+h"} />
                <p>W takim przypadku, założenie, że przyrost <b>h</b> dąży do zera jest równoważne z założeniem, że <b>x</b> dąży do <b>x<sub>0</sub></b>, a granica ilorazu różnicowego ma postać:</p>
                <Formula formula={mathematicalAnalyticsFormulas.derivedFunctionDefinition_2} styles="min-w-[240px]" />
                <Explanation text={"Wyjaśnienie"}>
                    <p className="flex flex-wrap wrap">W kontekście tej definicji należy traktować pochodną funkcji jako wskaźnik tempa przyrostu wartości funkcji w danym punkcie.</p>
                    <p className="mt-2">Aby móc lepiej wyobrazić sobie to pojęcie można posłużyć się wizualizacją tego wskaźnika za pomocą <NavLink to="../prosta"><b>stycznej</b></NavLink> do wykresu funkcji w punkcie,
                        którą da się wyrazić <NavLink to="../funkcja-liniowa"><b>równaniem prostej w postaci kierunkowej.</b></NavLink></p>
                    <br />
                    <p>
                        <b>Styczna</b> jest granicznym momentem <b>siecznej</b> przechodzącej przez dwa punkty, których odległość między nimi dąży do zera. Współrzędne tych punktów można oznaczyć kolejno jako:</p>
                    <div className="w-full flex justify-center  flex-wrap">
                        <Formula formula={mathematicalAnalyticsFormulas.derivedFunctionDefinition_pointA} styles="min-w-[125px]" />
                        <Formula formula={mathematicalAnalyticsFormulas.derivedFunctionDefinition_pointB} styles="min-w-[200px]" />
                    </div>
                    <p>gdzie <b>h</b> to przyrost argumentu, który zgodnie z powyższymi ustaleniami dąży do zera, co w konsekwencji sprowadza oba punkty do jednego punktu o tych samych współrzędnych.</p>
                    <br />
                    <p>Oba punkty jednak są niezbędne w celu wyznaczenia stopnia <b>nachylenia prostej</b> do osi rzędnych. Im większy stopień nachylenia (potocznie można stwierdzić, że prosta jest bardziej stroma) tym szybszy jest wzrost (lub spadek) wartości funkcji.</p>
                    <p>Z informacji o prostej wiadomo, że:</p>
                    <Formula formula={linearEquations.SLOPE} />
                    <LegendParagraph type={"short"} notation={"a"} explanation={"współczynnik kierunkowy prostej, któa jest styczną w punkcie A"} />
                    <LegendParagraph type={"short"} notation={"\\alpha"} explanation={"kąt nachylenia prostej do osi rzędnych (OX)"} /><br />
                    <p>Tangens kąta <b>α</b> można wyznaczyć tworząc odpowiedni stosunek przyprostokątnych trójkąta prostokątnego opartego na tych punktach. Długości tych przyprostokątnych są tzw. <b>różniczkami</b>, czyli nieskończenie małymi zmianami danej zmiennej: </p>
                    <Formula formula={mathematicalAnalyticsFormulas.DeltaX} />
                    <Formula formula={mathematicalAnalyticsFormulas.DeltaY} styles="min-w-[200px]" />
                    <LegendParagraph type={"top"} notation={"\\Delta x"} explanation={"różniczka zmiennej x"} />
                    <LegendParagraph type={"top"} notation={"\\Delta y"} explanation={"różniczka zmiennej y"} /><br />
                    <p>Zatem tangens kąta <b>α</b> określa równanie, w którym prawa strona równania to tzw. <b>iloraz różnicowy</b>:</p>
                    <Formula formula={mathematicalAnalyticsFormulas.differentaliQuotient} />
                    <p>co prowadzi do postaci:</p>
                    <Formula formula={mathematicalAnalyticsFormulas.derivedFunctionDefinition_tangens} styles="min-w-[228px]" />
                    <p>Uwzględniając założenie, że <b>h</b> dąży do zera otrzymujemy ostatecznie:</p>
                    <Formula formula={mathematicalAnalyticsFormulas.derivedFunctionDefinitionLong} styles="min-w-[350px]" />
                </Explanation>
            </CoreCurriculum>
            <ArticleBorder />
            <Title text={"Pochodna funkcji potęgowej"} type={"main-article"} />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
                <b>Pochodna funkcji potęgowej o wykładniku rzeczywistym</b> - bazując na definicji pochodnej funkcji punkcie oraz bardziej zaawansowanych metodach matematycznych (w przypadku wykładników niewymiernych oraz ujemnych) można wyznaczyć ogólny wzór na pochodną funkcji, która ma postać potęgi o wykładniku rzeczywistym:
                <Formula formula={mathematicalAnalyticsFormulas.derivedOfPowerFunctionReal} />
                <p>założenie:</p>
                <Formula formula={"a \\in \\mathbb{R}"} />
            </CoreCurriculum>

            <Explanation text={"Szczególne przypadki"}>
                <CoreCurriculum type={CoreCurriculumTypes.extra}>
                    <p><b>(1) Pochodna funkcji potęgowej o wykładniku naturalnym</b> - w przypadku funkcji jednomianowej jej pochodna odpowiada iloczynowi wykładnika jednomianu i jednomianu stopnia o jeden mniejszego. W przypadku wykładników większych od jednego w dowodzie można skorzystać z <b>dwumianu Netwona</b>.</p>
                    <Formula formula={mathematicalAnalyticsFormulas.derivedOfPowerFunctionNatural} />
                    <p>założenie:</p>
                    <Formula formula={"n \\in \\mathbb{N}"} />
                    <Proof steps={derivedOfPowerFunctionNaturalFrom2} text={"Dowód dla n>1"} styles="min-w-[666px]" />
                    <Proof steps={derivedOfPowerFunctionNaturalEqual1} text={"Dowód dla n=1"} styles="min-w-[165px]" />
                    <Proof steps={derivedOfPowerFunctionNaturalEqual0} text={"Dowód dla n=0"} styles="min-w-[146px]" />
                    <p><b>(2) Pochodna funkcji potęgowej o wykładniku całkowitym ujemnym</b> - wzór na pochodną funkcji potęgowej o wykładniku rzeczywistym ma zastosowanie również w przypadku wykładników całkowitych ujemnych. Tak jak w poprzednim przypadku można w dowodzie zastosować dwumian Newtona.</p>
                    <Formula formula={mathematicalAnalyticsFormulas.derivedOfPowerFunctionNegativeIntegral} />
                    <p>założenie:</p>
                    <Formula formula={"n \\in \\mathbb{N}"} />
                    <Proof steps={derivedOfPowerFunctionNegativeIntegralToMinus2} text={"Dowód dla n>1"} styles="min-w-[740px]" />
                    <Proof steps={derivedOfPowerFunctionNegativeIntegralMinus1} text={"Dowód dla n=1"} styles="min-w-[321px]" />
                    <p><b>(3) Pochodna funkcji potęgowej o wykładniku wymiernym</b> - (ARTYKUŁ W BUDOWIE)</p>
                    <Formula formula={mathematicalAnalyticsFormulas.derivedOfPowerFunctionNegativeRational} />
                    <p>założenie:</p>
                    <Formula formula={"m,n \\in \\mathbb{Z}"} />
                    <Proof steps={derivedOfPowerFunctionNegativeRational} text={"Dowód"} styles="min-w-[100px]" />
                </CoreCurriculum>
            </Explanation>

            <ArticleBorder />
            <Title text={"Zależności pochodnych"} type={"main-article"} />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
                {/* <Formula formula={`\\left(\\frac{1}{f\\left(x\\right)}\\right)' = -\\frac{f'\\left(x\\right)}{\\left(f\\left(x\\right)\\right)^2}`} /> */}
                <p>Zakładając, że <b>f(x)</b> oraz <b>g(x)</b> to funkcje różniczkowalne prawdziwe są równania:</p>
                <p><b>(1) Pochodna sumy funkcji</b></p>
                <Formula formula={mathematicalAnalyticsFormulas.sumRuleForDerivatives} styles="min-w-[257px]" />
                <Proof steps={proofOfTheSumRuleForDerivatives} text={"Dowód"} styles="min-w-[400px]" />
                <p><b>(2) Pochodna różnicy funkcji</b></p>
                <Formula formula={`\\left(f\\left(x\\right) - g\\left(x\\right)\\right)' = f'\\left(x\\right) - g'\\left(x\\right)`} styles="min-w-[257px]" />
                <Proof steps={proofOfTheDifferenceRuleForDerivatives} text={"Dowód"} styles="min-w-[400px]" />
                <p><b>(3) Pochodna iloczynu funkcji</b></p>
                <Formula formula={mathematicalAnalyticsFormulas.productRuleForDerivatives} styles="min-w-[350px]" />
                <Proof steps={proofOfTheProductRuleForDerivatives} text={"Dowód"} styles="min-w-[580px]" />
                <p><b>(4) Pochodna ilorazu funkcji</b></p>
                <Formula formula={`\\left(\\frac{f\\left(x\\right)}{g\\left(x\\right)}\\right)' = \\frac{f'\\left(x\\right)\\cdot g\\left(x\\right) - f\\left(x\\right)\\cdot g'\\left(x\\right)}{\\left(g\\left(x\\right)\\right)^2}`} styles="min-w-[328px]" />
                <Proof steps={[]} text={"Dowód"} />
                <p><b>(5) Pochodna funkcji złożonej (reguła łańcucha)</b></p>
                <Formula formula={`\\left(f\\left(g\\left(x\\right)\\right)\\right)' = f'\\left(g\\left(x\\right)\\right)\\cdot g'\\left(x\\right)`} styles="min-w-[240px]" />
                <Proof steps={[]} text={"Dowód"} />
            </CoreCurriculum>
            <ArticleBorder />
            <Title text={"Równanie stycznej do funkcji w punkcie"} type={"main-article"} />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
                <p>Na początku tego artykułu został zdefiniowany sposób wyznaczania współczynnika kierunkowego równania stycznej (funkcji liniowej) do wykresu funkcji w wybranym punkcie. Wyznaczenie <b>wyrazu wolnego</b>, w przypadku podanych współczynnika kierunkowego oraz punktu należącego do tej prostej, jest już stosunkowo proste:</p>
                <Formula formula={mathematicalAnalyticsFormulas.equationOfTheTangentToFunction_b} styles="min-w-[185px]" />
                <Proof steps={proofOfEquationOfTheTangentToFunction_b} text={"Dowód"} styles="min-w-[185px]" />
                <p>Po wyznaczeniu współczynnika kierunkowego oraz wyrazu wolnego pozostaje zapisać <b>równanie stycznej do wykresu funkcji w punkcie <b>x<sub>0</sub>:</b></b></p>
                <Formula formula={mathematicalAnalyticsFormulas.equationOfTheTangentToFunction_2} styles="min-w-[260px]" />
                <p>Powyższe równanie można uprościć wyłączając wartość pochodnej dla argumentu <b>x<sub>0</sub></b> przed nawias. Ta forma równania jest w karcie wzorów maturalnych CKE:</p>
                <Formula formula={mathematicalAnalyticsFormulas.equationOfTheTangentToFunction} styles="min-w-[220px]" />
                <p>Poniższa animacja przedstawia wykres funkcji oraz styczne do tego wykresu w kolejnych punktach.</p>
                <div className="w-full flex justify-center">
                    <iframe className={iFrameStyle} title={"graph01"} src={"https://www.desmos.com/calculator/m2rfs8wqmw?embed"} width={"500"} height={"500"}></iframe>
                </div>
            </CoreCurriculum>
            {/* <ArticleBorder /> */}
            {/* <Formula formula={`\\left(c\\right)' = 0`} />
            <Formula formula={`\\left(x^n\\right)' = n \\cdot x^{n-1}`} />
            <Formula formula={`\\left(e^x\\right)' = e^x`} />
            <Formula formula={`\\left(a^x\\right)' = a^x \\cdot \\ln\\left(a\\right)`} />
            <Formula formula={`\\left(\\ln\\left(x\\right)\\right)' = \\frac{1}{x}`} />
            <Formula formula={`\\left(\\log_a\\left(x\\right)\\right)' = \\frac{1}{x \\cdot \\ln\\left(a\\right)}`} />
            <Formula formula={`\\left(\\sqrt{x}\\right)' = \\frac{1}{2\\sqrt{x}}`} />
            <Formula formula={`\\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^2}`} />
            <Formula formula={`\\left(\\log_{a}\\left(x\\right)\\right)' = \\frac{1}{x \\cdot \\ln\\left(a\\right)}`} />
            <Formula formula={`\\left(\\sin\\left(x\\right)\\right)' = \\cos\\left(x\\right)`} />
            <Formula formula={`\\left(\\cos\\left(x\\right)\\right)' = -\\sin\\left(x\\right)`} />
            <Formula formula={`\\left(\\tan\\left(x\\right)\\right)' = \\frac{1}{\\cos^2\\left(x\\right)}`} />
            <Formula formula={`\\left(\\cot\\left(x\\right)\\right)' = -\\frac{1}{\\sin^2\\left(x\\right)}`} />
            <Formula formula={`\\left(\\arcsin\\left(x\\right)\\right)' = \\frac{1}{\\sqrt{1-x^2}}`} />
            <Formula formula={`\\left(\\arccos\\left(x\\right)\\right)' = -\\frac{1}{\\sqrt{1-x^2}}`} />
            <Formula formula={`\\left(\\arctan\\left(x\\right)\\right)' = \\frac{1}{1+x^2}`} /> */}
        </>
    );
};

export default DerivedFunctionContent;
