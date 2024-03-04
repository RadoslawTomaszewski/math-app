import { FC } from "react";
import Title from "../../../../../components/articleItems/Title";
import GraphImage from "../../../../../components/articleItems/GraphImage";
import Trapezoid from "../../../../../assets/images/quadrangles/trapezoid.png"
import Formula from "../../../../../components/articleItems/Formula";
import { GeometryEquations } from "../../../../../types/equations";
import LegendParagraph from "../../../../../components/articleItems/LegendParagraph";

const TrapezoidContent: FC = () => {

    return (
        <>
            <div className="flex flex-col">
                {/* TRAPEZOID */}
                <Title text={"Trapezoid (czworokąt wypukły)"} type="main-article" />
                <p><b>Trapezoid</b> można zdefiniować na dwa sprzeczne ze sobą sposoby. </p>
                <br />
                <p><u>Definicja 1:</u> Czworokąt wypukły, który nie jest trapezem, tzn. nie ma żadnej pary boków równoległych</p>
                <p><u>Definicja 2:</u> Każdy czworokąt wypukły</p><br />
                <p>Na majza.eu przyjęte zostało założenie, że trapezoid jest dowolnym czworokątem wypukłym zgodnie z definicją 2, wówczas fakt dziedziczenia cech rodzica w drzewie klasyfikacyjnym rodzica będzie spójny. Na przykład każdy czworokąt, który jest niżej w drzewie klasyfikacyjnym, jak np. trapez, prostokąt, czy deltoid, dziedziczy pole trapezoidu.
                </p>
                <br />
                <p>W polskich podręcznikach do matematyki zazwyczaj stosowana jest definicja 1.</p>
                <GraphImage size={"small"} src={Trapezoid} alt={"Trapezoid"} />
                <p>Wzór na obwód:</p>
                <Formula formula={GeometryEquations.TrapezoidPerimeter} />
                <p>Pole:</p>
                <Formula formula={GeometryEquations.TrapezoidArea} />
                <LegendParagraph type={"top"} notation={"d_1,d_2"} explanation={"przekątne czworokąta"} />
                <LegendParagraph type={"short"} notation={"\\alpha"} explanation={"kąt między przekątnymi"} /><br />
                <p>Wszystkie cechy czworokąta wypukłego są dziedziczone przez figury potomne. Szczególnymi przypadkami trapezoidów są <b>trapez</b> i <b>deltoid</b>.</p>
            </div>
        </>
    );
};

export default TrapezoidContent;
