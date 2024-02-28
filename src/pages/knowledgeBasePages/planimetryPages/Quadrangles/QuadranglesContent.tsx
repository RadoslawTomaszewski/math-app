import { FC } from "react";
import Title from "../../../../components/articleItems/Title";
import GraphImage from "../../../../components/articleItems/GraphImage";
import Quadrangles from "../../../../assets/images/quadrangles/quadrangles_transparent.png";
import InscribedCircle from "../../../../assets/images/quadrangles/okrag_wpisany_w_czworokat.png";
import CircumscribedCircle from "../../../../assets/images/quadrangles/okrag_opisany_na_czworokacie.png";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";

const QuadranglesContent: FC = () => {

    return (
        <>
            <div className="flex flex-col">
                <Title text={"Czworokąty"} type={"main-article"} />
                <p><b>Czworokąt(czworobok)</b> to wielokąt płaski o czterech bokach i dwóch przekątnych, definiowanych jako odcinki łączące dwa niesąsiednie boki.</p>
                <ArticleBorder />
                <p><b>Własności:</b></p>
                <p>a) Suma miar kątów wewnętrznych wynosi 360°</p>
                <GraphImage size={"smallest"} src={InscribedCircle} alt={"Klasyfikacja czworokatow"} />
                <p>b) W czworokąt da się wpisać okrąg, gdy sumy długości przeciwległych boków są równe</p>
                <GraphImage size={"smallest"} src={CircumscribedCircle} alt={"Klasyfikacja czworokatow"} />
                <p>c) Na czworokącie da się opisać okrąg, gdy sumy miar przeciwległych kątów wewnętrznych wynoszą 180°</p>
                <ArticleBorder />
                <Title text="Podział czworokątów" type="submain-article" />
                <GraphImage size={"small"} src={Quadrangles} alt={"Klasyfikacja czworokatow"} />
            </div>
        </>
    );
};

export default QuadranglesContent;
