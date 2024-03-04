import { FC } from "react";
import "../styles/navbar.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//LAYOUTS
import { Layout } from "../Layout";
import { KnowledgeBaseLayout } from "../Layout/knowledgeBaseLayout";
import { CalculatorsLayout } from "../Layout/calculatorsLayout";
//MAIN PAGES
import Home from "../pages/homePage/HomePage";
import HelplinePage from "../pages/helplinePage/HelplinePage";
import ForumPage from "../pages/forumPages/ForumPage";

//WORK IN PROGRESS
// import WorkInProgress from "../components/WorkInProgress/WorkInProgress";
//ROUTES
import KnowledgeBasePage from "../pages/knowledgeBasePages/KnowledgeBasePage";
import LinearFunctionPage from "../pages/knowledgeBasePages/functionsPages/linearFunction/LinearFunctionPage";
import WorkInProgress from "../components/WorkInProgress/WorkInProgress";
import CalculatorsPage from "../pages/calculatorsPages/CalculatorsPage";
import CubeRootCalculatorPage from "../pages/calculatorsPages/arithmeticCalculators/CubeRootCalculator/CubeRootCalculatorPage";
import SquareRootCalculatorPage from "../pages/calculatorsPages/arithmeticCalculators/SquareRootCalculator/SquareRootCalculatorPage";
import SumCalculatorPage from "../pages/calculatorsPages/arithmeticCalculators/SumCalculator/CubeRootCalculatorPage";
import AreaConverterPage from "../pages/calculatorsPages/converters/AreaConverterPage";
import InformationConverterPage from "../pages/calculatorsPages/converters/InformationConverterPage";
import LengthConverterPage from "../pages/calculatorsPages/converters/LengthConverterPage";
import SpeedConverterPage from "../pages/calculatorsPages/converters/SpeedConverterPage";
import TimeConverterPage from "../pages/calculatorsPages/converters/TimeConverterPage";
import VolumeConverterPage from "../pages/calculatorsPages/converters/VolumeConverterPage";
import WeightConverterPage from "../pages/calculatorsPages/converters/WeightConverterPage";
import GameOfLife from "../pages/calculatorsPages/otherCalculators/GameOfLife";
import ShortMultiplicationPage from "../pages/knowledgeBasePages/algebraicExpressionPages/shortMultiplicationFormulas/ShortMultiplicationFormulasPage";
import PiNumberPage from "../pages/knowledgeBasePages/constantsPages/PiNumber/PiNumberPage";
import QuadraticFunctionPage from "../pages/knowledgeBasePages/functionsPages/quadraticFunction/QuadraticFunctionPage";
import ArithmeticSequencePage from "../pages/knowledgeBasePages/sequencesPages/arithmeticSequence/ArithmeticSequencePage";
import GeometricSequencePage from "../pages/knowledgeBasePages/sequencesPages/geometricSequence/GeometricSequencePage";
import NaturalNumberPage from "../pages/knowledgeBasePages/sets/naturalNumbers/NaturalNumberPage";
import AdditionPage from "../pages/knowledgeBasePages/arithmeticPages/addition/AdditionPage";
import SubtractionPage from "../pages/knowledgeBasePages/arithmeticPages/subtraction/SubtractionPage";
import MultiplicationPage from "../pages/knowledgeBasePages/arithmeticPages/multiplication/MultiplicationPage";
import DivisionPage from "../pages/knowledgeBasePages/arithmeticPages/division/DivisionPage";
import ExponentiationPage from "../pages/knowledgeBasePages/arithmeticPages/exponentiation/ExponentiationPage";
import RootPage from "../pages/knowledgeBasePages/arithmeticPages/root/RootPage";
import LogarithmPage from "../pages/knowledgeBasePages/arithmeticPages/logarithm/LogarithmPage";
import SetOperationsPage from "../pages/knowledgeBasePages/sets/setOperations/SetOperationsPage";
import PrimeFactorCalculatorPage from "../pages/calculatorsPages/arithmeticCalculators/PrimeFactorsCalculator/PrimeFactorsCalculatorPage";
import GCDandLCMCalculatorPage from "../pages/calculatorsPages/arithmeticCalculators/GCDandLCMCalculator/GCDandLCMCalculatorCalculatorPage";
import QuadraticFunctionCalculatorPage from "../pages/calculatorsPages/functionCalculators/QuadraticFunctionCalculator/QuadraticFunctionCalculatorPage";
import HomographicFunctionPage from "../pages/knowledgeBasePages/functionsPages/homographicFunction/HomographicFunctionPage";
import FractionReducerPage from "../pages/calculatorsPages/arithmeticCalculators/FractionReducer/FractionReducerPage";
import LinearFunctionCalculatorPage from "../pages/calculatorsPages/functionCalculators/LinearFunctionCalculator/LinearFunctionCalculatorPage";
import AveragesPage from "../pages/knowledgeBasePages/statisticPages/Averages/AveragesPage";
import QuadranglesPage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/QuadranglesPage";
import TrapezoidPage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/Trapezoid/TrapezoidPage";
import TrapeziumPage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/Trapezium/TrapeziumPage";
import RectangularTrapeziumPage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/RectangularTrapezium/RectangularTrapeziumPage";
import IsoscelesTrapeziumPage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/IsoscelesTrapezium/IsoscelesTrapeziumPage";
import ParallelogramPage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/Parallelogram/ParallelogramPage";
import RectanglePage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/Rectangle/RectanglePage";
import SquarePage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/Square/SquarePage";
import DiamondPage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/Diamond/DiamondPage";
import DeltoidPage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/Deltoid/DeltoidPage";
import CirclesRelationsPage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/CirclesRelations/CirclesRelationsPage";



