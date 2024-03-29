import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import Proof from "../../../../components/articleItems/Proof";
import { CoreCurriculum, CoreCurriculumTypes } from "../../../../components/CoreCurriculum/CoreCurriculum";

const AdditionContent: FC = () => {

  const additionProof = ['2+2', '2+S(S(0))', 'S(2+S(0))', 'S(S(2+0))', 'S(S(2))', 'S(3)', '4']

  return (
    <>
      <Title text={"Dodawanie"} type={"main-article"} />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <b>Dodawanie</b> - jedno z czterech podstawowych działań arytmetycznych (obok odejmowania, mnożenia i dzielenia).
        <br />
        <Formula formula={`a+b=c`} />
        <LegendParagraph
          type="top"
          notation="a,b"
          explanation="składniki"
        />
        <LegendParagraph type="short" notation="c" explanation="suma" />
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p><b>Prawo przemienności dodawania</b>&nbsp;(kolejność składników dodawania nie ma wpływu na sumę)</p>
        <Formula formula="a+b=b+a"></Formula>
        <br />
        <p><b>Prawo łączności dodawania</b>&nbsp;(sposób grupowania składników nie ma wpływu na sumę)</p>
        <Formula formula="(a+b)+c=a+(b+c)"></Formula>
        <br />
        <p><b>Element neutralny dodawania</b>&nbsp;(dodawanie zera nie zmienia wartości liczby)</p>
        <Formula formula="a+0=a"></Formula>
        <br />
        <p><b>Dodawanie liczb wymiernych</b></p>
        <Formula formula="\frac{a}{b}+\frac{c}{d}=\frac{ad}{bd}+\frac{bc}{bd}=\frac{ad+bc}{bd}" styles="min-w-[251px]"></Formula>
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
        Do wyrażenia zapisu sumy wielu składników (wyrazów ciągu) stosuje się zapis z sigmą (Σ):
        <Formula formula="\sum_{i=1}^{n} a_i=a_1+a_2+...+a_n" styles="min-w-[202px]" />
        <Proof steps={["\\sum_{i=1}^{4} i^2=1^2+2^2+3^2+4^2=30"]} text={"Przykład"} styles="min-w-[250px]" />
      </CoreCurriculum>
      <ArticleBorder />
      <Title text={"Aksjomaty dodawania Pean'a"} type={"main-article"} />
      <CoreCurriculum type={CoreCurriculumTypes.extra}>
        <p>
          <b>Aksjomat 1.</b> Dla dowolnej liczby naturalnej <b>n</b> suma <b>n</b> i <b>0</b> jest równa <b>n</b>.
        </p>
        <Formula formula="\forall_{n \in \mathbb{N}} \quad n+0=n" styles="min-w-[135px]" />
        <p>
          <b>Aksjomat 2.</b> Dla dowolnych liczb naturalnych <b>n</b> i <b>m</b> suma <b>n</b> i następnika <b>m</b> ma być równa następnikowi sumy <b>n</b> i <b>m</b>
        </p>
        <Formula formula="\forall_{n,m \in \mathbb{N}} \quad n+S(m)=S(n+m)" styles="min-w-[250px]" />
        <p>Przykład:</p>
        <Formula formula="2+2=4" />
        <Proof steps={additionProof} text={"Dowód"} styles="min-w-[95px]" />
      </CoreCurriculum>
    </>
  );
};

export default AdditionContent;
