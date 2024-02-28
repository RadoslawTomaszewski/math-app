import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Proof from "../../../../components/articleItems/Proof";
import { geometricThreeConsecutiveTermsProof } from "../../../../types/proofs";
import { GeometricSequencesEquations } from "../../../../types/equations";

const ArithmeticSequenceContent: FC = () => {


  return (
    <>
      <Title text={"Ciąg geometryczny"} type={"main-article"} />
      <p>
        <b>Ciąg geometryczny</b> to ciąg liczb, którego każdy kolejny wyraz jest
        różny stałą wartość razy nazywaną <b>ilorazem</b>.
      </p>
      <br />
      <p>Wzór na n-ty wyraz ciągu geometrycznego:</p>
      <Formula formula={GeometricSequencesEquations.nthTermOfGeometricSequence} />
      <p>Założenie:</p>
      <Formula formula={`n \\in \\mathbb{N_+}`} />
      <LegendParagraph
        type="short"
        notation="a_1"
        explanation="pierwszy wyraz ciągu"
      />
      <LegendParagraph type="short" notation="q" explanation="iloraz ciągu" />
      <br />
      <p>
        Wyznaczenie wzoru na n-ty wyraz ciągu nie wymaga znajomości wartości
        wyrazu pierwszego:
      </p>
      <Formula formula={GeometricSequencesEquations.nthTermOfGeometricSequence2} />
      <p>Założenie:</p>
      <Formula formula={`n,k \\in \\mathbb{N_+}`} />
      <Formula formula={`k\\leq n`} />
      <LegendParagraph
        type="short"
        notation="a_k"
        explanation="k-ty wyraz ciągu"
      />
      <ArticleBorder />
      <p>Trzy kolejne wyrazy ciągu geometrycznego spełniają zawsze równość:</p>
      <Formula formula={GeometricSequencesEquations.threeConsecutiveTermsGeometricSequence} />
      <p>Założenie:</p>
      <Formula formula={`n \\in \\mathbb{N_+}`} />
      <Formula formula={`n\\geq 2`} />
      <Proof steps={geometricThreeConsecutiveTermsProof} text="Dowód" />
    </>
  );
};

export default ArithmeticSequenceContent;
