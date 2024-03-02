import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";

import TrapezoidContent from "./Trapezoid/TrapezoidContent";
import TrapeziumContent from "./Trapezium/TrapeziumContent";
import IsoscelesTrapeziumContent from "./IsoscelesTrapezium/IsoscelesTrapeziumContent";
import RectangularTrapeziumContent from "./RectangularTrapezium/RectangularTrapeziumContent";
import ParallelogramContent from "./Parallelogram/ParallelogramContent";

const QuadranglesContent: FC = () => {

    return (
        <>
            <div className="flex flex-col">
                {/* CZWOROKĄTY */}
                <Title text={"Czworokąty"} type={"main-article"} />
                <p><b>Czworokąt (czworobok)</b> to wielokąt płaski o czterech bokach i dwóch przekątnych, definiowanych jako odcinki łączące dwa niesąsiednie boki.</p>
                <br /><p>Suma miar kątów wewnętrznych czworokąta wynosi 360°</p>
                <ArticleBorder />
                {/* TRAPEZOID */}
                <TrapezoidContent />
                <ArticleBorder />
                {/* TRAPEZ */}
                <TrapeziumContent />
                <ArticleBorder />
                {/* TRAPEZ PROSTOKĄTNY */}
                <RectangularTrapeziumContent />
                <ArticleBorder />
                {/* TRAPEZ RÓWNORAMIENNY */}
                <IsoscelesTrapeziumContent />
                <ArticleBorder />
                {/* RÓWNOLEGŁOBOK */}
                <ParallelogramContent />
                <ArticleBorder />
                <Title text={"Prostokąt"} type="main-article" />
                <Title text={"Romb"} type="main-article" />
                <Title text={"Kwadrat"} type="main-article" />
                <Title text={"Deltoid"} type="main-article" />
                <Title text={"Czworokąty wklęsłe"} type="main-article" />
                <Title text={""} type="main-article" />

                {/* <GraphImage size={"smallest"} src={InscribedCircle} alt={"Klasyfikacja czworokatow"} />
                <p>czworokąt da się wpisać okrąg, gdy sumy długości przeciwległych boków są równe</p>
                <GraphImage size={"smallest"} src={CircumscribedCircle} alt={"Klasyfikacja czworokatow"} />
                <p>Na czworokącie da się opisać okrąg, gdy sumy miar przeciwległych kątów wewnętrznych wynoszą 180°</p>
                <ArticleBorder />
                <Title text="Podział czworokątów" type="submain-article" />
                <GraphImage size={"small"} src={Quadrangles} alt={"Klasyfikacja czworokatow"} /> */}
            </div>
        </>
    );
};

export default QuadranglesContent;
