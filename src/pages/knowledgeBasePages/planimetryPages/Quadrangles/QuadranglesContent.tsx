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
import Quadrangle1 from "../../../../assets/images/quadrangles/Quadrangles_01.png";
import Quadrangle2 from "../../../../assets/images/quadrangles/Quadrangles_02.png";
import GraphImage from "../../../../components/articleItems/GraphImage";
import Formula from "../../../../components/articleItems/Formula";
import { GeometryEquations } from "../../../../types/equations";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";


const QuadranglesContent: FC = () => {

    return (
        <>
            <div className="flex flex-col">
                {/* CZWOROKĄTY */}
                <Title text={"Czworokąty"} type={"main-article"} />
                <p><b>Czworokąt (czworobok)</b> to wielokąt płaski o czterech bokach i dwóch przekątnych, definiowanych jako odcinki łączące dwa niesąsiednie boki.</p>
                <div className="flex flex-wrap justify-around">
                    <div className="flex flex-col">
                        <Title text={"Czworokąt wypukły"} type="main-article" />
                        <GraphImage size={"smaller"} src={Quadrangle1} alt={"Czworokat wypukły"} />
                    </div>
                    <div>
                        <Title text={"Czworokąt wklęsły"} type="main-article" />
                        <GraphImage size={"smaller"} src={Quadrangle2} alt={"Czworokat wklęsły"} />
                    </div>
                </div>
                <Title text={"Twierdzenie Bretschneidera"} type="submain-article" />
                <p>Zgodnie z <b>Twierdzeniem Bretschneidera</b> znając długości wszystkich boków i miary wszystkich kątów dowolnego czworokąta można policzyć jego pole powierzchni za pomocą wzoru:</p>
                <div className="overflow-x-auto">
                    <div className="flex justify-center my-4 min-w-[600px]">
                        <Formula formula={GeometryEquations.QuadrangleArea} />
                    </div>
                </div>
                <p>gdzie:</p>
                <Formula formula={GeometryEquations.HalfPerimeter} />
                <LegendParagraph type={"long"} notation={"a,b,c,d"} explanation={"boki czworokąta"} />
                <LegendParagraph type={"long"} notation={"\\alpha, \\gamma"} explanation={"miary dwóch przeciwległych kątów wewnętrznych czworokąta"} />
                <LegendParagraph type={"long"} notation={"p"} explanation={"połowa obwodu czworokąta"} />
                <br />
                <p>Ten sam wzór można zapisać bez konieczności wprowadzania wartości równej połowie obwodu czworokąta:</p>
                <div className="overflow-x-auto">
                    <div className="flex justify-center my-4 min-w-[800px]">
                        <Formula formula={GeometryEquations.QuadrangleArea2} />
                    </div>
                </div>
                <ArticleBorder />
                <Title text={"Twierdzenie o kątach wewnętrznych w czworokącie"} type="submain-article" />
                <Formula formula={GeometryEquations.quadrilateral_interior_angles_theorem} />
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
