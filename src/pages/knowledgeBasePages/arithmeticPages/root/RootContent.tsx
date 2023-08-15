import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import Proof from "../../../../components/articleItems/Proof";

const RootContent: FC = () => {
  const rootProof = ['2 \\cdot 2', '2 \\cdot S(S(0))', '2 \\cdot S(0) + 2', '(2 \\cdot 0 + 2) + 2', '(0+2)+2', '2+2', '4']

  return (
    <>
      <Title text={"Mnożenie"} type={"main-article"} />
      <p>
        <b>Mnożenie</b> to jedno z czterech podstawowych działań arytmetycznych (obok dodawania, odejmowania i dzielenia).
      </p>
      <br />
      <p>Oznaczenia:</p>
      <Formula formula={`a \\cdot b=c`} />
      <LegendParagraph
        type="top"
        notation="a,b"
        explanation="czynniki"
      />
      <LegendParagraph type="short" notation="c" explanation="iloczyn" />
      <ArticleBorder />
      <p>Mnożenie definiuje się jako skrócona forma zapisu wielokrotnego dodawania tego samego składnika</p>
      <Formula formula="a \cdot b = \underbrace{b + b + \ldots + b}_{a \text{ razy}}" />
      <p><b>Prawo przemienności mnożenia</b>&nbsp;(kolejność czynników nie ma wpływu na iloczyn)</p>
      <Formula formula="a \cdot b = b \cdot a"></Formula>
      <br />
      <p><b>Prawo łączności mnożenia</b>&nbsp;(sposób grupowania czynników nie ma wpływu na iloczyn)</p>
      <Formula formula="(a \cdot b) \cdot c=a \cdot (b \cdot c)"></Formula>
      <br />
      <p><b>Element neutralny mnożenia</b>&nbsp;(mnożenie przez 1 nie zmienia wartości liczby)</p>
      <Formula formula="a \cdot 1=a"></Formula>
      <br />
      <p><b>Mnożenie liczb wymiernych</b></p>
      <Formula formula="\frac{a}{b} \cdot \frac{c}{d}=\frac{ac}{bd}"></Formula>
      <br />
      <ArticleBorder />
      Do zapisu wyrażenia iloczynu wielu czynników (wyrazów ciągu) stosuje się zapis z pi (Π):
      <Formula formula="\prod_{i=1}^{n} a_i=a_1 \cdot a_2 \cdot ... \cdot a_n"></Formula>
      <Proof steps={["\\prod_{i=1}^{4} i^2=1^2 \\cdot 2^2 \\cdot 3^2 \\cdot 4^2=576"]} text={"Przykład"} />
      <ArticleBorder />
      <p>Mnożenie czynników o różnych znakach i ich iloczyn:</p>
      <div className="flex flex-col justify-center text-center items-center font-bold gap-2">
        <p>dodatnia ⋅ dodatnia = dodatnia</p>
        <p>dodatnia ⋅ ujemna = ujemna</p>
        <p>ujemna ⋅ ujemna = dodatnia</p>
      </div>
      <ArticleBorder />
      <Title text={"Aksjomaty mnożenia Pean'a"} type={"submain-article"} />
      <p>
        <b>Aksjomat 1.</b> Dla dowolnej liczby naturalnej n iloczyn n i 0 ma być równy 0
      </p>
      <Formula formula="\forall_{n \in \mathbb{N}} \quad n \cdot 0=0" />
      <p>
        <b>Aksjomat 2.</b> Dla dowolnych liczb naturalnych n i m iloczyn n i następnika m ma być równy iloczynowi n i m dodać n
      </p>
      <Formula formula="\forall_{n,m \in \mathbb{N}} \quad n \cdot S(m)=n \cdot m + n" />
      <p>Przykład:</p>
      <Formula formula="2 \cdot 2=4" />
      <Proof steps={rootProof} text={"Dowód"} />
    </>
  );
};

export default RootContent;
