import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import "./styles/navbar.css";
import Home from "./pages/homePage/Home";
import HelplinePage from "./pages/helplinePage/HelplinePage";
import KnowledgeBasePage from "./pages/knowledgeBasePage/KnowledgeBasePage";
import ForumPage from "./pages/forumPage/ForumPage";
import LengthConverterPage from "./pages/calculatorsPages/lengthConverterPage/LengthConverterPage";
import CalculatorsPage from "./pages/calculatorsPages/CalculatorsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* layouty można nadpisywać */}
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
            {/* lenthconverter jako page */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
