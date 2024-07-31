import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import GraphImage from "../../../../components/articleItems/GraphImage";
import PiGif from "../../../../assets/images/function-graphs/pi.gif";
import { mathConstants } from "../../../../data/equations";
import { NavLink } from "react-router-dom";
import { CoreCurriculum, CoreCurriculumTypes } from "../../../../components/CoreCurriculum/CoreCurriculum";

const PiNumberContent: FC = () => {
  return (
    <>
      <div className="max-w-full">
        <Title text={"Liczba Pi"} type={"main-article"} />
        <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
          <p>
            <b>Liczba π </b> to stała matematyczna, która jest równa stosunkowi
            obwodu koła do jego średnicy.
          </p>
          <div>
            <GraphImage
              src={PiGif}
              alt="Animacja ilustrujaca wyznaczanie liczby pi"
              size="small"
            />
          </div>
          <p className="text-[10px] text-center">
            Autor: John Reid<br />
            <NavLink to="https://en.wikipedia.org/wiki/Pi#/media/File:Pi-unrolled-720.gif">źródło: Wikipedia</NavLink>
          </p>
        </CoreCurriculum>
        <ArticleBorder />
        <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
          <p>
            π jest <b>liczbą niewymierną </b>co oznacza, że nie można jej zapisać w postaci
            ilorazu dwóch liczb całkowitych (ułamka).
          </p>
          <ArticleBorder />
        </CoreCurriculum>
        <Title text="Przypadki wykorzystania liczby PI" type="main-article" />

        <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
          <p><b>(1) Obwód koła / Długość okręgu o promieniu r:</b></p>
          <Formula formula="L = 2πr" />
          <p><b>(2) Pole koła o promieniu r:</b></p>
          <Formula formula="P = πr^2" />
          <p><b>(3) Objętość kuli o promieniu r:</b></p>
          <Formula formula="V=\frac{4}{3}\pi r^3" />
          <p><b>(4) Powierzchnia kuli o promieniu r:</b></p>
          <Formula formula="P=4πr^2" />
          <p><b>(5) Radiany</b> (łukowa miara kąta) - alternatywa dla miary stopniowej kąta, gdzie kąt reprezentowany jest przez liczbę rzeczywistą.</p>
          <Formula formula={`π = 180^\\circ`} />
        </CoreCurriculum>
        <ArticleBorder />
        <CoreCurriculum type={CoreCurriculumTypes.extra}>
          <p><b>(6) Pole elipsy o półosiach a i b:</b></p>
          <Formula formula="P=ab\pi" />
          <p><b>(7) Tożsamość Eulera:</b></p>
          <Formula formula={`e^{iπ} + 1 = 0`} />
        </CoreCurriculum>
        <ArticleBorder />
        <Title text="Przybliżenia liczby PI" type="main-article" />
        <CoreCurriculum type={CoreCurriculumTypes.extra}>
          <p className="">
            <b>(1) </b>przybliżenie do 4000 miejsc po przecinku:
          </p>
          <div className="w-full overflow-x-auto overflow-y-hidden">
            <Formula formula={`\\pi\\approx${mathConstants.PI}`} styles="min-w-[37250px]" />
            <br />
            <p>
              Oprócz standardowego rozwinięcia dziesiętnego stosuje się również inne przybliżenia:
            </p><br />
            <p><b>(2)</b></p>
            <Formula formula={mathConstants.PI_APPROXIMATION_1} />
            <p><b>(3)</b></p>
            <Formula formula="\pi\approx\frac{333}{106}" />
            <p><b>(4)</b> Każdą liczbę, również π można przedstawić za pomocą nieskończonej serii zagnieżdżonych ułamków, czyli tzw. <b>ułamka łańcuchowego</b></p>
            <Formula formula="\pi= 3+\frac{1}{7+\frac{1}{15+\frac{1}{1+\frac{1}{292+\frac{1}{⋱}}}}}=[3;7,15, 1, 292, 1 , 1, 1, 2, 1, 3, 1, 14, 2, 1, 1, 2, 2, 2, 2, 1, ...]" styles="min-w-[670px]" />
          </div>
        </CoreCurriculum>
        <ArticleBorder />
        <Title text="Ciekawy fakt" type="main-article" />
        <NavLink to="https://pl.wikipedia.org/wiki/TeX"><Formula formula="\text{T} _{\text{E}} \text{X}" /></NavLink>
        <p>Formuły matematyczne na platformie <b>majza.eu</b> są pisane z wykorzystaniem systemu składu drukarskiego <b>TeX</b>, którego twórcą jest <b><NavLink to="https://pl.wikipedia.org/wiki/Donald_Knuth">Donald E. Knuth</NavLink></b>. Od wersji 3 tego systemu każda kolejna podwersja jest oznaczana kolejnym przybliżeniem dziesiętnym liczby <b>π</b>, np. wersja ze stycznia 2021 to 3.141592653. W swoim testamencie Knuth wyraził wolę aby z chwilą jego śmierci numer wersji określić jako <b>π</b>. Ma to być metafora wprowadzania poprawek przybliżających system do doskonałości.</p>
      </div >
    </>
  );
};

export default PiNumberContent;
