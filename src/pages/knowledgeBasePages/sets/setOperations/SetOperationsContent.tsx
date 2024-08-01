import { FC } from "react";
import Title from "../../../../components/Title/Title";
import Formula from "../../../../components/Formula/Formula";
import ArticleBorder from "../../../../components/ArticleBorder/ArticleBorder";
import Asupply from "../../../../assets/images/setsExample/A'.png";
import Bsupply from "../../../../assets/images/setsExample/B'.png";
import AnB from "../../../../assets/images/setsExample/AnB.png";
import AuB from "../../../../assets/images/setsExample/AuB.png";
import DefaultAandB from "../../../../assets/images/setsExample/default.png";
import A_without_B from "../../../../assets/images/setsExample/a_without_b.png";
import B_without_A from "../../../../assets/images/setsExample/b_without_a.png";
import GraphImage from "../../../../components/imageComponents/GraphImage";

const SetOperationsContent: FC = () => {

  return (
    <>
      <Title text={"Operacje na zbiorach"} type={"main-article"} />
      <p>
        Operacje, których można dokonać na zbiorach to:
      </p>
      <p>
        <b>(1)</b> suma
      </p>
      <p>
        <b>(2)</b> iloczyn/część wspólna/przecięcie
      </p>
      <p>
        <b>(3)</b> różnica
      </p>
      <p>
        <b>(4)</b> dopełnienie
      </p>
      <ArticleBorder />
      <Title text={"Przykłady zbiorów"} type={"submain-article"} />
      <Formula formula="U = \{1, 2, 3, 4, 5, 6\}" />
      <div className="my-2 grid sm:grid-cols-2">
        <div>
          <Formula formula="A = \{1, 2, 3\}" />
        </div>
        <div>
          <Formula formula="B = \{3, 4, 5\}" />
        </div>
      </div>
      <GraphImage size={"smallest"} src={DefaultAandB} alt={"Przykład pary zbiorów A i B w przestrzeni U"} />
      <p>Powyższe zbiory A, B w przestrzeni U posłużą jako proste przykłady zastosowania operacji na zbiorach</p>
      <ArticleBorder />
      <Title text={"Suma zbiorów"} type={"submain-article"} />
      <p>
        Rezultatem operacji sumy zbiorów A, B będzie zbiór spełniający następujące warunki:
      </p>
      <Formula formula="x \in A \cup B \iff x \in A \lor x \in B" />
      <GraphImage size={"smallest"} src={AuB} alt={"A suma B"} />
      <Formula formula="A \cup B = \{1, 2, 3, 4, 5\}" />
      <ArticleBorder />
      <Title text={"Iloczyn zbiorów"} type={"submain-article"} />
      <p>
        Rezultatem operacji iloczynu zbiorów A, B będzie zbiór spełniający następujące warunki:
      </p>
      <Formula formula="x \in A \cap B \iff x \in A \land x \in B" />
      <GraphImage size={"smallest"} src={AnB} alt={"A część wspólna B"} />
      <Formula formula="A \cap B = \{3\}" />
      <p>W matematyce zamiennie możemy używać pojęć <b>iloczyn</b>/<b>przecięcie</b>/<b>część wspólna</b></p>
      <ArticleBorder />
      <Title text={"Różnica zbiorów"} type={"submain-article"} />
      <p>
        Rezultatem operacji różnicy zbiorów A, B będzie zbiór składających się ze wszystkich elementów w zbiorze A, które nie występują jednocześnie w zbiorze B.
      </p>
      <Formula formula="x \in A - B \iff x \in A \land x \notin B" />
      <GraphImage size={"smallest"} src={A_without_B} alt={"A bez B"} />
      <Formula formula="A - B = \{1, 2\}" />
      <GraphImage size={"smallest"} src={B_without_A} alt={"B bez A"} />
      <Formula formula="B - A = \{4, 5\}" />
      <ArticleBorder />
      <Title text={"Dopełnienie zbioru"} type={"submain-article"} />
      <p>
        Dopełnienie zbioru A, oznaczane jako A', zawiera wszystkie elementy, które
        nie należą do zbioru A, ale należą do przestrzeni U, czyli zbioru wszystkich możliwych elementów
      </p>
      <GraphImage size={"smallest"} src={Asupply} alt="dopełnienie A" />
      <Formula formula="A' = \{4, 5, 6\}" />
      <GraphImage size={"smallest"} src={Bsupply} alt="dopełnienie B" />
      <Formula formula="B' = \{1, 2, 6\}" />
    </>
  );
};

export default SetOperationsContent;
