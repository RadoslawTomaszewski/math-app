import { FC } from "react";
import Title from "../../../components/articleItems/Title";
import ArticleBorder from "../../../components/articleItems/ArticleBorder";
import AdditionContent from "./addition/AdditionContent";
import SubtractionContent from "./subtraction/SubtractionContent";
import MultiplicationContent from "./multiplication/MultiplicationContent";
import DivisionContent from "./division/DivisionContent";
import ExponentiationContent from "./exponentiation/ExponentiationContent";
import RootContent from "./root/RootContent";
import LogarithmContent from "./logarithm/LogarithmContent";


const ArithmeticContent: FC = () => {

    return (
        <>
            <div className="flex flex-col">
                {/* ARYTMETYKA */}
                <Title text={"Arytmetyka"} type={"main-article"} />
                <p><b>Arytmetyka</b> dział matematyki zajmujący się działaniami na liczbach i samymi liczbami.</p>
                <ArticleBorder />
                {/* DODAWANIE */}
                <AdditionContent />
                <ArticleBorder />
                {/* ODEJMOWANIE */}
                <SubtractionContent />
                <ArticleBorder />
                {/* MNOŻENIE */}
                <MultiplicationContent />
                <ArticleBorder />
                {/* DZIELENIE */}
                <DivisionContent />
                <ArticleBorder />
                {/* POTĘGOWANIE */}
                <ExponentiationContent />
                <ArticleBorder />
                {/* PIERWIASTKOWANIE */}
                <RootContent />
                <ArticleBorder />
                {/* LOGARYTMOWANIE */}
                <LogarithmContent />
            </div>
        </>
    );
};

export default ArithmeticContent;
