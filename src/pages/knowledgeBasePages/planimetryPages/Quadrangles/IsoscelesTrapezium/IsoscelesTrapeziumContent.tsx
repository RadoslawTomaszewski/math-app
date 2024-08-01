import { FC } from "react";
import Title from "../../../../../components/Title/Title";
import GraphImage from "../../../../../components/imageComponents/GraphImage";
import Formula from "../../../../../components/Formula/Formula";
import { GeometryEquations } from "../../../../../data/equations";
import LegendParagraph from "../../../../../components/LegendParagraph/LegendParagraph";
import { isoscelesTrapezoidLongerSegmentProof, isoscelesTrapezoidProof } from "../../../../../data/proofs";
import TrapezeRegular from "../../../../../assets/images/quadrangles/trapeze_regular.png"
import TrapezeRegularShortX from "../../../../../assets/images/quadrangles/trapeze_regular_shortx.png";
import TrapezeRegularLongX from "../../../../../assets/images/quadrangles/trapeze_regular_longx.png";
import Proof from "../../../../../components/ProofAndExplanation/Proof";
import ArticleBorder from "../../../../../components/ArticleBorder/ArticleBorder";
import { NavLink } from "react-router-dom";
const IsoscelesTrapeziumContent: FC = () => {

    return (
        <>
            <Title text={"Trapez równoramienny"} type="main-article" />
            <GraphImage size={"small"} src={TrapezeRegular} alt={"Trapez Równoramienny"} />
            Obwód:
            <Formula formula={GeometryEquations.IsoscelesTrapezoidPerimeter} />
            <LegendParagraph type={"top"} notation={"a,b"} explanation={"podstawy trapezu"} />
            <LegendParagraph type={"short"} notation={"c"} explanation={"ramiona trapezu"} /><br />
            Pole trapezoidu redukuje się do:
            <Formula formula={GeometryEquations.TrapezoidArea_Isosceles} />
            <LegendParagraph type={"top"} notation={"d"} explanation={"długość przekątnych"} />
            <LegendParagraph type={"short"} notation={"\\alpha"} explanation={"kąt między przekątnymi"} /><br />
            <p>Pole dowolnego trapezu:</p>
            <Formula formula={GeometryEquations.TrapeziumArea} />
            <LegendParagraph type={"top"} notation={"h"} explanation={"wysokość trapezu opuszczona na podstawę"} /><br />
            <p>Można również wykorzystać pole trapezu, gdy znane są wszystkie długości boków trapezu i dokonać redukcji tego wzoru do postaci:</p>
            <Formula formula={GeometryEquations.TrapeziumArea2_Isosceles} />
            <Proof steps={isoscelesTrapezoidProof} text={"Dowód"} />
            <ArticleBorder />
            <Title text={"Charakterystyczne odcinki w trapezie równoramiennym"} type={"submain-article"} />
            <p>Dłuższą podstawę trapezu równoramiennego można podzielić na charakterystyczne odcinki.</p>
            <div className="flex justify-around flex-wrap gap-6">
                <GraphImage size={"smaller"} src={TrapezeRegularShortX} alt={"Krótszy odcinek podstawy"} />
                <GraphImage size={"smaller"} src={TrapezeRegularLongX} alt={"Dłuższy odcinek podstawy"} />
            </div>
            <p><b>Krótszy odcinek</b> łączący koniec podstawy z bliższym spodkiem wysokości opuszczonej na tę podstawę: </p>
            <Formula formula={GeometryEquations.IsoscelesTrapezium_ShorterSegment} />
            <p><b>Dłuższy odcinek</b> łączący koniec podstawy z dalszym spodkiem wysokości opuszczonej na tę podstawę:</p>
            <Formula formula={GeometryEquations.IsoscelesTrapezium_LongerSegment} />
            <Proof steps={isoscelesTrapezoidLongerSegmentProof} text={"Dowód"} />
            <ArticleBorder />
            <p>Wyróżnia się szczególne przypadki trapezów równoramiennych: <NavLink to="../rownoleglobok"><b>równoległobok</b></NavLink> i <NavLink to="../prostokat"><b>prostokąt</b></NavLink></p>
        </>
    );
};

export default IsoscelesTrapeziumContent;
