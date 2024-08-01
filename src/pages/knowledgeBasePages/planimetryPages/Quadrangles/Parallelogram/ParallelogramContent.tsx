import { FC } from "react";
import Title from "../../../../../components/Title/Title";
import GraphImage from "../../../../../components/imageComponents/GraphImage";
import Formula from "../../../../../components/Formula/Formula";
import LegendParagraph from "../../../../../components/LegendParagraph/LegendParagraph";
import { GeometryEquations } from "../../../../../data/equations";
import ArticleBorder from "../../../../../components/ArticleBorder/ArticleBorder";
import Paralellogram from "../../../../../assets/images/quadrangles/Parallelogram.png";
import Proof from "../../../../../components/ProofAndExplanation/Proof";
import ParallelogramAngles from "../../../../../assets/images/quadrangles/Parallelogram_angles.png"
import { TrapeziumAreaParallelogramProof } from "../../../../../data/proofs";
import { NavLink } from "react-router-dom";


const ParallelogramContent: FC = () => (
    <>
        <Title text={"Równoległobok"} type="main-article" />
        <p><b>Równoległobok</b> to czworokąt mający dwie pary boków równoległych i równej długości. </p>
        <p>Szczególny przypadek trapeza równoramiennego. </p>
        <GraphImage size={"small"} src={Paralellogram} alt={"Równoległobok"} />
        <p>Obwód:</p>
        <Formula formula={GeometryEquations.ParallelogramPerimeter} />
        <LegendParagraph type={"top"} notation={"a,b"} explanation={"boki równoległoboku"} />
        <br />
        <p>Pole równoległoboku można policzyć wzorem na pole trapezoidu:</p>
        <Formula formula={GeometryEquations.TrapezoidArea} />
        <LegendParagraph type={"top"} notation={"d_1,d_2"} explanation={"przekątne równoległoboku"} />
        <LegendParagraph type={"short"} notation={"\\alpha"} explanation={"kąt między przekątnymi"} /><br />
        <p>Równoległobok jest trapezem, więc w przypadku, gdy wybrane dwa równoległe boki uznamy za podstawy otrzymamy zredukowaną postać wzoru:</p>
        <Formula formula={GeometryEquations.TrapeziumArea_Parallelogram} />
        <LegendParagraph type={"top"} notation={"h"} explanation={"wysokość równoległoboku opuszczona na bok a"} /><br />
        <Proof steps={TrapeziumAreaParallelogramProof} text={"Dowód"} /><br />
        <p>Pole powierzchni równoległoboku wyraża się również wzorem</p>
        <Formula formula={GeometryEquations.ParallelogramArea} />
        <LegendParagraph type={"top"} notation={"\\beta"} explanation={"kąt między bokami równoległoboku"} />

        <ArticleBorder />
        <Title text={"Twierdzenie o kątach w równoległoboku"} type={"submain-article"} />
        <p>Suma dwóch kątów opartych na tym samym boku (ramieniu) równoległoboku, jak w każdym trapezie wynosi 180° </p>
        <p>Natomiast przeciwległe kąty równoległoboku są sobie równe.</p>
        <GraphImage size={"small"} src={ParallelogramAngles} alt={"Równoległobok"} />
        <p>To twierdzenie można udowodnić za pomocą <b>Twierdzenia o trzech prostych</b></p>
        <ArticleBorder />
        <p> <b>Długości przekątnych:</b></p>
        <Formula formula={GeometryEquations.ParallelogramDiagonal_short} />
        <Formula formula={GeometryEquations.ParallelogramDiagonal_long} />
        <p>Długości przekątnych są możliwe do wyznaczenia za pomocą <b>Twierdzenie cosinusów</b></p>
        <p>Punkt przecięcia przekątnych równoległoboku dzieli je na dwa równe odcinki</p>
        <ArticleBorder />
        <p> Wyróżnia się szczególne przypadki równoległoboków: <NavLink to="../prostokat"><b>Prostokąt</b></NavLink> i <NavLink to="../romb"><b>Romb</b></NavLink></p>
    </>
);

export default ParallelogramContent;
