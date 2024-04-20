import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Proof from "../../../../components/articleItems/Proof";
import MathExpression from "../../../../components/articleItems/MathExpression";
import kwadratowaUjemna from "../../../../assets/images/function-graphs/kwadratowa-ujemna.png";
import kwadratowaDodatnia from "../../../../assets/images/function-graphs/kwadratowa-dodatnia.png";
import pseudokwadratowa from "../../../../assets/images/function-graphs/pseudokwadratowa.png";
import wierzcholek from "../../../../assets/images/function-graphs/wierzcholek.png";
import wyrazWolny from "../../../../assets/images/function-graphs/kwadratowa-wyraz-wolny.png";
import osSymetrii from "../../../../assets/images/function-graphs/kwadratowa-os-symetrii.png";
import GraphImage from "../../../../components/articleItems/GraphImage";
import { NavLink } from "react-router-dom";
import { QuadraticFunction_pProof, QuadraticFunction_qProof, QuadraticFunction_zeroPlaceProof } from "../../../../types/proofs";
import { quadraticEquations } from "../../../../types/equations";
import { CoreCurriculum, CoreCurriculumTypes } from "../../../../components/CoreCurriculum/CoreCurriculum";

const QuadraticFunctionContent: FC = () => {


  return (
    <>
      <Title text={"Funkcja kwadratowa"} type={"main-article"} />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>
          Wzór funkcji kwadratowej w <b>postaci ogólnej</b>:
        </p>
        <Formula formula={quadraticEquations.STANDARD_FORM} styles="min-w-[161px]" />
        <p>Założenie:</p>
        <Formula formula={`a \\neq 0`} />
        <LegendParagraph
          type="short"
          notation="a"
          explanation="współczynnik kierunkowy"
        />
        <LegendParagraph type="top" notation="b" explanation="wyraz środkowy" />
        <LegendParagraph type="short" notation="c" explanation="wyraz wolny" />
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>
          Wzór funkcji kwadratowej w <b>postaci kanonicznej</b>:
        </p>
        <Formula formula={quadraticEquations.CANONICAL_FORM} styles="min-w-[167px]" />
        <p>Założenie:</p>
        <Formula formula={`a \\neq 0`} />
        <LegendParagraph
          type="short"
          notation="p"
          explanation="rzędna wierzchołka paraboli"
        />
        <LegendParagraph
          type="short"
          notation="q"
          explanation="odcięta wierzchołka paraboli"
        />
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>
          <b>Wyróżnik</b> funkcji kwadratowej (delta) to wartość wyrażona wzorem:
        </p>
        <Formula formula={quadraticEquations.DELTA} styles="min-w-[107px]" />
        <p>Jeżeli <b>Δ &gt; 0</b>, to funkcja ma <b>dwa pierwiastki</b> rzeczywiste (miejsca zerowe).</p>
        <p>Jeżeli <b>Δ = 0</b>, to funkcja ma <b>jeden pierwiastek</b> rzeczywisty (miejsce zerowe).</p>
        <p>Jeżeli <b>Δ &lt; 0</b>, to funkcja <b>nie ma pierwiastków</b> rzeczywistych (miejsc zerowych).</p>
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>
          <b>Miejsce zerowe</b> (pierwiastek) funkcji kwadratowej wyraża się
          wzorem:
        </p>
        <Formula formula={quadraticEquations.X12} styles="min-w-[128px]" />
        <p>Założenia:</p>
        <Formula formula={`a \\neq 0`} />
        <Formula formula={`\\Delta \\ge 0`} />
        <Proof steps={QuadraticFunction_zeroPlaceProof} text="Dowód" styles="min-w-[300px]" />
        <br />
        <p className="flex">
          W przypadku gdy funkcja kwadratowa ma dwa pierwiastki rzeczywiste używa
          się oznaczeń:
        </p>
        <Formula formula={quadraticEquations.X1} styles="min-w-[129px]" />
        <Formula formula={quadraticEquations.X2} styles="min-w-[129px]" />
      </CoreCurriculum>
      <ArticleBorder />
      <p>
        Wzór funkcji kwadratowej w <b>postaci iloczynowej</b>
        &nbsp;nie zawsze istnieje. Należy rozpatrzyć trzy przypadki:
      </p>
      <div className="my-2 grid md:grid-cols-3 overflow-auto justify-center items-center">
        <div>
          <Formula formula={quadraticEquations.FACTORIAL_FORM_2} styles="min-w-[210px]" />
          <div className="flex flex-wrap ml-2 my-2 justify-center">gdy Δ &gt; 0</div>
        </div>
        <div>
          <Formula formula={quadraticEquations.FACTORIAL_FORM_1} styles="min-w-[145px]" />
          <div className="flex flex-wrap ml-2 my-2 justify-center">
            gdy Δ = 0
          </div>
        </div>
        <div>
          <div className="flex justify-center m-4">
            <p><b>nie istnieje</b></p>
          </div>
          <div className="flex flex-wrap ml-2 my-2 justify-center">
            gdy Δ &lt; 0
          </div>
        </div>
      </div>
      <p>Założenie:</p>
      <Formula formula={`a \\neq 0`} />
      <ArticleBorder />
      <p>
        <b>Współczynnik kierunkowy</b> funkcji kwadratowej określa, w którą
        stronę skierowane są ramiona paraboli
      </p>
      <div className="my-2 grid md:grid-cols-3">
        <div>
          <GraphImage
            src={kwadratowaDodatnia}
            size="full"
            alt="wykres funkcji kwadratowej z dodatnim współczynnikiem a"
          />
          <div className="flex flex-wrap ml-2 my-2 justify-center">
            <p>Jeżeli&nbsp;</p>
            <MathExpression expression={`a > 0`} />
            <p>&nbsp;ramiona paraboli są skierowane w górę</p>
          </div>
        </div>
        <div>
          <GraphImage
            src={kwadratowaUjemna}
            size="full"
            alt="wykres funkcji kwadratowej z ujemnym współczynnikiem a"
          />
          <div className="flex flex-wrap ml-2 my-2 justify-center">
            <p>Jeżeli&nbsp;</p>
            <MathExpression expression={`a < 0`} />
            <p>&nbsp;ramiona paraboli są skierowane w dół</p>
          </div>
        </div>
        <div>
          <GraphImage
            src={pseudokwadratowa}
            size="full"
            alt="wykres funkcji kwadratowej równoległej do osi X"
          />
          <div className="flex flex-wrap ml-2 my-2 justify-center">
            <p>Jeżeli&nbsp;</p>
            <MathExpression expression={`a = 0`} />
            <p>&nbsp;mamy doczynienia z&nbsp;</p>
            <NavLink to="../funkcja-liniowa">funkcją liniową</NavLink>
          </div>
        </div>
      </div>
      <ArticleBorder />
      <p>
        <b>Wierzchołek paraboli</b> to punkt położony najniżej lub najwyżej na
        wykresie funkcji w zależności od kierunku skierowania ramion.
      </p>
      <GraphImage src={wierzcholek} size="small" alt="Wierzchołek paraboli" />
      <p>Współrzędne wierzchołka są oznaczane następująco:</p>
      <Formula formula={`W = \\left(p , q \\right)`} />
      <p>
        Rzędna wierzchołka jest równa średniej arytmetycznej rzędnych dwóch punktów symetrycznych względem osi symetrii tej paraboli
        (mogą, ale nie muszą to być miejsca zerowe):
      </p>
      <Formula formula={quadraticEquations.P_arithmetic} />
      <p>Częściej używana postać tego wzoru to:</p>
      <Formula formula={quadraticEquations.P} />
      <Proof steps={QuadraticFunction_pProof} text="Dowód" styles="min-w-[274px]" />
      <br />
      <p>
        Odcięta wierzchołka jest równa wartości funkcji dla
        argumentu, który jest równo odległy od symetralnych punktów o tej samej
        wartości (np miejsc zerowych):
      </p>
      <Formula formula={quadraticEquations.Q_function} />
      <p>Częściej używana postać tego wzoru to:</p>
      <Formula formula={quadraticEquations.Q} />
      <Proof steps={QuadraticFunction_qProof} text="Dowód" styles="min-w-[233px]" />
      <ArticleBorder />
      <p>
        <b>Oś symetrii</b> paraboli to równanie prostej równoległej do osi OY,
        które wyraża się wzorem:
      </p>
      <Formula formula={`x = p`} />
      <GraphImage
        src={osSymetrii}
        size="small"
        alt="Punkt przecięcia z osią oy"
      />
      <ArticleBorder />
      <p>
        <b>Wyraz wolny</b> funkcji kwadratowej pozwala określić współrzędne
        punktu przecięcia wykresu funkcji z osią OY:
      </p>
      <GraphImage
        src={wyrazWolny}
        size="small"
        alt="Punkt przecięcia z osią oy"
      />
      <Formula formula={`P_{oy} = (0,c)`} />
    </>
  );
};

export default QuadraticFunctionContent;
