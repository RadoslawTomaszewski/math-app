import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import GraphImage from "../../../../components/articleItems/GraphImage";
import DerivedFunctionGraph from "../../../../assets/images/knowledge_base/math_analytics/derived_definition.png"
import Formula from "../../../../components/articleItems/Formula";
import { mathematicalAnalyticsFormulas } from "../../../../types/equations";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import { NavLink } from "react-router-dom";

const DerivedFunctionContent: FC = () => {
    return (
        <>
            <Title text={"Pochodna funkcji"} type={"main-article"} />
            <p><b>Pochodna funkcji</b> to podstawowe pojęcie <b>rachunku różniczkowego</b>, które pozwala określić tempo zmiany wartości funkcji.  </p>
            <ArticleBorder />
            <Title text={"Pochodna funkcji w punkcie"} type={"main-article-smaller"} />
            <p><b>Pochodna funkcji w punkcie</b> definiowana jest jako następująca granica ilorazu różnicowego:</p>
            <GraphImage src={DerivedFunctionGraph} alt={"Definicja pochodnej funkcji jednoargumentowej"} styles="w-[500px] max-w-full" />
            <Formula formula={mathematicalAnalyticsFormulas.derivedFunctionDefinition} styles="min-w-[240px]" />
            <p>gdzie:</p>
            <LegendParagraph type={"top"} notation={"f(x)"} explanation={"Funkcja, której pochodna jest szukana"} />
            <LegendParagraph type={"top"} notation={"f'(x)"} explanation={"Pochodna funkcji f"} />
            <LegendParagraph type={"top"} notation={"h"} explanation={"przyrost argumentu (często spotyka się oznaczenie Δx)"} />
            <br />
            <p><u>Wyjaśnienie:</u></p>
            <p className="flex flex-wrap wrap">W kontekście tej definicji należy traktować pochodną funkcji jako wskaźnik tempa przyrostu wartości funkcji w danym punkcie.</p>
            <p className="mt-2">Aby móc lepiej wyobrazić sobie to pojęcie można posłużyć się wizualizacją tego wskaźnika za pomocą <b>stycznej do wykresu funkcji w punkcie </b>,
                którą da się wyrazić równaniem <NavLink to="../funkcja-liniowa"><b>prostej w postaci kierunkowej.</b></NavLink></p>
            <p>
                {/* tutaj dodasz cos w rodzaju czym jest styczna */}
                {/* <p><b>styczna</b> - <u>prosta</u>, która jest granicznym położeniem <NavLink to="sieczna">siecznych</NavLink> przechodzących przez dwa punkty A i B, przy czym odległość między tymi punktami dąży do zera.</p> */}
            </p>
            <br />
            <p> .... ARTYKUŁ W BUDOWIE ....</p>
            <ArticleBorder />
            <Title text={"Wzory na pochodne"} type={"submain-article"} />
            {/* <Formula formula={`\\left(\\frac{1}{f\\left(x\\right)}\\right)' = -\\frac{f'\\left(x\\right)}{\\left(f\\left(x\\right)\\right)^2}`} /> */}
            <Formula formula={`\\left(f\\left(x\\right) \\pm g\\left(x\\right)\\right)' = f'\\left(x\\right) \\pm g'\\left(x\\right)`} />
            <Formula formula={`\\left(f\\left(x\\right)\\cdot g\\left(x\\right)\\right)' = f'\\left(x\\right)\\cdot g\\left(x\\right) + f\\left(x\\right)\\cdot g'\\left(x\\right)`} />
            <Formula formula={`\\left(f\\left(g\\left(x\\right)\\right)\\right)' = f'\\left(g\\left(x\\right)\\right)\\cdot g'\\left(x\\right)`} />
            <Formula formula={`\\left(\\frac{f\\left(x\\right)}{g\\left(x\\right)}\\right)' = \\frac{f'\\left(x\\right)\\cdot g\\left(x\\right) - f\\left(x\\right)\\cdot g'\\left(x\\right)}{\\left(g\\left(x\\right)\\right)^2}`} />
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
