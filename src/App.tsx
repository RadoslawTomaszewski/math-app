import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import "./styles/navbar.css";
import Home from "./pages/home/Home";
import Kalkulatory from "./pages/kalkulatoryPage/Kalkulatory";
import Pogotowie from "./pages/pogotowiePage/Pogotowie";
import BazaWiedzy from "./pages/bazawiedzyPage/BazaWiedzy";
import Forum from "./pages/forumPage/Forum";
import PrzelicznikDlugosci from "./components/kalkulatory/PrzelicznikDlugosci";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="baza-wiedzy" element={<BazaWiedzy />} />
          <Route path="forum" element={<Forum />} />
          <Route path="kalkulatory" element={<Kalkulatory />} />
          <Route path="pogotowie" element={<Pogotowie />} />

          <Route
            path="kalkulatory/dlugosci"
            element={<PrzelicznikDlugosci />}
          />
          <Route
            path="kalkulatory/fkwadratowa"
            element={<PrzelicznikDlugosci />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
