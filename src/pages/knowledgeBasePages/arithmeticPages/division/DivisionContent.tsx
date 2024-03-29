import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import { CoreCurriculum, CoreCurriculumTypes } from "../../../../components/CoreCurriculum/CoreCurriculum";

const DivisionContent: FC = () => {

  return (
    <>
      <Title text={"Dzielenie"} type={"main-article"} />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>
          <b>Dzielenie</b> - jedno z czterech podstawowych działań arytmetycznych (obok dodawania, odejmowania i mnożenia).
        </p>
        <Formula formula={`a:b=c \\ \\lor \\ \\frac{a}{b}=c`} styles="min-w-[155px]" />
        <p>Założenie:</p>
        <Formula formula="b \ne 0" />
        <LegendParagraph
          type="short"
          notation="a"
          explanation="dzielna"
        />
        <LegendParagraph
          type="top"
          notation="b"
          explanation="dzielnik"
        />
        <LegendParagraph type="short" notation="c" explanation="iloraz" />
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p><b>Dzielenie</b> definiuje się jako działanie odwrotne do mnożenia</p>
        <Formula formula={"a:b=c\\Leftrightarrow a=b \\cdot c."} styles="min-w-[170px]" />
        <p>Dzielenie zawsze można zapisać w postaci iloczynu, gdzie drugim czynnikiem jest element odwrotny dzielnej</p>
        <Formula formula={"a:b=c\\Leftrightarrow a \\cdot \\frac{1}{b}=c."} styles="min-w-[178px]" />
        <p>Zgodnie z powyższą definicją dzielenie przez zero nie jest możliwe, ponieważ zero nie posiada wartości odwrotnej</p>
        <br />
        <p>Dzielenie <b>nie jest przemienne.</b> Zamiana argumentów stronami da w rezultacie liczbę odwrotną</p>
        <Formula formula="a:b=\frac{1}{b:a}"></Formula>
        <p>Dzielenie <b>nie jest łączne</b> i wykonuje się je od lewej do prawej</p>
        <Formula formula="a:b:c=(a:b):c" styles="min-w-[160px]" />
        <p><b>Element neutralny dzielenia</b> występuje jednostronnie</p>
        <Formula formula="a:1=a"></Formula>
        <p>Natomiast</p>
        <Formula formula="1:a=\frac{1}{a}" styles="min-w-[78px]" />
        <p><b>Dzielenie liczb wymiernych</b></p>
        <Formula formula="\frac{a}{b}:\frac{c}{d}=\frac{a}{b}\cdot\frac{d}{c}=\frac{ad}{bc}" styles="min-w-[180px]" />
      </CoreCurriculum>
    </>
  );
};

export default DivisionContent;
