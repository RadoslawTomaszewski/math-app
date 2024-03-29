import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import Proof from "../../../../components/articleItems/Proof";
import { CoreCurriculum, CoreCurriculumTypes } from "../../../../components/CoreCurriculum/CoreCurriculum";

const MultiplicationContent: FC = () => {
  const multiplicationProof = ['2 \\cdot 2', '2 \\cdot S(S(0))', '2 \\cdot S(0) + 2', '(2 \\cdot 0 + 2) + 2', '(0+2)+2', '2+2', '4']

  return (
    <>
      <Title text={"Mnożenie"} type={"main-article"} />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>
          <b>Mnożenie</b> - jedno z czterech podstawowych działań arytmetycznych (obok dodawania, odejmowania i dzielenia).
        </p>
        <Formula formula={`a \\cdot b=c`} />
        <LegendParagraph
          type="top"
          notation="a,b"
          explanation="czynniki"
        />
        <LegendParagraph type="short" notation="c" explanation="iloczyn" />
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p><b>Mnożenie</b> definiuje się jako skrócona forma zapisu wielokrotnego dodawania tego samego składnika</p>
        <Formula formula="a \cdot b = \underbrace{b + b + \ldots + b}_{a \text{ razy}}" styles="min-w-[170px]" />
        <p><b>Prawo przemienności mnożenia</b> (kolejność czynników nie ma wpływu na iloczyn)</p>
        <Formula formula="a \cdot b = b \cdot a"></Formula>
        <br />
        <p><b>Prawo łączności mnożenia</b> (sposób grupowania czynników nie ma wpływu na iloczyn)</p>
        <Formula formula="(a \cdot b) \cdot c=a \cdot (b \cdot c)" styles="min-w-[162px]" />
        <br />
        <p><b>Element neutralny mnożenia</b> (mnożenie przez 1 nie zmienia wartości liczby)</p>
        <Formula formula="a \cdot 1=a" styles="min-w-[102px]" />
        <br />
        <p><b>Mnożenie liczb wymiernych</b></p>
        <Formula formula="\frac{a}{b} \cdot \frac{c}{d}=\frac{ac}{bd}"></Formula>
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>Do zapisu wyrażenia iloczynu wielu czynników (wyrazów ciągu) stosuje się zapis z <b>pi (Π):</b></p>
        <Formula formula="\prod_{i=1}^{n} a_i=a_1 \cdot a_2 \cdot ... \cdot a_n" styles="min-w-[171px]" />
        <Proof steps={["\\prod_{i=1}^{4} i^2=1^2 \\cdot 2^2 \\cdot 3^2 \\cdot 4^2=576"]} text={"Przykład"} styles="min-w-[235px]" />
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p><b>Mnożenie liczb i ich rezultaty:</b></p>
        <div className="flex flex-col justify-center text-center items-center font-bold gap-2">
          <p>(+) ⋅ (+) = (+)</p>
          <p>(+) ⋅ (-) = (-)</p>
          <p>(-) ⋅ (-) = (+)</p>
        </div>
        <p><b>(+)</b> oznacza liczbę dodatnią, a <b>(-)</b> liczbę ujemną. </p>
      </CoreCurriculum>
      <ArticleBorder />
      <Title text={"Aksjomaty mnożenia Pean'a"} type={"main-article"} />
      <CoreCurriculum type={CoreCurriculumTypes.extra}>
        <p>
          <b>Aksjomat 1.</b> Dla dowolnej liczby naturalnej <b>n</b> iloczyn <b>n</b> i <b>0</b> jest równy <b>0</b>
        </p>
        <Formula formula="\forall_{n \in \mathbb{N}} \quad n \cdot 0=0" />
        <p>
          <b>Aksjomat 2.</b> Dla dowolnych liczb naturalnych <b>n</b> i <b>m</b> iloczyn <b>n</b> i następnika <b>m</b> jest równy sumie iloczynu <b>n</b> i <b>m</b> oraz <b>n.</b>
        </p>
        <Formula formula="\forall_{n,m \in \mathbb{N}} \quad n \cdot S(m)=n \cdot m + n" styles="min-w-[235px]" />
        <p>Przykład:</p>
        <Formula formula="2 \cdot 2=4" />
        <Proof steps={multiplicationProof} text={"Dowód"} />
      </CoreCurriculum>
    </>
  );
};

export default MultiplicationContent;
