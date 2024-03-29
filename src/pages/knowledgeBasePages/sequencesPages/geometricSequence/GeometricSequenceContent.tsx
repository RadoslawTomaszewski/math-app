import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Proof from "../../../../components/articleItems/Proof";
import { geometricSequenceRatioProof, geometricSequenceRatio_sumProof, geometricThreeConsecutiveTermsProof } from "../../../../types/proofs";
import { GeometricSequencesEquations } from "../../../../types/equations";
import { CoreCurriculum, CoreCurriculumTypes } from "../../../../components/CoreCurriculum/CoreCurriculum";
import MathExpression from "../../../../components/articleItems/MathExpression";
import graph1_1 from "../../../../assets/images/knowledge_base/sequences/geometricSequence_1.1.png";
import graph1_2 from "../../../../assets/images/knowledge_base/sequences/geometricSequence_1.2.png";
import graph1_3 from "../../../../assets/images/knowledge_base/sequences/geometricSequence_1.3.png";
import graph1_4 from "../../../../assets/images/knowledge_base/sequences/geometricSequence_1.4.png";
import graph1_5 from "../../../../assets/images/knowledge_base/sequences/geometricSequence_1.5.png";
import graph1_6 from "../../../../assets/images/knowledge_base/sequences/geometricSequence_1.6.png";
import graph1_7 from "../../../../assets/images/knowledge_base/sequences/geometricSequence_1.7.png";
import graph2 from "../../../../assets/images/knowledge_base/sequences/geometricSequence_2.png";
import graph3_1 from "../../../../assets/images/knowledge_base/sequences/geometricSequence_3.1.png";
import graph3_2 from "../../../../assets/images/knowledge_base/sequences/geometricSequence_3.2.png";
import graph3_3 from "../../../../assets/images/knowledge_base/sequences/geometricSequence_3.3.png";
import graph3_4 from "../../../../assets/images/knowledge_base/sequences/geometricSequence_3.4.png";
import graph3_5 from "../../../../assets/images/knowledge_base/sequences/geometricSequence_3.5.png";
import graph3_6 from "../../../../assets/images/knowledge_base/sequences/geometricSequence_3.6.png";
import graph3_7 from "../../../../assets/images/knowledge_base/sequences/geometricSequence_3.7.png";
import GraphImage from "../../../../components/articleItems/GraphImage";

