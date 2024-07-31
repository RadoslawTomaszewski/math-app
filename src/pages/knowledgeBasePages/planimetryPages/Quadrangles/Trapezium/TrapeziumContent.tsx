import { FC } from "react";
import Title from "../../../../../components/articleItems/Title";
import GraphImage from "../../../../../components/articleItems/GraphImage";
import Trapeze from "../../../../../assets/images/quadrangles/trapeze.png"
import Formula from "../../../../../components/articleItems/Formula";
import { GeometryEquations } from "../../../../../data/equations";
import LegendParagraph from "../../../../../components/articleItems/LegendParagraph";
import TrapezeHalf from "../../../../../assets/images/quadrangles/tapeze_half.png";
import ArticleBorder from "../../../../../components/articleItems/ArticleBorder";
import TrapeziumAngles from "../../../../../assets/images/quadrangles/trapezium_angles.png";
import { NavLink } from "react-router-dom";

const TrapeziumContent: FC = () => {

    return (
        <>
            <div className="flex flex-col">
                <Title text={"Trapez"} type="main-article" />
                <p><b>Trapez</b> to czworokąt wypukły, mający co najmniej jedną parę boków równoległych. </p>
                <GraphImage size={"small"} src={Trapeze} alt={"Trapez"} />
                <p>Obwód:</p>
                <Formula formula={GeometryEquations.TrapezoidPerimeter} />
                <LegendParagraph type={"top"} notation={"a,b"} explanation={"podstawy trapezu"} />
                <LegendParagraph type={"top"} notation={"c,d"} explanation={"ramiona trapezu"} />
                <br />
                <p>Pole trapezu można policzyć wzorem na pole trapezoidu:</p>
                <Formula formula={GeometryEquations.TrapezoidArea} />
                <LegendParagraph type={"top"} notation={"d_1,d_2"} explanation={"przekątne trapezu"} />
                <LegendParagraph type={"short"} notation={"\\alpha"} explanation={"kąt między przekątnymi"} /><br />
                <p>Jeśli znana jest wysokość opuszczona na podstawę trapezu, można użyć innego wzoru na pole:</p>
                <Formula formula={GeometryEquations.TrapeziumArea} />
                <LegendParagraph type={"top"} notation={"h"} explanation={"wysokość trapezu opuszczona na podstawę"} /><br />
                <p>Istnieje niepopularny wzór na pole trapezu, gdy znane są wszystkie długości boków trapezu. Zakłada się, że podstawy są różnej długości. </p>
                <div className="min-w-full overflow-x-auto">
                    <div className="min-w-[800px]">
                        <Formula formula={GeometryEquations.TrapeziumArea2} />
                    </div>
                </div>
                <ArticleBorder />
                <Title text={"Twierdzenie o kątach w trapezie"} type={"submain-article"} />
                <p>Suma dwóch kątów opartych na tym samym ramieniu trapezu wynosi 180° </p>
                <GraphImage size={"smaller"} src={TrapeziumAngles} alt={"Trapezoid"} />
                <p>Fakt ten można udowodnić za pomocą <b>Twierdzenia o trzech prostych</b></p>
                <ArticleBorder />
                <Title text={"Twierdzenie o odcinku łączącym środki ramion"} type={"submain-article"} />
                <GraphImage size={"smaller"} src={TrapezeHalf} alt={"Trapezoid"} />
                <p><b>Odcinek łączący środki ramion</b> trapezu jest równoległy do jego postaw i jego długość wyraża się równaniem</p>
                <Formula formula={GeometryEquations.TrapeziumMidpointsConnector} />
                <ArticleBorder />
                <p> Wyróżnia się szczególne przypadki trapezów: <NavLink to="../trapez-prostokatny"><b>trapez prostokątny</b></NavLink> i <NavLink to="../trapez-rownoramienny"><b>trapez równoramienny</b></NavLink></p>


            </div>
        </>
    );
};

export default TrapeziumContent;
