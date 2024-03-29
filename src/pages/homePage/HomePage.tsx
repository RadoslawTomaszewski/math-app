import { ArticleWrapper } from "../../components/ArticleWrapper/ArticleWrapper";
import Brand from "../../assets/images/majza.eu_logo.png";
import Title from "../../components/articleItems/Title";
import AutorPhoto from "../../assets/images/photos/ja.jpg";
import ArticleBorder from "../../components/articleItems/ArticleBorder";
import { NavLink } from "react-router-dom";
import GraphImage from "../../components/articleItems/GraphImage";
import { CoreCurriculum, CoreCurriculumTypes } from "../../components/CoreCurriculum/CoreCurriculum";


export default function HomePage() {
  return (
    <>
      <div className="p-3 justify-center flex flex-col items-center">
        <ArticleWrapper>
          <div className="flex flex-col items-center bg-articleColor">
            <GraphImage size={"smaller"} src={AutorPhoto} alt="Autor platformy" styles=" p-[2px] bg-black rounded max-h-[300px]" />
            <Title text="Witam na platformie majza.eu!" type="main-article" />
            <div>
              <p>Jeżeli czytasz ten tekst, oznacza to, że jesteś jednym z pierwszych użytkowników platformy matematycznej majza.eu, której jestem twórcą.
                Z racji tego, że projekt jest jeszcze we wczesnej fazie produkcyjnej znajdziesz tutaj na razie kilka artykułów w bazie wiedzy oraz kalkulatory matematyczne.
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
              <Title text="Oznaczenia" type="submain-article" />
              Na tej platformie znajdziesz następujące oznaczenia:
              <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                Materiał obejmujący zagadnienia zgodne z podstawą programową CKE od matury w <b>formule 2025 na poziomie podstawowym.</b> W zdecydowanej większości przypadków są to również zagadnienia związane z podstawą programową w formule 2023.
              </CoreCurriculum>
              <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
                Materiał obejmujący zagadnienia zgodne z podstawą programową CKE od matury w <b>formule 2025 na poziomie rozszerzonym.</b> W zdecydowanej większości przypadków są to również zagadnienia związane z podstawą programową w formule 2023.
                Są to materiały uzupełniające wiedzę z zakresu poziomu podstawowego.
              </CoreCurriculum>
              <CoreCurriculum type={CoreCurriculumTypes.extra}>
                Zagadnienia, których prawdopodobnie nie znajdziesz w podręcznikach zgodnych z podstawą programową CKE oraz <b> elementy matematyki wyższej</b>, które mogą się przydać studentom kierunków inżynierskich.
              </CoreCurriculum><br />
              <b>UWAGA</b><p>powyższe oznaczenia mają jedynie charakter orientacyjny,sporadycznie definicje mogą wykraczać poza określony zakres.</p>
              <ArticleBorder />
              <Title text="Co nowego?" type="submain-article" />
              <p>Platforma już jest dostępna pod adresem: <NavLink to="https://www.majza.eu"><b>majza.eu</b></NavLink></p>
              <p>Artykuł o <NavLink to="baza-wiedzy/pochodna-funkcji"><b>pochodnej funkcji</b></NavLink></p>
              <br />
              <p className="italic">aktualizacja: 26/03/2024</p>

              <ArticleBorder />
              <Title text="Znalazłeś błąd?" type="submain-article" />
              <p>Jestem autorem każdego artykułu jaki znajdziesz na <b>majza.eu</b>. Jest bardzo prawdopodobne, że znajdziesz błąd, którego nie byłem w stanie wyłapać. Może to być błąd gramatyczny lub, co gorsze, merytoryczny.</p>
              <p>W takim przypadku daj mi koniecznie o tym znać pisząc maila na <b>rtomaszewski@majza.eu</b></p>
              <p> Z góry dziękuję :)</p>
            </div>
            <GraphImage size={"logo"} src={Brand} alt={"Logo majza.eu"} />
          </div>

        </ArticleWrapper>
      </div>
    </>);
}
