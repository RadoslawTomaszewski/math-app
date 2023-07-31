import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/navbar.css";

//LAYOUTS
import { Layout } from "./Layout";
import { KnowledgeBaseLayout } from "./Layout/knowledgeBaseLayout";
import { CalculatorsLayout } from "./Layout/calculatorsLayout";
//MAIN PAGES
import Home from "./pages/homePages/Home";
import HelplinePage from "./pages/helplinePage/HelplinePage";
import KnowledgeBasePage from "./pages/knowledgeBasePages/KnowledgeBasePage";
import ForumPage from "./pages/forumPages/ForumPage";
import CalculatorsPage from "./pages/calculatorsPages/CalculatorsPage";
//CALCULATORS
import LengthConverterPage from "./pages/calculatorsPages/converters/LengthConverterPage";
import AreaConverterPage from "./pages/calculatorsPages/converters/AreaConverterPage";
import VolumeConverterPage from "./pages/calculatorsPages/converters/VolumeConverterPage";
import WeightConverterPage from "./pages/calculatorsPages/converters/WeightConverterPage";
import TimeConverterPage from "./pages/calculatorsPages/converters/TimeConverterPage";
import SpeedConverterPage from "./pages/calculatorsPages/converters/SpeedConverterPage";
import InformationConverterPage from "./pages/calculatorsPages/converters/InformationConverterPage";
import SquareRootCalculator from "./pages/calculatorsPages/arithmeticCalculators/SquareRootCalculator";
import CubeRootCalculator from "./pages/calculatorsPages/arithmeticCalculators/CubeRootCalculator";
import GameOfLife from "./pages/calculatorsPages/otherCalculators/GameOfLife";
//KNOWLEDGE BASE
import LinearFunctionPage from "./pages/knowledgeBasePages/functionsPages/linearFunction/LinearFunctionPage";
import QuadraticFunctionPage from "./pages/knowledgeBasePages/functionsPages/quadraticFunction/QuadraticFunctionPage";
import ArithmeticSequencePage from "./pages/knowledgeBasePages/sequencesPages/arithmeticSequence/ArithmeticSequencePage";
import GeometricSequencePage from "./pages/knowledgeBasePages/sequencesPages/geometricSequence/GeometricSequencePage";
import ShortMultiplicationPage from "./pages/knowledgeBasePages/algebraicExpressionPages/shortMultiplicationFormulas/ShortMultiplicationFormulasPage";
import PiNumberPage from "./pages/knowledgeBasePages/constantsPages/PiNumber/PiNumberPage";
import NaturalNumberPage from "./pages/knowledgeBasePages/sets/naturalNumbers/NaturalNumberPage";

//WORK IN PROGRESS
import WorkInProgress from "./components/WorkInProgress/WorkInProgress";

const App = () => {
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
            <Route path="*" element={<WorkInProgress />} />
          </Route>
          <Route path="forum" element={<ForumPage />} />
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
              element={<SquareRootCalculator />}
            />
            <Route
              path="czynnik-przed-pierwiastek-szescienny"
              element={<CubeRootCalculator />}
            />
            <Route path="gra-w-zycie" element={<GameOfLife />} />
            <Route path="*" element={<WorkInProgress />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
