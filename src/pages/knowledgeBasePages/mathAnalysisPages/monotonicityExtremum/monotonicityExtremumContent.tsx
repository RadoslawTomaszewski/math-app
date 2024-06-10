import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import GraphImage from "../../../../components/articleItems/GraphImage";
import DerivedFunctionGraph from "../../../../assets/images/knowledge_base/math_analytics/derived_definition.png"
import Formula from "../../../../components/articleItems/Formula";
import { mathematicalAnalyticsFormulas } from "../../../../types/equations";
import { CoreCurriculum, CoreCurriculumTypes } from "../../../../components/CoreCurriculum/CoreCurriculum";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import ImageComponent from "../../../../components/articleItems/ImageComponent";
import FunkcjaRosnaca from "../../../../assets/images/knowledge_base/math_analytics/funkcja_rosnaca.png";
import FunkcjaMalejaca from "../../../../assets/images/knowledge_base/math_analytics/funkcja_malejaca.png";
import FunkcjaStala from "../../../../assets/images/knowledge_base/math_analytics/funkcja_stala.png";
import FunkcjaNierosnaca from "../../../../assets/images/knowledge_base/math_analytics/funkcja_nierosnaca.png";
import FunkcjaNiemalejaca from "../../../../assets/images/knowledge_base/math_analytics/funkcja_niemalejaca.png";
import FunkcjaPochodnaWykres from "../../../../assets/images/knowledge_base/math_analytics/funkcja_i_pochodna.png";
import { NavLink } from "react-router-dom";

