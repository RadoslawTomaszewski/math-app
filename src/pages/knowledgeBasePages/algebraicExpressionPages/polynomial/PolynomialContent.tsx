import { FC } from "react";
import Title from "../../../../components/Title/Title";
import ArticleBorder from "../../../../components/ArticleBorder/ArticleBorder";
import { CoreCurriculum, CoreCurriculumTypes } from "../../../../components/CoreCurriculum/CoreCurriculum";
import Formula from "../../../../components/Formula/Formula";
import LegendParagraph from "../../../../components/LegendParagraph/LegendParagraph";
import Explanation from "../../../../components/ProofAndExplanation/Explanation";
import NavigateTo from "../../../../components/NavigateTo/NavigateTo";


const PolynomialContent: FC = () => {


  return (
    <>
      <div className="max-w-[90vw]">
        <Title text={"Wielomiany"} type={"main-article"} />
        <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
          <p>Aby zdefiniować wielomian należy najpierw posłużyć się definicją <b>jednomianu.</b></p>
          <p><b>Jednomian</b> to funkcja przyjmująca postać:</p>
          <Formula formula={"f(x)=a \\cdot x^n"} />
          <p>przy założeniach:</p>
          <Formula formula={"a \\in \\mathbb{R}-\\{0\\}"} />
          <Formula formula={"n \\in \\mathbb{N_{+}}"} />
          <LegendParagraph type={"short"} notation={"a"} explanation={"współczynnik jednomianu"} />
          <LegendParagraph type={"short"} notation={"n"} explanation={"stopień jednomianu"} />
          <br /><p><b>Stopień jednomianu</b> to najwyższy wykładnik występujący nad argumentem jednomianu. </p>
        </CoreCurriculum>
        <ArticleBorder />
        <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
          <p><b>Wielomian</b> to wyrażenie algebraiczne będące sumą jednomianów. Funkcje wielomianowe zazwyczaj oznacza się dużymi literami alfabetu.</p>
          <br /><p>Postać uporządkowana wielomianu:</p>
          <Formula formula={"W(x)=a_n \\cdot x^n + a_{n-1} \\cdot x^{n-1} + \\cdots + a_1\\cdot x + a_0"} styles="min-w-[390px]" />
          <p>założenia:</p>
          <Formula formula={"a_{n} \\in \\mathbb{R}-\\{0\\}"} />
          <Formula formula={"n \\in \\mathbb{N_{+}}"} />
          <LegendParagraph type={"short"} notation={"a_n"} explanation={"współczynnik przy najwyższej potędze (wspólczynnik kierunkowy)"} />
          <LegendParagraph type={"short"} notation={"a_n, a_{n-1}, ... a_1, a_0"} explanation={"współczynniki wielomianu"} />
          <LegendParagraph type={"short"} notation={"n"} explanation={"stopień wielomianu"} />
          <br /><p><b>Stopień wielomianu</b> to najwyższy wykładnik występujący nad argumentem wielomianu. Inaczej jest to najwyższy stopień spośród całej sumy jednomianów.</p>
        </CoreCurriculum>
        <ArticleBorder />
        <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
          <p className="flex w-full justify-center text-xl"><b>Przykłady wielomianów </b></p><br />
          <p><b>(1) Wielomian zerowy</b> - szczególny przypadek funkcji liniowej stałej</p>
          <Formula formula={"W(x)=0"} />
          <p><b>(2) Wielomian stopnia zerowego</b> - funkcja liniowa stała</p>
          <Formula formula={"W(x)=a"} />
          <p>założenie:</p>
          <Formula formula={"a \\in \\mathbb{R}-\\{0\\}"} />
          <p><b>(3) Dwumian liniowy - </b> wielomian stopnia pierwszego, <NavigateTo to="../funkcja-liniowa">funkcja liniowa</NavigateTo></p>
          <Formula formula={"W(x)=ax+b"} />
          <p>założenie:</p>
          <Formula formula={"a \\in \\mathbb{R}-\\{0\\}"} />
          <p><b>(4) Trójmian kwadratowy</b>  - wielomian stopnia drugiego, <NavigateTo to="../funkcja-kwadratowa">funkcja kwadratowa</NavigateTo></p>
          <Formula formula={"W(x)=ax^2+bx+c"} />
          <p>założenie:</p>
          <Formula formula={"a \\in \\mathbb{R}-\\{0\\}"} />
          <p><b>(4) Czworomian sześcienny</b>  - wielomian stopnia trzeciego, <NavigateTo to="../funkcja-szescienna">funkcja sześcienna</NavigateTo></p>
          <Formula formula={"W(x)=ax^3+bx^2+cx+d"} />
          <p>założenie:</p>
          <Formula formula={"a \\in \\mathbb{R}-\\{0\\}"} />
          <p>i tak dalej...</p>

        </CoreCurriculum>
        <ArticleBorder />
        <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
          <p>Dwa wielomiany są <b>równe</b> gdy maja ten sam stopień i równe współczynniki przy odpowiadających potęgach.</p>
          <Explanation text={"Przykład"}>
            <p>Dane są dwa wielomiany:</p>
            <Formula formula={"W(x)=2x^3-10x"} />
            <Formula formula={"Q(x)=-10x+2x^3"} />
            <p>(a) Stopień wielomianu <b>W</b> jest równy stopniowi wielomianu <b>Q</b> i wynosi 3</p>
            <br /><p>(b) Współczynniki wielomianów <b>W</b> i <b>Q</b> są takie same:</p>
            <Formula formula={"a_3=3, a_2=0, a_1=-10, a_0=0"} />
            <p>Wniosek:   Wielomiany P i Q są równe.</p>
          </Explanation>
        </CoreCurriculum>
        <ArticleBorder />
        <CoreCurriculum type={CoreCurriculumTypes.extra}>
          <p>Postać uporządkowaną wielomianu można zapisać równoważnie z użyciem symbolu <NavigateTo to="../dodawanie">sumy</NavigateTo></p>
          <Formula formula={"\\sum_{i=0}^{n} a_i\\cdot x^i"} />
        </CoreCurriculum>
      </div>
    </>
  );
};

export default PolynomialContent;