export const Router: FC = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="baza-wiedzy" element={<KnowledgeBaseLayout />}>
                        <Route index element={<KnowledgeBasePage />} />
                        <Route path="funkcja-liniowa" element={<LinearFunctionPage />} />
                        <Route
                            path="funkcja-kwadratowa"
                            element={<QuadraticFunctionPage />}
                        />
                        <Route
                            path="funkcja-homograficzna"
                            element={<HomographicFunctionPage />}
                        />
                        <Route
                            path="ciag-arytmetyczny"
                            element={<ArithmeticSequencePage />}
                        />
                        <Route
                            path="ciag-geometryczny"
                            element={<GeometricSequencePage />}
                        />
                        <Route
                            path="wzory-skroconego-mnozenia"
                            element={<ShortMultiplicationPage />}
                        />
                        <Route path="liczba-pi" element={<PiNumberPage />} />
                        <Route path="liczby-naturalne" element={<NaturalNumberPage />} />
                        <Route path="dodawanie" element={<AdditionPage />} />
                        <Route path="odejmowanie" element={<SubtractionPage />} />
                        <Route path="mnozenie" element={<MultiplicationPage />} />
                        <Route path="dzielenie" element={<DivisionPage />} />
                        <Route path="potegowanie" element={<ExponentiationPage />} />
                        <Route path="pierwiastkowanie" element={<RootPage />} />
                        <Route path="logarytmy" element={<LogarithmPage />} />
                        <Route path="dzialania-na-zbiorach" element={<SetOperationsPage />} />
                        <Route path="srednie-liczbowe" element={<AveragesPage />} />
                        <Route path="czworokaty" element={<QuadranglesPage />} />
                        <Route path="trapezoid" element={<TrapezoidPage />} />
                        <Route path="trapez" element={<TrapeziumPage />} />
                        <Route path="trapez-prostokatny" element={<RectangularTrapeziumPage />} />
                        <Route path="trapez-rownoramienny" element={<IsoscelesTrapeziumPage />} />
                        <Route path="rownoleglobok" element={<ParallelogramPage />} />
                        <Route path="prostokat" element={<RectanglePage />} />
                        <Route path="romb" element={<DiamondPage />} />
                        <Route path="deltoid" element={<DeltoidPage />} />
                        <Route path="kwadrat" element={<SquarePage />} />
                        <Route path="relacja-z-okregiem" element={<CirclesRelationsPage />} />


                        <Route path="*" element={<WorkInProgress />} />
                    </Route>
                    <Route path="memy" element={<ForumPage />} />
                    <Route path="pogotowie" element={<HelplinePage />} />
                    <Route path="kalkulatory" element={<CalculatorsLayout />}>
                        <Route index element={<CalculatorsPage />} />
                        <Route
                            path="kalkulator-dlugosci"
                            element={<LengthConverterPage />}
                        />
                        <Route
                            path="kalkulator-powierzchni"
                            element={<AreaConverterPage />}
                        />
                        <Route
                            path="kalkulator-objetosci"
                            element={<VolumeConverterPage />}
                        />
                        <Route path="kalkulator-masy" element={<WeightConverterPage />} />
                        <Route path="kalkulator-czasu" element={<TimeConverterPage />} />
                        <Route
                            path="kalkulator-predkosci"
                            element={<SpeedConverterPage />}
                        />
                        <Route
                            path="kalkulator-informacji"
                            element={<InformationConverterPage />}
                        />
                        <Route
                            path="czynnik-przed-pierwiastek-kwadratowy"
                            element={<SquareRootCalculatorPage />}
                        />
                        <Route
                            path="czynnik-przed-pierwiastek-szescienny"
                            element={<CubeRootCalculatorPage />}
                        />
                        <Route
                            path="pisemne-dodawanie"
                            element={<SumCalculatorPage />}
                        />
                        <Route
                            path="skracanie-ulamkow"
                            element={<FractionReducerPage />}
                        />
                        <Route
                            path="rozklad-na-czynniki-pierwsze"
                            element={<PrimeFactorCalculatorPage />}
                        />
                        <Route
                            path="nww-i-nwd"
                            element={<GCDandLCMCalculatorPage />}
                        />
                        <Route path="funkcji-kwadratowej" element={<QuadraticFunctionCalculatorPage />} />
                        <Route path="funkcji-liniowej" element={<LinearFunctionCalculatorPage />} />
                        <Route path="gra-w-zycie" element={<GameOfLife />} />
                        <Route path="*" element={<WorkInProgress />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}