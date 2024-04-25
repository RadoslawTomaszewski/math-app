import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Proof from "../../../../components/articleItems/Proof";
import MathExpression from "../../../../components/articleItems/MathExpression";
import quadraticSad from "../../../../assets/images/knowledge_base/functions/quadratic_function/parableSad.png";
import quadraticSmile from "../../../../assets/images/knowledge_base/functions/quadratic_function/parableSmile.png";
import wierzcholek from "../../../../assets/images/knowledge_base/functions/quadratic_function/wierzcholek.png";
import pImage from "../../../../assets/images/knowledge_base/functions/quadratic_function/p.png";
import POY from "../../../../assets/images/knowledge_base/functions/quadratic_function/poy.png";
import osSymetrii from "../../../../assets/images/knowledge_base/functions/quadratic_function/osSymetrii.png";
import deltaA from "../../../../assets/images/knowledge_base/functions/quadratic_function/delta_a.png";
import deltaA2 from "../../../../assets/images/knowledge_base/functions/quadratic_function/delta_a_2.png";
import { QuadraticFunction_VieteProductProof, QuadraticFunction_VieteSumProof, QuadraticFunction_pProof, QuadraticFunction_qProof, QuadraticFunction_zeroPlaceProof } from "../../../../types/proofs";
import { quadraticEquations } from "../../../../types/equations";
import { CoreCurriculum, CoreCurriculumTypes } from "../../../../components/CoreCurriculum/CoreCurriculum";
import ImageComponent from "../../../../components/articleItems/ImageComponent";
import { NavLink } from "react-router-dom";

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
        <br />
        <p>Założenie wynika z faktu, że gdy <b>a=0</b> wyrażenie sprowadzi się do <NavLink to="../funkcja-liniowa" className="hover:underline"><b>funkcji liniowej</b></NavLink> </p>
        <br />
        <p>Krzywa będąca wykresem funkcji kwadratowej to <b>parabola</b></p>
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
        <p><b>(1)</b> Jeżeli <b>Δ &gt; 0</b>, to funkcja ma <b>dwa pierwiastki</b> rzeczywiste (miejsca zerowe).</p>
        <p><b>(2)</b> Jeżeli <b>Δ = 0</b>, to funkcja ma <b>jeden pierwiastek</b> rzeczywisty (miejsce zerowe).</p>
        <p><b>(3)</b> Jeżeli <b>Δ &lt; 0</b>, to funkcja <b>nie ma pierwiastków</b> rzeczywistych (miejsc zerowych).</p>
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
          się oznaczeń z indeksami dolnymi 1 oraz 2.
        </p>
        <Formula formula={quadraticEquations.X1} styles="min-w-[129px]" />
        <Formula formula={quadraticEquations.X2} styles="min-w-[129px]" />
        <p className="flex">
          W przypadku gdy funkcja kwadratowa ma jeden pierwiastek rzeczywisty wzór na miejsce zerowe upraszcza się do postaci:
        </p>
        <Formula formula={quadraticEquations.X0} styles="min-w-[129px]" />
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>
          Wzór funkcji kwadratowej w <b>postaci iloczynowej</b>
          &nbsp;nie zawsze istnieje. Należy rozpatrzyć trzy przypadki:
        </p>
        <br />
        <div className="min-w-full">
          <p><b>(1)</b> gdy <b>Δ &gt; 0:</b></p>
          <Formula formula={quadraticEquations.FACTORIAL_FORM_2} styles="min-w-[210px]" />
        </div>
        <div className="min-w-full">
          <p><b>(2)</b> gdy <b>Δ = 0:</b></p>
          <Formula formula={quadraticEquations.FACTORIAL_FORM_1} styles="min-w-[145px]" />
        </div>
        <div className="min-w-full">
          <p><b>(3)</b> gdy <b>Δ &lt; 0:</b></p>
          <p className="m-3 text-center"><b>nie istnieje</b></p>
        </div>
        <p>Założenie:</p>
        <Formula formula={`a \\neq 0`} />
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>
          <b>Współczynnik kierunkowy</b> funkcji kwadratowej określa, w którą
          stronę skierowane są ramiona paraboli
        </p><br />
        <div className="flex flex-wrap w-full justify-center gap-2 md:gap-8">
          <div>
            <ImageComponent src={quadraticSmile} alt={"wykres funkcji kwadratowej z dodatnim współczynnikiem a"} styles=" h-[200px]" />
            <div className="flex flex-wrap ml-2 my-2 justify-center">
              <p>gdy&nbsp;</p>
              <MathExpression expression={`a > 0`} />
              <p>&nbsp;ramiona</p><p>&nbsp;paraboli</p><p>&nbsp;są</p><p>&nbsp;skierowane</p><p>&nbsp;w</p><p>&nbsp;górę</p>
            </div>
          </div>
          <div>
            <ImageComponent src={quadraticSad} alt={"wykres funkcji kwadratowej z ujemnym współczynnikiem a"} styles=" h-[200px]" />
            <div className="flex flex-wrap ml-2 my-2 justify-center">
              <p>gdy&nbsp;</p>
              <MathExpression expression={`a < 0`} />
              <p>&nbsp;ramiona</p><p>&nbsp;paraboli</p><p>&nbsp;są</p><p>&nbsp;skierowane</p><p>&nbsp;w</p><p>&nbsp;dół</p>
            </div>
          </div>
        </div>
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>Interpretacja zależności między <b>współczynnikiem kierunkowym</b>, a <b>wyróżnikiem</b> funkcji kwadratowej na wykresie:</p>
        <br /><div className="flex flex-wrap justify-center w-full gap-1">
          <ImageComponent src={deltaA} alt={"Relacja a i delty, gdy a>0"} styles="w-[500px]" />
          <ImageComponent src={deltaA2} alt={"Relacja a i delty, gdy a<0"} styles="w-[500px]" />
        </div>
      </CoreCurriculum>
      <ArticleBorder />
      <Title text={""} type={"main-article"} />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>
          <b>Wierzchołek paraboli</b> to punkt położony najniżej lub najwyżej na
          wykresie funkcji w zależności od kierunku skierowania ramion.
        </p>
        <ImageComponent src={wierzcholek} alt={"wierzchołek paraboli"} styles=" w-[300px]" />
        <LegendParagraph
          type="top"
          notation="W"
          explanation="wierzchołek"
        />
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
      <Title text={"Wierzchołek Paraboli"} type={"main-article"} />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>
          Rzędną wierzchołka paraboli <b>p</b> można wyznaczyć ze wzoru:
        </p>
        <Formula formula={quadraticEquations.P} />
        <p>Jeżeli nie są znane współczynniki <b>b</b> i <b>a</b> ale znane są dwa pierwiastki funkcji kwadratowej <b>x<sub>1</sub></b> oraz <b>x<sub>2</sub></b> rzedną wierzchołka paraboli da się wyznaczyć ze wzoru:</p>
        <Formula formula={quadraticEquations.P_arithmetic} />
        <Proof steps={QuadraticFunction_pProof} text="Dowód" styles="min-w-[274px]" />
        <br />
        <p>Z uwagi na fakt, że parabola zawsze ma <b>oś symetrii</b> powyższy wzór można uogólnić licząc średnią arytmetyczną dwóch argumentów, dla których wartość funkcji jest taka sama. </p>
        <ImageComponent src={pImage} alt={"wierzchołek paraboli"} styles=" w-[300px]" />
        <Formula formula={quadraticEquations.P_arithmetic_universal} />
        <br /><p>założenie:</p>
        <Formula formula={"f(x_A) = f(x_B)"} />
        <br />
        <p><b>p</b> wyznacza krańce przedziałów monotoniczności funkcji kwadratowej</p>
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>Wspomnianą wyżej <b>oś symetrii</b> zapisuje się równaniem prostej równoległej do osi OY:</p>
        <Formula formula={`x = p`} />
        <ImageComponent src={osSymetrii} alt={"oś symetrii"} styles=" w-[200px]" />
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>
          Odciętą wierzchołka paraboli <b>q</b> w przypadku gdy znane jest <b>p</b> wystarczy doliczyć podstawiając go do wzoru funkcji:
        </p>
        <Formula formula={quadraticEquations.Q_function} />
        <p>Powyższy zapis można sprowadzić do wzoru:</p>
        <Formula formula={quadraticEquations.Q} />
        <Proof steps={QuadraticFunction_qProof} text="Dowód" styles="min-w-[233px]" />
        <br />
        <p><b>q</b> wyznacza najmniejszą lub największą wartość funkcji kwadratowej, zatem znając <b>q</b> można wyznaczyć zbiór wartości funkcji.</p>

      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>
          <b>Punkt przecięcia z osią OY</b> paraboli ustala wyraz wolny <b>c</b>:
        </p>
        <Formula formula={`P_{OY} = (0,c)`} />
        <ImageComponent src={POY} alt={"punkt przecięcia paranoli z osią oy"} styles=" w-[300px]" />
      </CoreCurriculum>
      <ArticleBorder />
      <Title text={"Wzory Viete'a"} type={"main-article"} />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
        <p><b>Wzory Viete'a</b> to wzory, które pozwalają określić zależność między pierwiastkami <b>wielomianu</b>, a jego współczynnikami. Wzory te dla trójmianu kwadratowego są następujące:</p>
        <p><b>(1) suma pierwiastków</b></p><Formula formula={`x_1 + x_2 = \\frac{-b}{a}`} />
        <Proof steps={QuadraticFunction_VieteSumProof} text={"Dowód"} styles="min-w-[197px]" />
        <p><b>(2) iloczyn pierwiastków</b></p><Formula formula={`x_1 \\cdot x_2 = \\frac{c}{a}`} />
        <Proof steps={QuadraticFunction_VieteProductProof} text={"Dowód"} styles="min-w-[197px]" />
      </CoreCurriculum>
      <ArticleBorder />
      <NavLink to="../../kalkulatory/funkcji-kwadratowej" className="hover:underline"><Title text={"Przejdź do kalkulatora funkcji kwadratowej"} type={"main-article"} /></NavLink>
    </>
  );
};

export default QuadraticFunctionContent;
