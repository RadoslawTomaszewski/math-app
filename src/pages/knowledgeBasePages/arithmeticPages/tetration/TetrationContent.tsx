import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import { CoreCurriculum, CoreCurriculumTypes } from "../../../../components/CoreCurriculum/CoreCurriculum";
import Formula from "../../../../components/articleItems/Formula";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";


const TetrationContent: FC = () => (
  <>
    <Title text={"Tetracja"} type={"main-article"} />
    <CoreCurriculum type={CoreCurriculumTypes.extra}>
      <p><b>Tetracja</b> - (superpotęgowanie) operacja matematyczna polegająca na podnoszeniu liczby do potęgi z użyciem iteracji.</p>
      <Formula formula={"^n a = c"} />
      <LegendParagraph
        type="short"
        notation="a"
        explanation="podstawa tetracji" />
      <LegendParagraph
        type="top"
        notation="b"
        explanation="wysokość (superwykładnik) tetracji" />
      <LegendParagraph type="short" notation="c" explanation="tetracja" />
    </CoreCurriculum>
    <ArticleBorder />
    <CoreCurriculum type={CoreCurriculumTypes.extra}>
      <p>Określenie <b>tetracja</b> to połączenie słów: <i>tetra</i> oznaczające z łaciny liczbę <b>4</b> oraz <i>iteracja</i> (czyli powtarzanie pewnego schematu).</p>
      <p>W tej definicji jako założenie przyjęto trzy poprzednie tzw. <b>hiperoperatory</b>:</p>
      <p><b>(1) Dodawanie:</b></p>
      <Formula formula={"a+n=a+\\underbrace{1 + 1 + \\ldots + 1}_{n \\text{ razy}}"} styles="min-w-[225px]" />
      <p><b>(2) Mnożenie:</b></p>
      <Formula formula="n \cdot a = \underbrace{a + a + \ldots + a}_{n \text{ razy}}" styles="min-w-[180px]" />
      <p><b>(3) Potęgowanie:</b></p>
      <Formula formula="a ^ n = \underbrace{a \cdot a \cdot \ldots \cdot a}_{n \text{ razy}}" styles="min-w-[138px]" />
      <p>Czwartym <b>hiperoperatorem</b> jest <b>tetracja</b></p>
      <br />
      <p><b>(4) Tetracja:</b></p>
      <Formula formula="^n a = \underbrace{a^{a^{{.}^{{.}^{{.}^{a}}}}}}_{n \text{ razy}}" styles="min-w-[138px]" />
      <p>zatem <b>tetracja</b> to liczba potęgowana przez siebie <b>n</b> razy</p>
      <br />
      <p>Uwaga! W odróżnieniu od mnożenia i dodawania potęgowanie nie jest łączne, zatem kolejność obliczania potęg w tetracji ma znaczenie. Należy liczyć kolejno z góry do dołu.</p>
      <Formula formula={"a^{a^{a}} \\neq \\left(a^a\\right)^a"} />
      <br />
    </CoreCurriculum>
    <ArticleBorder />
    <CoreCurriculum type={CoreCurriculumTypes.extra}>
      <p>Przyjęto, że spełniona jest zależność:</p>
      <Formula formula={"^0 a = 1"} />
      <br />
      <p><b>(1)</b> własność tetracji:</p>
      <Formula formula={"\\left(^b a\\right)^{\\left(^c a\\right)}=\\left(^{c+1} a\\right)^{\\left(^{b-1} a\\right)}"} />
    </CoreCurriculum>
    <ArticleBorder />
    <CoreCurriculum type={CoreCurriculumTypes.extra}>
      <p>Analogicznie do potęgowania, które ma dwie operacje odwrotne: <b>logarytmy</b> i <b>pierwiastki</b> dla <b>tetracji</b> również można zdefiniować:</p>
      <br />
      <p>(1) <b>superpierwiastek</b> - działanie odwrotne do tetracji, w której szukana jest podstawa tetracji. Definiuje się go z użyciem <b>Funkcji Omega (Funkcji W Lamberta).</b> Dla superpierwiastka <b>n</b>-tego stopnia z liczby x używa się oznaczenia:</p>
      <Formula formula={"\\sqrt[n]{x}_s"} />
      <p>Formalna definicja:</p>
      <Formula formula={`\\sqrt[n]{a}_s=x\\Leftrightarrow ^n x=a`} />
      <p className="text-red-500 text-xs">UWAGA! Wymaga potwierdzenia!</p>
      <br />
      <p>(2) <b>superlogarytm</b> - działanie odwrotne do tetracji, w której szukana jest wysokość tetracji. Zagadnienie wciąż jest przedmiotem badań i nie ma jeszcze zdefiniowanej jego rygorystycznej definicji. Dla superlogarytmu o podstawie <b>a</b> i superliczbie logarytmowanej b używa się oznaczenia:</p>
      <Formula formula={"\\text{slog}_{a}{b}"} />
      <p>Formalna definicja:</p>
      <Formula formula={`\\text{slog}_{a}{b}=x\\Leftrightarrow ^x a=b`} />
      <p className="text-red-500 text-xs">UWAGA! Wymaga potwierdzenia!</p>
    </CoreCurriculum>
    <ArticleBorder />
    <Title text={"Pytania bez odpowiedzi"} type={"main-article"} />
    <CoreCurriculum type={CoreCurriculumTypes.extra}>
      <p>Nauka wciąż nie zna odpowiedzi na te pytania, kto wie, może Tobie uda się kiedyś na nie odpowiedzieć.</p>
      <br />
      <p><b>(1) Czy istnieje liczba całkowita n, dla której jedno z poniższych wyrażeń jest liczbą całkowitą?</b></p>
      <Formula formula={"^n \\pi"} />
      <Formula formula={"^n e"} />
      <p><b>(2) Czy przy założeniach:</b></p>
      <Formula formula={"n \\in \\mathbb{Z}"} />
      <Formula formula={"q \\in \\mathbb{Q_+-Z}"} />
      <p><b>poniższe wyrażenie jest wymierne?</b></p>
      <Formula formula={"^n q"} />
      <p><b>(3)Czy poniższe wyrażenia są wymierne, czy niewymierne?</b></p>
      <Formula formula={"^e \\pi"} />
      <Formula formula={"^\\pi e"} />
      <Formula
        formula={`| x | = \\begin{cases}
        x & \\text{jeśli } x \\geq 0 \\
        -x & \\text{jeśli } x < 0
      \\end{cases}`} />
    </CoreCurriculum>
  </>
);

export default TetrationContent;
