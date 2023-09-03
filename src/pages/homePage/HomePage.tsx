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
              alt="Photo of author majza.eu"
              className="h-[250px] min-w-min mb-3 text-center rounded p-[2px] bg-black"
            />
            <Title text="Witam na platformie majza.eu!" type="main-article" />
            <div>
              <p>Jeżeli czytasz ten tekst, oznacza to, że jesteś jednym z pierwszych użytkowników platformy matematycznej majza.eu, której jestem twórcą.
                Z racji tego, że projekt jest jeszcze w surowej fazie produkcyjnej znajdziesz tutaj na razie kilka artykułów w bazie wiedzy oraz kalkulatory matematyczne.
                Z każdym kolejnym tygodniem zawartość serwisu będzie się rozrastać. Od października będzie możliwość zakładania nowych wątków na forum po ówczesnym założeniu konta i zadawania pytań dotyczących rozwiązań danego zadania.
              </p>
              <ArticleBorder />
              <Title text="Kim jestem?" type="submain-article" />
              <p>Nazywam się Radosław Tomaszewski. Studiuję Informatykę na Wydziale Zastosowań Matematyki i Informatyki na SGGW i od 4 lat zajmuję się udzielaniem korepetycji z matematyki. Moją wizytówkę znajdziesz <NavLink to="https://radoslawtomaszewski.github.io/portfolio-react-js/"><b>tutaj</b></NavLink></p>
              <ArticleBorder />
              <Title text="A komu to potrzebne? A dlaczego?" type="submain-article" />
              <p>Niniejszy serwis jest tematem pracy inżynierskiej, której będę bronił w 2024 roku.</p>
              <p>Matematyka jest fundamentem wielu dziedzin nauki i życia codziennego. Serwis tworzę z myślą wsparcia procesu nauki matematyki na każdym etapie edukacyjnym. </p>
              <p>Dla mnie projekt majza.eu jest częścią portfolio i okazją do rozwijania umiejętności programowania</p>
              <ArticleBorder />
              <Title text="Co nowego?" type="submain-article" />
              <p>Artykuł definiujący <NavLink to="baza-wiedzy/dodawanie"><b>dodawanie</b></NavLink></p>
              <p>Artykuł definiujący <NavLink to="baza-wiedzy/odejmowanie"><b>odejmowanie</b></NavLink></p>
              <p>Artykuł definiujący <NavLink to="baza-wiedzy/mnozenie"><b>mnożenie</b></NavLink></p>
              <p>Artykuł definiujący <NavLink to="baza-wiedzy/dzielenie"><b>dzielenie</b></NavLink></p>
              <p>Artykuł definiujący <NavLink to="baza-wiedzy/potegowanie"><b>potęgowanie</b></NavLink></p>
              <p>Artykuł definiujący <NavLink to="baza-wiedzy/logarytmy"><b>logarytmy</b></NavLink></p>
              <br />
              <p>Kalkulator <NavLink to="kalkulatory/czynnik-przed-pierwiastek-kwadratowy"><b>wyłączania czynnika przed pierwiastek</b></NavLink></p>
              <br />
              <p className="italic">aktualizacja: 03/09/2023</p>

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
