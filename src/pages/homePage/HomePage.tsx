import { ArticleWrapper } from "../../components/ArticleWrapper/ArticleWrapper";
import Brand from "../../assets/images/majza.eu_logo.png";
import Title from "../../components/articleItems/Title";
import AutorPhoto from "../../assets/images/photos/ja.jpg";
import ArticleBorder from "../../components/articleItems/ArticleBorder";
import { NavLink } from "react-router-dom";


export default function HomePage() {
  return (
    <>
      <div className="p-3 justify-center flex flex-col items-center">
        <ArticleWrapper>
          <div className="flex flex-col items-center bg-articleColor">
            <img
              src={AutorPhoto}
              alt="author majza.eu"
              className="h-[250px] min-w-min mb-3 text-center rounded p-[2px] bg-black"
            />
            <Title text="Witam na platformie majza.eu!" type="main-article" />
            <div>
              <p>Jeżeli czytasz ten tekst, oznacza to, że jesteś jednym z pierwszych użytkowników platformy matematycznej majza.eu, której jestem twórcą.
                Z racji tego, że projekt jest jeszcze w surowej fazie produkcyjnej znajdziesz tutaj na razie kilka artykułów w bazie wiedzy oraz kalkulatory matematyczne.
                Z każdym kolejnym tygodniem zawartość serwisu będzie się rozrastać
              </p>
              <ArticleBorder />
              <Title text="Kim jestem?" type="submain-article" />
              <p>Nazywam się Radosław Tomaszewski. Studiuję Informatykę na Wydziale Zastosowań Matematyki i Informatyki na SGGW i od 4 lat zajmuję się udzielaniem korepetycji z matematyki. Moją wizytówkę znajdziesz <NavLink to="https://radoslawtomaszewski.github.io/portfolio-react-js/"><b>tutaj</b></NavLink></p>
              <ArticleBorder />
              <Title text="A komu to potrzebne? A dlaczego?" type="submain-article" />
              <p>Niniejszy serwis jest tematem pracy inżynierskiej, której będę bronił w 2024 roku.</p>
              <p>Matematyka jest fundamentem wielu dziedzin nauki i życia codziennego. Serwis tworzę z myślą wsparcia procesu nauki matematyki na każdym etapie edukacyjnym. </p>
              <p>Dla mnie projekt majza.eu jest częścią portfolio i okazją do rozwijania umiejętności programowania. Z pewnością będzie rozwijany w wolnych chwilach jako projekt hobbystyczny</p>
              <ArticleBorder />
              <Title text="Co nowego?" type="submain-article" />
              <p>Aktualizacja artykułu definiującego <NavLink to="baza-wiedzy/logarytmy"><b>funkcję kwadratową</b></NavLink></p>
              <p><NavLink to="kalkulatory/skracanie-ulamkow"><b>Kalkulator skracania ułamków</b></NavLink></p>
              <p>Kalkulator <NavLink to="kalkulatory/czynnik-przed-pierwiastek-kwadratowy"><b>wyłączania czynnika przed pierwiastek sześcienny</b> teraz działa również dla wartości ujemnych</NavLink></p>
              <p><NavLink to="kalkulatory/funkcji-kwadratowej"><b>Kalkulator funkcji kwadratowej</b> - ostatnia aktualizacja: 28/02/2024</NavLink></p>
              <p><NavLink to="kalkulatory/funkcji-liniowej"><b>Kalkulator funkcji liniowej</b> - ostatnia aktualizacja: 28/02/2024</NavLink></p>
              <br />
              <br />
              <p className="italic">aktualizacja: 28/02/2024</p>

            </div>
            <img
              src={Brand}
              alt="Logo majza.eu"
              className="h-[50px] min-w-min mb-3 text-center"
            />
          </div>

        </ArticleWrapper>
      </div>
    </>);
}
