import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/navbar.css";
//LAYOUTS
import { Layout } from "./Layout";
import { KnowledgeBaseLayout } from "./Layout/knowledgeBaseLayout";
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
import SquareRootCalculator from "./pages/calculatorsPages/otherCalculators/SquareRootCalculator";
//KNOWLEDGE BASE
import LinearFunctionPage from "./pages/knowledgeBasePages/functionsPages/LinearFunctionPage";
import QuadraticFunctionPage from "./pages/knowledgeBasePages/functionsPages/QuadraticFunctionPage";

const App = () => {
  return (
    <BrowserRouter>
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
          </Route>
          <Route path="forum" element={<ForumPage />} />
          <Route path="pogotowie" element={<HelplinePage />} />
          <Route path="kalkulatory">
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
              path="czynnik-przed-pierwiastek"
              element={<SquareRootCalculator />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
