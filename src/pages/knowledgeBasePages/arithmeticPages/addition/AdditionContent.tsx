import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import Proof from "../../../../components/articleItems/Proof";

const AdditionContent: FC = () => {

  const additionProof = ['2+2', '2+S(S(0))', 'S(2+S(0))', 'S(S(2+0))', 'S(S(2))', 'S(3)', '4']

  return (
    <>
      <Title text={"Dodawanie"} type={"main-article"} />
      <p>
        <b>Dodawanie</b> to jedno z czterech podstawowych działań arytmetycznych (obok odejmowania, mnożenia i dzielenia).
      </p>
      <br />
      <p>Oznaczenia:</p>
      <Formula formula={`a+b=c`} />
      <LegendParagraph
        type="top"
        notation="a,b"
        explanation="składniki"
      />
      <LegendParagraph type="short" notation="c" explanation="suma" />
      <ArticleBorder />
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
      <Formula formula="\frac{a}{b}+\frac{c}{d}=\frac{ad}{bd}+\frac{bc}{bd}=\frac{ad+bc}{bd}"></Formula>
      <br />
      <ArticleBorder />
      Do wyrażenia zapisu sumy wielu składników (wyrazów ciągu) stosuje się zapis z sigmą (Σ):
      <Formula formula="\sum_{i=1}^{n} a_i=a_1+a_2+...+a_n"></Formula>
      <Proof steps={["\\sum_{i=1}^{4} i^2=1^2+2^2+3^2+4^2=30"]} text={"Przykład"} />
      <ArticleBorder />
      <Title text={"Aksjomaty dodawania Pean'a"} type={"submain-article"} />
      <p>
        <b>Aksjomat 1.</b> Dla dowolnej liczby naturalnej n suma n i 0 ma być równa n
      </p>
      <Formula formula="\forall_{n \in \mathbb{N}} \quad n+0=n" />
      <p>
        <b>Aksjomat 2.</b> Dla dowolnych liczb naturalnych n i m suma n i następnika m ma być równa następnikowi sumy n i m
      </p>
      <Formula formula="\forall_{n,m \in \mathbb{N}} \quad n+S(m)=S(n+m)" />
      <p>Przykład:</p>
      <Formula formula="2+2=4" />
      <Proof steps={additionProof} text={"Dowód"} />    </>
  );
};

export default AdditionContent;
