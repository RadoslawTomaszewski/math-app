import PolynomialPage from "../pages/knowledgeBasePages/algebraicExpressionPages/polynomial/PolynomialPage";
import ShortMultiplicationPage from "../pages/knowledgeBasePages/algebraicExpressionPages/shortMultiplicationFormulas/ShortMultiplicationFormulasPage";
import AdditionPage from "../pages/knowledgeBasePages/arithmeticPages/addition/AdditionPage";
import ArithmeticPage from "../pages/knowledgeBasePages/arithmeticPages/ArithmeticPage";
import DivisionPage from "../pages/knowledgeBasePages/arithmeticPages/division/DivisionPage";
import ExponentiationPage from "../pages/knowledgeBasePages/arithmeticPages/exponentiation/ExponentiationPage";
import LogarithmPage from "../pages/knowledgeBasePages/arithmeticPages/logarithm/LogarithmPage";
import MultiplicationPage from "../pages/knowledgeBasePages/arithmeticPages/multiplication/MultiplicationPage";
import RootPage from "../pages/knowledgeBasePages/arithmeticPages/root/RootPage";
import SubtractionPage from "../pages/knowledgeBasePages/arithmeticPages/subtraction/SubtractionPage";
import TetrationPage from "../pages/knowledgeBasePages/arithmeticPages/tetration/TetrationPage";
import PiNumberPage from "../pages/knowledgeBasePages/constantsPages/PiNumber/PiNumberPage";
import HomographicFunctionPage from "../pages/knowledgeBasePages/functionsPages/homographicFunction/HomographicFunctionPage";
import LinearFunctionPage from "../pages/knowledgeBasePages/functionsPages/linearFunction/LinearFunctionPage";
import QuadraticFunctionPage from "../pages/knowledgeBasePages/functionsPages/quadraticFunction/QuadraticFunctionPage";
import LinePage from "../pages/knowledgeBasePages/geometryPages/LinePage/LinePage";
import PointPage from "../pages/knowledgeBasePages/geometryPages/PointPage/PointPage";
import DerivedFunctionPage from "../pages/knowledgeBasePages/mathAnalysisPages/derivedFunction/DerivedFunctionPage";
import MonotonicityExtremumPage from "../pages/knowledgeBasePages/mathAnalysisPages/monotonicityExtremum/monotonicityExtremumPage";
import CirclesRelationsPage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/CirclesRelations/CirclesRelationsPage";
import DeltoidPage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/Deltoid/DeltoidPage";
import DiamondPage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/Diamond/DiamondPage";
import IsoscelesTrapeziumPage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/IsoscelesTrapezium/IsoscelesTrapeziumPage";
import ParallelogramPage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/Parallelogram/ParallelogramPage";
import QuadranglesPage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/QuadranglesPage";
import RectanglePage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/Rectangle/RectanglePage";
import RectangularTrapeziumPage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/RectangularTrapezium/RectangularTrapeziumPage";
import SquarePage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/Square/SquarePage";
import TrapeziumPage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/Trapezium/TrapeziumPage";
import TrapezoidPage from "../pages/knowledgeBasePages/planimetryPages/Quadrangles/Trapezoid/TrapezoidPage";
import EquilateralTrianglePage from "../pages/knowledgeBasePages/planimetryPages/Triangles/EquilateralTriangle/EquilateralTrianglePage";
import TheoremsPage from "../pages/knowledgeBasePages/planimetryPages/Triangles/Theorems/TheoremsPage";
import TriangleAreaPage from "../pages/knowledgeBasePages/planimetryPages/Triangles/TriangleArea/TriangleAreaPage";
import TriangleCategoryPage from "../pages/knowledgeBasePages/planimetryPages/Triangles/TriangleCategories/TriangleCategoriesPage";
import TrianglesPage from "../pages/knowledgeBasePages/planimetryPages/Triangles/TrianglesPage";
import ArithmeticSequencePage from "../pages/knowledgeBasePages/sequencesPages/arithmeticSequence/ArithmeticSequencePage";
import GeometricSequencePage from "../pages/knowledgeBasePages/sequencesPages/geometricSequence/GeometricSequencePage";
import NaturalNumberPage from "../pages/knowledgeBasePages/sets/naturalNumbers/NaturalNumberPage";
import SetOperationsPage from "../pages/knowledgeBasePages/sets/setOperations/SetOperationsPage";
import AveragesPage from "../pages/knowledgeBasePages/statisticPages/Averages/AveragesPage";

export const knowledgeBaseRoutes = [
    { path: "funkcja-liniowa", element: <LinearFunctionPage /> },
    { path: "funkcja-kwadratowa", element: <QuadraticFunctionPage /> },
    { path: "funkcja-homograficzna", element: <HomographicFunctionPage /> },
    { path: "ciag-arytmetyczny", element: <ArithmeticSequencePage /> },
    { path: "ciag-geometryczny", element: <GeometricSequencePage /> },
    { path: "wzory-skroconego-mnozenia", element: <ShortMultiplicationPage /> },
    { path: "wielomiany", element: <PolynomialPage /> },
    { path: "liczba-pi", element: <PiNumberPage /> },
    { path: "liczby-naturalne", element: <NaturalNumberPage /> },
    { path: "arytmetyka", element: <ArithmeticPage /> },
    { path: "dodawanie", element: <AdditionPage /> },
    { path: "odejmowanie", element: <SubtractionPage /> },
    { path: "mnozenie", element: <MultiplicationPage /> },
    { path: "dzielenie", element: <DivisionPage /> },
    { path: "potegowanie", element: <ExponentiationPage /> },
    { path: "pierwiastkowanie", element: <RootPage /> },
    { path: "logarytmowanie", element: <LogarithmPage /> },
    { path: "tetracja", element: <TetrationPage /> },
    { path: "dzialania-na-zbiorach", element: <SetOperationsPage /> },
    { path: "srednie-liczbowe", element: <AveragesPage /> },
    { path: "prosta", element: <LinePage /> },
    { path: "punkt", element: <PointPage /> },
    { path: "czworokaty", element: <QuadranglesPage /> },
    { path: "trapezoid", element: <TrapezoidPage /> },
    { path: "trapez", element: <TrapeziumPage /> },
    { path: "trapez-prostokatny", element: <RectangularTrapeziumPage /> },
    { path: "trapez-rownoramienny", element: <IsoscelesTrapeziumPage /> },
    { path: "rownoleglobok", element: <ParallelogramPage /> },
    { path: "prostokat", element: <RectanglePage /> },
    { path: "romb", element: <DiamondPage /> },
    { path: "deltoid", element: <DeltoidPage /> },
    { path: "kwadrat", element: <SquarePage /> },
    { path: "relacja-z-okregiem", element: <CirclesRelationsPage /> },
    { path: "pochodna-funkcji", element: <DerivedFunctionPage /> },
    { path: "monotonicznosc-i-ekstremum", element: <MonotonicityExtremumPage /> },
    { path: "twierdzenia", element: <TheoremsPage /> },
    { path: "trojkaty", element: <TrianglesPage /> },
    { path: "podzial-trojkatow", element: <TriangleCategoryPage /> },
    { path: "trojkat-rownoboczny", element: <EquilateralTrianglePage /> },
    { path: "pole-trojkata", element: <TriangleAreaPage /> },
];