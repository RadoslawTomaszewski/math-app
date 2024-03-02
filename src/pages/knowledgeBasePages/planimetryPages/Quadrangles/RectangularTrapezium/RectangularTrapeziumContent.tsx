import { FC } from "react";
import Title from "../../../../../components/articleItems/Title";
import GraphImage from "../../../../../components/articleItems/GraphImage";
import Formula from "../../../../../components/articleItems/Formula";
import LegendParagraph from "../../../../../components/articleItems/LegendParagraph";
import RectangularTrapezium from "../../../../../assets/images/quadrangles/rectangular_trapezoid.png"
import ArticleBorder from "../../../../../components/articleItems/ArticleBorder";
import RectangularTrapeziumX from "../../../../../assets/images/quadrangles/rectangular_trapezium_x.png";
import { StereometryEquations } from "../../../../../types/equations";
const RectangularTrapeziumContent: FC = () => {

    return (
        <>
            <div className="flex flex-col">
                <Title text={"Trapez prostokątny"} type="main-article" />
                <p><b>Trapez prostokątny</b> to trapez, którego co najmniej jedno ramię jest równe odległości między podstawami.</p>
                <GraphImage size={"small"} src={RectangularTrapezium} alt={"Trapez prostokatny"} />
                <p>Obwód:</p>
                <Formula formula={StereometryEquations.TrapezoidPerimeter} />
                <LegendParagraph type={"top"} notation={"a,b"} explanation={"podstawy trapezu"} />
                <LegendParagraph type={"short"} notation={"c"} explanation={"ramię będące wysokością trapezu"} />
                <LegendParagraph type={"top"} notation={"d"} explanation={"ramię trapezu"} /><br />
                Trapez dziedziczy wzór na pole trapezoidu:
                <Formula formula={StereometryEquations.TrapezoidArea} />
                Bok c jest równy wysokości trapezu, więc można utworzyć wzór:
                <Formula formula={StereometryEquations.TrapeziumArea_Rectangular} />
                Wzór na pole trapezu ma swoje zastosowanie ale jest bardziej złożony obliczeniowo w porównaniu z poprzednim wzorem:
                <div className="min-w-full overflow-x-auto">
                    <div className="min-w-[800px]">
                        <Formula formula={StereometryEquations.TrapeziumArea2} />
                    </div>
                </div>
                <ArticleBorder />
                <Title text={"Charakterystyczne odcinki w trapezie prostokątnym"} type={"submain-article"} />
                <GraphImage size={"smaller"} src={RectangularTrapeziumX} alt={"Odcinek równy różnicy podstaw"} />
                <p><b>Odcinek różnicy podstaw</b>, który łączy koniec podstawy, od strony kąta ostrego, z bliższym spodkiem wysokości opuszczonej na tę podstawę jest równy </p>
                <Formula formula="\\a-b" />
                <ArticleBorder />
                <p>Wyróżnia się szczególne przypadki trapezów prostokątnych: <b>prostokąt</b> i <b>kwadrat</b></p>
            </div>
        </>
    );
};

export default RectangularTrapeziumContent;
