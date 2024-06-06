import { FC, useState } from "react";
import Title from "../../../../components/articleItems/Title";
import SinusesLawImage from "../../../../assets/images/knowledge_base/planimetry/twierdzenie_sinusow.png";
import SinusesLawImage2 from "../../../../assets/images/knowledge_base/planimetry/twierdzenie_sinusow_2.png";
import SinusesLawImage3 from "../../../../assets/images/knowledge_base/planimetry/twierdzenie_sinusow_3.png";
import SinusesLawImageProof from "../../../../assets/images/knowledge_base/planimetry/twierdzenie_sinusow_dowod.png";
import SinusesLawImageProof3 from "../../../../assets/images/knowledge_base/planimetry/twierdzenie_sinusow_dowod3.png";
import PitagorasImage from "../../../../assets/images/knowledge_base/planimetry/Twierdzenie_Pitagorasa.png";
import MidsegmentImage from "../../../../assets/images/knowledge_base/planimetry/Twierdzenie_o_odcinku_laczacym_srodki_trojkata.png";
import CosinusesLawImage from "../../../../assets/images/knowledge_base/planimetry/twierdzenie_cosinusow.png";
import CosinusesLawImage2 from "../../../../assets/images/knowledge_base/planimetry/twierdzenie_cosinusow_2.png";
import CosinusesLawImage3 from "../../../../assets/images/knowledge_base/planimetry/twierdzenie_cosinusow_3.png";
import CentroidTheorem from "../../../../assets/images/knowledge_base/planimetry/Twierdzenie_o_srodkowych.png";
import Formula from "../../../../components/articleItems/Formula";
import { GeometryEquations } from "../../../../types/equations";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import ImageComponent from "../../../../components/articleItems/ImageComponent";
import Explanation from "../../../../components/articleItems/Explanation";
import { CoreCurriculum, CoreCurriculumTypes } from "../../../../components/CoreCurriculum/CoreCurriculum";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Proof from "../../../../components/articleItems/Proof";

