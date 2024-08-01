import { FC } from "react";
import Title from "../../../../components/Title/Title";
import Formula from "../../../../components/Formula/Formula";
import ArticleBorder from "../../../../components/ArticleBorder/ArticleBorder";
import Proof from "../../../../components/ProofAndExplanation/Proof";
import skroconeMnozenie from "../../../../assets/images/function-graphs/skroconeMnozenie.png";
import skroconeMnozenie3 from "../../../../assets/images/function-graphs/skroconeMnozenie3.png";
import GraphImage from "../../../../components/imageComponents/GraphImage";
import { cubeOfTheDifference, cubeOfTheSum, differenceOfCubes, differenceOfSquares, squareOfTheDifference, squareOfTheSum, sumOfCubes } from "../../../../data/proofs";
import { shortmultiplicationFormulas } from "../../../../data/equations";

const ShortMultiplicationContent: FC = () => {


  return (
    <>
      <div className="max-w-[90vw]">
        <Title text={"Wzory skróconego mnożenia"} type={"main-article"} />
        <p>
          <b>Wzory skróconego mnożenia</b> to proste formuły matematyczne, które
          mają na celu skrócić czas liczenia iloczynów sum algebraicznych przez celowe pomijanie tych działań, które w końcowym rezultacie i tak ulegają redukcji.
        </p>
        <ArticleBorder />
        <Title
          text={"Wzory skróconego mnożenia stopnia drugiego"}
          type={"submain-article"}
        />
        <p>
          <b>Kwadrat sumy:</b>
        </p>
        <Formula formula={shortmultiplicationFormulas.SQUARE_OF_THE_SUM} styles="min-w-[230px]" />
        <Proof steps={squareOfTheSum} text={"Dowód"} styles="min-w-[170px]" />
        <br />
        <p>
          <b>Kwadrat różnicy:</b>
        </p>
        <Formula formula={shortmultiplicationFormulas.SQUARE_OF_THE_DIFFERENCE} styles="min-w-[230px]" />
        <Proof steps={squareOfTheDifference} text={"Dowód"} styles="min-w-[170px]" />
        <br />
        <p>
          <b>Różnica kwadratów</b>
        </p>
        <Formula formula={shortmultiplicationFormulas.DIFFERENCE_OF_SQUARES} styles="min-w-[230px]" />
        <Proof steps={differenceOfSquares} text={"Dowód"} styles="min-w-[170px]" />
        <ArticleBorder />
        <p>
          Wzór skróconego mnożenia na kwadrat sumy można przedstawić graficznie:
        </p>
        <GraphImage
          src={skroconeMnozenie}
          alt="Graficzne przedstawienie kwadratu sumy"
          size="smaller"
        />
        <Formula formula={shortmultiplicationFormulas.SQUARE_OF_THE_SUM} styles="min-w-[230px]" />
        <ArticleBorder />
        <Title
          text={"Wzory skróconego mnożenia stopnia trzeciego"}
          type={"submain-article"}
        />
        <p>
          <b>Sześcian sumy:</b>
        </p>
        <Formula formula={shortmultiplicationFormulas.CUBE_OF_THE_SUM} styles="min-w-[280px]" />
        <Proof steps={cubeOfTheSum} text={"Dowód"} styles="min-w-[390px]" />
        <br />
        <p>
          <b>Sześcian różnicy:</b>
        </p>
        <Formula formula={shortmultiplicationFormulas.CUBE_OF_THE_DIFFERENCE} styles="min-w-[280px]" />
        <Proof steps={cubeOfTheDifference} text={"Dowód"} styles="min-w-[420px]" />
        <br />
        <p>
          <b>Suma sześcianów:</b>
        </p>
        <Formula formula={shortmultiplicationFormulas.SUM_OF_CUBES} styles="min-w-[280px]" />
        <Proof steps={sumOfCubes} text={"Dowód"} styles="min-w-[420px]" />
        <br />
        <p>
          <b>Różnica sześcianów:</b>
        </p>
        <Formula formula={shortmultiplicationFormulas.DIFFERENCE_OF_CUBES} styles="min-w-[280px]" />
        <Proof steps={differenceOfCubes} text={"Dowód"} styles="min-w-[390px]" />
        <ArticleBorder />
        <p>
          Wzór skróconego mnożenia na sześcian sumy można przedstawić graficznie:
        </p>
        <GraphImage
          src={skroconeMnozenie3}
          alt="Graficzne przedstawienie szescianu sumy"
          size="smaller"
        />
        <Formula formula={shortmultiplicationFormulas.CUBE_OF_THE_SUM} styles="min-w-[280px]" />
        <ArticleBorder />
        <Title
          text={"Wzory skróconego mnożenia dowolnego stopnia naturalnego"}
          type={"submain-article"}
        />
        <p>
          <b>n-ta potęga sumy:</b>
        </p>
        <Formula formula={shortmultiplicationFormulas.NTH_POWER_OF_THE_SUM} styles="min-w-[240px]" />
        <b>n-ta potęga różnicy:</b>
        <Formula formula={shortmultiplicationFormulas.NTH_POWER_OF_THE_DIFFERENCE} styles="min-w-[280px]" />
        <b>Różnica n-tych potęg liczb:</b>
        <Formula formula={shortmultiplicationFormulas.DIFFERENCE_OF_NTH_POWERS} styles="min-w-[480px]" />
      </div>
    </>
  );
};

export default ShortMultiplicationContent;
