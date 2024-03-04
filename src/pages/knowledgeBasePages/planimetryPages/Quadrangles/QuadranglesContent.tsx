import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";

import TrapezoidContent from "./Trapezoid/TrapezoidContent";
import TrapeziumContent from "./Trapezium/TrapeziumContent";
import IsoscelesTrapeziumContent from "./IsoscelesTrapezium/IsoscelesTrapeziumContent";
import RectangularTrapeziumContent from "./RectangularTrapezium/RectangularTrapeziumContent";
import ParallelogramContent from "./Parallelogram/ParallelogramContent";
import RectangleContent from "./Rectangle/RectangleContent";
import SquareContent from "./Square/SquareContent";
import DiamondContent from "./Diamond/DiamondContent";
import DeltoidContent from "./Deltoid/DeltoidContent";
import CirclesRelationsContent from "./CirclesRelations/CirclesRelationsContent";

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
                {/* PROSTOKĄT */}
                <RectangleContent />
                <ArticleBorder />
                {/* ROMB */}
                <DiamondContent />
                <ArticleBorder />
                {/* KWADRAT */}
                <SquareContent />
                <ArticleBorder />
                {/* DELTOID */}
                <DeltoidContent />
                <ArticleBorder />
                {/* RELACJE Z OKRĘGIEM */}
                <CirclesRelationsContent />
            </div>
        </>
    );
};

export default QuadranglesContent;
