import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import "./styles/navbar.css";
import Home from "./pages/homePage/Home";
import HelplinePage from "./pages/helplinePage/HelplinePage";
import KnowledgeBasePage from "./pages/knowledgeBasePage/KnowledgeBasePage";
import ForumPage from "./pages/forumPage/ForumPage";
import LengthConverterPage from "./pages/calculatorsPages/converters/LengthConverterPage";
import AreaConverterPage from "./pages/calculatorsPages/converters/AreaConverterPage";
import VolumeConverterPage from "./pages/calculatorsPages/converters/VolumeConverterPage";
import TimeConverterPage from "./pages/calculatorsPages/converters/TimeConverterPage";
import InformationConverterPage from "./pages/calculatorsPages/converters/InformationConverterPage";
import CalculatorsPage from "./pages/calculatorsPages/CalculatorsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="baza-wiedzy" element={<KnowledgeBasePage />} />
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
            <Route path="kalkulator-czasu" element={<TimeConverterPage />} />
            <Route
              path="kalkulator-informacji"
              element={<InformationConverterPage />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
