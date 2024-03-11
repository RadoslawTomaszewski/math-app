import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Proof from "../../../../components/articleItems/Proof";
import skroconeMnozenie from "../../../../assets/images/function-graphs/skroconeMnozenie.png";
import skroconeMnozenie3 from "../../../../assets/images/function-graphs/skroconeMnozenie3.png";
import GraphImage from "../../../../components/articleItems/GraphImage";

const ShortMultiplicationContent: FC = () => {
  const squareOfTheSum = [
    "(a + b)^2",
    "(a + b)(a + b)",
    "a^2+ab+ab+b^2",
    "a^2+2ab+b^2",
  ];
  const squareOfTheDifference = [
    "(a - b)^2",
    "(a - b)(a - b)",
    "a^2-ab-ab+b^2",
    "a^2-2ab+b^2",
  ];
  const differenceOfSquares = ["(a - b)(a + b)", "a^2+ab-ab-b^2", "a^2-b^2"];
  const cubeOfTheSum = [
    "(a + b)^3",
    "(a + b)(a^2 + 2ab + b^2)",
    "a(a^2) + a(2ab) + a(b^2) + b(a^2) + b(2ab) + b(b^2)",
    "a^3 + 2a^2b + ab^2 + a^2b + 2ab^2 + b^3",
    "a^3 + 3a^2b + 3ab^2 + b^3",
  ];
  const cubeOfTheDifference = [
    "(a - b)^3",
    "(a - b)(a^2 - 2ab + b^2)",
    "a(a^2) + a(-2ab) + a(b^2) - b(a^2) - b(-2ab) + b(b^2)",
    "a^3 - 2ab^2 + a^2b - a^2b + 2ab^2 + b^3",
    "a^3 - 3a^2b + 3ab^2 - b^3",
  ];
  const sumOfCubes = [
    "(a + b)(a^2 - ab + b^2)",
    "a(a^2) + a(-ab) + a(b^2) + b(a^2) + b(-ab) + b(b^2)",
    "a^3 - a^2b + ab^2 + a^2b - ab^2 + b^3",
    "a^3 + b^3",
  ];

  const differenceOfCubes = [
    "(a - b)(a^2 + ab + b^2)",
    "a(a^2) + a(ab) + a(b^2) - b(a^2) - b(ab) - b(b^2)",
    "a^3 + a^2b + ab^2 - a^2b - ab^2 - b^3",
    "a^3 - b^3",
  ];

  return (
    <>
      <div className="max-w-[90vw]">
        <Title text={"Wzory skróconego mnożenia"} type={"main-article"} />
        <p>
          <b>Wzory skróconego mnożenia</b> to proste formuły matematyczne, które
          pozwalają skrócić czas obliczeń.
        </p>
        <br />
        <ArticleBorder />
        <Title
          text={"Wzory skróconego mnożenia stopnia drugiego"}
          type={"submain-article"}
        />
        <p>
          <b>Kwadrat sumy:</b>
        </p>
        <Formula formula="(a + b)^2 = a^2 + 2ab + b^2" />
        <Proof steps={squareOfTheSum} text={"Dowód"} />
        <br />
        <p>
          <b>Kwadrat różnicy:</b>
        </p>
        <Formula formula="(a - b)^2 = a^2 - 2ab + b^2" />
        <Proof steps={squareOfTheDifference} text={"Dowód"} />
        <br />
        <p>
          <b>Różnica kwadratów</b>
        </p>
        <Formula formula="a^2 - b^2 = (a - b)(a + b)" />
        <Proof steps={differenceOfSquares} text={"Dowód"} />
        <ArticleBorder />
        <p>
          Wzór skróconego mnożenia na kwadrat sumy można przedstawić graficznie:
        </p>
        <GraphImage
          src={skroconeMnozenie}
          alt="Graficzne przedstawienie kwadratu sumy"
          size="smaller"
        />
        <Formula formula="(a + b)^2 = a^2 + 2ab + b^2" />
        <ArticleBorder />
        <Title
          text={"Wzory skróconego mnożenia stopnia trzeciego"}
          type={"submain-article"}
        />
        <p>
          <b>Sześcian sumy:</b>
        </p>
        <Formula formula="(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3" />
        <Proof steps={cubeOfTheSum} text={"Dowód"} />
        <br />
        <p>
          <b>Sześcian różnicy:</b>
        </p>
        <Formula formula="(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3" />
        <Proof steps={cubeOfTheDifference} text={"Dowód"} />
        <br />
        <p>
          <b>Suma sześcianów:</b>
        </p>
        <Formula formula="a^3 + b^3 = (a + b)(a^2 - ab + b^2)" />
        <Proof steps={sumOfCubes} text={"Dowód"} />
        <br />
        <p>
          <b>Różnica sześcianów:</b>
        </p>
        <Formula formula="a^3 - b^3 = (a - b)(a^2 + ab + b^2)" />
        <Proof steps={differenceOfCubes} text={"Dowód"} />
        <ArticleBorder />
        <p>
          Wzór skróconego mnożenia na sześcian sumy można przedstawić graficznie:
        </p>
        <GraphImage
          src={skroconeMnozenie3}
          alt="Graficzne przedstawienie szescianu sumy"
          size="smaller"
        />
        <Formula formula="(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3" />
        <ArticleBorder />
        <Title
          text={"Wzory skróconego mnożenia dowolnego stopnia naturalnego"}
          type={"submain-article"}
        />
        <p>
          <b>n-ta potęga sumy:</b>
        </p>
        <Formula formula="(a + b)^n = \sum_{k=0}^{n}{n \choose k} a^{n-k} b^k" />
        <p>
          <b>n-ta potęga różnicy:</b>
        </p>
        <Formula formula="(a - b)^n = \sum_{k=0}^{n}{(-1)^k {n \choose k}} a^{n-k} b^k" />
        <p>
          <b>Różnica n-tych potęg liczb:</b>
        </p>
        <div className="overflow-x-auto">
          <div className="flex justify-center my-4 min-w-[480px]">
            <Formula formula="a^n-b^n=\left(a-b\right)\left(a^{n-1}+a^{n-2}b+...+ab^{n-2}+b^{n-1}\right)" />
          </div>
        </div>

      </div>
    </>
  );
};

export default ShortMultiplicationContent;
