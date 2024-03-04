import { FC } from "react";
import Title from "../../../../../components/articleItems/Title";
import GraphImage from "../../../../../components/articleItems/GraphImage";
import ArticleBorder from "../../../../../components/articleItems/ArticleBorder";
import LegendParagraph from "../../../../../components/articleItems/LegendParagraph";
import Formula from "../../../../../components/articleItems/Formula";
import TrapezoidInCircle from "../../../../../assets/images/quadrangles/trapezoid_in_circle.png";
import TrapezoidOnCircle from "../../../../../assets/images/quadrangles/trapezoid_on_circle.png";
import TrapezoidInCircle2 from "../../../../../assets/images/quadrangles/trapezoid_in_circle_2.png";
import TrapezoidOnCircle2 from "../../../../../assets/images/quadrangles/trapezoid_on_circle_2.png";
import CyclingTrapezoid_Irregular from "../../../../../assets/images/quadrangles/cyclingTrapezoid_Irregular.png";
import CyclingTrapezoid_Trapezium from "../../../../../assets/images/quadrangles/cyclingTrapezoid_Trapezium.png";
import CyclingTrapezoid_Rectangle from "../../../../../assets/images/quadrangles/cyclingTrapezoid_Rectangle.png";
import CyclingTrapezoid_Square from "../../../../../assets/images/quadrangles/cyclingTrapezoid_Square.png";

import { GeometryEquations } from "../../../../../types/equations";

const CirclesRelationsContent: FC = () => (
    <>
        <Title text={"Czworokąt wpisany w okrąg, a opisany na okręgu"} type="main-article" />
        <p>
            W geometrii płaskiej czworokąt wpisany w okrąg to taki, który ma wszystkie wierzchołki leżące na okręgu,
            podczas gdy czworokąt opisany na okręgu to taki, którego wszystkie boki leżą na okręgu.
        </p>
        <ArticleBorder />

        <Title text={"Czworokąt wpisany w okrąg"} type="main-article" />
        <GraphImage size={"small"} src={TrapezoidInCircle} alt={"Czworokąt wpisany w okrąg"} />
        <p>Dla czworokąta wpisanego w okrąg zachodzi zależność:</p>
        <Formula formula={GeometryEquations.trapezoid_in_circle} />
        <LegendParagraph type={"top"} notation={"\\alpha, \\beta, \\gamma, \\delta"} explanation={"miary kątów wewnętrznych czworokąta"} /><br />
        <p>Wzór na pole czworokąta, który jest wpisany w okrąg można policzyć za pomocą <b>wzoru Brahmagupty</b></p>
        <Formula formula={GeometryEquations.trapezoidInCircleArea} />
        <p>gdzie:</p>
        <Formula formula={GeometryEquations.HalfPerimeter} />
        <LegendParagraph type={"top"} notation={"a,b,c,d"} explanation={"boki czworokąta cyklicznego"} />
        <LegendParagraph type={"short"} notation={"p"} explanation={"połowa obwodu czworokąta cyklicznego"} />
        <br />
        <p>Ten sam wzór można zapisać bez konieczności wprowadzania wartości równej połowie obwodu czworokąta cyklicznego:</p>
        <div className="overflow-x-auto">
            <div className="flex justify-center my-4 min-w-[600px]">
                <Formula formula={GeometryEquations.trapezoidInCircleArea2} />
            </div>
        </div>
        <ArticleBorder />
        <p>Środek okręgu opisanego na czworokacie jest punktem przecięcia się jego symetralnych</p>
        <GraphImage size={"smaller"} src={TrapezoidInCircle2} alt={"Czworokąt wpisany w okrąg"} />
        <ArticleBorder />
        <Title text={"Czworokąty cykliczne"} type="submain-article" />
        <p><b>Czworokąt cykliczny</b> to czworokąt, którego suma miar przeciwległych kątów jest równa 180°, czyli taki na którym da sie opisać okrąg</p>
        <GraphImage size={"smallest"} src={CyclingTrapezoid_Irregular} alt={"Trapezoid wpisany w okrąg"} />
        <p>Aby trapez był cykliczny musi być równoramienny. Prostokąt i kwadrat jako szczególne przypadki trapezów równoramiennych są czworokątami cyklicznymi.</p>

        <div className="flex justify-around flex-wrap m-2">
            <GraphImage size={"smallest"} src={CyclingTrapezoid_Trapezium} alt={"Trapez równoramienny wpisany w okrąg"} />
            <GraphImage size={"smallest"} src={CyclingTrapezoid_Rectangle} alt={"Prostokąt wpisany w okrąg"} />
            <GraphImage size={"smallest"} src={CyclingTrapezoid_Square} alt={"Kwadrat wpisany w okrąg"} />
        </div>
        <ArticleBorder />

        <Title text={"Czworokąt opisany na okręgu"} type="main-article" />
        <GraphImage size={"small"} src={TrapezoidOnCircle} alt={"Czworokąt opisany na okręgu"} />
        <p>Dla czworokąta opisanego na okręgu zachodzi natomiast zależność:</p>
        <Formula formula={GeometryEquations.trapezoid_on_circle} />
        <LegendParagraph type={"long"} notation={"a,b,c,d"} explanation={"kolejne boki czworokąta opisanego na okręgu."} /><br />
        <p>Znając promień okręgu wpisanego r możemy policzyć pole czworokąta opisanego na tym okręgu za pomocą wzoru</p>
        <Formula formula={GeometryEquations.trapezoidOnCircleArea} />
        <p>gdzie:</p>
        <Formula formula={GeometryEquations.HalfPerimeter} />
        <LegendParagraph type={"top"} notation={"a,b,c,d"} explanation={"boki czworokąta"} />
        <LegendParagraph type={"short"} notation={"p"} explanation={"połowa obwodu czworokąta"} />
        <br />
        <p>Ten sam wzór można zapisać bez konieczności wprowadzania wartości równej połowie obwodu czworokąta:</p>
        <div className="overflow-x-auto">
            <div className="flex justify-center my-4 min-w-[600px]">
                <Formula formula={GeometryEquations.trapezoidOnCircleArea2} />
            </div>
        </div>
        <ArticleBorder />
        <p><b>Środek okręgu wpisanego w czworokąt</b> jest punktem przecięcia się jego dwusiecznych kątów węwnętrznych</p>
        <GraphImage size={"small"} src={TrapezoidOnCircle2} alt={"Czworokąt opisany na okręgu"} />

    </>
);

export default CirclesRelationsContent;