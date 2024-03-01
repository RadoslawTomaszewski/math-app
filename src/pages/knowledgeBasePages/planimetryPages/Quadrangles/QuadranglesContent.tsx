import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import GraphImage from "../../../../components/articleItems/GraphImage";
// import Quadrangles from "../../../../assets/images/quadrangles/quadrangles_transparent.png";
// import InscribedCircle from "../../../../assets/images/quadrangles/okrag_wpisany_w_czworokat.png";
// import CircumscribedCircle from "../../../../assets/images/quadrangles/okrag_opisany_na_czworokacie.png";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Trapezoid from "../../../../assets/images/quadrangles/trapezoid.png"
import Trapeze from "../../../../assets/images/quadrangles/trapeze.png"
import RectangularTrapezoid from "../../../../assets/images/quadrangles/rectangular_trapezoid.png"
import Formula from "../../../../components/articleItems/Formula";
import { GeometricSequencesEquations } from "../../../../types/equations";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import TrapezeHalf from "../../../../assets/images/quadrangles/tapeze_half.png";
import TrapezeRegular from "../../../../assets/images/quadrangles/trapeze_regular.png"
import TrapezeRegularShortX from "../../../../assets/images/quadrangles/trapeze_regular_shortx.png";
import TrapezeRegularLongX from "../../../../assets/images/quadrangles/trapeze_regular_longx.png";


