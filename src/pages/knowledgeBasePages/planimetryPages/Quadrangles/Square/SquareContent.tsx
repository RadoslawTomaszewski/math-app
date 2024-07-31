import { FC } from "react";
import Title from "../../../../../components/articleItems/Title";
import GraphImage from "../../../../../components/articleItems/GraphImage";
import Square from "../../../../../assets/images/quadrangles/square.png"
import LegendParagraph from "../../../../../components/articleItems/LegendParagraph";
import Formula from "../../../../../components/articleItems/Formula";
import { GeometryEquations } from "../../../../../data/equations";
import Proof from "../../../../../components/articleItems/Proof";
import { ParallelogramAreaSquareProof, TrapeziumAreaSquareProof, TrapezoidAreaSquareProof } from "../../../../../data/proofs";

const SquareContent: FC = () => (
    <>
        <Title text={"Kwadrat"} type="main-article" />
        <p><b>Kwadrat</b> to czworokąt mający dwie pary boków równoległych, wszystkie wewnętrzne kąty proste oraz równe boki</p>
        <p>Szczególny przypadek prostokąta i równoległoboku.</p>
        <GraphImage size={"small"} src={Square} alt={"Prostokąt"} />
        <p>Obwód:</p>
        <Formula formula={GeometryEquations.DiamondPerimeter} />
        <LegendParagraph type={"short"} notation={"a"} explanation={"długość boku kwadratu"} />
        <br />
        Pole trapezoidu redukuje się do:
        <Formula formula={GeometryEquations.TrapezoidArea_Square} />
        <LegendParagraph type={"top"} notation={"d"} explanation={"długość przekątnych"} /><br />
        <Proof steps={TrapezoidAreaSquareProof} text={"Dowód"} /><br />

        <p>Prostokąt jest trapezem, więc w przypadku, gdy wybrane dwa równoległe boki uznamy za podstawy otrzymamy zredukowaną postać wzoru:</p>
        <Formula formula={GeometryEquations.TrapeziumArea_Square} />
        <Proof steps={TrapeziumAreaSquareProof} text={"Dowód"} /><br />
        <p>Taki sam wzór na pole powierzchni prostokąta otrzymamy używając wzoru na pole równoległoboku:</p>
        <Formula formula={GeometryEquations.ParallelogramArea_Square} />
        <Proof steps={ParallelogramAreaSquareProof} text={"Dowód"} /><br />

        <p><b>Długość przekątnej:</b></p>
        <Formula formula={GeometryEquations.SquareDiagonal} />
        <p>Długość przekątnych jest możliwa do wyznaczenia za pomocą <b>Twierdzenia Pitagorasa</b></p>


    </>
);

export default SquareContent;