const GeometricSequenceContent: FC = () => {

  return (
    <>
      <Title text={"Ciąg geometryczny"} type={"main-article"} />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>
          <b>Ciąg geometryczny</b> to ciąg liczb, którego każdy kolejny wyraz jest
          różny stałą wartość razy nazywaną <b>ilorazem</b>.
        </p>
        <br />
        <p>Wzór na n-ty wyraz ciągu geometrycznego:</p>
        <Formula formula={GeometricSequencesEquations.nthTermOfGeometricSequence} />
        <p>założenie:</p>
        <Formula formula={`n \\in \\mathbb{N_+}`} />
        <LegendParagraph
          type="short"
          notation="a_1"
          explanation="pierwszy wyraz ciągu"
        />
        <LegendParagraph type="short" notation="q" explanation="iloraz ciągu" />
        <br />
        <p>
          Bardziej uniwersalny wzór na <b>n</b>-ty wyraz ciągu:
        </p>
        <Formula formula={GeometricSequencesEquations.nthTermOfGeometricSequence2} styles="min-w-[150px]" />
        <p>założenie:</p>
        <Formula formula={`n,k \\in \\mathbb{N_+}`} />
        <Formula formula={`k\\leq n`} />
        <LegendParagraph
          type="short"
          notation="a_k"
          explanation="k-ty wyraz ciągu"
        />
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>Iloraz ciągu geometrycznego <u>o niezerowych wyrazach</u> przyjmuje stałą wartość:</p>
        <Formula formula={GeometricSequencesEquations.geometricSequenceRatio} styles="min-w-[150px]" />
        <p>założenie:</p>
        <Formula formula={`a_1 \\neq 0`} />
        <Formula formula={`q \\neq 0`} />
        <Proof steps={geometricSequenceRatioProof} text="Dowód" styles="min-w-[220px]" />
        <p>W niektórych źródłach podaje się, że iloraz musi być różny od zera. Nie jest to jednak matematyczna reguła. W polskich podręcznikach do matematyki iloraz może przyjmować wartość 0.</p>
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p>Trzy kolejne wyrazy ciągu geometrycznego spełniają zawsze równość:</p>
        <Formula formula={GeometricSequencesEquations.threeConsecutiveTermsGeometricSequence} styles="min-w-[150px]" />
        <p>Założenie:</p>
        <Formula formula={`n \\in \\mathbb{N_+}`} />
        <Formula formula={`n\\geq 2`} />
        <Proof steps={geometricThreeConsecutiveTermsProof} text="Dowód" styles="min-w-[220px]" />
      </CoreCurriculum>
      <ArticleBorder />
      <Title text={"Suma wyrazów ciągu geometrycznego"} type="main-article" />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
        <p><b>Suma n wyrazów ciągu geometrycznego</b></p>
        <Formula formula={GeometricSequencesEquations.sum} styles="min-w-[140px]" />
        <p>Założenie:</p>
        <Formula formula={`q \\neq 1`} />
        <p>W przypadku gdy <b>q=1</b> ciąg geometryczny jest stały, a <b>suma n wyrazów</b> tego ciągu wyraża się wzorem</p>
        <Formula formula={GeometricSequencesEquations.sum_when_q_1} styles="min-w-[90px]" />
      </CoreCurriculum>
      <ArticleBorder />
      <CoreCurriculum type={CoreCurriculumTypes.extra}>
        <p>Gdy znane są <b>S<sub>n</sub></b> oraz <b>a<sub>n</sub></b> można wyznaczyć <b>iloraz</b> ze wzoru:</p>
        <Formula formula={GeometricSequencesEquations.geometricSequenceRatio_sum} styles="min-w-[105px]" />
        <Proof steps={geometricSequenceRatio_sumProof} text="Dowód" styles="min-w-[170px]" />
        <p>Założenie:</p>
        <Formula formula={`q \\neq 1`} />
        <Formula formula={`n \\geq 2`} />
      </CoreCurriculum>
      <ArticleBorder />
      <Title text={"Monotoniczność ciągu geometrycznego"} type="main-article" />
      <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
        <p>Ciąg geometryczny może być monotoniczny ale nie musi (wówczas jest naprzemienny)</p>
        <p> Aby ustalić jaki ciąg jest rozpatrywany należy znać wartości <b>a<sub>1</sub></b> oraz <b>q</b>.</p>
        <br />
        {/* TODO: Refactor Math expression in better way */}
        <div className="xl:grid xl:grid-cols-2">
          <div>
            <div className="flex flex-row flex-wrap">
              <b>(1.1)</b>
              <p>&nbsp;gdy&nbsp;</p>
              <MathExpression expression={"a_1 < 0 \\wedge q \\in \\left(-\\infty ;-1\\right)"} />
              <p>&nbsp;ciąg&nbsp;</p>
              <p>jest&nbsp;</p>
              <b>rozbieżny:</b>
            </div>
            <GraphImage src={graph1_1} alt={"Wykres ciągu geometrycznego 1.1"} styles="max-w-full w-[400px]" />
          </div>
          <div>
            <div className="flex flex-row flex-wrap">
              <b>(1.2)</b>
              <p>&nbsp;gdy&nbsp;</p>
              <MathExpression expression={"a_1 > 0 \\wedge q = -1"} />
              <p>&nbsp;ciąg&nbsp;</p>
              <p>jest&nbsp;</p>
              <b>rozbieżny:</b>
            </div>
            <GraphImage src={graph1_2} alt={"Wykres ciągu geometrycznego 1.2"} styles="max-w-full w-[400px]" />
          </div>
          <div>
            <div className="flex flex-row flex-wrap">
              <b>(1.3)</b>
              <p>&nbsp;gdy&nbsp;</p>
              <MathExpression expression={"a_1 < 0 \\wedge q \\in \\left(-1 ;0 \\right)"} />
              <p>&nbsp;ciąg&nbsp;</p>
              <p>jest&nbsp;</p>
              <b>zbieżny&nbsp;</b>
              <b>do&nbsp;</b>
              <b>0:</b>
            </div>
            <GraphImage src={graph1_3} alt={"Wykres ciągu geometrycznego 1.3"} styles="max-w-full w-[400px]" />
          </div>
          <div>
            <div className="flex flex-row flex-wrap">
              <b>(1.4)</b>
              <p>&nbsp;gdy&nbsp;</p>
              <MathExpression expression={"a_1 < 0 \\wedge q = 0"} />
              <p>&nbsp;ciąg&nbsp;</p>
              <p>jest&nbsp;</p>
              <b>stały&nbsp;</b>
              <b>od&nbsp;</b>
              <b>drugiego&nbsp;</b>
              <b>wyrazu:</b>
            </div>
            <GraphImage src={graph1_4} alt={"Wykres ciągu geometrycznego 1.4"} styles="max-w-full w-[400px]" />
          </div>
          <div>
            <div className="flex flex-row flex-wrap">
              <b>(1.5)</b>
              <p>&nbsp;gdy&nbsp;</p>
              <MathExpression expression={"a_1 < 0 \\wedge q \\in \\left(0;1\\right)"} />
              <p>&nbsp;ciąg&nbsp;</p>
              <p>jest&nbsp;</p>
              <b>rosnący:</b>
            </div>
            <GraphImage src={graph1_5} alt={"Wykres ciągu geometrycznego 1.5"} styles="max-w-full w-[400px]" />
          </div>
          <div>
            <div className="flex flex-row flex-wrap">
              <b>(1.6)</b>
              <p>&nbsp;gdy&nbsp;</p>
              <MathExpression expression={"a_1 < 0 \\wedge q = 1"} />
              <p>&nbsp;ciąg&nbsp;</p>
              <p>jest&nbsp;</p>
              <b>stały:</b>
            </div>
            <GraphImage src={graph1_6} alt={"Wykres ciągu geometrycznego 1.6"} styles="max-w-full w-[400px]" />
          </div>
          <div>
            <div className="flex flex-row flex-wrap">
              <b>(1.7)</b>
              <p>&nbsp;gdy&nbsp;</p>
              <MathExpression expression={"a_1 < 0 \\wedge q \\in \\left(1 ;\\infty\\right)"} />
              <p>&nbsp;ciąg&nbsp;</p>
              <p>jest&nbsp;</p>
              <b>malejący:</b>
            </div>
            <GraphImage src={graph1_7} alt={"Wykres ciągu geometrycznego 1.7"} styles="max-w-full w-[400px]" />
          </div>
          <div>
            <div className="flex flex-row flex-wrap">
              <b>(2) </b>
              <p>&nbsp;gdy&nbsp;</p>
              <MathExpression expression={"a_1 = 0 \\wedge q \\in \\mathbb{R}"} />
              <p>&nbsp;ciąg&nbsp;</p>
              <p>jest&nbsp;</p>
              <b>stały:</b>
            </div>
            <GraphImage src={graph2} alt={"Wykres ciągu geometrycznego 2"} styles="max-w-full w-[400px]" />
          </div>
          <div>
            <div className="flex flex-row flex-wrap">
              <b>(3.1)</b>
              <p>&nbsp;gdy&nbsp;</p>
              <MathExpression expression={"a_1 > 0 \\wedge q \\in \\left(-\\infty ;-1\\right)"} />
              <p>&nbsp;ciąg&nbsp;</p>
              <p>jest&nbsp;</p>
              <b>rozbieżny:</b>
            </div>
            <GraphImage src={graph3_1} alt={"Wykres ciągu geometrycznego 3.1"} styles="max-w-full w-[400px]" />
          </div>
          <div>
            <div className="flex flex-row flex-wrap">
              <b>(3.2)</b>
              <p>&nbsp;gdy&nbsp;</p>
              <MathExpression expression={"a_1 > 0 \\wedge q = -1"} />
              <p>&nbsp;ciąg&nbsp;</p>
              <p>jest&nbsp;</p>
              <b>rozbieżny:</b>
            </div>
            <GraphImage src={graph3_2} alt={"Wykres ciągu geometrycznego 3.2"} styles="max-w-full w-[400px]" />
          </div>
          <div>
            <div className="flex flex-row flex-wrap">
              <b>(3.3)</b>
              <p>&nbsp;gdy&nbsp;</p>
              <MathExpression expression={"a_1 > 0 \\wedge q \\in \\left(-1 ;0 \\right)"} />
              <p>&nbsp;ciąg&nbsp;</p>
              <p>jest&nbsp;</p>
              <b>zbieżny&nbsp;</b>
              <b>do&nbsp;</b>
              <b>0:</b>
            </div>
            <GraphImage src={graph3_3} alt={"Wykres ciągu geometrycznego 3.3"} styles="max-w-full w-[400px]" />
          </div>
          <div>
            <div className="flex flex-row flex-wrap">
              <b>(3.4)</b>
              <p>&nbsp;gdy&nbsp;</p>
              <MathExpression expression={"a_1 > 0 \\wedge q = 0"} />
              <p>&nbsp;ciąg&nbsp;</p>
              <p>jest&nbsp;</p>
              <b>stały&nbsp;</b>
              <b>od&nbsp;</b>
              <b>drugiego&nbsp;</b>
              <b>wyrazu:</b>
            </div>
            <GraphImage src={graph3_4} alt={"Wykres ciągu geometrycznego 3.4"} styles="max-w-full w-[400px]" />
          </div>
          <div>
            <div className="flex flex-row flex-wrap">
              <b>(3.5)</b>
              <p>&nbsp;gdy&nbsp;</p>
              <MathExpression expression={"a_1 > 0 \\wedge q \\in \\left(0;1\\right)"} />
              <p>&nbsp;ciąg&nbsp;</p>
              <p>jest&nbsp;</p>
              <b>malejący:</b>
            </div>
            <GraphImage src={graph3_5} alt={"Wykres ciągu geometrycznego 3.5"} styles="max-w-full w-[400px]" />
          </div>
          <div>
            <div className="flex flex-row flex-wrap">
              <b>(3.6)</b>
              <p>&nbsp;gdy&nbsp;</p>
              <MathExpression expression={"a_1 > 0 \\wedge q = 1"} />
              <p>&nbsp;ciąg&nbsp;</p>
              <p>jest&nbsp;</p>
              <b>stały:</b>
            </div>
            <GraphImage src={graph3_6} alt={"Wykres ciągu geometrycznego 3.6"} styles="max-w-full w-[400px]" />
          </div>
          <div>
            <div className="flex flex-row flex-wrap">
              <b>(3.7)</b>
              <p>&nbsp;gdy&nbsp;</p>
              <MathExpression expression={"a_1 > 0 \\wedge q \\in \\left(1 ;\\infty\\right)"} />
              <p>&nbsp;ciąg&nbsp;</p>
              <p>jest&nbsp;</p>
              <b>rosnący:</b>
            </div>
            <GraphImage src={graph3_7} alt={"Wykres ciągu geometrycznego 3.7"} styles="max-w-full w-[400px]" />
          </div>
        </div>
      </CoreCurriculum>

    </>
  );
};

export default GeometricSequenceContent;
