import { FC } from "react";
import Title from "../../../../../components/Title/Title";
import GraphImage from "../../../../../components/imageComponents/GraphImage";
import Diamond from "../../../../../assets/images/quadrangles/diamond.png";
import Formula from "../../../../../components/Formula/Formula";
import { GeometryEquations } from "../../../../../data/equations";
import LegendParagraph from "../../../../../components/LegendParagraph/LegendParagraph";
import Proof from "../../../../../components/ProofAndExplanation/Proof";
import { ParallelogramAreaDiamondProof, TrapeziumAreaParallelogramProof, TrapezoidAreaDiamondProof } from "../../../../../data/proofs";
import ArticleBorder from "../../../../../components/ArticleBorder/ArticleBorder";

const DiamondContent: FC = () => (
    <>
        <Title text={"Romb"} type="main-article" />
        <p><b>Romb</b>- czworokąt wypukły o bokach równej długości. Szczególny przypadek równoległoboku oraz deltoidu.</p>
        <GraphImage size={"small"} src={Diamond} alt={"Romb"} />
        <br />
        <p>Obwód:</p>
        <Formula formula={GeometryEquations.DiamondPerimeter} />
        <LegendParagraph type={"short"} notation={"a"} explanation={"długość boku rombu"} /><br />
        <p>Pole rombu można policzyć za pomocą wzoru na pole trapezoidu</p>
        <Formula formula={GeometryEquations.TrapezoidArea_Diamond} />
        <Proof steps={TrapezoidAreaDiamondProof} text={"Dowód"} />
        <p>Podobnie jak w równoległoboku, można zredukować wzór na pole trapezu</p>
        <Formula formula={GeometryEquations.TrapeziumArea_Parallelogram} />
        <LegendParagraph type={"top"} notation={"h"} explanation={"wysokość rombu opuszczona na bok a"} /><br />
        <Proof steps={TrapeziumAreaParallelogramProof} text={"Dowód"} />
        <p>Wzór na pole równoległoboku w przypadku, gdy jest on rombem redukuje się do</p>
        <Formula formula={GeometryEquations.ParallelogramArea_Diamond} />
        <Proof steps={ParallelogramAreaDiamondProof} text={"Dowód"} />
        <p> <b>Długości przekątnych:</b></p>
        <Formula formula={GeometryEquations.DiamondDiagonal_short} />
        <Formula formula={GeometryEquations.DiamondDiagonal_long} />
        <p>Długości przekątnych są możliwe do wyznaczenia za pomocą <b>Twierdzenie cosinusów</b></p>
        <ArticleBorder />
        <Title text={"Twierdzenie o przekątnych rombu"} type="submain-article" />
        <p><b>(1)</b> Punkt przecięcia przekanych rombu dzieli je na dwa równe odcinki.</p>
        <p><b>(2)</b> Przecięcie przekątnych rombu występuje pod kątem prostym.</p>
        <p><b>(3)</b> Przekątne rombu są dwusiecznymi kątów między bokami oraz są osiami symterii</p>
        <ArticleBorder />
        <p>Wyróżnia się szczególny przypadek rombu: <b>kwadrat</b></p>
    </>
);

export default DiamondContent;