const TheoremsContent: FC = () => {

    const [triangle, setTriangle] = useState<'right' | 'acute' | 'obtuse'>('acute');
    const handleTriangleChange = (newTriangle: 'right' | 'acute' | 'obtuse') => {
        setTriangle(newTriangle);
    };

    return (
        <>
            <div className="flex flex-col">
                <Title text={"Twierdzenie Pitagorasa"} type="main-article" />
                <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                    <ImageComponent src={PitagorasImage} alt={"Trójkąt prostokątny"} styles="max-h-[250px] m-2" />
                    <p>Przy założeniu, że trójkąt jest prostokątny, spełniona jest równość:</p>
                    <Formula formula={"a^2+b^2=c^2"} />
                    <LegendParagraph type={"top"} notation={"a,b"} explanation={"przyprostokątne"} />
                    <LegendParagraph type={"short"} notation={"c"} explanation={"przeciwprostokątna"} />
                    <br /><p><b>Twierdzenie odwrotne do Twierdzenia Pitagorasa</b> polega na odwróceniu założenia z tezą Twierdzenia Pitagorasa. <br /><br />Jeżeli w trójkącie o bokach długości a, b i c zachodzi równość z Twierdzenia Pitagorasa, to trójkąt jest prostokątny.</p>
                </CoreCurriculum>
                <ArticleBorder />
                <Title text={"Twierdzenie o odcinku łączącym środki boków trójkąta"} type="main-article" />
                <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                    <ImageComponent src={MidsegmentImage} alt={"Twierdzenie o odcinku łączącym środki boków trójkąta"} styles="max-h-[250px] m-2" />
                    <p><b>(1) odcinek łączący środki boków trójkąta jest równy połowie boku trójkąta, którego środek nie został połączony tym odcinkiem.</b></p>
                    <Formula formula={"m=\\frac{a}{2}"} />
                    <p><b>(2) odcinek łączący środki boków trójkąta jest równoległy do boku trójkąta, którego środek nie jest połączony tym odcinkiem.</b></p>
                    <Formula formula={"m \\ || \\  a"} />
                    <LegendParagraph type={"short"} notation={"m"} explanation={"odcinek łączący środki dwóch boków trójkąta"} />
                    <LegendParagraph type={"short"} notation={"a"} explanation={"bok trójkąta"} />
                </CoreCurriculum>
                <ArticleBorder />
                <Title text={"Twierdzenie o środkowych trójkąta"} type="main-article" />
                <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                    <ImageComponent src={CentroidTheorem} alt={"Twierdzenie o środkowych trójkąta"} styles="max-h-[250px] m-2" />
                    <p><b>Środek ciężkości trójkąta</b> (punkt przecięcia się środkowych w trójkącie) dzieli każdą środkową na odcinki w stosunku <b>2:1</b> licząc od wierzchołka, z którego środkowa się wywodzi.</p>

                </CoreCurriculum>
                <ArticleBorder />
                <Title text={"Twierdzenie sinusów"} type="main-article" />
                <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                    <form className="flex flex-col justify-center items-center w-full">
                        <div className="flex justify-center w-full">
                            <label className="flex pt-4 flex-col flex-wrap items-center">
                                <span className="text-wrap">Przełącz trójkąt:</span>
                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    <button
                                        type="button"
                                        className={`mx-2 py-1 min-w-[136px] px-3 focus:outline-none ${triangle === 'acute' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                                        onClick={() => handleTriangleChange('acute')}
                                    >
                                        ostrokątny
                                    </button>
                                    <button
                                        type="button"
                                        className={`mx-2 py-1 min-w-[136px] px-3 focus:outline-none ${triangle === 'right' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                                        onClick={() => handleTriangleChange('right')}
                                    >
                                        prostokątny
                                    </button>
                                    <button
                                        type="button"
                                        className={`mx-2 py-1 min-w-[136px] px-3 focus:outline-none ${triangle === 'obtuse' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                                        onClick={() => handleTriangleChange('obtuse')}
                                    >
                                        rozwartokątny
                                    </button>
                                </div>
                            </label>
                        </div>
                        {triangle === 'acute' ? (
                            <ImageComponent src={SinusesLawImage} alt={"Twierdzenie sinusów"} styles="max-h-[350px] m-2 mt-4" />
                        ) : triangle === 'right' ? (
                            <ImageComponent src={SinusesLawImage2} alt={"Twierdzenie sinusów"} styles="max-h-[350px] m-2 mt-4" />
                        ) : (
                            <ImageComponent src={SinusesLawImage3} alt={"Twierdzenie sinusów"} styles="max-h-[350px] m-2 mt-4" />
                        )}
                    </form >
                    <p> W dowolnym trójkącie iloraz długości dowolnego boku i sinusa kąta naprzeciw tego boku jest stały i równy długości średnicy okręgu opisanego na tym trójkącie. </p>
                    <Formula formula={GeometryEquations.sinusesLaw} styles="min-w-[232px]" />
                    <LegendParagraph type={"top"} notation={"a,b,c"} explanation={"boki trójkąta"} />
                    <LegendParagraph type={"top"} notation={"\\alpha, \\beta, \\gamma"} explanation={"kąty w trójkącie"} />
                    <LegendParagraph type={"top"} notation={"R"} explanation={"promień okręgu opisanego na trójkącie"} /><br />
                    <p>Czasami używa się odwróconej postaci tego równania (głównie w problemach, które nie wymagają analizy promienia okręgu opisanego na trójkącie):</p>
                    <Formula formula={GeometryEquations.sinusesLaw2} styles="min-w-[185px]" />
                    {triangle === 'acute' ? (
                        <Explanation text={"Dowód dla trójkąta ostrokątnego"}>
                            <ImageComponent src={SinusesLawImageProof} alt={"Twierdzenie sinusów"} styles="max-h-[300px] m-2" />
                            <p>W przypadku trójkąta ostrokątnego Twierdzenie Sinusów można udowodnić konstruując trójkąt prostokątny wpisany w okrąg, którego przyprostokątną będzie wybrany dowolny bok (na przykładzie powyżej został wybrany bok <b>c</b>), a przeciwprostokątną średnica okręgu opisanego na danym trójkącie. W takim układzie kąt ostry w nowoutworzonym trójkącie prostokątnym, leżący na przeciwko wybranego boku będzie równy kątowi leżącemu na przeciwko wybranego boku w pierwotnym trójkącie (wynika to z faktu, że oba kąty są wpisane w okrąg i oparte na tym samym łuku).</p>
                            <br />
                            <p>Z definicji sinusa kąta ostrego w trójkącie prostokątnym można zapisać:</p>
                            <Formula formula={"\\sin{\\gamma}=\\frac{c}{2R}"} />
                            <p>co można sprowadzić do znanej już postaci:</p>
                            <Formula formula={"\\frac{c}{\\sin{\\gamma}}=2R"} />
                            <p>Dla pozostałych boków trójkąta dowód jest analogiczny.</p>
                        </Explanation>
                    ) : triangle === 'right' ? (
                        <Explanation text={"Dowód dla trójkąta prostokątnego"}>
                            <ImageComponent src={SinusesLawImage2} alt={"Twierdzenie sinusów"} styles="max-h-[300px] m-2" />
                            <p>W przypadku trójkąta prostokątnego Twierdzenie Sinusów można udowodnić z definicji sinusa kąta ostrego w trójkącie prostokątnym:</p>
                            <Formula formula={"\\sin{\\alpha}=\\frac{a}{2R}"} />
                            oraz
                            <Formula formula={"\\sin{\\beta}=\\frac{b}{2R}"} />
                            <p>oprócz tego wiadomo, że sinus kąta prostego wynosi <b>1</b>, zatem:</p>
                            <Formula formula={"\\frac{c}{\\sin{\\gamma}}=\\frac{2R}{\\sin{90^{\\circ}}}=\\frac{2R}{1}=2R"} />
                            <p>podsumowujac:</p>
                            <Formula formula={"\\frac{a}{\\sin{\\alpha}}=\\frac{b}{\\sin{\\beta}}=\\frac{c}{\\sin{\\gamma}}=2R"} />
                        </Explanation>
                    ) : (
                        <Explanation text={"Dowód dla trójkąta rozwartokątnego"}>
                            <ImageComponent src={SinusesLawImageProof3} alt={"Twierdzenie sinusów"} styles="max-h-[300px] m-2" />
                            <p>W przypadku trójkąta rozwartokątnego Twierdzenie Sinusów można udowodnić konstruując trójkąt prostokątny wpisany w okrąg, którego przyprostokątną będzie wybrany dowolny bok (na przykładzie powyżej został wybrany bok <b>c</b>), a przeciwprostokątną średnica okręgu opisanego na danym trójkącie. W takim układzie kąt ostry w nowoutworzonym trójkącie prostokątnym, leżący na przeciwko wybranego boku będzie równy dopełnieniu do kąta półpełnego kąta leżącego na przeciwko wybranego boku w pierwotnym trójkącie (wynika to z faktu, że suma przeciwległych kątów w czworokącie wpisanym w okrąg wynosi <b>180°</b>).</p>
                            <br />
                            <p>Z definicji sinusa kąta ostrego w trójkącie prostokątnym oraz wzoru redukcyjnego można zapisać:</p>
                            <Formula formula={"\\sin{\\left( 180^{\\circ} - \\gamma \\right)} = \\sin{\\gamma}= \\frac{c}{2R}"} />
                            <p>co można sprowadzić do znanej już postaci:</p>
                            <Formula formula={"\\frac{c}{\\sin{\\gamma}}=2R"} />
                            <p>Dla pozostałych boków trójkąta dowód jest analogiczny.</p>
                        </Explanation>
                    )}
                    <Explanation text={"Dowód ze wzorów na pole trójkąta"}>
                        <p>Twierdzenie Sinusów można udowodnić odwołując się do wzorów na pole trójkąta:</p>
                        <b>(1)</b>
                        <Formula formula={"P_{\\Delta}=\\frac{1}{2} ab\\cdot \\sin{\\gamma}"} styles="min-w-[134px]" />
                        <b>(2)</b>
                        <Formula formula={"P_{\\Delta}=\\frac{abc}{4R} \\Rightarrow 2R=\\frac{abc}{2P_{\\Delta}}"} styles="min-w-[202px]" />
                        <br />
                        <p>Bazując na wzorze (1) prawdziwe jest równanie:</p>
                        <Formula formula={"P_{\\Delta}=\\frac{1}{2} ab \\cdot \\sin{\\gamma}=\\frac{1}{2}  bc \\cdot \\sin{\\alpha}=\\frac{1}{2} ac \\cdot \\sin{\\beta}"} styles="min-w-[355px]" />
                        <p>w wyniku przemnożenia stonami przez 2 można otrzymać:</p>
                        <Formula formula={"2  P_{\\Delta}=a b \\cdot \\sin{\\gamma}=b c \\cdot \\sin{\\alpha}=ac \\cdot \\sin{\\beta}"} styles="min-w-[315px]" />
                        <p>w wyniku podzielenia stonami przez <b>abc</b> można otrzymać:</p>
                        <Formula formula={"\\frac{2  P_{\\Delta}}{abc}=\\frac{\\sin{\\gamma}}{c}=\\frac{\\sin{\\alpha}}{a}=\\frac{\\sin{\\beta}}{b}"} styles="min-w-[255px]" />
                        <p>biorąc odwrotności każdego z wyrażeń można otrzymać:</p>
                        <Formula formula={"\\frac{abc}{2  P_{\\Delta}}=\\frac{c}{\\sin{\\gamma}}=\\frac{a}{\\sin{\\alpha}}=\\frac{b}{\\sin{\\beta}}"} styles="min-w-[255px]" />
                        <p>podstawiając wzór (2) równanie sprowadza się do Twierdzenia Sinusów:</p>
                        <Formula formula={"2R=\\frac{c}{\\sin{\\gamma}}=\\frac{a}{\\sin{\\alpha}}=\\frac{b}{\\sin{\\beta}}"} styles="min-w-[235px]" />
                    </Explanation>
                </CoreCurriculum>
                <ArticleBorder />
                {/* TWIERDZENIE COSINUSÓW */}
                <Title text={"Twierdzenie cosinusów"} type="main-article" />
                <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                    <form className="flex flex-col justify-center items-center w-full">
                        <div className="flex justify-center w-full">
                            <label className="flex pt-4 flex-col flex-wrap items-center">
                                <span className="text-wrap">Przełącz trójkąt:</span>
                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    <button
                                        type="button"
                                        className={`mx-2 py-1 min-w-[136px] px-3 focus:outline-none ${triangle === 'acute' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                                        onClick={() => handleTriangleChange('acute')}
                                    >
                                        ostrokątny
                                    </button>
                                    <button
                                        type="button"
                                        className={`mx-2 py-1 min-w-[136px] px-3 focus:outline-none ${triangle === 'right' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                                        onClick={() => handleTriangleChange('right')}
                                    >
                                        prostokątny
                                    </button>
                                    <button
                                        type="button"
                                        className={`mx-2 py-1 min-w-[136px] px-3 focus:outline-none ${triangle === 'obtuse' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                                        onClick={() => handleTriangleChange('obtuse')}
                                    >
                                        rozwartokątny
                                    </button>
                                </div>
                            </label>
                        </div>
                        {triangle === 'acute' ? (
                            <ImageComponent src={CosinusesLawImage} alt={"Twierdzenie cosinusów"} styles="max-h-[350px] m-2 mt-4" />
                        ) : triangle === 'right' ? (
                            <ImageComponent src={CosinusesLawImage2} alt={"Twierdzenie cosinusów"} styles="max-h-[350px] m-2 mt-4" />
                        ) : (
                            <ImageComponent src={CosinusesLawImage3} alt={"Twierdzenie cosinusów"} styles="max-h-[350px] m-2 mt-4" />
                        )}
                    </form >
                    <p><b>Twierdzenie Cosinusów</b> jest uogólnieniem <b>Twierdzenia Pitagorasa</b> dla dowolnych trójkątów.</p>
                    <br />
                    <p> <b>Twierdzenie Cosinusów (Carnota) </b> głosi, że w dowolnym trójkącie, kwadrat długości dowolnego boku jest równy sumie kwadratów długości pozostałych boków pomniejszonej o podwojony iloczyn długości tych boków i cosinusa kąta zawartego między nimi. </p>
                    <Formula formula={GeometryEquations.cosinusesLaw} styles="min-w-[200px]" />
                    <Formula formula={GeometryEquations.cosinusesLaw2} styles="min-w-[200px]" />
                    <Formula formula={GeometryEquations.cosinusesLaw3} styles="min-w-[200px]" />
                    <LegendParagraph type={"top"} notation={"a,b,c"} explanation={"boki trójkąta"} />
                    <LegendParagraph type={"top"} notation={"\\alpha, \\beta, \\gamma"} explanation={"kąty w trójkącie"} />
                    <br />

                    {triangle === 'right' && (
                        <>
                            <p><b>Twierdzenie Pitagorasa</b> to szczególny przypadek <b>Twierdzenia Cosinusów</b></p>
                            <Proof steps={[GeometryEquations.cosinusesLaw3, 'c^2=a^2+b^2-2ab\\cdot \\cos{90^{\\circ}}', 'c^2=a^2+b^2-2ab\\cdot 0', 'c^2=a^2+b^2']} text={"Dowód"} styles="min-w-[205px]" />
                        </>
                    )}

                    <p>Częste zastosowanie mają wzory na cosinus kąta wynikające z przekształceń Twierdzenia Cosinusów:</p>
                    <Formula formula={"\\cos{\\alpha}= \\frac{b^2+c^2-a^2}{2bc}"} styles="min-w-[168px]" />
                    <Formula formula={"\\cos{\\beta}= \\frac{a^2+c^2-b^2}{2ac}"} styles="min-w-[168px]" />
                    <Formula formula={"\\cos{\\gamma}= \\frac{a^2+b^2-c^2}{2ab}"} styles="min-w-[168px]" />
                    <Proof steps={[GeometryEquations.cosinusesLaw, "2bc\\cdot \\cos{\\alpha} = b^2+c^2 - a^2", "\\cos{\\alpha} = \\frac{b^2+c^2-a^2}{2bc}"]} text={"Dowód"} styles="min-w-[200px]" />
                    <b>Wniosek z Twierdzenia Cosinusów:</b>
                    <p>Przyjmując, że <b>γ</b> to kąt na przeciwko najdłuższego boku <b>c</b> można określić rodzaj trójkąta według kryterium podziału na kąty. </p>
                    <br /><p>Wiadomo, że cosinus dla kątów ostrych przyjmuje wartości dodatnie, dla kąta prostego jego wartość jest równa <b>0</b>, natomiast dla kąta rozwartego jego wartość jest ujemna.</p>
                    <br /><b>(1) Trójkąt ostrokątny, gdy:</b>
                    <Formula formula={"\\cos{\\gamma}>0\\Leftrightarrow a^2+b^2>c^2"} styles="min-w-[200px]" />
                    <Proof steps={["\\cos{\\gamma}>0", "\\frac{a^2+b^2-c^2}{2ab}>0", "a^2+b^2-c^2>0", "a^2+b^2>c^2"]} text={"Dowód"} styles="min-w-[140px]" />
                    <b>(2) Trójkąt prostokątny, gdy:</b>
                    <Formula formula={"\\cos{\\gamma}=0\\Leftrightarrow a^2+b^2=c^2"} styles="min-w-[200px]" />
                    <Proof steps={["\\cos{\\gamma}=0", "\\frac{a^2+b^2-c^2}{2ab}=0", "a^2+b^2-c^2=0", "a^2+b^2=c^2"]} text={"Dowód"} styles="min-w-[140px]" />
                    <b>(2) Trójkąt rozwartokątny, gdy:</b>
                    <Formula formula={"\\cos{\\gamma}<0\\Leftrightarrow a^2+b^2<c^2"} styles="min-w-[200px]" />
                    <Proof steps={["\\cos{\\gamma}<0", "\\frac{a^2+b^2-c^2}{2ab}<0", "a^2+b^2-c^2<0", "a^2+b^2<c^2"]} text={"Dowód"} styles="min-w-[140px]" />
                </CoreCurriculum>

            </div>
        </>
    );
};

export default TheoremsContent;
