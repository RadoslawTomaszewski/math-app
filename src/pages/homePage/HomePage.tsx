import { ArticleWrapper } from "../../components/ArticleWrapper/ArticleWrapper";
import Brand from "../../assets/images/majza.eu_logo.png";
import Title from "../../components/articleItems/Title";
import AutorPhoto from "../../assets/images/photos/ja.jpg";
import ArticleBorder from "../../components/articleItems/ArticleBorder";
import { NavLink } from "react-router-dom";
import GraphImage from "../../components/articleItems/GraphImage";


export default function HomePage() {
  return (
    <>
      <div className="p-3 justify-center flex flex-col items-center">
        <ArticleWrapper>
          <div className="flex flex-col items-center bg-articleColor">
            <GraphImage size={"smaller"} src={AutorPhoto} alt="Autor platformy" extraStyle=" p-[2px] bg-black rounded max-h-[300px]" />
            <Title text="Witam na platformie majza.eu!" type="main-article" />
            <div>
              <p>Jeżeli czytasz ten tekst, oznacza to, że jesteś jednym z pierwszych użytkowników platformy matematycznej majza.eu, której jestem twórcą.
                Z racji tego, że projekt jest jeszcze w surowej fazie produkcyjnej znajdziesz tutaj na razie kilka artykułów w bazie wiedzy oraz kalkulatory matematyczne.
                Z każdym kolejnym tygodniem zawartość serwisu będzie się rozrastać.
              </p>
              <ArticleBorder />
              <Title text="Kim jestem?" type="submain-article" />
              <p>Jestem studentem Informatyki (Wydział Zastosowań Matematyki i Informatyki) na SGGW i od 4 lat udzielam korepetycji z matematyki. Moją wizytówkę znajdziesz <NavLink to="https://radoslawtomaszewski.github.io/portfolio-react-js/"><b>tutaj</b></NavLink></p>
              <ArticleBorder />
              <Title text="A komu to potrzebne? A dlaczego?" type="submain-article" />
              <p>Niniejszy serwis jest tematem pracy inżynierskiej, której będę bronił w 2024 roku.</p>
              <p>Matematyka jest fundamentem wielu dziedzin nauki i życia codziennego. Serwis tworzę z myślą wsparcia procesu nauki matematyki na każdym etapie edukacyjnym. </p>
              <p>Dla mnie projekt majza.eu jest okazją do rozwijania umiejętności programowania. Z pewnością będzie rozwijany w wolnych chwilach jako projekt hobbystyczny</p>
              <ArticleBorder />
              <Title text="Co nowego?" type="submain-article" />
              <p>Platforma już jest dostępna pod adresem: <NavLink to="https://www.majza.eu"><b>majza.eu</b></NavLink></p>
              <p>Rozdział poświęconym <b><NavLink to="baza-wiedzy/czworokaty">czworokątom</NavLink></b></p>
              <p>Aktualizacja <NavLink to="kalkulatory/gra-w-zycie"><b>gry w życie</b></NavLink></p>
              <p></p>
              <br />
              <p className="italic">aktualizacja: 11/03/2024</p>
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
