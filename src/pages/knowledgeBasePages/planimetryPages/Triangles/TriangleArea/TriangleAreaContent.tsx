import { FC } from "react";
import Title from "../../../../../components/Title/Title";
import Formula from "../../../../../components/Formula/Formula";

import LegendParagraph from "../../../../../components/LegendParagraph/LegendParagraph";
import { CoreCurriculum, CoreCurriculumTypes } from "../../../../../components/CoreCurriculum/CoreCurriculum";
import ImageComponent from "../../../../../components/imageComponents/ImageComponent";
import pole1 from "../../../../../assets/images/knowledge_base/planimetry/pole_trojkata_1.png";
import pole2 from "../../../../../assets/images/knowledge_base/planimetry/pole_trojkata_2.png";
import pole3 from "../../../../../assets/images/knowledge_base/planimetry/pole_trojkata_3.png";
import pole4 from "../../../../../assets/images/knowledge_base/planimetry/pole_trojkata_4.png";
import pole5 from "../../../../../assets/images/knowledge_base/planimetry/pole_trojkata_5.png";
import pole6 from "../../../../../assets/images/knowledge_base/planimetry/pole_trojkata_6.png";
import pole7 from "../../../../../assets/images/knowledge_base/planimetry/pole_trojkata_7.png";
import Proof from "../../../../../components/ProofAndExplanation/Proof";
import { HeronProof } from "../proofsAndEquations";


const TriangleAreaContent: FC = () => {

    return (
        <>
            <div className="flex flex-col">
                <Title text={"Pole trójkąta"} type="main-article" />
                <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                    <p><b>Pole trójkąta</b> można policzyć na wiele sposobów:</p>
                    <br />
                    <p><b>(1) wzór na pole trójkąta gdy znana jest wysokość i długość boku, na którą ta wysokość jest opuszczona</b></p>
                    <ImageComponent src={pole1} alt={"pole trójkąta 1"} styles="max-h-[200px]" />
                    <Formula formula={"P_\\Delta = \\frac{1}{2}\\cdot a \\cdot h"} styles="min-w-[150px]" />
                    <LegendParagraph type={"short"} notation={"a"} explanation={"bok trójkąta (podstawa)"} />
                    <LegendParagraph type={"top"} notation={"h"} explanation={"wysokość trójkąta opuszczona na podstawę"} />
                    <br />
                    <p><b>(2) wzór na pole trójkąta gdy znane są długości dwóch boków oraz miara kąta między nimi</b></p>
                    <ImageComponent src={pole2} alt={"pole trójkąta 2"} styles="max-h-[200px]" />
                    <Formula formula={"P_\\Delta = \\frac{1}{2}\\cdot a \\cdot b \\cdot \\sin{\\alpha}"} styles="min-w-[150px]" />
                    <LegendParagraph type={"top"} notation={"a,b"} explanation={"boki trójkąta"} />
                    <LegendParagraph type={"short"} notation={"\\alpha"} explanation={"kąt między wybranymi bokami trójkąta"} />
                    <br />
                    <p><b>(3) wzór na pole trójkąta gdy znana jest długość boku oraz miary kątów przylegających do tego boku</b></p>
                    <ImageComponent src={pole3} alt={"pole trójkąta 3"} styles="max-h-[200px]" />
                    <Formula formula={"P_\\Delta = \\frac{1}{2} \\cdot a^2 \\cdot \\frac{\\sin{\\beta} \\cdot \\sin{\\left(\\alpha + \\beta\\right)}}{\\sin{\\alpha}}"} styles="min-w-[258px]" />
                    <LegendParagraph type={"short"} notation={"a"} explanation={"bok trójkąta"} />
                    <LegendParagraph type={"top"} notation={"\\alpha, \\beta"} explanation={"kąty przyległe do wybranego boku "} />
                    <br />
                    <p><b>(4) wzór na pole trójkąta gdy znane są długości boków trójkąta (wzór Herona)</b></p>
                    <ImageComponent src={pole4} alt={"pole trójkąta 4"} styles="max-h-[200px]" />
                    <Formula formula={"P_\\Delta = \\sqrt{p(p-a)(p-b)(p-c)}"} styles="min-w-[245px]" />
                    <LegendParagraph type={"top"} notation={"a,b,c"} explanation={"boki trójkąta"} />
                    <LegendParagraph type={"short"} notation={"p"} explanation={"połowa obwodu trójkąta"} />
                    <br /><p>Wzór Herona w wersji z samymi długościami boków trójkąta:</p>
                    <Formula formula={"P_{\\Delta}=\\frac{1}{4} \\sqrt{\\left(a+b+c\\right)\\left(-a+b+c\\right)\\left(a-b+c\\right)\\left(a+b-c\\right)}"} styles="min-w-[455px]" />
                    <Proof steps={HeronProof} text={"Dowód"} styles="min-w-[575px]" />
                    <br />
                    <p><b>(5) wzór na pole trójkąta gdy znany jest promień okręgu opisanego na tym trójkącie oraz długości boków</b></p>
                    <ImageComponent src={pole5} alt={"pole trójkąta 5"} styles="max-h-[300px]" />
                    <Formula formula={"P_\\Delta = \\frac{abc}{4R}"} styles="min-w-[150px]" />
                    <LegendParagraph type={"top"} notation={"R"} explanation={"promień okręgu opisanego na trójkącie"} />
                    <LegendParagraph type={"top"} notation={"a, b, c"} explanation={"boki trójkąta"} />
                    <br />
                    <p><b>(6) wzór na pole trójkąta gdy znany jest promień okręgu opisanego na tym trójkącie oraz miary kątów</b></p>
                    <ImageComponent src={pole6} alt={"pole trójkąta 6"} styles="max-h-[300px]" />
                    <Formula formula={"P_\\Delta = 2R^2 \\cdot \\sin{\\alpha}\\cdot  \\sin{\\beta}\\cdot  \\sin{\\gamma}"} styles="min-w-[235px]" />
                    <LegendParagraph type={"top"} notation={"R"} explanation={"promień okręgu opisanego na trójkącie"} />
                    <LegendParagraph type={"top"} notation={"\\alpha, \\beta, \\gamma"} explanation={"kąty trójkąta"} />
                    <br />
                    <p><b>(7) wzór na pole trójkąta gdy znany jest promień okręgu wpisanego w ten trójkąt oraz długości boków</b></p>
                    <ImageComponent src={pole7} alt={"pole trójkąta 7"} styles="max-h-[200px]" />
                    <Formula formula={"P_\\Delta = p \\cdot r"} styles="min-w-[150px]" />
                    <LegendParagraph type={"short"} notation={"p"} explanation={"połowa obwodu trójkąta"} />
                    <LegendParagraph type={"short"} notation={"r"} explanation={"promień okręgu wpisanego w trójkąt"} />
                    <br /> <p>Wzór (7) w wersji z długościami boków trójkąta:</p>
                    <Formula formula={"P_\\Delta = \\frac{a+b+c}{2} \\cdot r"} styles="min-w-[150px]" />
                    <LegendParagraph type={"top"} notation={"a, b, c"} explanation={"boki trójkąta"} />
                    <LegendParagraph type={"short"} notation={"r"} explanation={"promień okręgu wpisanego w trójkąt"} />
                </CoreCurriculum>
            </div>
        </>
    );
};

export default TriangleAreaContent;
