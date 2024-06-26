import { FC } from "react";
import Title from "../../../../components/articleItems/Title";

import { CoreCurriculum, CoreCurriculumTypes } from "../../../../components/CoreCurriculum/CoreCurriculum";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import ImageComponent from "../../../../components/articleItems/ImageComponent";
import TrojkatRoznoramienny from "../../../../assets/images/knowledge_base/planimetry/twierdzenie_cosinusow.png";
import Formula from "../../../../components/articleItems/Formula";
import { GeometryEquations } from "../../../../types/equations";
import TriangleCategoryContent from "./TriangleCategories/TriangleCategoriesContent";
import Proof from "../../../../components/articleItems/Proof";
import { triangleConditionProof } from "./proofsAndEquations";
import EquilateralTriangleContent from "./EquilateralTriangle/EquilateralTriangleContent";
import TheoremsContent from "./Theorems/TheoremsContent";


const TrianglesContent: FC = () => {


    return (
        <>
            <div className="flex flex-col">
                <Title text={"Trójkąty"} type="main-article" />
                <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                    <p><b>Trójkąt (trójbok)</b> to wielokąt płaski o trzech bokach.</p>
                    <ImageComponent src={TrojkatRoznoramienny} alt={"Trójkąt prostokątny"} styles="max-h-[200px] m-2" />
                    <p className="flex w-full justify-center text-xl"><b>Twierdzenie o kątach wewnętrznych w czworokącie</b></p>
                    <p>Suma miar kątów wewnętrznych trójkąta wynosi 180°</p>
                    <Formula formula={GeometryEquations.triangle_interior_angles_theorem} />
                </CoreCurriculum>
                <ArticleBorder />
                <Title text={"Warunek budowy trójkąta"} type="main-article" />
                <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                    <p>Jeżeli dane są 3 odcinki o długościach <b>a, b</b> i <b>c</b> to można z nich skontruować trójkąt pod warunkiem, że będzie spełniona tzw. <b>nierówność trójkąta:</b></p>
                    <Formula formula={"(a+b>c) \\wedge (a+c>b) \\wedge (b+c>a)"} styles="min-w-[315px]" />
                    <p>Równoważnie warunek można zapisać w skróconej postaci</p>
                    <Formula formula={"|b-c|<a<b+c"} styles="min-w-[155px]" />
                    <Proof steps={triangleConditionProof} text={"Dowód"} styles="min-w-[325px]" />
                </CoreCurriculum>
                <ArticleBorder />
                <TriangleCategoryContent />
                <ArticleBorder />
                <EquilateralTriangleContent />
                <ArticleBorder />
                <TheoremsContent />
            </div>
        </>
    );
};

export default TrianglesContent;
