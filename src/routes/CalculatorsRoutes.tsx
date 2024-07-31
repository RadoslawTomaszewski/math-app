import CubeRootCalculatorPage from "../pages/calculatorsPages/arithmeticCalculators/CubeRootCalculator/CubeRootCalculatorPage";
import DividersCalculatorPage from "../pages/calculatorsPages/arithmeticCalculators/DividersCalculator/DividersCalculatorPage";
import FractionReducerPage from "../pages/calculatorsPages/arithmeticCalculators/FractionReducer/FractionReducerPage";
import GCDandLCMCalculatorPage from "../pages/calculatorsPages/arithmeticCalculators/GCDandLCMCalculator/GCDandLCMCalculatorCalculatorPage";
import PrimeFactorCalculatorPage from "../pages/calculatorsPages/arithmeticCalculators/PrimeFactorsCalculator/PrimeFactorsCalculatorPage";
import SquareRootCalculatorPage from "../pages/calculatorsPages/arithmeticCalculators/SquareRootCalculator/SquareRootCalculatorPage";
import AreaConverterPage from "../pages/calculatorsPages/converters/AreaConverterPage";
import InformationConverterPage from "../pages/calculatorsPages/converters/InformationConverterPage";
import LengthConverterPage from "../pages/calculatorsPages/converters/LengthConverterPage";
import SpeedConverterPage from "../pages/calculatorsPages/converters/SpeedConverterPage";
import TimeConverterPage from "../pages/calculatorsPages/converters/TimeConverterPage";
import VolumeConverterPage from "../pages/calculatorsPages/converters/VolumeConverterPage";
import WeightConverterPage from "../pages/calculatorsPages/converters/WeightConverterPage";
import ExponentialFunctionCalculatorPage from "../pages/calculatorsPages/functionCalculators/ExponentialFunction/ExponentialFunctionCalculatorPage";
import LinearFunctionCalculatorPage from "../pages/calculatorsPages/functionCalculators/LinearFunctionCalculator/LinearFunctionCalculatorPage";
import LogarithmicFunctionCalculatorPage from "../pages/calculatorsPages/functionCalculators/LogarithmicFunction/LogarithmicFunctionCalculatorPage";
import QuadraticFunctionCalculatorPage from "../pages/calculatorsPages/functionCalculators/QuadraticFunctionCalculator/QuadraticFunctionCalculatorPage";
import BankDepositCalculatorPage from "../pages/calculatorsPages/otherCalculators/BankDepositCalculator/BankDepositCalculatorPage";
import GameOfLifePage from "../pages/calculatorsPages/otherCalculators/GameOfLifePage";
import ArithmeticSequencesCalculatorPage from "../pages/calculatorsPages/sequencesCalculators/arithmeticSequenceCalculator/ArithmeticSequenceCalculatorPage";
import GeometricSequencesCalculatorPage from "../pages/calculatorsPages/sequencesCalculators/geometricSequenceCalculator/GeometricSequenceCalculatorPage";

export const calculatorRoutes = [
    { path: "kalkulator-dlugosci", element: <LengthConverterPage /> },
    { path: "kalkulator-powierzchni", element: <AreaConverterPage /> },
    { path: "kalkulator-objetosci", element: <VolumeConverterPage /> },
    { path: "kalkulator-masy", element: <WeightConverterPage /> },
    { path: "kalkulator-czasu", element: <TimeConverterPage /> },
    { path: "kalkulator-predkosci", element: <SpeedConverterPage /> },
    { path: "kalkulator-informacji", element: <InformationConverterPage /> },
    { path: "czynnik-przed-pierwiastek-kwadratowy", element: <SquareRootCalculatorPage /> },
    { path: "czynnik-przed-pierwiastek-szescienny", element: <CubeRootCalculatorPage /> },
    { path: "dzielniki", element: <DividersCalculatorPage /> },
    { path: "skracanie-ulamkow", element: <FractionReducerPage /> },
    { path: "rozklad-na-czynniki-pierwsze", element: <PrimeFactorCalculatorPage /> },
    { path: "nww-i-nwd", element: <GCDandLCMCalculatorPage /> },
    { path: "funkcji-kwadratowej", element: <QuadraticFunctionCalculatorPage /> },
    { path: "funkcji-liniowej", element: <LinearFunctionCalculatorPage /> },
    { path: "funkcji-wykladniczej", element: <ExponentialFunctionCalculatorPage /> },
    { path: "funkcji-logarytmicznej", element: <LogarithmicFunctionCalculatorPage /> },
    { path: "ciagu-arytmetycznego", element: <ArithmeticSequencesCalculatorPage /> },
    { path: "ciagu-geometrycznego", element: <GeometricSequencesCalculatorPage /> },
    { path: "gra-w-zycie", element: <GameOfLifePage /> },
    { path: "lokaty", element: <BankDepositCalculatorPage /> },
];