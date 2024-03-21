import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import GraphImage from "../../../../components/articleItems/GraphImage";
import PiGif from "../../../../assets/images/function-graphs/pi.gif";
import { useState } from "react";
import { mathConstants } from "../../../../types/equations";

const PiNumberContent: FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="max-w-full">
        <Title text={"Liczba Pi"} type={"submain-article"} />
        <p>
          <b>Liczba π </b> to stała matematyczna, która jest równa stosunkowi
          obwodu koła do jego średnicy.
        </p>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <GraphImage
            src={PiGif}
            alt="Animacja ilustrujaca wyznaczanie liczby pi"
            size="smallest"
          />
        </div>
        {isHovered && (
          <>
            <p className="text-xs text-center">
              Autor: John Reid, źródło:
              https://en.wikipedia.org/wiki/Pi#/media/File:Pi-unrolled-720.gif
            </p>
          </>
        )}
        <ArticleBorder />
        <p>
          π jest liczbą niewymierną co oznacza, że nie można jej zapisać w postaci
          ilorazu dwóch liczb całkowitych
        </p>
        <ArticleBorder />
        <Title text="Przypadki wykorzystania liczby PI" type="submain-article" />
        <p>Wzór na obwód koła:</p>
        <Formula formula="L = 2πr" />
        <p>Wzór na pole koła:</p>
        <Formula formula="P = πr^2" />
        <p>Wzór na objętość kuli:</p>
        <Formula formula="V=\frac{4}{3}\pi R^3" />

        <ArticleBorder />
        <Title text="Przybliżenia liczby PI" type="submain-article" />
        <p className="">
          Przybliżenie do 4000 miejsc po przecinku:
        </p>
        <div className="w-full overflow-x-auto overflow-y-hidden">
          <div className="w-[37250px]">
            <Formula formula={`\\pi\\approx${mathConstants.PI}`} />
          </div>
        </div>
        <p>
          Oprócz standardowego rozwinięcia dziesiętnego stosuje się również inne przybliżenia:
        </p>
        <Formula formula={mathConstants.PI_APPROXIMATION_1} />
        <Formula formula="\pi\approx\frac{333}{106}" />
        <p>Każdą liczbę, również π można przedstawić za pomocą nieskończonej serii zagnieżdżonych ułamków, czyli tzw. <b>ułamków ciągłych.</b></p>
        <Formula formula="\pi\approx 3+\frac{1}{7+\frac{1}{15+\frac{1}{1+\frac{1}{292+\frac{1}{⋱}}}}}" />
      </div>
    </>
  );
};

export default PiNumberContent;
