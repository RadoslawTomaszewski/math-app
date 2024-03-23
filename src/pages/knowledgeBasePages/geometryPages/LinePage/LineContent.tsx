import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import Tangent from "../../../../assets/images/knowledge_base/geometry/tangent.png";
import Secant from "../../../../assets/images/knowledge_base/geometry/secant.png";
import Line from "../../../../assets/images/knowledge_base/geometry/line.png";
import Normal from "../../../../assets/images/knowledge_base/geometry/normal.png";
import Bisection from "../../../../assets/images/knowledge_base/geometry/bisection.png";
import GraphImage from "../../../../components/articleItems/GraphImage";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";


const LineContent: FC = () => {

  return (
    <>
      <Title text={"Prosta"} type={"main-article"} />
      <GraphImage size="small" src={Line} alt={"Linia prosta"} />
      <p><b>Prosta</b> - linia prosta, która jest nieograniczona z każdej strony (tzn. nie ma początku, ani końca). W matematyce prosta jest szczególnym przypadek <b>krzywej</b> (wbrew potocznej definicji prostej jako "niezakrzywionej" linii). Jeden z elementów pierwornych w <b>geometrii euklidesowej.</b></p>
      <ArticleBorder />
      <Title text={"Sieczna"} type={"submain-article"} />
      <GraphImage size="small" src={Secant} alt={"Linia prosta"} />
      <p><b>Sieczna</b> - prosta, która przechodzi przez co najmniej dwa punkty leżące na danej krzywej. Odcinek ograniczony tymi punktami nazywa się <b>cięciwą</b>.</p>
      <ArticleBorder />
      <Title text={"Styczna"} type={"submain-article"} />
      <p><b>Styczna</b> - prosta, która jest granicznym położeniem <b>siecznych</b> przechodzących przez dwa punkty A i A'<sub>i</sub>, przy czym odległość między tymi punktami dąży do zera.</p>
      <GraphImage size="small" src={Tangent} alt={"Linia prosta"} />
      <ArticleBorder />
      <Title text={"Normalna"} type={"submain-article"} />
      <p><b>Normalna</b> - prosta przechodząca przez dany punkt prostopadła do stycznej do krzywej.</p>
      <GraphImage size="small" src={Normal} alt={"Linia prosta"} />
      <p> Normalną można również zdefiniować jako linię prostopadłą do dowolnego obiektu matematycznego (np. powierzchni lub krzywej)</p>
      <ArticleBorder />
      <Title text={"Symetralna"} type={"submain-article"} />
      <p><b>Symetralna</b> - prosta prostopadła do danego odcinka, która przechodzi przez jego środek</p>
      <GraphImage size="small" src={Bisection} alt={"Linia prosta"} />
      <p></p>

    </>
  );
};

export default LineContent;
