import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import GraphImage from "../../../../components/articleItems/GraphImage";
import PiGif from "../../../../assets/images/function-graphs/pi.gif";
import { useState } from "react";

const PiNumberContent: FC = () => {
  const piExtension1000 =
    "3.14159265358979323 8 4 6 2 6 4 3 3 8 3 2 7 9 5 0 2 8 8 4 1 9 7 1 6 9 3 9 9 3 7 5 1 0 5 8 2 0 9 7 4 9 4 4 5 9 2 3 0 7 8 1 6 4 0 6 2 8 6 2 0 8 9 9 8 6 2 8 0 3 4 8 2 5 3 4 2 1 1 7 0 6 7 9 8 2 1 4 8 0 8 6 5 1 3 2 8 2 3 0 6 6 4 7 0 9 3 8 4 4 6 0 9 5 5 0 5 8 2 2 3 1 7 2 5 3 5 9 4 0 8 1 2 8 4 8 1 1 1 7 4 5 0 2 8 4 1 0 2 7 0 1 9 3 8 5 2 1 1 0 5 5 5 9 6 4 4 6 2 2 9 4 8 9 5 4 9 3 0 3 8 1 9 6 4 4 2 8 8 1 0 9 7 5 6 6 5 9 3 3 4 4 6 1 2 8 4 7 5 6 4 8 2 3 3 7 8 6 7 8 3 1 6 5 2 7 1 9 0 9 1 4 5 6 4 8 5 6 6 9 2 3 4 6 0 3 4 8 6 1 0 4 5 4 3 2 6 6 4 8 2 1 3 3 9 3 6 0 7 2 6 0 2 4 9 1 4 1 2 7 3 7 2 4 5 8 7 0 0 6 6 0 6 3 1 5 5 8 8 1 7 4 8 8 1 5 2 0 9 2 0 9 6 2 8 2 9 2 5 4 0 9 1 7 1 5 3 6 4 3 6 7 8 9 2 5 9 0 3 6 0 0 1 1 3 3 0 5 3 0 5 4 8 8 2 0 4 6 6 5 2 1 3 8 4 1 4 6 9 5 1 9 4 1 5 1 1 6 0 9 4 3 3 0 5 7 2 7 0 3 6 5 7 5 9 5 9 1 9 5 3 0 9 2 1 8 6 1 1 7 3 8 1 9 3 2 6 1 1 7 3 8 1 9 1 0 5 1 1 8 5 4 8 0 7 4 4 6 2 3 7 9 9 6 2 7 4 9 5 6 7 3 5 1 8 8 5 7 5 2 7 2 4 8 9 1 2 2 7 9 3 8 1 8 3 0 1 1 9 4 9 1 2 9 8 3 3 6 7 3 3 6 2 4 4 0 6 5 6 6 4 3 0 8 6 0 2 1 3 9 4 9 4 6 3 9 5 2 2 4 7 3 7 1 9 0 7 0 2 1 7 9 8 6 0 9 4 3 7 0 2 7 7 0 5 3 9 2 1 7 1 7 6 2 9 3 1 7 6 7 5 2 3 8 4 6 7 4 8 1 8 4 6 7 6 6 9 4 0 5 1 3 2 0 0 0 5 6 8 1 2 7 1 4 5 2 6 3 5 6 0 8 2 7 7 8 5 6 3 3 8 2 9 9 0 0 8 6 7 0 4 5 0 3 0 4 8 0 2 9 0 0 5 8 7 6 0 7 5 8 2 5 1 0 4 7 4 7 0 7 6 6 9 7 4 4 2 2 5 6 5 4 7 6 7 9 1 0 3 0 1 9 9 0 9 9 9 8 3 7 2 9 7 8 1 6 0 5 6 5 8 7 5 6 5 4 0 0 9 6 2 8 0 4 1 9 7 5 4 5 5 3 4 6 9 0 8 9 3 5 5 6 3 8 8 2 3 9 7 9 8 3 4 3 1 4 4 6 2 3 3 4 6 4 5 5 5 5 3 9 8 3 2 1 9 8 6 2 9 2 3 2 3 4 8 8 9 9 5 2 7 7 7 5 8 1 6 3 3 8 2 3 8 9 8 7 9 3 5 8 2 2 5 5 2 2 5 4 9 9 5 4 6 6 6 7 2 7 8 2 3 9 8 6 4 5 6 5 9 6 8 8 1 5 3 8 8 2 3 5 3 7 8 7 5 9 3 7 5 1 9 5 7 7 8 1 8 5 7 7 8 0 5 3 2 1 7 1 2 2 6 8 0 6 6 3 3 1 0 0 1 9 2 7 8 7 6 6 5 1 5 0 7 5 7 1 5 2 2 0 3 0 3 9 3 1 6 7 7 7 9 8 3 3 8 9 5 2 2 5 3 2 6 0 9 9 8 9 8 7 3 5 8 2 1 3 4 7 7 0 7 4 6 9 2 1 3 9 9 2 9 3 3 6 3 9 3 9 7 9 0 8 6 4 2 6 1 0 4 7 4 8 1 4 6 6 3 7 7 0 8 3 0 3 9 0 6 9 7 9 2 0 7 7 3 4 6 7 7 2 2 1 8 2 5 5 1 6 1 0 2 0 5 0 1 4 7 1 2 0 5 3 2 9 2 8 1 9 3 9 1 5 3 2 6 6 6 7 0 7 6 6 4 3 2 2 8 8 9 9 8 9 3 5 8 2 1 6 3 1 8 5 1 3 8 3 5 2 5 3 3 4 7 4 1 8 9 3 5 5 8 9 3 2 2 6 1 5 5 3 3 7 8 7 7 8 3 1 2 5 5 7 1 9 9 0 4 1 4 9 0 4 0 3 3 7 7 5 1 1 7 3 8 6 4 5 8 7 5 3 3 2 2 7 3 8 7 3 9 9 3 7 5 1 7 0 2 9 6 6 5 9 3 2 3 6 6 2 3 7 3 5 6 2 2 6 5 1 0 9 8 9 6 5 2 6 9 1 8 1 5 6 3 7 8 3 8 2 9 8 2 3 5 4 6 3 2 5 9 5 7 0 9 8 2 5 8 8 2 2 0 5 1 1 7 3 3 1 4 0 7 1 1 1 0 3 1 9 9 0 1 0 3 0 4 5 7 6 1 8 9 3 3 9 9 1 9 6 6 3 6 4 2 8 7 7 8 3 8 7 7 8 9 9 6 4 0 4 8 5 7 5 2 9 8 2 5 8 2 2 1 6 8 8 9 7 0 4 9 8 9 6 8 6 7 4 5 6 7 3 4 5 1 5 1 3 3 1 2 0 3 3 3 8 9 4 5 2 1 4 9 7 7 4 4 8 5 7 1 2 6 5 1 5 1 0 7 6 0 6 9 4 4 8 4 4 6 3 7 7 6 6 8 7 9 6 9 4 0 5 1 3 2 0 0 0 5 6 8 1 4 2 7 3 9 0 7 6 6 0 3 2 8 8 4 0 8 4 0 7 6 1 1 8 3 0 3 0 5 2 7 9 3 5 3 1 1 7 7 1 5 5 0 7 7 2 0 7 0 5 6 2 8 2 2 5 3 0 4 7 4 1 4 4 1 9 9 7 3 5 1 5 1 5 4 4 7 7 6 2 5 6 2 7 1 0 2 0 1 4 4 9 5 5 7 6 1 4 3 3 0 3 4 9 6 5 1 9 4 1 5 1 5 1 0 4 4 6 8 2 3 5 7 6 6 8 3 6 2 7 7 5 3 9 4 1 4 3 3 4 5 4 7 7";

  const [isHovered, setIsHovered] = useState(false);

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Title text={"Liczba Pi"} type={"submain-article"} />
      <p>
        <b>Liczba π </b> to stała matematyczna, która jest równa stosunkowi
        obwodu koła do jego średnicy.
      </p>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <GraphImage
          src={PiGif}
          alt="Animacja ilustrujaca wyznaczanie liczby pi"
          size="smaller"
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
        {" "}
        π jest liczbą niewymierną co oznacza, że nie można jej zapisać jako
        iloraz dwóch liczb całkowitych
      </p>
      <p className="truncate">
        Rozwinięcie liczby pi do 1000 miejsc po przecinku wygląda następująco:
      </p>
      <p>{piExtension1000}</p>
      <ArticleBorder />
      <Title text="Przypadki wykorzystania liczby PI" type="submain-article" />
      <p>Wzór na pole koła:</p>
      <Formula formula="P = πr^2" />
      <p>Wzór na obwód koła:</p>
      <Formula formula="L = 2πr" />
      <ArticleBorder />
      <Title text="Przybliżenia liczby PI" type="submain-article" />
      <p>
        Działania w zbiorze liczb niewymiernych są niepraktyczne w przypadku
        potrzeby wyznaczenia żądanej wartości. Z tego powodu niezbędne jest
        oszacowanie przybliżonej wartości liczby PI. Najczęściej używane
        przybliżenia to:
      </p>
      <Formula formula="3.14" />
      <Formula formula="3.142" />
      <Formula formula="\frac{22}{7}" />
      <Formula formula="\frac{333}{106}" />
    </>
  );
};

export default PiNumberContent;
