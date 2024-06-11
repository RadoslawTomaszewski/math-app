import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import { CoreCurriculum, CoreCurriculumTypes } from "../../../../components/CoreCurriculum/CoreCurriculum";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import ImageComponent from "../../../../components/articleItems/ImageComponent";
import FunkcjaRosnaca from "../../../../assets/images/knowledge_base/math_analytics/funkcja_rosnaca.png";
import FunkcjaMalejaca from "../../../../assets/images/knowledge_base/math_analytics/funkcja_malejaca.png";
import FunkcjaStala from "../../../../assets/images/knowledge_base/math_analytics/funkcja_stala.png";
import FunkcjaNierosnaca from "../../../../assets/images/knowledge_base/math_analytics/funkcja_nierosnaca.png";
import FunkcjaNiemalejaca from "../../../../assets/images/knowledge_base/math_analytics/funkcja_niemalejaca.png";
import FunkcjaPochodnaWykres from "../../../../assets/images/knowledge_base/math_analytics/funkcja_i_pochodna.png";
import MinimumMaksimum from "../../../../assets/images/knowledge_base/math_analytics/minimum_maximum.png";
import Przyklad01a from "../../../../assets/images/knowledge_base/math_analytics/przyklad01a.png";
import { NavLink } from "react-router-dom";
import Explanation from "../../../../components/articleItems/Explanation";

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
            <ArticleBorder />
            <Title text={"Ekstremum"} type={"main-article"} />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
                <ImageComponent src={MinimumMaksimum} alt={"Minimum lokalne, maksium lokalne, minimum globalne"} styles="max-h-[300px]" />
                <p><b>Ekstremum lokalne</b> funkcji to wartość przyjmowana dla pewnego punktu <b>x<sub>0</sub></b>, która jest największa lub najmniejsza w porównaniu do otaczających ten punkt argumentów zanjdujących się w pewnym otwartym przedziale.</p>
                <br /><p>Wyróżnia się dwa rodzaje ekstremum:</p>
                <p className="ml-5"><b>(1) Minimum</b> - gdy wartość funkcji jest najmniejsza,</p>
                <p className="ml-5"><b>(2) Maximum</b> - gdy wartość funkcji jest największa.</p>
                <br /><p>Jeżeli dana wartość funkcji jest największa lub najmniejsza w całej dziedzinie funkcji takie ekstremum nosi nazwę <b>ekstremum globalnego.</b></p>
            </CoreCurriculum>
            <ArticleBorder />
            <Title text={"Wyznaczanie ekstremum za pomocą pochodnej"} type={"main-article"} />
            <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>

                <p><b>Ekstremum lokalne</b> funkcji można wyznaczyć za pomocą pochodnej funkcji.</p>
                <br /><p className="flex w-full justify-center"><b>Warunek konieczny istnienia ekstremum</b></p>
                <p>Jeżeli funkcja jest różniczkowalna w punkcie <b>x<sub>0</sub></b> oraz spełnia warunek</p>
                <Formula formula={"f'(x_0)=0"} />
                <p>to w tym punkcie istnieje tzw. <b>punkt stacjonarny</b> (używa się również określenia punkt krytyczny) i jest możliwe istnienie w nim ekstremum. </p>
                <br />
                <p className="flex w-full justify-center"><b>Warunek wystarczający istnienia ekstremum</b></p>
                <p>Zakładając, że <b>ε</b> to dowolna mała liczba rzeczywista dodatnia pozwalająca określić wystarczająco bliskie otoczenie punktu stacjonarnego <b>x<sub>0</sub></b>, ekstremum w punkcie <b>x<sub>0</sub></b> będzie istniało gdy w przedziałach <b>(x<sub>0</sub>-ε)</b> oraz <b>(x<sub>0</sub>+ε)</b> wartość pochodnej funkcji przyjmuje wartości o przeciwnych znakach.</p>
                <br />
                <p>W praktyce najczęściej stosuje się tabelę pomocniczą, która może wystąpić w 4 wariantach:</p>
                <p className="ml-5"><b>(1) tabela w sytuacji gdy istnieje minimum</b></p>
                <div className="flex justify-center overflow-x-auto">
                    <div className="min-w-[400px]">
                        <table className="border-2 border-collapse border-black m-2 bg-white">
                            <tr className="border-2 border-collapse border-black m-2" >
                                <th className="border-2 border-collapse border-black m-2"><Formula formula={"x"} /></th>
                                <th className="border-2 border-collapse border-black m-2"><Formula formula={"\\left(x_0-\\varepsilon;x_0\\right)"} /></th>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"x_0"} /></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"\\left(x_0;x_0+\\varepsilon\\right)"} /></td>
                            </tr>
                            <tr className="border-2 border-collapse border-black m-2">
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"f'(x)"} /></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"-"} /></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"0"} /></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"+"} /></td>
                            </tr>
                            <tr className="border-2 border-collapse border-black m-2">
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"f(x)"} /></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"\\searrow"} /></td>
                                <td className="border-2 border-collapse border-black m-2 min-w-[100px] text-center"><b>minimum</b></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"\\nearrow"} /></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <p className="ml-5"><b>(2) tabela w sytuacji gdy istnieje maximum</b></p>
                <div className="flex justify-center overflow-x-auto">
                    <div className="min-w-[400px]">
                        <table className="border-2 border-collapse border-black m-2 bg-white">
                            <tr className="border-2 border-collapse border-black m-2" >
                                <th className="border-2 border-collapse border-black m-2"><Formula formula={"x"} /></th>
                                <th className="border-2 border-collapse border-black m-2"><Formula formula={"\\left(x_0-\\varepsilon;x_0\\right)"} /></th>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"x_0"} /></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"\\left(x_0;x_0+\\varepsilon\\right)"} /></td>
                            </tr>
                            <tr className="border-2 border-collapse border-black m-2">
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"f'(x)"} /></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"+"} /></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"0"} /></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"-"} /></td>
                            </tr>
                            <tr className="border-2 border-collapse border-black m-2">
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"f(x)"} /></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"\\nearrow"} /></td>
                                <td className="border-2 border-collapse border-black m-2 min-w-[100px] text-center"><b>maximum</b></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"\\searrow"} /></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <p className="ml-5"><b>(3) tabela w sytuacji gdy nie istnieje ekstremum (wariant 1)</b></p>
                <div className="flex justify-center overflow-x-auto">
                    <div className="min-w-[400px]">
                        <table className="border-2 border-collapse border-black m-2 bg-white">
                            <tr className="border-2 border-collapse border-black m-2" >
                                <th className="border-2 border-collapse border-black m-2"><Formula formula={"x"} /></th>
                                <th className="border-2 border-collapse border-black m-2"><Formula formula={"\\left(x_0-\\varepsilon;x_0\\right)"} /></th>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"x_0"} /></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"\\left(x_0;x_0+\\varepsilon\\right)"} /></td>
                            </tr>
                            <tr className="border-2 border-collapse border-black m-2">
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"f'(x)"} /></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"+"} /></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"0"} /></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"-"} /></td>
                            </tr>
                            <tr className="border-2 border-collapse border-black m-2">
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"f(x)"} /></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"\\nearrow"} /></td>
                                <td className="border-2 border-collapse border-black m-2 min-w-[100px] text-center"><b>brak</b><br /><b>ekstremum</b></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"\\nearrow"} /></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <p className="ml-5"><b>(4) tabela w sytuacji gdy nie istnieje ekstremum (wariant 2)</b></p>
                <div className="flex justify-center overflow-x-auto">
                    <div className="min-w-[400px]">
                        <table className="border-2 border-collapse border-black m-2 bg-white">
                            <tr className="border-2 border-collapse border-black m-2" >
                                <th className="border-2 border-collapse border-black m-2"><Formula formula={"x"} /></th>
                                <th className="border-2 border-collapse border-black m-2"><Formula formula={"\\left(x_0-\\varepsilon;x_0\\right)"} /></th>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"x_0"} /></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"\\left(x_0;x_0+\\varepsilon\\right)"} /></td>
                            </tr>
                            <tr className="border-2 border-collapse border-black m-2">
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"f'(x)"} /></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"+"} /></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"0"} /></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"-"} /></td>
                            </tr>
                            <tr className="border-2 border-collapse border-black m-2">
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"f(x)"} /></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"\\searrow"} /></td>
                                <td className="border-2 border-collapse border-black m-2 min-w-[100px] text-center"><b>brak</b><br /><b>ekstremum</b></td>
                                <td className="border-2 border-collapse border-black m-2"><Formula formula={"\\searrow"} /></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <Explanation text={"Przykład"}>
                    <p>Dana jest różniczkowalna w zbiorze liczb rzeczywistych funkcja:</p>
                    <Formula formula={"f(x)=x\\cdot(x-1)^3"} />
                    <p>W celu wyznaczenia ekstremum lokalnych funkcji w pierwszym kroku należy wyznaczyć pochodną. </p>
                    <br /><p>W tym przypadku najlepiej wykorzystać <b>wzór na pochodną iloczynu</b> oraz <b>regułę łańcuchową</b> (pochodną funkcji złożonej).</p>
                    <Formula formula={"f'(x)=(x)' \\cdot (x-1)^3 + x \\cdot \\left((x-1)^3\\right)'"} />
                    <Formula formula={"f'(x)=1 \\cdot (x-1)^3 + x \\cdot 3(x-1)^2"} />
                    <Formula formula={"f'(x)=(x-1)^2 \\cdot \\left( \\left(x-1\\right) + 3x\\right)"} />
                    <Formula formula={"f'(x)=(x-1)^2 \\cdot \\left(4x-1\\right)"} />
                    <p>Kolejnym etapem jest wyznaczenie pierwiastków pochodnej funkcji oraz ustalenie ich krotności.</p>
                    <Formula formula={"f'(x)=0"} />
                    <Formula formula={"(x-1)^2 \\cdot \\left(4x-1\\right)=0"} />
                    <Formula formula={"x=\\frac{1}{4}_{(1)} \\vee x=1_{(2)}"} />
                    <p>Szkicując wykres wielomianu można ustalić przedziały, dla których pochodna funkcji przyjmuje wartości dodatnie, a dla których ujemne.</p>
                    <ImageComponent src={Przyklad01a} alt={"Szkic funkcji f(x)=(x-1)^2(4x+1)"} styles="max-h-[200px]" />
                    <p>Tabela utworzona na podstawie szkicu</p>
                    <div className="flex justify-center overflow-x-auto">
                        <div className="min-w-[600px]">
                            <table className="border-2 border-collapse border-black m-2 bg-white">
                                <tr className="border-2 border-collapse border-black m-2" >
                                    <th className="border-2 border-collapse border-black m-2"><Formula formula={"x"} /></th>
                                    <th className="border-2 border-collapse border-black m-2"><Formula formula={"\\left(-\\infty;\\frac{1}{4}\\right)"} /></th>
                                    <td className="border-2 border-collapse border-black m-2"><Formula formula={"\\frac{1}{4}"} /></td>
                                    <td className="border-2 border-collapse border-black m-2"><Formula formula={"\\left(\\frac{1}{4};1\\right)"} /></td>
                                    <td className="border-2 border-collapse border-black m-2"><Formula formula={"1"} /></td>
                                    <td className="border-2 border-collapse border-black m-2"><Formula formula={"\\left(1;\\infty\\right)"} /></td>
                                </tr>
                                <tr className="border-2 border-collapse border-black m-2">
                                    <td className="border-2 border-collapse border-black m-2"><Formula formula={"f'(x)"} /></td>
                                    <td className="border-2 border-collapse border-black m-2"><Formula formula={"-"} /></td>
                                    <td className="border-2 border-collapse border-black m-2"><Formula formula={"0"} /></td>
                                    <td className="border-2 border-collapse border-black m-2"><Formula formula={"+"} /></td>
                                    <td className="border-2 border-collapse border-black m-2"><Formula formula={"0"} /></td>
                                    <td className="border-2 border-collapse border-black m-2"><Formula formula={"+"} /></td>
                                </tr>
                                <tr className="border-2 border-collapse border-black m-2">
                                    <td className="border-2 border-collapse border-black m-2"><Formula formula={"f(x)"} /></td>
                                    <td className="border-2 border-collapse border-black m-2"><Formula formula={"\\searrow"} /></td>
                                    <td className="border-2 border-collapse border-black m-2 min-w-[100px] text-center"><b>minimum</b></td>
                                    <td className="border-2 border-collapse border-black m-2"><Formula formula={"\\nearrow"} /></td>
                                    <td className="border-2 border-collapse border-black m-2 min-w-[100px] text-center"><b>brak</b><br /><b>ekstremum</b></td>
                                    <td className="border-2 border-collapse border-black m-2"><Formula formula={"\\nearrow"} /></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <p>Z przykładu wiadomo, że istnieją dwa punkty stacjonarne, ale tylko jeden z nich jest ekstremum.</p>
                    <br />
                    <p>Wykres analizowanej funkcji oraz wykres jej pochodnej prezentują się następująco:</p>
                </Explanation>
            </CoreCurriculum>
        </>
    );
};

export default MonotonicityExtremumContent;
