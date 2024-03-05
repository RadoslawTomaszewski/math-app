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
import PtolemeusTheory from "../../../../../assets/images/quadrangles/Ptolemeus_theory.png";
import Tangential1 from "../../../../../assets/images/quadrangles/tangentialTrapezoid_Trapezium_2.png"
import Tangential2 from "../../../../../assets/images/quadrangles/tangentialTrapezoid_TrapeziumRectangular.png";
import Tangential3 from "../../../../../assets/images/quadrangles/tangentialTrapezoid_TrapeziumRegular.png";
import Tangential4 from "../../../../../assets/images/quadrangles/tangentialTrapezoid_Rhombus.png";
import Tangential5 from "../../../../../assets/images/quadrangles/tangentialTrapezoid_Square.png";


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
        <LegendParagraph type={"long"} notation={"\\alpha, \\beta, \\gamma, \\delta"} explanation={"miary kątów wewnętrznych czworokąta"} />
        <LegendParagraph type={"long"} notation={"R"} explanation={"promień okręgu opisanego na czworokącie"} />
        <ArticleBorder />
        <p>Wzór na pole czworokąta, który jest wpisany w okrąg można policzyć za pomocą <b>wzoru Brahmagupty</b></p>
        <Formula formula={GeometryEquations.trapezoidInCircleArea} />
        <p>gdzie:</p>
        <Formula formula={GeometryEquations.HalfPerimeter} />
        <LegendParagraph type={"long"} notation={"a,b,c,d"} explanation={"boki czworokąta cyklicznego"} />
        <LegendParagraph type={"short"} notation={"p"} explanation={"połowa obwodu czworokąta cyklicznego"} />
        <br />
        <p>Ten sam wzór można zapisać bez konieczności wprowadzania wartości równej połowie obwodu czworokąta cyklicznego:</p>
        <div className="overflow-x-auto">
            <div className="flex justify-center my-4 min-w-[600px]">
                <Formula formula={GeometryEquations.trapezoidInCircleArea2} />
            </div>
        </div>

        <ArticleBorder />
        <Title text={"Twierdzenie Ptolemeusza"} type="submain-article" />
        <p><b>Twierdzenie Ptolemeusza</b></p>
        <p>W dowolnym czworokącie wpisanym w okrąg o kolejnych bokach a,b,c,d i przekątnych d<sub>1</sub>, d<sub>2</sub> suma iloczynów długości boków przeciwległych jest równa iloczynowi przekątnych.</p>
        <p><b>Twierdzenie odwrotne do Twierdzenia Ptolemeusza</b></p>
        <p>Jeśli w czworokącie iloczyn długości przekątnych równy jest sumie iloczynów długości przeciwległych boków, to czworokąt ten można wpisać w okrąg.</p>
        <GraphImage size={"small"} src={PtolemeusTheory} alt={"Twierdzenie Ptolemeusza"} />
        <Formula formula={GeometryEquations.ptolemeusTheory} />
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
        <Title text={"Twierdzenie Pitota"} type="submain-article" />
        <b>Twierdzenie Pitota</b>:
        <p>Dla czworokąta opisanego na okręgu jest prawdziwe równanie </p>
        <Formula formula={GeometryEquations.trapezoid_on_circle} />
        <LegendParagraph type={"long"} notation={"a,b,c,d"} explanation={"kolejne boki czworokąta opisanego na okręgu."} /><br />
        <ArticleBorder />
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
        <ArticleBorder />
        <Title text={"Czworokąt styczny"} type="submain-article" />
        <p><b>Czworokąt styczny</b> do okręgu to taki czworokąt, którego suma dwóch przeciwległych boków jest równa sumie dwóch pozostałych, czyli takim, w który da się wpisać okrąg. </p>
        <p>W czworokąt wklęsły z wyłączeniem deltoida wklęsłego nie da się wpisać okręgu</p>
        <br /><p>(miejsce na deltoid wklęsły z wpisanym okręgiem)</p><br />
        <p>Jest możliwe wpisanie okręgu w <b>trapez równoramienny</b>, <b>prostokątny</b> oraz <b>różnoramienny</b></p>
        <div className="flex flex-wrap items-center justify-around">
            <GraphImage size={"smallest"} src={Tangential1} alt={"Trapez z wpisanym okręgiem 1"} />
            <GraphImage size={"smallest"} src={Tangential2} alt={"Trapez z wpisanym okręgiem 2"} />
            <GraphImage size={"smallest"} src={Tangential3} alt={"Trapez z wpisanym okręgiem 3"} />
        </div>
        <p>Okrąg wpisany w czworokąty od równych długościach boków: <b>rombu</b> oraz jego szczególnego przypadku, <b>kwadratu</b>.</p>
        <div className="flex flex-wrap items-center justify-around">
            <GraphImage size={"smallest"} src={Tangential4} alt={"Romb z wpisanym okręgiem 4"} />
            <GraphImage size={"smallest"} src={Tangential5} alt={"Kwadrat z wpisanym okręgiem 5"} />
        </div>
        <ArticleBorder />
        <Title text={"Czworokąt dwucentryczny"} type="submain-article" />
        <p><b>Czworokąt dwucentryczny</b> to taki czworokąt, który jest równocześnie styczny i cykliczny. </p>

    </>
);

export default CirclesRelationsContent;