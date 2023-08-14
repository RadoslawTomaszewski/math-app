import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Proof from "../../../../components/articleItems/Proof";

const ArithmeticSequenceContent: FC = () => {
  const threeWords = [
    `P=\\sqrt{a_{n-1}\\cdot a_{n+1}}`,
    `\\sqrt{a_1\\cdot q^{\\left(n-1\\right)-1}\\cdot a_1\\cdot q^{\\left(n+1\\right)-1}}`,
    `\\sqrt{a_1\\cdot q^{\\left(n-2\\right)}\\cdot a_1\\cdot q^n}`,
    `\\sqrt{a_1^2\\cdot q^{\\left(n-2+n\\right)}}`,
    `\\sqrt{a_1^2\\cdot q^{2\\left(n-1\\right)}}`,
    `\\sqrt{a_1^2\\cdot q^{\\left(n-1\\right)^2}}`,
    `\\sqrt{a_1^2}\\cdot\\sqrt{q^{\\left(n-1\\right)^2}}`,
    `a_1\\cdot q^{n-1}`,
    `a_n = L`,
  ];

  return (
    <>
      <Title text={"Ciąg geometryczny"} type={"main-article"} />
      <p>
        <b>Ciąg geometryczny</b> to ciąg liczb, którego każdy kolejny wyraz jest
        różny stałą wartość razy nazywaną <b>ilorazem</b>.
      </p>
      <br />
      <p>Wzór na n-ty wyraz ciągu geometrycznego:</p>
      <Formula formula={`a_n=a_1\\cdot q^{n-1}`} />
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
      <Formula formula={`a_n=a_k\\cdot q^{n-k}`} />
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
      <Formula formula={`a_n=\\sqrt{a_{n-1}\\cdot a_{n+1}}`} />
      <p>Założenie:</p>
      <Formula formula={`n \\in \\mathbb{N_+}`} />
      <Formula formula={`n\\geq 2`} />
      <Proof steps={threeWords} text="Dowód" />
    </>
  );
};

export default ArithmeticSequenceContent;
