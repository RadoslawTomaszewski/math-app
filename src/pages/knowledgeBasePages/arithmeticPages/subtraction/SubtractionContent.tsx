import { FC } from "react";
import Title from "../../../../components/Title/Title";
import Formula from "../../../../components/Formula/Formula";
import ArticleBorder from "../../../../components/ArticleBorder/ArticleBorder";
import LegendParagraph from "../../../../components/LegendParagraph/LegendParagraph";
import { CoreCurriculum, CoreCurriculumTypes } from "../../../../components/CoreCurriculum/CoreCurriculum";

const SubtractionContent: FC = () => {

  return (
    <>
      <Title text={"Odejmowanie"} type={"main-article"} />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>
          <b>Odejmowanie</b> - jedno z czterech podstawowych działań arytmetycznych (obok dodawania, mnożenia i dzielenia).
        </p>
        <Formula formula={`a-b=c`} />
        <LegendParagraph
          type="short"
          notation="a"
          explanation="odjemna"
        />
        <LegendParagraph
          type="top"
          notation="b"
          explanation="odjemnik"
        />
        <LegendParagraph type="short" notation="c" explanation="różnica" />
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p><b>Odejmowanie</b> definiuje się jako działanie odwrotne do dodawania</p>
        <Formula formula={"a-b=c\\Leftrightarrow a=b+c."} styles="min-w-[185px]" />
        <p>Odejmowanie zawsze <b>można zapisać w postaci sumy</b>, gdzie drugim składnikiem jest element przeciwny odjemnika</p>
        <Formula formula={"a-b=c\\Leftrightarrow a+(-b)=c."} styles="min-w-[210px]" />
        <p>Odejmowanie <b>nie jest przemienne.</b> Zamiana argumentów stronami spowoduje zmianę znaku różnicy</p>
        <div className="m-2">
          <Formula formula="a-b=-(b-a)" styles="min-w-[135px] m-2" margin="none" />
          <Formula formula="a-b\neq b-a" styles="min-w-[135px] m-2" margin="none" />
        </div>
        <br />
        <p>Odejmowanie&nbsp;<b>nie jest łączne</b>&nbsp;i wykonuje się je od lewej do prawej</p>
        <div className="m-2">
          <Formula formula="a-b-c=(a-b)-c" styles="min-w-[185px] m-2" margin="none" />
          <Formula formula="a-b-c \neq a-(b-c)" styles="min-w-[185px] m-2" margin="none" />
        </div>
        <br />
        <p><b>Element neutralny odejmowania</b> występuje jednostronnie</p>
        <Formula formula="a-0=a"></Formula>
        <p>natomiast</p>
        <Formula formula="0-a=-a"></Formula>
        <p><b>Odejmowanie liczb wymiernych</b></p>
        <Formula formula="\frac{a}{b}-\frac{c}{d}=\frac{ad}{bd}-\frac{bc}{bd}=\frac{ad-bc}{bd}" styles="min-w-[255px]" />
      </CoreCurriculum>
    </>
  );
};

export default SubtractionContent;