import Proof from "../../../../components/articleItems/Proof";
import { isoscelesTrapezoidProof } from "../../../../types/proofs";

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
                <GraphImage size={"smaller"} src={Trapezoid} alt={"Trapezoid"} />
                <p>Wzór na obwód:</p>
                <Formula formula={GeometricSequencesEquations.perimeterQuadrangle} />
                <p>Pole:</p>
                <Formula formula={GeometricSequencesEquations.areaQuadrangle} />
                <LegendParagraph type={"top"} notation={"d_1,d_2"} explanation={"przekątne czworokąta"} />
                <LegendParagraph type={"short"} notation={"\\alpha"} explanation={"kąt między przekątnymi"} /><br />
                <p>Wszystkie cechy czworokąta wypukłego są dziedziczone przez figury potomne</p>
                <ArticleBorder />
                {/* TRAPEZ */}
                <Title text={"Trapez"} type="main-article" />
                <p><b>Trapez</b> to czworokąt wypukły, mający co najmniej jedną parę boków równoległych. </p>
                <GraphImage size={"smaller"} src={Trapeze} alt={"Trapez"} />
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
                <div className="min-w-full overflow-x-auto">
                    <div className="min-w-[800px]">
                        <Formula formula={GeometricSequencesEquations.areaTrapezeLong} />
                    </div>
                </div>

                <Title text={"Twierdzenie o odcinku łączącym środki ramion"} type={"submain-article"} />
                <GraphImage size={"smallest"} src={TrapezeHalf} alt={"Trapezoid"} />
                <p><b>Odcinek łączący środki ramion</b> trapezu ma zawsze stałą wartość:</p>
                <Formula formula={GeometricSequencesEquations.trapezeHalf} />
                <LegendParagraph type={"short"} notation={"m"} explanation={"odcinek łączący środki ramion"} /><br />
                <p> Wyróżnia się szczególne przypadki trapezów: <b>trapez prostokątny</b> i <b>trapez równoramienny</b></p>


                <ArticleBorder />
                {/* TRAPEZ PROSTOKĄTNY */}
                <Title text={"Trapez prostokątny"} type="main-article" />
                <p><b>Trapez prostokątny</b> to trapez, którego co najmniej jedno ramię jest równe odległości między podstawami.</p>
                <GraphImage size={"smaller"} src={RectangularTrapezoid} alt={"Trapez prostokatny"} />
                <p>Obwód:</p>
                <Formula formula={GeometricSequencesEquations.perimeterQuadrangle} />
                <LegendParagraph type={"short"} notation={"c"} explanation={"bok będący wysokością trapezu"} /><br />
                Wzór na pole trapezoidu:
                <Formula formula={GeometricSequencesEquations.areaQuadrangle} />
                Bok c jest równy wysokości trapezu, więc można utworzyć wzór:
                <Formula formula={GeometricSequencesEquations.areaTrapezeRectangular} />
                Wzór na pole każdego trapezu również zadziała ale jest bardziej złożony obliczeniowo:
                <div className="min-w-full overflow-x-auto">
                    <div className="min-w-[800px]">
                        <Formula formula={GeometricSequencesEquations.areaTrapezeLong} />
                    </div>
                </div>
                <Title text={"Charakterystyczne odcinki w trapezie prostokątnym"} type={"submain-article"} />


                <p>Wyróżnia się szczególne przypadki trapezów prostokątnych: <b>prostokąt</b> i <b>kwadrat</b></p>
                <ArticleBorder />

                {/* TRAPEZ RÓWNORAMIENNY */}
                <Title text={"Trapez równoramienny"} type="main-article" />
                <GraphImage size={"smaller"} src={TrapezeRegular} alt={"Trapezoid"} />
                Obwód:
                <Formula formula={GeometricSequencesEquations.perimeterIsoscelesTrapezoid} />
                Pole trapezoidu redukuje się do:
                <Formula formula={GeometricSequencesEquations.areaIsoscelesTrapezoid} />
                <LegendParagraph type={"top"} notation={"d_1"} explanation={"długość przekątnych"} />
                <LegendParagraph type={"short"} notation={"\\alpha"} explanation={"kąt między przekątnymi"} /><br />
                <p>Pole dowolnego trapezu:</p>
                <Formula formula={GeometricSequencesEquations.areaTrapeze} />
                <p>Można również wykorzystać pole trapezu, gdy znane są wszystkie długości boków trapezu i dokonać redukcji tego wzoru do postaci:</p>
                <Formula formula={GeometricSequencesEquations.areaIsoscelesTrapezoidLong} />
                <Proof steps={isoscelesTrapezoidProof} text={"Podstawienie"} />
                <Title text={"Charakterystyczne odcinki w trapezie równoramiennym"} type={"submain-article"} />
                <div className="flex justify-around flex-wrap gap-6">
                    <GraphImage size={"smaller"} src={TrapezeRegularShortX} alt={"Krótszy odcinek podstawy"} />
                    <GraphImage size={"smaller"} src={TrapezeRegularLongX} alt={"Dłuższy odcinek podstawy"} />
                </div>
                <p>Wyróżnia się szczególne przypadki trapezów równoramiennych: <b>równoległobok</b>, <b>prostokąt</b> i <b>kwadrat</b></p>
                <ArticleBorder />
                {/* RÓWNOLEGŁOBOK */}
                <Title text={"Równoległobok"} type="main-article" />
                <Title text={"Prostokąt"} type="main-article" />
                <Title text={"Romb"} type="main-article" />
                <Title text={"Kwadrat"} type="main-article" />
                <Title text={"Deltoid"} type="main-article" />
                <Title text={"Czworokąty wklęsłe"} type="main-article" />
                <Title text={""} type="main-article" />



                {/* <GraphImage size={"smallest"} src={InscribedCircle} alt={"Klasyfikacja czworokatow"} />
                <p>czworokąt da się wpisać okrąg, gdy sumy długości przeciwległych boków są równe</p>
                <GraphImage size={"smallest"} src={CircumscribedCircle} alt={"Klasyfikacja czworokatow"} />
                <p>Na czworokącie da się opisać okrąg, gdy sumy miar przeciwległych kątów wewnętrznych wynoszą 180°</p>
                <ArticleBorder />
                <Title text="Podział czworokątów" type="submain-article" />
                <GraphImage size={"small"} src={Quadrangles} alt={"Klasyfikacja czworokatow"} /> */}
            </div>
        </>
    );
};

export default QuadranglesContent;
