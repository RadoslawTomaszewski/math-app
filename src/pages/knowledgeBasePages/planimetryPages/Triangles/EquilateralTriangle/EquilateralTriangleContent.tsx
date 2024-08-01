import { FC } from "react";
import Title from "../../../../../components/Title/Title";
import Formula from "../../../../../components/Formula/Formula";


import { CoreCurriculum, CoreCurriculumTypes } from "../../../../../components/CoreCurriculum/CoreCurriculum";
import TrojkatRownoboczny from "../../../../../assets/images/knowledge_base/planimetry/trojkat_rownoboczny.png";
import TrojkatRownoboczny2 from "../../../../../assets/images/knowledge_base/planimetry/trojkat_rownoboczny_2.png";
import TrojkatRownoboczny3 from "../../../../../assets/images/knowledge_base/planimetry/trojkat_rownoboczny_3.png";
import ImageComponent from "../../../../../components/imageComponents/ImageComponent";
import ArticleBorder from "../../../../../components/ArticleBorder/ArticleBorder";
import { NavLink } from "react-router-dom";
import Proof from "../../../../../components/ProofAndExplanation/Proof";


const EquilateralTriangleContent: FC = () => {

    return (
        <>
            <div className="flex flex-col">
                <Title text={"Trójkąt równoboczny"} type="main-article" />
                <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                    <p><b>Trójkąt równoboczny</b> to trójkąt o bokach równej długości i kątach wewnętrznych o mierze 60°</p>
                    <ImageComponent src={TrojkatRownoboczny} alt={"Trójkąt równoboczny"} styles="max-w-[300px]" />
                </CoreCurriculum>
                <ArticleBorder />
                <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                    <p>W trójkącie równobocznym <b>wysokości</b> i <b>środkowe</b> to pokrywają się i są równej długości. Zawierają się one również w <b>symetralnych</b> oraz <b>dwusiecznych</b></p>
                    <ImageComponent src={TrojkatRownoboczny2} alt={"Trójkąt równoboczny2"} styles="max-w-[300px]" />
                    <p><b>(1) Wysokość/środkowa trójkąta równobocznego ma długość:</b></p>
                    <Formula formula={"h=\\frac{a\\sqrt{3}}{2}"} />
                    <p>Zgodnie z <NavLink to={"../twierdzenia"}><b>twierdzeniem o środkowych trójkąta</b> </NavLink> oraz faktem, że środkowe zawierają się w dwusiecznej i symetralnej trójkąta równobocznego prawdziwe są równania:</p>
                    <ImageComponent src={TrojkatRownoboczny3} alt={"Trójkąt równoboczny3"} styles="max-w-[300px]" />
                    <br /><b>(2) promień okręgu wpisanego w trójkąt równoboczny</b>
                    <Formula formula={"r=\\frac{1}{3}\\cdot h"} />
                    <p>co można zapisać również jako:</p>
                    <Formula formula={"r=\\frac{a\\sqrt{3}}{6}"} />
                    <Proof steps={["\\frac{1}{3}\\cdot h", "\\frac{1}{3}\\cdot \\frac{a\\sqrt{3}}{2}", "\\frac{a\\sqrt{3}}{6}"]} text={"Dowód"} styles="min-w-[100px]" />
                    <br /><b>(3) promień okręgu opisanego na trójkącie równobocznym</b>
                    <Formula formula={"R=\\frac{2}{3}\\cdot h"} />
                    <p>co można zapisać również jako:</p>
                    <Formula formula={"R=\\frac{a\\sqrt{3}}{3}"} />
                    <Proof steps={["\\frac{2}{3}\\cdot h", "\\frac{2}{3}\\cdot \\frac{a\\sqrt{3}}{2}", "\\frac{a\\sqrt{3}}{3}"]} text={"Dowód"} styles="min-w-[100px]" />
                </CoreCurriculum>
                <ArticleBorder />
                <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                    <p><b>Pole trójkąta równobocznege</b> można liczyć zgodnie ze wzorami: </p>
                    <p><b>(1) wzór gdy znany jest bok trójkąta równobocznego</b></p>
                    <br /><Formula formula={"P_{\\Delta}=\\frac{a^2 \\sqrt{3}}{4}"} styles="min-w-[120px]" />
                    <p><b>(2) wzór gdy znana jest wysokość trójkąta równobocznego</b></p>
                    <br /><Formula formula={"P_{\\Delta}=\\frac{h^2 \\sqrt{3}}{3}"} styles="min-w-[120px]" />
                    <p><b>(3) wzór gdy znany jest promień okręgu wpisanego w trójkąt równoboczny</b></p>
                    <br /><Formula formula={"P_{\\Delta}=3\\sqrt{3}\\cdot r^2"} styles="min-w-[120px]" />
                    <p><b>(4) wzór gdy znana jest promień okręgu opisanego na trójkącie równobocznym</b></p>
                    <br /><Formula formula={"P_{\\Delta}=\\frac{3 \\sqrt{3} \\cdot R^2}{4}"} styles="min-w-[120px]" />
                </CoreCurriculum>
            </div>
        </>
    );
};

export default EquilateralTriangleContent;
