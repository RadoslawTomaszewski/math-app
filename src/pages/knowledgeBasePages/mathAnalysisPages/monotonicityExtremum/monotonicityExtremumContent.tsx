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
import Przyklad01b from "../../../../assets/images/knowledge_base/math_analytics/przyklad01b.png"
import Przyklad02a from "../../../../assets/images/knowledge_base/math_analytics/ekstremum_f(x,y).png"
import Przyklad02b from "../../../../assets/images/knowledge_base/math_analytics/przyklad02b.png"

import { NavLink } from "react-router-dom";
import Explanation from "../../../../components/articleItems/Explanation";

const MonotonicityExtremumContent: FC = () => (
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
            <p><b>(2) Funkcja <b>f</b> jest stała w przedziale (a,b)</b> gdy dla każdego argumentu <b>x</b> należącego do tego przedziału spełniona jest równość:</p>
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
            <br /><p className="flex w-full justify-center text-xl"><b>Warunek konieczny istnienia ekstremum</b></p><br />
            <p>Jeżeli funkcja jest różniczkowalna w punkcie <b>x<sub>0</sub></b> oraz spełnia warunek</p>
            <Formula formula={"f'(x_0)=0"} />
            <p>to w tym punkcie istnieje tzw. <b>punkt stacjonarny</b> (używa się również określenia punkt krytyczny) i jest możliwe istnienie w nim ekstremum. </p>
            <br />
            <p className="flex w-full justify-center text-xl"><b>Warunek wystarczający istnienia ekstremum</b></p><br />
            <p>Zakładając, że <b>ε</b> to dowolna mała liczba rzeczywista dodatnia pozwalająca określić wystarczająco bliskie otoczenie punktu stacjonarnego <b>x<sub>0</sub></b>, ekstremum w punkcie <b>x<sub>0</sub></b> będzie istniało gdy w przedziałach <b>(x<sub>0</sub>-ε)</b> oraz <b>(x<sub>0</sub>+ε)</b> wartość pochodnej funkcji przyjmuje wartości o przeciwnych znakach.</p>
            <br />
            <p>W praktyce najczęściej stosuje się tabelę pomocniczą, która może wystąpić w 4 wariantach:</p>
            <Explanation text={"Warianty tabel pomocniczych"}>
                <p className="ml-5"><b>(1) tabela w sytuacji gdy istnieje minimum</b></p>
                <div className="flex md:justify-center overflow-x-auto">
                    <div className="min-w-[400px]">
                        <table className="border-2 border-collapse border-black m-2 bg-white">
                            <tr className="border-2 border-collapse border-black m-2">
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
                <div className="flex md:justify-center overflow-x-auto">
                    <div className="min-w-[400px]">
                        <table className="border-2 border-collapse border-black m-2 bg-white">
                            <tr className="border-2 border-collapse border-black m-2">
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
                <div className="flex md:justify-center overflow-x-auto">
                    <div className="min-w-[400px]">
                        <table className="border-2 border-collapse border-black m-2 bg-white">
                            <tr className="border-2 border-collapse border-black m-2">
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
                <div className="flex md:justify-center overflow-x-auto">
                    <div className="min-w-[400px]">
                        <table className="border-2 border-collapse border-black m-2 bg-white">
                            <tr className="border-2 border-collapse border-black m-2">
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
            </Explanation>
            <Explanation text={"Przykład"}>
                <p>Dana jest różniczkowalna w zbiorze liczb rzeczywistych funkcja:</p>
                <Formula formula={"f(x)=x\\cdot(x-1)^3"} />
                <p>W celu wyznaczenia ekstremum lokalnych funkcji w pierwszym kroku należy wyznaczyć pochodną. </p>
                <br /><p>W tym przypadku najlepiej wykorzystać <b>wzór na pochodną iloczynu</b> oraz <b>regułę łańcuchową</b> (pochodną funkcji złożonej).</p>
                <Formula formula={"f'(x)=(x)' \\cdot (x-1)^3 + x \\cdot \\left((x-1)^3\\right)'"} styles="min-w-[315px]" />
                <Formula formula={"f'(x)=1 \\cdot (x-1)^3 + x \\cdot 3(x-1)^2"} styles="min-w-[280px]" />
                <Formula formula={"f'(x)=(x-1)^2 \\cdot \\left( \\left(x-1\\right) + 3x\\right)"} styles="min-w-[265px]" />
                <Formula formula={"f'(x)=(x-1)^2 \\cdot \\left(4x-1\\right)"} styles="min-w-[217px]" />
                <p>Kolejnym etapem jest wyznaczenie pierwiastków pochodnej funkcji oraz ustalenie ich krotności.</p>
                <Formula formula={"f'(x)=0"} />
                <Formula formula={"(x-1)^2 \\cdot \\left(4x-1\\right)=0"} />
                <Formula formula={"x=\\frac{1}{4}_{(1)} \\vee x=1_{(2)}"} />
                <p>Szkicując wykres wielomianu można ustalić przedziały, dla których pochodna funkcji przyjmuje wartości dodatnie, a dla których ujemne.</p>
                <ImageComponent src={Przyklad01a} alt={"Szkic funkcji f(x)=(x-1)^2(4x+1)"} styles="max-h-[200px]" />
                <p>Tabela utworzona na podstawie szkicu</p>
                <div className="flex md:justify-center overflow-x-auto">
                    <div className="min-w-[500px]">
                        <table className="border-2 border-collapse border-black m-2 bg-white">
                            <tr className="border-2 border-collapse border-black m-2">
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
                <br />
                <ImageComponent src={Przyklad01b} alt={"Wykres funkcji f(x)=(x-1)^2(4x+1) i jej pochodnej"} styles="max-h-[300px]" />
            </Explanation>
        </CoreCurriculum>
        <ArticleBorder />
        <Title text={"Wyznaczanie ekstremum za pomocą pochodnej funkcji dwuargumentowej"} type={"main-article"} />
        <CoreCurriculum type={CoreCurriculumTypes.extra}>
            <p><b>Ekstremum lokalne</b> funkcji przyjmującej dwa argumenty można wyznaczyć za pomocą <b>pochodnych cząstkowych</b> funkcji.</p>
            <br /><p className="flex w-full justify-center text-xl"><b>Warunek konieczny istnienia ekstremum</b></p><br />
            <p>Jeżeli funkcja jest różniczkowalna w punkcie <b>(x<sub>0</sub>, y<sub>0</sub>)</b> oraz spełnia warunek</p>
            <Formula formula={"f'_x(x_0,y_0)=0 \\wedge f'_y(x_0,y_0)=0"} />
            <p>to w tym punkcie istnieje tzw. <b>punkt stacjonarny</b> (używa się również określenia punkt krytyczny) i jest możliwe istnienie w nim ekstremum. </p>
            <br />
            <p className="flex w-full justify-center text-xl"><b>Warunek wystarczający istnienia ekstremum</b></p><br />
            <p>Zakładając, że <b>h</b> to wyznacznik <b>macierzy Hessego (tzw. hesjan)</b> można stwierdzić:</p>
            <p className="ml-5"> <b>(1) </b>Jeżeli <b>h {">"} 0</b> to istnieje ekstremum lokalne w tym punkcie.</p>
            <p className="ml-10"><b>(a) maksimum lokalne</b>, gdy spełniony jest warunek:</p>
            <Formula formula={"f'_{xx}\\left(x_0,y_0\\right)<0"} />
            <p className="ml-10"><b>(b) minimum lokalne</b>, gdy spełniony jest warunek:</p>
            <Formula formula={"f'_{xx}\\left(x_0,y_0\\right)>0"} />
            <p className="ml-5"> <b>(2) </b>Jeżeli <b>h {"="} 0</b> to dalej nie można ustalić, czy ekstremum lokalne funkcji istnieje (należy użyć bardziej zaawansowanej metody szukania ekstremum, jak rozwinięcie Lagrange'a)</p>
            <p className="ml-5"> <b>(3) </b>Jeżeli <b>h {"<"} 0</b> to funkcja nie ma ekstremum lokalnego w tym punkcie.</p>
            <br />
            <Explanation text={"Przykład"}>
                <p>Dana jest różniczkowalna w zbiorze liczb rzeczywistych dla obu argumentów funkcja:</p>
                <Formula formula={"f(x,y)=x^2+y^2-2x"} />
                <p>W celu wyznaczenia ekstremum lokalnych funkcji w pierwszym kroku należy wyznaczyć pochodne cząstkowe funkcji: </p>
                <Formula formula={"f'_x (x,y) = \\frac{\\partial \\left(x^2+y^2-2x\\right)}{\\partial x}=2x-2"} styles="min-w-[310px]" />
                <Formula formula={"f'_y (x,y) = \\frac{\\partial \\left(x^2+y^2-2x\\right)}{\\partial y}=2y"} styles="min-w-[275px]" />
                <p>Kolejnym etapem jest wyznaczenie punktu (punktów), który spełnia warunek konieczny:</p>
                <Formula formula={"f'_x(x,y)=0 \\wedge f'_y(x,y)=0"} styles="min-w-[215px]" />
                <Formula formula={"2x-2=0 \\wedge 2y=0"} styles="min-w-[215px]" />
                <Formula formula={"x=1\\wedge y=0"} styles="min-w-[110px]" />
                <p>Można więc ustalić, ze istnieje jeden punkt stacjonarny danej funkcji:</p>
                <Formula formula={"\\left(1,0\\right)"} styles="min-w-[50px]" />
                <p>Kolejnym etapem jest wyznaczenie pochodnych cząstkowych drugiego rzędu</p>
                <Formula formula={"f''_{xx}(x,y)=\\frac{\\partial \\left(2x-2\\right)}{\\partial x}=2"} styles="min-w-[220px]" />
                <Formula formula={"f''_{xy}(x,y)=\\frac{\\partial \\left(2x-2\\right)}{\\partial y}=0"} styles="min-w-[215px]" />
                <Formula formula={"f''_{yx}(x,y)=\\frac{\\partial \\left(2y\\right)}{\\partial x}=0"} styles="min-w-[185px]" />
                <Formula formula={"f''_{yy}(x,y)=\\frac{\\partial \\left(2y\\right)}{\\partial y}=2"} styles="min-w-[185px]" />
                <p>oraz wartość <b>hesjanu</b></p>
                <ImageComponent src={Przyklad02b} alt={"Wykres funkcji f(x)=(x-1)^2(4x+1) i jej pochodnej"} styles="max-h-[45px]" />
                <Formula formula={`\\begin{pmatrix} 1 & x & x^2 \\\\ 1 & y & y^2 \\\\ 1 & z & z^2 \\end{pmatrix}`} />
                <p>Z przykładu wiadomo, że istnieje ekstremum lokalne w badanym punkcie stacjonarnym (1,0)</p>
                <br />
                <p>Wykres analizowanej funkcji w trzech wymiarach:</p>
                <br />
                <ImageComponent src={Przyklad02a} alt={"Wykres funkcji f(x)=(x-1)^2(4x+1) i jej pochodnej"} styles="max-h-[400px]" />
            </Explanation>
        </CoreCurriculum>
    </>
);

export default MonotonicityExtremumContent;
