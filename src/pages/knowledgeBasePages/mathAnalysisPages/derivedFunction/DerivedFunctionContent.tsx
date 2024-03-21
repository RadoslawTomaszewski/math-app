import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import GraphImage from "../../../../components/articleItems/GraphImage";
import DerivedFunctionGraph from "../../../../assets/images/knowledge_base/math_analytics/derived_definition.png"
import Formula from "../../../../components/articleItems/Formula";
import { mathematicalAnalyticsFormulas } from "../../../../types/equations";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import { NavLink } from "react-router-dom";
import Explanation from "../../../../components/articleItems/Explanation";
import { CoreCurriculum, CoreCurriculumTypes } from "../../../../components/CoreCurriculum/CoreCurriculum";

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
                <LegendParagraph type={"top"} notation={"f'(x)"} explanation={"Pochodna funkcji f"} />
                <LegendParagraph type={"short"} notation={"x_0"} explanation={"rzędna punktu, w którym liczona jest pochodna"} />
                <LegendParagraph type={"top"} notation={"h"} explanation={"przyrost argumentu (często spotyka się oznaczenie Δx)"} />
                <br />
                <Explanation text={"Wyjaśnienie"}>
                    <p className="flex flex-wrap wrap">W kontekście tej definicji należy traktować pochodną funkcji jako wskaźnik tempa przyrostu wartości funkcji w danym punkcie.</p>
                    <p className="mt-2">Aby móc lepiej wyobrazić sobie to pojęcie można posłużyć się wizualizacją tego wskaźnika za pomocą <NavLink to="../prosta"><b>stycznej</b></NavLink> do wykresu funkcji w punkcie,
                        którą da się wyrazić równaniem <NavLink to="../funkcja-liniowa"><b>prostej w postaci kierunkowej.</b></NavLink></p>
                    <br />
                    <p>
                        <b>Styczna</b> jest granicznym momentem <b>siecznej</b> przechodzącej przez dwa punkty, których odległość między nimi dąży do zera. Współrzędne tych punktów można oznaczyć kolejno jako:</p>
                    <Formula formula={"A=\\left(x_0,f(x_0)\\right)"} />
                    <Formula formula={"B=\\left(x_0+h, f\\left(x_0+h\\right)\\right)"} />
                    <p>gdzie <b>h</b> to przyrost argumentu, który zgodnie z powyższymi ustaleniami dąży do zera, co w konsekwencji sprowadza oba punkty do jednego punktu o tych samych współrzędnych.</p>
                    <br />
                    <p>Oba punkty jednak są niezbędne w celu wyznaczenia stopnia nachylenia prostej do osi rzędnych. Im większy stopień nachylenia (potocznie można stwierdzić, że prosta jest bardziej stroma) tym szybszy jest wzrost (lub spadek) wartości funkcji.</p>
                    <p>Z informacji o prostej wiadomo, że:</p>
                    <Formula formula={"a=\\tan{\\alpha}"} />
                    <LegendParagraph type={"short"} notation={"a"} explanation={"współczynnik kierunkowy prostej, któa jest styczną w punkcie A"} />
                    <LegendParagraph type={"short"} notation={"\\alpha"} explanation={"kąt nachylenia prostej do osi rzędnych (OX)"} /><br />
                    <p>Tangens kąta α można wyznaczyć tworząc odpowiedni stosunek przyprostokątnych trójkąta prostokątnego opartego na tych punktach. Długości tych przyprostokątnych są tzw. <b>różniczkami</b>, czyli nieskończenie małymi zmianami danej zmiennej: </p>
                    <Formula formula={"\\Delta x = h"} />
                    <Formula formula={"\\Delta y = f\\left(x_0+h\\right)-f\\left(x_0\\right) "} />
                    <LegendParagraph type={"top"} notation={"\\Delta x"} explanation={"różniczka zmiennej x"} />
                    <LegendParagraph type={"top"} notation={"\\Delta y"} explanation={"różniczka zmiennej y"} /><br />
                    <p>Zatem tangens kąta α określa równanie:</p>
                    <Formula formula={"\\tan{\\alpha}=\\frac{\\Delta y}{\\Delta x}"} />
                    <p>co prowadzi do postaci:</p>
                    <Formula formula={"\\tan{\\alpha}=\\frac{f\\left(x_0+h\\right)-f\\left(x_0\\right)}{h}"} />
                    <p>Uwzględniając założenie, że <b>h</b> dąży do zera otrzymujemy ostatecznie:</p>
                    <Formula formula={"f'\\left(x_0\\right)=a=\\tan{\\alpha}=\\lim_{{h \\to 0}} \\frac{f(x + h) - f(x)}{h}"} />
                </Explanation>
            </CoreCurriculum>
            <ArticleBorder />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
                <Title text={"Wzory na pochodne"} type={"submain-article"} />
                {/* <Formula formula={`\\left(\\frac{1}{f\\left(x\\right)}\\right)' = -\\frac{f'\\left(x\\right)}{\\left(f\\left(x\\right)\\right)^2}`} /> */}
                <p>Zakładając, że <b>f(x)</b> oraz <b>g(x)</b> to funkcje różniczkowalne prawdziwe są równania:</p>
                <p><b>(1) Pochodna sumy funkcji</b></p>
                <Formula formula={`\\left(f\\left(x\\right) + g\\left(x\\right)\\right)' = f'\\left(x\\right) + g'\\left(x\\right)`} />
                <p><b>(2) Pochodna różnicy funkcji</b></p>
                <Formula formula={`\\left(f\\left(x\\right) - g\\left(x\\right)\\right)' = f'\\left(x\\right) - g'\\left(x\\right)`} />
                <p><b>(3) Pochodna iloczynu funkcji</b></p>
                <Formula formula={`\\left(f\\left(x\\right)\\cdot g\\left(x\\right)\\right)' = f'\\left(x\\right)\\cdot g\\left(x\\right) + f\\left(x\\right)\\cdot g'\\left(x\\right)`} />
                <p><b>(4) Pochodna ilorazu funkcji</b></p>
                <Formula formula={`\\left(\\frac{f\\left(x\\right)}{g\\left(x\\right)}\\right)' = \\frac{f'\\left(x\\right)\\cdot g\\left(x\\right) - f\\left(x\\right)\\cdot g'\\left(x\\right)}{\\left(g\\left(x\\right)\\right)^2}`} />
                <p><b>(5) Pochodna funkcji złożonej</b></p>
                <Formula formula={`\\left(f\\left(g\\left(x\\right)\\right)\\right)' = f'\\left(g\\left(x\\right)\\right)\\cdot g'\\left(x\\right)`} />
            </CoreCurriculum>
            <ArticleBorder />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
                <Title text={"Równanie stycznej do funkcji w punkcie"} type={"submain-article"} />
                <Formula formula={"y = f'(x_0)(x - x_0) + f(x_0)"} />
                <p>...........ARTYKUŁ W BUDOWIE...........</p>
            </CoreCurriculum>
            <ArticleBorder />
            <Formula formula={`\\left(c\\right)' = 0`} />
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
            <Formula formula={`\\left(\\arctan\\left(x\\right)\\right)' = \\frac{1}{1+x^2}`} />
        </>
    );
};

export default DerivedFunctionContent;
