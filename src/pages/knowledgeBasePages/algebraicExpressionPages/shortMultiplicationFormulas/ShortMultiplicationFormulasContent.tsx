import { FC } from "react";
import Title from "../../../../utilities/Title";
import LegendParagraph from "../../../../utilities/articleItems/LegendParagraph";
import Formula from "../../../../utilities/articleItems/Formula";
import ArticleBorder from "../../../../utilities/articleItems/ArticleBorder";
import Proof from "../../../../utilities/articleItems/Proof";

const ShortMultiplicationFormulasContent: FC = () => {
  return (
    <>
      <Title text={"Wzory skróconego mnożenia"} type={"main-article"} />
      <p>
        <b>Wzory skróconego mnożenia</b> to proste formuły matematyczne, które
        pozwalają skrócić czas obliczeń. Są one szczególnie przydatne, gdy
        potrzebujemy pomnożyć pewne specyficzne wyrażenia algebraiczne.
      </p>
      <br />
      <p>Wzory skróconego mnożenia stopnia drugiego:</p>
      <p>
        <b>Kwadrat sumy:</b>
      </p>
      <Formula formula="(a + b)^2 = a^2 + 2ab + b^2" />
      <p>
        <b>Kwadrat różnicy:</b>
      </p>
      <Formula formula="(a - b)^2 = a^2 - 2ab + b^2" />
      <p>
        <b>Różnica kwadratów</b>
      </p>
      <Formula formula="a^2 - b^2 = (a - b)(a + b)" />
      <ArticleBorder />
      <p>Wzory skróconego mnożenia stopnia trzeciego:</p>
      <p>
        <b>Sześcian sumy:</b>
      </p>
      <Formula formula="(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3" />
      <p>
        <b>Sześcian różnicy:</b>
      </p>
      <Formula formula="(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3" />
    </>
  );
};

export default ShortMultiplicationFormulasContent;
