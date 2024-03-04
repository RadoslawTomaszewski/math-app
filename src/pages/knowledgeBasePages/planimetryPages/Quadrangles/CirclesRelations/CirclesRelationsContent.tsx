import { FC } from "react";
import Title from "../../../../../components/articleItems/Title";
import GraphImage from "../../../../../components/articleItems/GraphImage";
import ArticleBorder from "../../../../../components/articleItems/ArticleBorder";
import LegendParagraph from "../../../../../components/articleItems/LegendParagraph";
import Formula from "../../../../../components/articleItems/Formula";
import TrapezoidInCircle from "../../../../../assets/images/quadrangles/trapezoid_in_circle.png";
import TrapezoidOnCircle from "../../../../../assets/images/quadrangles/trapezoid_on_circle.png";
import TrapezoidInCircle2 from "../../../../../assets/images/quadrangles/trapezoid_in_circle_2.png";
import TrapezoidOnCircle2 from "../../../../../assets/images/quadrangles/trapezoid_on_circle_2.png";
import { GeometryEquations } from "../../../../../types/equations";
const CirclesRelationsContent: FC = () => (
    <>
        <Title text={"Czworokąt wpisany w okrąg, a opisany na okręgu"} type="main-article" />
        <p>
            W geometrii płaskiej czworokąt wpisany w okrąg to taki, który ma wszystkie wierzchołki leżące na okręgu,
            podczas gdy czworokąt opisany na okręgu to taki, którego wszystkie boki leżą na okręgu.
        </p>
        <ArticleBorder />
        <Title text={"Czworokąt wpisany w okrąg"} type="main-article" />
        <GraphImage size={"small"} src={TrapezoidInCircle} alt={"Czworokąt wpisany w okrąg"} />
        <p>Dla czworokąta wpisanego w okrąg zachodzi zależność:</p>
        <Formula formula={GeometryEquations.trapezoid_in_circle} />
        <LegendParagraph type={"top"} notation={"\\alpha, \\beta, \\gamma, \\delta"} explanation={"miary kątów wewnętrznych czworokąta"} /><br />
        <p>Środek okręgu opisanego na czworokaćie jest punktem przecięcia się jego symetralnych</p>
        <GraphImage size={"small"} src={TrapezoidInCircle2} alt={"Czworokąt wpisany i opisany na okręgu"} />
        <ArticleBorder />
        <Title text={"Czworokąt opisany na okręgu"} type="main-article" />
        <GraphImage size={"small"} src={TrapezoidOnCircle} alt={"Czworokąt opisany na okręgu"} />


        <p>Dla czworokąta opisanego na okręgu zachodzi natomiast zależność:</p>
        <Formula formula={GeometryEquations.trapezoid_on_circle} />
        <LegendParagraph type={"top"} notation={"a,b,c,d"} explanation={"kolejne boki czworokąta opisanego na okręgu."} /><br />




        <p>Środek okręgu wpisanego w czworokąt jest punktem przecięcia się jego dwusiecznych katów węwnętrznych</p>
        <GraphImage size={"small"} src={TrapezoidOnCircle2} alt={"Czworokąt wpisany i opisany na okręgu z zaznaczonymi kątami"} />
    </>
);

export default CirclesRelationsContent;