import { FC } from "react";
import Title from "../../../../../components/articleItems/Title";

import { CoreCurriculum, CoreCurriculumTypes } from "../../../../../components/CoreCurriculum/CoreCurriculum";
import ArticleBorder from "../../../../../components/articleItems/ArticleBorder";
import ImageComponent from "../../../../../components/articleItems/ImageComponent";

import TrojkatRownoramienny from "../../../../../assets/images/knowledge_base/planimetry/trojkat_rownoramienny.png";
import RelacjaKatBok from "../../../../../assets/images/knowledge_base/planimetry/relacja_kat_bok_trojkat.png";
import PodzialTrojkatow from "../../../../../assets/images/knowledge_base/planimetry/podzial_trojkatow.png";
import Formula from "../../../../../components/articleItems/Formula";



const TriangleCategoryContent: FC = () => {


    return (
        <>
            <div className="flex flex-col">
                <Title text={"Podział trójkątów"} type="main-article" />
                <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                    <p className="flex w-full justify-center text-xl"><b>Podział z uwagi na długości boków</b></p><br />
                    <p>Wyróżnia się 3 rodzaje trójkątów ze względu na długości ich boków</p>
                    <p><b>(1) Trójkąt równoboczny</b> - trójkąt mający trzy boki równej długości oraz kąty o mierze 60°.</p>
                    <p><b>(2) Trójkąt równoramienny</b> - trójkąt mający dwa boki równej długości nazywane <b>ramionami</b> oraz jeden bok o innej długości zwany <b>podstawą</b>. Kąty między ramionami, a podstawą są równej miary.</p>
                    <ImageComponent src={TrojkatRownoramienny} alt={"Trójkąt równoramienny"} styles="max-h-[250px] m-2" />
                    <p><b>(3) Trójkąt różnoboczny</b> - trójkąt mający boki oraz kąty różnej długości.</p>
                    <br />
                    <p className="flex w-full justify-center text-xl"><b>Podział z uwagi na miary kątów</b></p><br />
                    <p>Trójkąty można klasyfikować alternatywnie z uwagi na miary kątów:</p>
                    <p><b>(1) Trójkąt ostrokątny</b> - trójkąt mający trzy kąty ostre.</p>
                    <p><b>(2) Trójkąt prostokątny</b> - trójkąt mający jeden kąt prosty i dwa kąty ostre. Boki przylegające do kąta prostego nazywane są <b>przyprostokątnymi</b>, a trzeci bok leżący na przeciwko kąta prostego nazywa się <b>przeciwprostokątną</b></p>
                    <p><b>(3) Trójkąt rozwartokątny</b> - trójkąt mający jeden kąt rozwarty i dwa kąty ostre.</p>
                    <br />
                    <p>Tabela przedstawiająca warianty trójkątów klasyfikowanych na dwa sposoby:</p>
                    <ImageComponent src={PodzialTrojkatow} alt={"Podział trójkątów"} styles="max-h-[400px] m-2" />
                </CoreCurriculum>
                <ArticleBorder />
                <Title text={"Rozmieszczenie kątów i boków w trójkącie"} type="main-article" />
                <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                    <p><b>Najdłuższy bok</b> trójkąta leży naprzeciwko <b>kąta o największej mierze</b></p>
                    <p><b>Środkowy w kolejności pod względem długości bok</b> trójkąta leży naprzeciwko <b>środkowego kąta pod względem miary</b></p>
                    <p><b>Najkrótszy bok</b> trójkąta leży naprzeciwko <b>kąta o najmniejszej mierze</b></p>
                    <br />
                    <p>Aby lepiej zapamiętać tę zależność dobrze jest kojarzyć szkic trójkąta rozwartokątnego:</p>
                    <ImageComponent src={RelacjaKatBok} alt={"Trójkąt rozwartokątny"} styles="max-h-[200px] m-2" />
                    <Formula formula={"\\alpha < \\beta < \\gamma \\Leftrightarrow a < b < c"} />
                </CoreCurriculum>
            </div>
        </>
    );
};

export default TriangleCategoryContent;