const MonotonicityExtremumContent: FC = () => {
    return (
        <>
            <Title text={"Monotoniczność funkcji"} type={"main-article"} />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                <p>Funkcja jest <b>monotoniczna</b> jeżeli spełnia jedną z poniższych cech:</p>
                <p className="ml-5"><b>(1)</b> jest rosnąca</p>
                <p className="ml-5"><b>(2)</b> jest malejąca</p>
                <p className="ml-5"><b>(3)</b> jest stała</p>
                <p className="ml-5"><b>(4)</b> jest niemalejąca</p>
                <p className="ml-5"><b>(5)</b> jest nierosnąca</p>
                <p>Jeżeli funkcja nie spełnia żadnej z powyższych cech, taką funkcję określa się jako <b>niemonotoniczną</b> ale można w niej wskazać <b>przedziały monotoniczności</b>.</p>
            </CoreCurriculum>
            <ArticleBorder />
            <Title text={"Funkcja rosnąca"} type={"main-article"} />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                <ImageComponent src={FunkcjaRosnaca} alt={"Funkcja rosnąca"} styles="max-h-[250px]" />
                <p>Funkcja jest <b>rosnąca</b> jeżeli dla dowolnie wybranych dwóch argumentów <b>x<sub>1</sub></b> oraz <b>x<sub>2</sub></b> należących do dziedziny funkcji i spełniających założenie:</p>
                <Formula formula={"x_1<x_2"} />
                <p>zawsze spełniona jest nierówność:</p>
                <Formula formula={"f(x_1)<f(x_2)"} />
                <br /><p>W dowodzeniu monotoniczności funkcji popularne jest przekształcenie powyższej nierówności i sprowadzenie tezy do postaci:</p>
                <Formula formula={"f(x_1)-f(x_2)<0"} />
            </CoreCurriculum>
            <ArticleBorder />
            <Title text={"Funkcja malejąca"} type={"main-article"} />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                <ImageComponent src={FunkcjaMalejaca} alt={"Funkcja rosnąca"} styles="max-h-[250px]" />
                <p>Funkcja jest <b>malejąca</b> jeżeli dla dowolnie wybranych dwóch argumentów <b>x<sub>1</sub></b> oraz <b>x<sub>2</sub></b> należących do dziedziny funkcji i spełniających założenie:</p>
                <Formula formula={"x_1<x_2"} />
                <p>zawsze spełniona jest nierówność:</p>
                <Formula formula={"f(x_1)>f(x_2)"} />
                <br /><p>W dowodzeniu monotoniczności funkcji popularne jest przekształcenie powyższej nierówności i sprowadzenie tezy do postaci:</p>
                <Formula formula={"f(x_1)-f(x_2)>0"} />
            </CoreCurriculum>
            <ArticleBorder />
            <Title text={"Funkcja stała"} type={"main-article"} />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                <ImageComponent src={FunkcjaStala} alt={"Funkcja rosnąca"} styles="max-h-[250px]" />
                <p>Funkcja jest <b>stała</b> jeżeli dla dowolnie wybranych dwóch argumentów <b>x<sub>1</sub></b> oraz <b>x<sub>2</sub></b> należących do dziedziny funkcji i spełniających założenie:</p>
                <Formula formula={"x_1<x_2"} />
                <p>zawsze spełniona jest nierówność:</p>
                <Formula formula={"f(x_1)=f(x_2)"} />
                <br /><p>W dowodzeniu monotoniczności funkcji popularne jest przekształcenie powyższej nierówności i sprowadzenie tezy do postaci:</p>
                <Formula formula={"f(x_1)-f(x_2)=0"} />
            </CoreCurriculum>
            <ArticleBorder />
            <Title text={"Funkcja niemalejąca"} type={"main-article"} />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                <ImageComponent src={FunkcjaNiemalejaca} alt={"Funkcja rosnąca"} styles="max-h-[250px]" />
                <p>Funkcja jest <b>niemalejąca</b> jeżeli dla dowolnie wybranych dwóch argumentów <b>x<sub>1</sub></b> oraz <b>x<sub>2</sub></b> należących do dziedziny funkcji i spełniających założenie:</p>
                <Formula formula={"x_1<x_2"} />
                <p>zawsze spełniona jest nierówność:</p>
                <Formula formula={"f(x_1)\\leq f(x_2)"} />
                <br /><p>W dowodzeniu monotoniczności funkcji popularne jest przekształcenie powyższej nierówności i sprowadzenie tezy do postaci:</p>
                <Formula formula={"f(x_1)-f(x_2)\\leq 0"} />
            </CoreCurriculum>
            <ArticleBorder />
            <Title text={"Funkcja nierosnąca"} type={"main-article"} />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                <ImageComponent src={FunkcjaNierosnaca} alt={"Funkcja nierosnąca"} styles="max-h-[250px]" />
                <p>Funkcja jest <b>nierosnąca</b> jeżeli dla dowolnie wybranych dwóch argumentów <b>x<sub>1</sub></b> oraz <b>x<sub>2</sub></b> należących do dziedziny funkcji i spełniających założenie:</p>
                <Formula formula={"x_1<x_2"} />
                <p>zawsze spełniona jest nierówność:</p>
                <Formula formula={"f(x_1)\\geq (x_2)"} />
                <br /><p>W dowodzeniu monotoniczności funkcji popularne jest przekształcenie powyższej nierówności i sprowadzenie tezy do postaci:</p>
                <Formula formula={"f(x_1)-f(x_2)\\geq 0"} />
            </CoreCurriculum>
            <ArticleBorder />
            <Title text={"Związek między monotonicznością, a pochodną"} type={"main-article"} />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
                <ImageComponent src={FunkcjaPochodnaWykres} alt={"Funkcja nierosnąca"} styles="max-h-[250px]" />
                <p>Niech dana będzie funkcja <b>f(x)</b> różniczkowalna w przedziale <b>(a,b)</b>, który zawiera się w dziedzinie tej funkcji.</p>
                <br />
                <p><b>(1) Funkcja <b>f</b> jest rosnąca w przedziale (a,b)</b> gdy dla każdego argumentu <b>x</b> należącego do tego przedziału spełniona jest nierówność:</p>
                <Formula formula={"f'(x)>0"} />
                <p><b>(2) Funkcja <b>f</b> jest stała w przedziale (a,b)</b> gdy dla każdego argumentu <b>x</b> należącego do tego przedziału spełniona jest nierówność:</p>
                <Formula formula={"f'(x)=0"} />
                <p><b>(3) Funkcja <b>f</b> jest malejąca w przedziale (a,b)</b> gdy dla każdego argumentu <b>x</b> należącego do tego przedziału spełniona jest nierówność:</p>
                <Formula formula={"f'(x)<0"} />
                <br />
                <p>Przejdź do artykułu o <NavLink to="../pochodna-funkcji" className={"hover:underline"}><b>pochodnej funkcji</b></NavLink></p>
            </CoreCurriculum>
        </>
    );
};

export default MonotonicityExtremumContent;
