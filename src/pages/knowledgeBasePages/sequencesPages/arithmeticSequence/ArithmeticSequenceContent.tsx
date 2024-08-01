import { FC } from "react";
import Title from "../../../../components/Title/Title";
import LegendParagraph from "../../../../components/LegendParagraph/LegendParagraph";
import Formula from "../../../../components/Formula/Formula";
import ArticleBorder from "../../../../components/ArticleBorder/ArticleBorder";
import Proof from "../../../../components/ProofAndExplanation/Proof";
import { arithmeticThreeConsecutiveTermsProof } from "../../../../data/proofs";
import { arithmeticSequencesEquations } from "../../../../data/equations";

const ArithmeticSequenceContent: FC = () => {


  return (
    <>
      <Title text={"Ciąg arytmetyczny"} type={"main-article"} />
      <p>
        <b>Ciąg arytmetyczny</b> to ciąg liczb, którego każdy kolejny wyraz
        różni się od poprzedniego o stałą wartość nazywaną <b>różnicą</b>.
      </p>
      <ArticleBorder />
      <p>Rekurencyjna definicja ciągu arytmetycznego:</p>
      <Formula formula={`  f(n) =
\\begin{cases}
n/2,  & \\text{if $n$ is even} \\\
3n+1, & \\text{if $n$ is odd}
\\end{cases}`} styles="min-w-[200px]" />
      <ArticleBorder />
      <p>Wzór na n-ty wyraz ciągu arytmetycznego:</p>
      <Formula formula={arithmeticSequencesEquations.nthTermOfArithmeticSequence} styles="min-w-[200px]" />
      <p>Założenie:</p>
      <Formula formula={`n \\in \\mathbb{N_+}`} />
      <LegendParagraph
        type="short"
        notation="a_1"
        explanation="pierwszy wyraz ciągu"
      />
      <LegendParagraph type="short" notation="r" explanation="różnica ciągu" />
      <br />
      <p>
        Wyznaczenie wzoru na n-ty wyraz ciągu nie wymaga znajomości wartości
        wyrazu pierwszego. Można wykorzystać dowolny wyraz, którego jest znana wartość i kolejność.
      </p>
      <Formula formula={arithmeticSequencesEquations.nthTermOfArithmeticSequence2} styles="min-w-[200px]" />
      <p>Założenie:</p>
      <Formula formula={`n,k \\in \\mathbb{N_+}`} />
      <Formula formula={`k\\leq n`} />
      <LegendParagraph
        type="short"
        notation="a_k"
        explanation="k-ty wyraz ciągu"
      />
      <ArticleBorder />
      <p>Trzy kolejne wyrazy ciągu arytmetycznego spełniają zawsze równość:</p>
      <Formula formula={arithmeticSequencesEquations.threeConsecutiveTermsArithmeticSequence} styles="min-w-[200px]" />
      <p>Założenie:</p>
      <Formula formula={`n \\in \\mathbb{N_+}`} />
      <Formula formula={`n\\geq 2`} />
      <Proof steps={arithmeticThreeConsecutiveTermsProof} text="Dowód" styles="min-w-[340px]" />
    </>
  );
};

export default ArithmeticSequenceContent;
