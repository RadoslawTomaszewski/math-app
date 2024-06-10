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
import { derivedOfPowerFunctionNaturalFrom2, derivedOfPowerFunctionNegativeIntegralToMinus2, derivedOfPowerFunctionRational, derivedOfPowerFunctionReal, proofOfChainRuleDerivatives, proofOfChainRuleDerivativesSimplified, proofOfDerivedCosinus, proofOfDerivedCotanges1, proofOfDerivedCotanges2, proofOfDerivedExponent, proofOfDerivedExponente, proofOfDerivedLn, proofOfDerivedLog, proofOfDerivedSinus, proofOfDerivedTanges1, proofOfDerivedTanges2, proofOfEquationOfTheTangentToFunction_b, proofOfTheDifferenceRuleForDerivatives, proofOfTheProductRuleForDerivatives, proofOfTheQuotientRuleForDerivatives, proofOfTheSumRuleForDerivatives } from "../../../../types/proofs";
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
                <p><b>(1) definicja (wersja, gdzie h→0) </b></p>
                <Formula formula={mathematicalAnalyticsFormulas.derivedFunctionDefinition} styles="min-w-[240px]" />
                <LegendParagraph type={"top"} notation={"f(x)"} explanation={"funkcja pierwotna, której pochodna jest szukana"} />
                <LegendParagraph type={"top"} notation={"f'(x)"} explanation={"pochodna funkcji f(x)"} />
                <LegendParagraph type={"short"} notation={"x_0"} explanation={"rzędna punktu, w którym liczona jest pochodna"} />
                <LegendParagraph type={"top"} notation={"h"} explanation={"przyrost argumentu (stosuje się również oznaczenie Δx)"} />
                <br />
                <p><b>(2) definicja (wersja, gdzie x→x<sub>0</sub>) </b></p>
                <p>Istnieje alternatywna forma definicji pochodnej w punkcie, w której założenie, że przyrost <b>h→0</b> jest równoważne z założeniem, że <b>x→x<sub>0</sub></b></p>
                <br />
                <p>Odnosząc się do pierwszej definicji wystarczy dokonać podstawień:</p>
                <Formula formula={"x=x_0+h"} />
                <Formula formula={"h=x-x_0"} />
                <p>wówczas granica ilorazu różnicowego ma postać:</p>
                <Formula formula={mathematicalAnalyticsFormulas.derivedFunctionDefinition_2} styles="min-w-[240px]" />
                <Explanation text={"Wyjaśnienie"}>
                    <p className="flex flex-wrap wrap">W kontekście tej definicji należy traktować pochodną funkcji jako wskaźnik tempa monotoniczności funkcji w danym punkcie.</p>
                    <p className="mt-2">Aby móc lepiej wyobrazić sobie to pojęcie można posłużyć się wizualizacją tego wskaźnika za pomocą <NavLink to="../prosta"><b>stycznej</b></NavLink> do wykresu funkcji w punkcie,
                        którą da się wyrazić <NavLink to="../funkcja-liniowa"><b>równaniem prostej w postaci kierunkowej.</b></NavLink></p>
                    <br />
                    <p>
                        <b>Styczna</b> jest granicznym momentem <b>siecznej</b> przechodzącej przez dwa punkty, których odległość między nimi dąży do zera. Współrzędne tych punktów można oznaczyć kolejno jako:</p>
                    <div className="w-full flex justify-center flex-wrap">
                        <Formula formula={mathematicalAnalyticsFormulas.derivedFunctionDefinition_pointA} styles="min-w-[125px]" />
                        <Formula formula={mathematicalAnalyticsFormulas.derivedFunctionDefinition_pointB} styles="min-w-[200px]" />
                    </div>
                    <p>gdzie <b>h</b> to przyrost argumentu, który dąży do zera, co w konsekwencji sprowadza rozmieszczenie obu punktów do jednego punktu o tych samych współrzędnych.</p>
                    <br />
                    <p>Punkt <b>B</b> jest niezbędny w celu wyznaczenia stopnia <b>nachylenia prostej</b> do osi rzędnych. Im większy stopień nachylenia, tym szybszy jest wzrost (lub spadek) wartości funkcji.</p>
                    <br />
                    <p>Z informacji o prostej zapisanej w postaci kierunkowej wiadomo, że:</p>
                    <Formula formula={linearEquations.SLOPE} />
                    <LegendParagraph type={"short"} notation={"a"} explanation={`współczynnik kierunkowy prostej, która jest styczną w punkcie A`} />
                    <LegendParagraph type={"short"} notation={"\\alpha"} explanation={"kąt nachylenia prostej do dodatniej półosi rzędnych (OX)"} /><br />
                    <p>Tangens kąta <b>α</b> można wyznaczyć zapisując stosunek przyprostokątnych trójkąta prostokątnego opartego na tych punktach. Długości przyprostokątnych są tzw. <b>różniczkami</b>, czyli nieskończenie małymi zmianami danej zmiennej: </p>
                    <div className="w-full flex justify-center flex-wrap">
                        <Formula formula={mathematicalAnalyticsFormulas.DeltaX} styles="min-w-[150px]" />
                        <Formula formula={mathematicalAnalyticsFormulas.DeltaY} styles="min-w-[200px]" />
                    </div>
                    <LegendParagraph type={"top"} notation={"\\Delta x"} explanation={"różniczka zmiennej x"} />
                    <LegendParagraph type={"top"} notation={"\\Delta y"} explanation={"różniczka zmiennej y"} /><br />

                    <p>alternatywny zapis - stosowany dla definicji (2):</p>
                    <div className="w-full flex justify-center flex-wrap">
                        <Formula formula={"\\Delta x = x - x_0"} styles="min-w-[200px]" />
                        <Formula formula={"\\Delta f(x) = f(x) - f(x_0)"} styles="min-w-[200px]" />
                    </div>
                    <p>umożliwia to zapisanie <b>ilorazu różnicowego</b> definiowanego jako tangens kąta <b>α</b>:</p>
                    <Formula formula={mathematicalAnalyticsFormulas.differentaliQuotient} />
                    <p>co prowadzi można rozpisać:</p>
                    <Formula formula={mathematicalAnalyticsFormulas.derivedFunctionDefinition_tangens} styles="min-w-[228px]" />
                    <p>Uwzględniając wzór na nachylenie prostej oraz założenie, że <b>h</b> dąży do zera można zapisać definicję:</p>
                    <Formula formula={mathematicalAnalyticsFormulas.derivedFunctionDefinitionLong} styles="min-w-[350px]" />
                </Explanation>
            </CoreCurriculum >
            <ArticleBorder />
            <Title text={"Równanie stycznej do funkcji w punkcie"} type={"main-article"} />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
                <p>Na początku tego artykułu został zdefiniowany sposób wyznaczania współczynnika kierunkowego równania stycznej (funkcji liniowej) do wykresu funkcji w wybranym punkcie. Wyznaczenie <b>wyrazu wolnego</b>, w przypadku podanych współczynnika kierunkowego oraz punktu należącego do tej prostej sprowadza się do rozwiązania problemu z zakresu geometrii analitycznej polegającego na wyzaczeniu równania prostej o znanym współczynniku kierunkowym przez punkt o znanych obu współrzędnych:</p>
                <Formula formula={mathematicalAnalyticsFormulas.equationOfTheTangentToFunction_b} styles="min-w-[185px]" />
                <Proof steps={proofOfEquationOfTheTangentToFunction_b} text={"Dowód"} styles="min-w-[185px]" />
                <p>Po wyznaczeniu współczynnika kierunkowego oraz wyrazu wolnego pozostaje zapisać <b>równanie stycznej do wykresu funkcji w punkcie <b>x<sub>0</sub>:</b></b></p>
                <Formula formula={mathematicalAnalyticsFormulas.equationOfTheTangentToFunction_2} styles="min-w-[260px]" />
                <p>Powyższe równanie można uprościć wyłączając wartość pochodnej dla argumentu <b>x<sub>0</sub></b> przed nawias. Ta forma równania jest w karcie wzorów maturalnych CKE:</p>
                <Formula formula={mathematicalAnalyticsFormulas.equationOfTheTangentToFunction} styles="min-w-[220px]" />
                <p>Poniższa animacja przedstawia wykres funkcji oraz styczne do tego wykresu w kolejnych punktach.</p>
                <div className="w-full flex justify-center max-w-full">
                    <iframe className={iFrameStyle} title={"Styczna do wykresu funkcji"} src={"https://www.desmos.com/calculator/m2rfs8wqmw?embed"} width={"500"} height={"500"}></iframe>
                </div>
            </CoreCurriculum>
            <ArticleBorder />
            <Title text={"Wzór pochodnej funkcji"} type={"main-article"} />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
                <p>Wyznaczenie <b>wzoru ogólnego pochodnej funkcji f(x)</b> liczy się tak samo, jak wartość pochodnej funkcji w punkcie podstawiając w miejsce <b>x<sub>0</sub></b> argument <b>x:</b>
                </p>
                <Formula formula={mathematicalAnalyticsFormulas.derivedFunctionDefinitionUniversal} styles="min-w-[240px]" />
                <p>Jednak ma to sens matematyczny tylko przy założeniu, że funkcja w całej swojej dziedzinie jest <b>różniczkowalna.</b></p>
                <br />
                <p>Polecam kalkulator liczenia wzorów pochodnych funkcji <NavLink to="https://www.wolframalpha.com/input?i2d=true&i=derivative+%5C%2891%29tutaj+wpisz+wz%C3%B3r+funkcji%5C%2893%29%5C%2844%29+np.+derivative+Power%5Bx%2C3%5D" className={'text:underline'}><b>wolframapha.com</b></NavLink></p>
                <p>Aby wyliczyć pochodną, należy użyć słowa kluczowego: <i>derivative</i>.</p>
            </CoreCurriculum>
            <ArticleBorder />
            <Title text={"Notacje pochodnej funkcji"} type={"main-article"} />
            <CoreCurriculum type={CoreCurriculumTypes.extra}>
                <p>W tym artykule podczas definiowania pochodnej funkcji została zastosowana <b>Notacja Lagrange'a</b>. Zależnie od kontekstu wykorzystania pochodnej funkcji stosowanych jest kilka równoważnych notacji:</p>
                <p><b>(1) Notacja Lagrange'a:</b></p>
                <p>Najczęściej używana przy liczeniu prostych pochodnych funkcji przyjmującej jeden argument.</p>
                <Formula formula={"f'(x)"} />
                <p><b>(2) Notacja Newtona:</b></p>
                <p>Stosowana w fizyce dla określenia pochodnych funkcji z parametrem czasowym <b>t</b>.</p>
                <Formula formula={"\\dot x"} />
                <p><b>(3) Notacja Leibniza:</b></p>
                <p>Wygodniejsza przy liczeniu całek oraz analizie funkcji wielu zmiennych, ponieważ wskazuje w mianowniku zmienną różniczkowania.</p>
                <Formula formula={"\\frac{df(x)}{dx}"} />
                <p>W przypadku liczenia <b>pochodnych cząstkowych</b> stosuje się zmodyfikowaną notację Leibniza, aby podkreślić, że jest to pochodna funkcji wieloargumentowej.</p>
                <Formula formula={"\\frac{\\partial f(x,y)}{\\partial x}"} />
                <p><b>(4) Notacja Eulera:</b></p>
                <p>Wygodna w przypadku rozwiązywania liniowych równań różniczkowych.</p>
                <Formula formula={"Df(x)"} />
            </CoreCurriculum>
            <ArticleBorder />
            <Title text={"Pochodna funkcji potęgowej"} type={"main-article"} />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
                <b>Pochodna funkcji potęgowej o wykładniku rzeczywistym</b> jest równa iloczynowi wykładnika i potęgi o podstawie identycznej, jak ta w funkcji, której pochodna jest liczona ale o wykładniku pomniejszonym o jeden.
                <Formula formula={mathematicalAnalyticsFormulas.derivedOfPowerFunctionReal} />
                <p>założenie:</p>
                <Formula formula={"a \\in \\mathbb{R}"} />
            </CoreCurriculum>
            <CoreCurriculum type={CoreCurriculumTypes.extra}>
                <Explanation text={"Dowody"}>
                    <p><b>(1) Pochodna funkcji potęgowej o wykładniku naturalnym:</b></p>
                    <Formula formula={mathematicalAnalyticsFormulas.derivedOfPowerFunctionNatural} styles="min-w-[130px]" />
                    <p>założenie:</p>
                    <Formula formula={"n \\in \\mathbb{N}"} />
                    <Proof steps={derivedOfPowerFunctionNaturalFrom2} text={"Dowód"} styles="min-w-[670px]">
                        W dowodzie został wykorzystany <b>dwumianu Netwona</b>
                    </Proof>
                    <p><b>(2) Pochodna funkcji potęgowej o wykładniku całkowitym ujemnym:</b></p>
                    <Formula formula={mathematicalAnalyticsFormulas.derivedOfPowerFunctionNegativeIntegral} styles="min-w-[126px]" />
                    <p>założenie:</p>
                    <Formula formula={"n \\in \\mathbb{N}"} />
                    <Proof steps={derivedOfPowerFunctionNegativeIntegralToMinus2} text={"Dowód"} styles="min-w-[745px]" >
                        W dowodzie został wykorzystany <b>dwumianu Netwona</b>
                    </Proof>
                    <p><b>(3) Pochodna funkcji potęgowej o wykładniku wymiernym:</b></p>
                    <Formula formula={mathematicalAnalyticsFormulas.derivedOfPowerFunctionRational} styles="min-w-[154px]" />
                    <p>założenie:</p>
                    <Formula formula={"m,n \\in \\mathbb{Z} \\land n\\neq 0"} />
                    <Proof steps={derivedOfPowerFunctionRational} text={"Dowód"} styles="min-w-[705px]" >
                        <p>W dowodzie zastosowano <b>uogólniony na wykładniki rzeczywiste i zespolone dwumian Newtona</b>, który bazuje na <b>funkcji Gamma Eulera</b> - uogólnienionej silni na zbiór liczb rzeczywistych i zespolonych.</p>
                    </Proof>
                    <p><b>(4) Pochodna funkcji potęgowej o wykładniku rzeczywistym:</b></p>
                    <Formula formula={mathematicalAnalyticsFormulas.derivedOfPowerFunctionReal} />
                    <p>założenie:</p>
                    <Formula formula={"a \\in \\mathbb{R}"} />
                    <Proof steps={derivedOfPowerFunctionReal} text={"Dowód"} styles="min-w-[100px]" >
                        <p>W dowodzie zastosowano <b>regułę łańcuchową</b>, pochodną <b>funkcji eksponencjalnej</b> oraz pochodną <b>funkcji logarytmu naturalnego</b></p>
                    </Proof>
                </Explanation>
            </CoreCurriculum >
            <ArticleBorder />
            <Title text={"Szczególne przypadki pochodnej funkcji potęgowej"} type={"main-article"} />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
                <p>Poniżej zostały wymienione najczęściej używane szczególne przypadki wykorzystania wzoru na pochodną funkcji potęgowej.</p><br />
                <p><b>(1) przypadek gdy a = 3</b></p>
                <Formula formula={"\\left(x^3\\right)'=3x^2"} />
                <Proof steps={["\\left( x^3 \\right)'", "3 \\cdot x^{3-1}", "3x^2"]} text={"Dowód"} styles="min-w-[185px]" />
                <p><b>(2) przypadek gdy a = 2</b></p>
                <Formula formula={"\\left(x^2\\right)'=2x"} />
                <Proof steps={["\\left( x^2 \\right)'", "2 \\cdot x^{2-1}", "2x"]} text={"Dowód"} styles="min-w-[185px]" />
                <p><b>(3) przypadek gdy a = 1</b></p>
                <Formula formula={"\\left(x\\right)'=1"} />
                <Proof steps={["\\left( x^1 \\right)'", "1 \\cdot x^{1-1}", "1\\cdot 1", "1"]} text={"Dowód"} styles="min-w-[185px]" />
                <p><b>(4) przypadek gdy a = 0.5</b></p>
                <Formula formula={"\\left(\\sqrt{x}\\right)'=\\frac{1}{2\\sqrt{x}}"} />
                <Proof steps={["\\left( \\sqrt{x} \\right)'", "\\left( x^{\\frac{1}{2}} \\right)'", "\\frac{1}{2} \\cdot x^{\\frac{1}{2}-1}", "\\frac{1}{2} \\cdot x^{-\\frac{1}{2}}", "\\frac{1}{2} \\cdot \\frac{1}{x^{\\frac{1}{2}}}", "\\frac{1}{2\\sqrt{x}}"]} text={"Dowód"} styles="min-w-[185px]" />
                <p><b>(5) przypadek gdy a = 0.(3)</b></p>
                <Formula formula={"\\left(\\sqrt[3]{x}\\right)'=\\frac{1}{3\\sqrt[3]{x^2}}"} />
                <Proof steps={["\\left( \\sqrt[3]{x} \\right)'", "\\left( x^{\\frac{1}{3}} \\right)'", "\\frac{1}{3} \\cdot x^{\\frac{1}{3}-1}", "\\frac{1}{3} \\cdot x^{-\\frac{2}{3}}", "\\frac{1}{3} \\cdot \\frac{1}{x^{\\frac{2}{3}}}", "\\frac{1}{3\\sqrt[3]{x^2}}"]} text={"Dowód"} styles="min-w-[185px]" />
                <p><b>(6) przypadek gdy a = 0</b></p>
                <Formula formula={"\\left(1\\right)'=0"} />
                <Proof steps={["\\left( 1 \\right)'", "\\left( x^0 \\right)'", "0 \\cdot x^{0-1}", "0"]} text={"Dowód"} styles="min-w-[185px]" />
                <p><b>(7) przypadek gdy a = -1</b></p>
                <Formula formula={"\\left(\\frac{1}{x}\\right)'=-\\frac{1}{x^2}"} />
                <Proof steps={["\\left( \\frac{1}{x} \\right)'", "\\left( x^{-1} \\right)'", "-1 \\cdot x^{-1-1}", "- x^{-2}", "- \\frac{1}{x^2}"]} text={"Dowód"} styles="min-w-[185px]" />
                <p><b>(8) przypadek gdy a = -2</b></p>
                <Formula formula={"\\left(\\frac{1}{x^2}\\right)'=-\\frac{2}{x^3}"} />
                <Proof steps={["\\left( \\frac{1}{x^2} \\right)'", "\\left( x^{-2} \\right)'", "-2 \\cdot x^{-2-1}", "-2\\cdot x^{-3}", "- \\frac{2}{x^3}"]} text={"Dowód"} styles="min-w-[185px]" />
            </CoreCurriculum>
            <ArticleBorder />
            <Title text={"Zależności pochodnych"} type={"main-article"} />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
                <p>Zakładając, że <b>f(x)</b> oraz <b>g(x)</b> to funkcje różniczkowalne, a <b>c</b> to dowolna liczba rzeczywista, prawdziwe są równania:</p>
                <br /><p><b>(1) Pochodna funkcji stałej </b></p>
                <Formula formula={"\\left( c \\right)' = 0"} styles="min-w-[257px]" />
                <Proof steps={["\\left( c \\right)'", "\\lim_{h\\rightarrow 0}{\\frac{c-c}{h}}", "\\lim_{h\\rightarrow 0}{\\frac{0}{h}}", "0"]} text={"Dowód"} styles="min-w-[78px]" />
                <p><b>(2) Wyłączenie stałej przed pochodną </b></p>
                <Formula formula={"\\left( c \\cdot f(x) \\right)' = c \\cdot f'(x)"} styles="min-w-[257px]" />
                <Proof steps={["\\left( c \\cdot f(x) \\right)'", "(c)'\\cdot f(x) + c \\cdot f'(x)", "0 \\cdot f(x) + c \\cdot f'(x)", " c \\cdot f'(x)"]} text={"Dowód"} styles="min-w-[165px]" >
                    W dowodzie został użyty wzór na pochodną iloczynu funkcji (4)
                </Proof>
                <p><b>(3) Pochodna sumy funkcji</b></p>
                <Formula formula={mathematicalAnalyticsFormulas.sumRuleForDerivatives} styles="min-w-[257px]" />
                <Proof steps={proofOfTheSumRuleForDerivatives} text={"Dowód"} styles="min-w-[400px]" />
                <p><b>(4) Pochodna różnicy funkcji</b></p>
                <Formula formula={`\\left(f\\left(x\\right) - g\\left(x\\right)\\right)' = f'\\left(x\\right) - g'\\left(x\\right)`} styles="min-w-[257px]" />
                <Proof steps={proofOfTheDifferenceRuleForDerivatives} text={"Dowód"} styles="min-w-[400px]" />
                <p><b>(5) Pochodna iloczynu funkcji</b></p>
                <Formula formula={mathematicalAnalyticsFormulas.productRuleForDerivatives} styles="min-w-[350px]" />
                <Proof steps={proofOfTheProductRuleForDerivatives} text={"Dowód"} styles="min-w-[580px]" />
                <p><b>(6) Pochodna ilorazu funkcji</b></p>
                <Formula formula={`\\left(\\frac{f\\left(x\\right)}{g\\left(x\\right)}\\right)' = \\frac{f'\\left(x\\right)\\cdot g\\left(x\\right) - f\\left(x\\right)\\cdot g'\\left(x\\right)}{\\left(g\\left(x\\right)\\right)^2}`} styles="min-w-[328px]" />
                <Proof steps={proofOfTheQuotientRuleForDerivatives} text={"Dowód"} styles="min-w-[705px]" />
                <p><b>(7) Pochodna funkcji złożonej (reguła łańcucha)</b></p>
                <p className="ml-5">(a) Zapisana w notacji Lagrange'a</p>
                <Formula formula={`\\left(\\left(f\\circ g\\right)(x)\\right)'=\\left(f\\left(g\\left(x\\right)\\right)\\right)' = f'\\left(g\\left(x\\right)\\right)\\cdot g'\\left(x\\right)`} styles="min-w-[380px]" />
                <p className="ml-5">(b) Zapisana w notacji Leibniza - przyjęto skrócony zapis <b>f</b>, zamiast <b>f(g(x))</b></p>
                <Formula formula={`\\frac{df}{dx} = \\frac{df}{dg} \\cdot \\frac{dg}{dx}`} styles="min-w-[130px]" />
                <Proof steps={proofOfChainRuleDerivatives} text={"Dowód"} styles="min-w-[310px]">
                    W dowodzie zastosowano definicję pochodnej (iloraz różnicowy). Kluczowe jest wnioskowanie, że jeżeli różniczka <b>Δx</b> dąży do zera, to również <b>Δg(x)</b> dąży do zera.
                </Proof>
                <Proof steps={proofOfChainRuleDerivativesSimplified} text={"Dowód (uproszczony zapis)"} styles="min-w-[220px]">
                    W dowodzie zastosowano definicję pochodnej (iloraz różnicowy). Kluczowe jest wnioskowanie, że jeżeli różniczka <b>Δx</b> dąży do zera, to również <b>Δg</b> dąży do zera.
                </Proof>
            </CoreCurriculum>
            <ArticleBorder />
            <Title text={"Pochodne wybranych funkcji"} type={"main-article"} />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
                <p></p>
                <br /><p><b>(1) Pochodna funkcji sinus</b></p>
                <Formula formula={mathematicalAnalyticsFormulas.derivedFuncionSinus} styles="min-w-[125px]" />
                <Proof steps={proofOfDerivedSinus} text={"Dowód"} styles="min-w-[520px]" >
                    W dowodzie wykorzystano <b>wzór na sinus sumy</b> oraz tożsamość:
                    <Formula formula={"\\lim_{x\\rightarrow 0}{\\frac{\\sin{x}}{x}}=1"} />
                </Proof>
                <br /><p><b>(2) Pochodna funkcji kosinus</b></p>
                <Formula formula={mathematicalAnalyticsFormulas.derivedFuncionCosinus} styles="min-w-[125px]" />
                <Proof steps={proofOfDerivedCosinus} text={"Dowód"} styles="min-w-[520px]" >
                    W dowodzie wykorzystano <b>wzór na kosinus sumy</b> oraz tożsamość:
                    <Formula formula={"\\lim_{x\\rightarrow 0}{\\frac{\\sin{x}}{x}}=1"} />
                </Proof>
                <br /><p><b>(3) Pochodna funkcji tangens</b> - wzór w dwóch formach</p>
                <Formula formula={mathematicalAnalyticsFormulas.derivedFuncionTangens1} styles="min-w-[125px]" />
                <Proof steps={proofOfDerivedTanges1} text={"Dowód"} styles="min-w-[250px]" />
                <Formula formula={mathematicalAnalyticsFormulas.derivedFuncionTangens2} styles="min-w-[125px]" />
                <Proof steps={proofOfDerivedTanges2} text={"Dowód"} styles="min-w-[250px]" />
            </CoreCurriculum>
            <CoreCurriculum type={CoreCurriculumTypes.extra}>
                <br /><p><b>(4) Pochodna funkcji kotangens</b> - wzór w dwóch formach</p>
                <Formula formula={mathematicalAnalyticsFormulas.derivedFuncionCotangens1} styles="min-w-[125px]" />
                <Proof steps={proofOfDerivedCotanges1} text={"Dowód"} styles="min-w-[250px]" />
                <Formula formula={mathematicalAnalyticsFormulas.derivedFuncionCotangens2} styles="min-w-[125px]" />
                <Proof steps={proofOfDerivedCotanges2} text={"Dowód"} styles="min-w-[250px]" />
                <br /><p><b>(5) Pochodna funkcji wykładniczej</b></p>
                <Formula formula={`\\left(a^x\\right)' = a^x \\cdot \\ln{a}`} />
                <Proof steps={proofOfDerivedExponent} text={"Dowód"} styles="min-w-[78px]" >
                    W dowodzie wykorzystano tożsamość:
                    <Formula formula={"\\lim_{x\\rightarrow 0}{\\frac{a^x-1}{x}}=\\ln{a}"} />
                </Proof>
                <br /><p><b>(5.1) Pochodna funkcji eksponencjalnej</b> - szczególny przypadek wzoru (5)</p>
                <Formula formula={`\\left(e^x\\right)' = e^x`} />
                <Proof steps={proofOfDerivedExponente} text={"Dowód"} styles="min-w-[78px]" />
                <br /><p><b>(6) Pochodna funkcji logarytmicznej</b></p>
                <Formula formula={`\\left(\\log_{a}{x} \\right)' = \\frac{1}{x \\cdot \\ln{a}}`} />
                <Proof steps={proofOfDerivedLog} text={"Dowód"} styles="min-w-[78px]" >
                    <p>W dowodzie wykorzystano <NavLink to="../logarytmowanie"> <b>zależności logarytmiczne</b></NavLink> oraz tożsamość:</p>
                    <Formula formula={"e=\\lim_{x\\rightarrow 0}{\\left(1+x\\right)^{\\frac{1}{x}}}"} />
                </Proof>
                <br /><p><b>(6.1) Pochodna logarytmu naturalnego</b> - szczególny przypadek wzoru (6)</p>
                <Formula formula={`\\left(\\ln{x} \\right)' = \\frac{1}{x}`} />
                <Proof steps={proofOfDerivedLn} text={"Dowód"} styles="min-w-[78px]" >
                </Proof>
                <br /><p><b>(7) Pochodne funkcji cyklometrycznych</b></p>
                <Formula formula={`\\left(\\arcsin{x}\\right)' = \\frac{1}{\\sqrt{1-x^2}}`} />
                <Formula formula={`\\left(\\arccos{x}\\right)' = \\frac{-1}{\\sqrt{1-x^2}}`} />
                <Formula formula={`\\left(\\arctan{x}\\right)' = \\frac{1}{x^2+1}`} />
                <Formula formula={`\\left(\\text{arccot}\\ {x}\\right)' = \\frac{-1}{x^2+1}`} />
            </CoreCurriculum>
        </>
    );
};

export default DerivedFunctionContent;
