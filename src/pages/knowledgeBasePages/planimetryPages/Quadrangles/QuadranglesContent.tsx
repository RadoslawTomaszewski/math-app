import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import GraphImage from "../../../../components/articleItems/GraphImage";
import Quadrangles from "../../../../assets/images/quadrangles/quadrangles_transparent.png";
import InscribedCircle from "../../../../assets/images/quadrangles/okrag_wpisany_w_czworokat.png";
import CircumscribedCircle from "../../../../assets/images/quadrangles/okrag_opisany_na_czworokacie.png";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Trapezoid from "../../../../assets/images/quadrangles/trapezoid.png"
import Trapeze from "../../../../assets/images/quadrangles/trapeze.png"
import RectangularTrapezoid from "../../../../assets/images/quadrangles/rectangular_trapezoid.png"
import Formula from "../../../../components/articleItems/Formula";
import { GeometricSequencesEquations } from "../../../../types/equations";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import TrapezeHalf from "../../../../assets/images/quadrangles/tapeze_half.png";
import TrapezeRegular from "../../../../assets/images/quadrangles/trapeze_regular.png"

const QuadranglesContent: FC = () => {

    return (
        <>
            <div className="flex flex-col">
                <Title text={"Czworokąty"} type={"main-article"} />
                <p><b>Czworokąt (czworobok)</b> to wielokąt płaski o czterech bokach i dwóch przekątnych, definiowanych jako odcinki łączące dwa niesąsiednie boki.</p>
                <br /><p>Suma miar kątów wewnętrznych czworokąta wynosi 360°</p>
                <ArticleBorder />
                <Title text={"Trapezoid (czworokąt wypukły)"} type="main-article" />
                <p><b>Trapezoid</b> można zdefiniować na dwa sprzeczne ze sobą sposoby. </p>
                <br />
                <p><u>Definicja 1:</u> Czworokąt wypukły, który nie jest trapezem, tzn. nie ma żadnej pary boków równoległych</p>
                <p><u>Definicja 2:</u> Każdy czworokąt wypukły</p><br />
                <p>Na majza.eu przyjęte zostało założenie, że trapezoid jest dowolnym czworokątem wypukłym zgodnie z definicją 2, ponieważ łatwiej będzie w drzewie klasyfikacyjnym czworokątów ustalić hierarchię od dziecka do rodzica kolejno: kwadrat, romb, deltoid, trapezoid, czworokąt, a cechy klasyfikujące czworokąty będą mogły być uznane za dziedziczne w każdym przypadku.
                </p>
                <GraphImage size={"small"} src={Trapezoid} alt={"Trapezoid"} />
                <p>Wzór na obwód:</p>
                <Formula formula={GeometricSequencesEquations.perimeterQuadrangle} />
                <p>Pole:</p>
                <Formula formula={GeometricSequencesEquations.areaQuadrangle} />
                <LegendParagraph type={"top"} notation={"d_1,d_2"} explanation={"przekątne czworokąta"} />
                <LegendParagraph type={"short"} notation={"\\alpha"} explanation={"kąt między przekątnymi"} /><br />
                <p>Wszystkie cechy czworokąta wypukłego są dziedziczone przez figury potomne: </p>
                <p>trapez / trapez równoramienny / trapez różnoboczny / trapez prostokątny / równoległobok / kwadrat / romb / deltoid / prostokąt </p>
                <ArticleBorder />

                <Title text={"Trapez"} type="main-article" />
                <p><b>Trapez</b> to czworokąt wypukły, mający co najmniej jedną parę boków równoległych. </p>
                <GraphImage size={"small"} src={Trapeze} alt={"Trapez"} />
                <p>Obwód:</p>
                <Formula formula={GeometricSequencesEquations.perimeterQuadrangle} />
                <LegendParagraph type={"top"} notation={"a,b"} explanation={"podstawy trapezu"} />
                <LegendParagraph type={"top"} notation={"c,d"} explanation={"ramiona trapezu"} />
                <br />
                <p>Pole trapezu można policzyć wzorem na pole trapezoidu:</p>
                <Formula formula={GeometricSequencesEquations.areaQuadrangle} />
                <LegendParagraph type={"top"} notation={"d_1,d_2"} explanation={"przekątne trapezu"} />
                <LegendParagraph type={"short"} notation={"\\alpha"} explanation={"kąt między przekątnymi"} /><br />
                <p>Jeśli znana jest wysokość opuszczona na podstawę trapezu, można użyć innego wzoru na pole:</p>
                <Formula formula={GeometricSequencesEquations.areaTrapeze} />
                <LegendParagraph type={"top"} notation={"h"} explanation={"wysokość trapezu"} /><br />
                <p>Istnieje niepopularny wzór na pole trapezu, gdy znane są wszystkie długości boków trapezu. Zakłada się, że podstawy są różnej długości. </p>
                <Formula formula={GeometricSequencesEquations.areaTrapezeLong} />


                <Title text={"Twierdzenie o odcinku łączącym środki ramion"} type={"submain-article"} />
                <GraphImage size={"smaller"} src={TrapezeHalf} alt={"Trapezoid"} />
                <p><b>Odcinek łączący środki ramion</b> trapezu ma zawsze stałą wartość:</p>
                <Formula formula={GeometricSequencesEquations.trapezeHalf} />
                <LegendParagraph type={"short"} notation={"m"} explanation={"odcinek łączący środki ramion"} /><br />
                <p> Wyróżnia się szczególne przypadki trapezów: <b>trapez prostokątny</b> i <b>trapez równoramienny</b></p>
                <ArticleBorder />
                <Title text={"Trapez prostokątny"} type="main-article" />
                <GraphImage size={"small"} src={RectangularTrapezoid} alt={"Trapez prostokatny"} />
                <p>Obwód:</p>
                <Formula formula={GeometricSequencesEquations.perimeterQuadrangle} />
                <LegendParagraph type={"short"} notation={"c"} explanation={"bok będący wysokością trapezu"} /><br />
                <Formula formula={GeometricSequencesEquations.areaTrapezeRectangular} />
                <ArticleBorder />
                <Title text={"Trapez równoramienny"} type="main-article" />
                <GraphImage size={"small"} src={TrapezeRegular} alt={"Trapezoid"} />
                <Formula formula={GeometricSequencesEquations.perimeterIsoscelesTrapezoid} />

                <Formula formula={GeometricSequencesEquations.areaIsoscelesTrapezoid} />
                <LegendParagraph type={"top"} notation={"d_1"} explanation={"długość przekątnych"} />
                <LegendParagraph type={"short"} notation={"\\alpha"} explanation={"kąt między przekątnymi"} /><br />
                <p>Można również wykorzystać pole trapezu, gdy znane są wszystkie długości boków trapezu i dokonać redukcji tego wzoru do postaci:</p>
                <Formula formula={GeometricSequencesEquations.areaIsoscelesTrapezoidLong} />
                <ArticleBorder />


                <GraphImage size={"smallest"} src={InscribedCircle} alt={"Klasyfikacja czworokatow"} />
                <p>czworokąt da się wpisać okrąg, gdy sumy długości przeciwległych boków są równe</p>
                <GraphImage size={"smallest"} src={CircumscribedCircle} alt={"Klasyfikacja czworokatow"} />
                <p>Na czworokącie da się opisać okrąg, gdy sumy miar przeciwległych kątów wewnętrznych wynoszą 180°</p>
                <ArticleBorder />
                <Title text="Podział czworokątów" type="submain-article" />
                <GraphImage size={"small"} src={Quadrangles} alt={"Klasyfikacja czworokatow"} />
            </div>
        </>
    );
};

export default QuadranglesContent;
