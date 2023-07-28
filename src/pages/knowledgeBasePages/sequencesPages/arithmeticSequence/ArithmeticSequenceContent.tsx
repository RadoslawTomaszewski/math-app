import { FC } from "react";
import Title from "../../../../utilities/Title";
import LegendParagraph from "../../../../utilities/articleItems/LegendParagraph";
import Formula from "../../../../utilities/articleItems/Formula";
import ArticleBorder from "../../../../utilities/articleItems/ArticleBorder";
import Proof from "../../../../utilities/articleItems/Proof";

const ArithmeticSequenceContent: FC = () => {
  const threeWords = [
    `P=\\frac{a_{n-1}+a_{n+1}}{2}`,
    `\\frac{a_1+\\left(\\left(n-1\\right)-1\\right)r+a_1+\\left(\\left(n+1\\right)-1\\right)r}{2}`,
    `\\frac{2a_1+\\left(n-2\\right)r+nr}{2}`,
    `\\frac{2a_1+\\left(n-2+n\\right)r}{2}`,
    `\\frac{2a_1+2\\left(n-1\\right)r}{2}`,
    `a_1+\\left(n-1\\right)r`,
    `a_n = L`,
  ];

  return (
    <>
      <Title text={"Ciąg arytmetyczny"} type={"main-article"} />
      <p>
        <b>Ciąg arytmetyczny</b> to ciąg liczb, którego każdy kolejny wyraz
        różni się od poprzedniego o stałą wartość nazywaną <b>różnicą</b>.
      </p>
      <br />
      <p>Wzór na n-ty wyraz ciągu arytmetycznego:</p>
      <Formula formula={`a_n=a_1+\\left(n-1\\right)r`} />
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
        wyrazu pierwszego:
      </p>
      <Formula formula={`a_n=a_k+\\left(n-k\\right)r`} />
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
      <Formula formula={`a_n=\\frac{a_{n-1}+a_{n+1}}{2}`} />
      <p>Założenie:</p>
      <Formula formula={`n \\in \\mathbb{N_+}`} />
      <Formula formula={`n\\geq 2`} />
      <Proof steps={threeWords} text="Dowód" />
    </>
  );
};

export default ArithmeticSequenceContent;
