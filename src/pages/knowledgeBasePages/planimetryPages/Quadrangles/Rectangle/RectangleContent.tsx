import { FC } from "react";
import Title from "../../../../../components/Title/Title";
import GraphImage from "../../../../../components/imageComponents/GraphImage";
import Rectangle from "../../../../../assets/images/quadrangles/Rectangle.png";
import LegendParagraph from "../../../../../components/LegendParagraph/LegendParagraph";
import Formula from "../../../../../components/Formula/Formula";
import { GeometryEquations } from "../../../../../data/equations";
import Proof from "../../../../../components/ProofAndExplanation/Proof";
import { ParallelogramAreaRectangleProof, TrapeziumAreaRectangleProof } from "../../../../../data/proofs";

const RectangleContent: FC = () => (
    <>
        <Title text={"Prostokąt"} type="main-article" />
        <p><b>Prostokąt</b> to czworokąt mający dwie pary boków równoległych i wszystkie wewnętrzne kąty proste </p>
        <p>Szczególny przypadek trapeza prostokątnego i równoległoboku.</p>
        <GraphImage size={"small"} src={Rectangle} alt={"Prostokąt"} />
        <LegendParagraph type={"top"} notation={"a,b"} explanation={"boki prostokąta"} />
        <LegendParagraph type={"top"} notation={"d_1, d_2"} explanation={"przekątne prostokąta"} />
        <LegendParagraph type={"short"} notation={"\\alpha"} explanation={"kąt między przekątnymi prostokąta"} /><br />

        <p>Obwód:</p>
        <Formula formula={GeometryEquations.ParallelogramPerimeter} />
        <LegendParagraph type={"top"} notation={"a,b"} explanation={"boki prostokąta"} />
        <br />
        Pole trapezoidu redukuje się do:
        <Formula formula={GeometryEquations.TrapezoidArea_Isosceles} />
        <LegendParagraph type={"top"} notation={"d"} explanation={"długość przekątnych"} />
        <LegendParagraph type={"short"} notation={"\\alpha"} explanation={"kąt między przekątnymi"} /><br />

        <p>Prostokąt jest trapezem, więc w przypadku, gdy wybrane dwa równoległe boki uznamy za podstawy otrzymamy zredukowaną postać wzoru:</p>
        <Formula formula={GeometryEquations.TrapeziumArea_Rectangle} />
        <Proof steps={TrapeziumAreaRectangleProof} text={"Dowód"} /><br />
        <p>Taki sam wzór na pole powierzchni prostokąta otrzymamy używając wzoru na pole równoległoboku:</p>
        <Formula formula={GeometryEquations.ParallelogramArea_Rectangle} />
        <Proof steps={ParallelogramAreaRectangleProof} text={"Dowód"} /><br />

        <p><b>Długość przekątnej:</b></p>
        <Formula formula={GeometryEquations.RectangleDiagonal} />
        <p>Długość przekątnych jest możliwa do wyznaczenia za pomocą <b>Twierdzenia Pitagorasa</b></p>


    </>
);

export default RectangleContent;
