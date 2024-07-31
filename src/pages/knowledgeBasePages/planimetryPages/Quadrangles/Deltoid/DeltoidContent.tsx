import { FC } from "react";
import Title from "../../../../../components/articleItems/Title";
import GraphImage from "../../../../../components/articleItems/GraphImage";
import Deltoid from "../../../../../assets/images/quadrangles/deltoid.png";
import Deltoid2 from "../../../../../assets/images/quadrangles/deltoid_2.png";
import ArticleBorder from "../../../../../components/articleItems/ArticleBorder";
import Formula from "../../../../../components/articleItems/Formula";
import LegendParagraph from "../../../../../components/articleItems/LegendParagraph";
import { GeometryEquations } from "../../../../../data/equations";
import { DeltoidAreaProof, TrapezoidAreaDiamondProof } from "../../../../../data/proofs";
import Proof from "../../../../../components/articleItems/Proof";



const DeltoidContent: FC = () => (
    <>
        <Title text={"Deltoid"} type="main-article" />
        <p><b>Deltoid</b> to czworokąt, którego przekątne (lub ich przedłużenia) dzielą się pod kątem prostym i mający dwie pary boków równej długości</p>
        <p>Wyróżnia się <b>deltoid wypukły</b>, który jest szczególnym przypadkiem trapezoidu oraz <b>deltoid wklęsły</b></p>
        <ArticleBorder />
        <div className="flex flex-wrap justify-around">
            <div className="flex flex-col">
                <Title text={"Deltoid wypukły"} type="main-article" />
                <GraphImage size={"small"} src={Deltoid} alt={"Deltoid"} />
            </div>
            <div>
                <Title text={"Deltoid wklęsły"} type="main-article" />
                <GraphImage size={"small"} src={Deltoid2} alt={"Deltoid"} />
            </div>
        </div>
        <p><b>Deltoid wypukły</b> to szczególny przypadek deltoidu, w którym wszystkie kąty wewnętrzne są wypukłe.</p>
        <p><b>Deltoid wklęsły</b> to szczególny przypadek deltoidu, w którym jeden kąt wewnętrzny jest wklęsły.</p><br />
        <p>Obwód:</p>
        <Formula formula={GeometryEquations.ParallelogramPerimeter} />
        <LegendParagraph type={"top"} notation={"a,b"} explanation={"długości boków deltoidu"} /><br />
        <p>Pole deltoidu można policzyć za pomocą wzoru na pole trapezoidu</p>
        <Formula formula={GeometryEquations.TrapezoidArea_Diamond} />
        <LegendParagraph type={"top"} notation={"d_1,d_2"} explanation={"długości przekątnych deltoidu"} /><br />
        <Proof steps={TrapezoidAreaDiamondProof} text={"Dowód"} /><br />
        <p>Wzór na pole deltoidu można również policzyć jako sumę dwóch przystajacych trójkątów:</p>
        <Formula formula={GeometryEquations.DeltoidArea} />
        <LegendParagraph type={"top"} notation={"\\gamma"} explanation={"kąt między bokami różnej długości"} /><br />
        <Proof steps={DeltoidAreaProof} text={"Dowód"} />
        <br />
        <p> <b>Długości przekątnych:</b></p>
        <div className="overflow-x-auto">
            <div className="flex justify-center my-4 min-w-[350px]">
                <Formula formula={GeometryEquations.DeltoidDiagonal_short} />
            </div>
        </div>
        <Formula formula={GeometryEquations.DeltoidDiagonal_long} />
        <LegendParagraph type={"top"} notation={"\\alpha, \\beta, \\gamma"} explanation={"kąty oznaczone na rysunku"} /><br />
        <p>Długości przekątnych są możliwe do wyznaczenia za pomocą <b>Twierdzenie cosinusów</b></p>
        <ArticleBorder />
        <Title text={"Twierdzenie o przekątnych w deltoidzie"} type="submain-article" />
        <p><b>(1)</b> Co najmniej jedna z przekątnych deltoidu leży na symetralną drugiej przekątnej</p>
        <p><b>(2)</b> Jedna przekątna jest dwusieczną dwóch przeciwległych katów wewnętrznych oraz jednocześnie osią symetrii tego deltoidu.</p>
    </>
);

export default DeltoidContent;
