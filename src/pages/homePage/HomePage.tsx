import Brand from "../../assets/images/majza.eu_logo.png";
import Title from "../../components/Title/Title";
import AutorPhoto from "../../assets/images/photos/ja.jpg";
import DiplomPhoto from "../../assets/images/photos/obrona.jpg";
import MemePhoto from "../../assets/images/photos/mem1.jpg";
import ArticleBorder from "../../components/ArticleBorder/ArticleBorder";
import { NavLink } from "react-router-dom";
import GraphImage from "../../components/imageComponents/GraphImage";
import { CoreCurriculum, CoreCurriculumTypes } from "../../components/CoreCurriculum/CoreCurriculum";
import NavigateTo from "../../components/NavigateTo/NavigateTo";
import { GeneralWrapper } from "../../components/Wrappers/GeneralWrapper";
import PrivacyPolicyContent from "../privacyPolicyPage/PrivacyPolicyContent";
import React from "react";
import { iFrameStyle } from "../../styles/styles";
import { classNames } from "../../utilities";

export default function HomePage() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = React.useState(false);

  const togglePrivacyPolicy = () => {
    setShowPrivacyPolicy(!showPrivacyPolicy);
  };

  return (
    <>
      <div className="p-3 justify-center flex flex-col items-center">
        <GeneralWrapper>
          <div className="flex flex-col items-center bg-articleColor">
            <Title text="Witam na platformie majza.eu!" type="main-article" />
            <GraphImage size={"smaller"} src={AutorPhoto} alt="Autor platformy" styles=" p-[2px] bg-black rounded max-h-[300px]" />
           
            <div className="w-full">
              <Title text="A komu to potrzebne? A dlaczego?" type="main-article" />
              <p>Matematyka jest fundamentem wielu dziedzin nauki i życia codziennego. Serwis tworzę z myślą wsparcia procesu nauki matematyki na każdym etapie edukacyjnym i w myśl zasady, że wszystko należy upraszczać jak tylko można, ale nie bardziej.</p>
              <br />
              <p>Artykuły zawarte w <NavLink to="baza-wiedzy" className="hover:underline"><b>bazie wiedzy</b></NavLink> można traktować jak notatki matematyczne. Szersze wytłumaczenie zagadnień w nich opisywanych oraz więcej przykładów znajdziesz w innych źródłach. Tutaj zamieściłem same konkrety: wzory, zależności, twierdzenia i ich dowody.</p>
              <br />
              <p>Część informacji zawartych w artykułach można utrwalić oraz zweryfikować samemu dzięki dynamicznym <NavLink to="kalkulatory" className="hover:underline"><b>kalkulatorom</b></NavLink></p>
              <br />
              <p>Zachęcam do odwiedzenia <NavigateTo to="forum">forum </NavigateTo> i zakładania wątków związanych z szeroko pojętą matematyką lub związanych z działaniem platformy.</p>
              <br />
              <p>W sekcji <NavigateTo to={"/zadania-maturalne"}>zadania maturalne</NavigateTo> znajdziesz zadania, które pojawiły się na maturach z ostatnich lat, wraz z rozwiązaniami.</p>
              <br />
              <p>Dla mnie projekt majza.eu jest okazją do rozwijania umiejętności programowania. Z pewnością będzie rozwijany w wolnych chwilach jako projekt hobbystyczny.</p>
              <ArticleBorder />
              <Title text="Kim jestem?" type="main-article" />
              <p>Nazywam się Radosław Tomaszewski i jestem autorem całej zawartości niniejszego serwisu. Od ponad 5 lat udzielam korepetycji z matematyki na różnych poziomach zaawansowania. Ukończyłem studia inżynierskie na kierunku Informatyka na Wydziale Zastosowań Informatyki i Matematyki w Szkole Głównej Gospodarstwa Wiejskiego w Warszawie. Serwis <b>majza.eu</b> to temat mojej pracy dyplomowej, którą obroniłem na 5 i mam nadzieję, że to dopiero pierwszy sukces w cyklu życia platformy.</p>
              <ArticleBorder />
              <Title text="Oznaczenia" type="main-article" />
              <CoreCurriculum type={CoreCurriculumTypes.CKEPP}>
                Materiał obejmujący zagadnienia zgodne z podstawą programową w <b>formule 2023 na poziomie podstawowym</b> z uwzględnieniem <b>odchudzonej podstawy programowej</b> obowiązującej od 1 września 2024.
              </CoreCurriculum>
              <CoreCurriculum type={CoreCurriculumTypes.CKEPR}>
                Materiał obejmujący zagadnienia zgodne z podstawą programową w <b>formule 2023 na poziomie rozszerzonym</b> z uwzględnieniem <b>odchudzonej podstawy programowej</b> obowiązującej od 1 września 2024.
                Są to materiały uzupełniające wiedzę z zakresu poziomu podstawowego.
              </CoreCurriculum>
              <CoreCurriculum type={CoreCurriculumTypes.extra}>
                Zagadnienia spoza podstawy programowej oraz <b> elementy matematyki wyższej</b>, które mogą się przydać studentom kierunków inżynierskich.
              </CoreCurriculum><br />
              <b>UWAGA</b><p>powyższe oznaczenia mają jedynie charakter orientacyjny, niektóre definicje mogą wykraczać poza oznaczony zakres.</p>
              <ArticleBorder />
              <Title text="Co nowego?" type="main-article" />
              <GraphImage size={"small"} src={DiplomPhoto} alt="Autor platformy" styles=" p-[2px] bg-black rounded max-h-[300px]" />
              <p className="mt-2"></p>
             <p>[26/11/2024] <b>majza.eu</b> obroniona na 5</p>
             <p>[28/12/2024] <b>Aktualizacja:</b> Nowy układ navbar, zakładka współpraca, wprowadzenie modułu Zadania maturalne. Naprawa błędów.</p>
              <br /><p className="italic">aktualizacja: 28/12/2024</p>
              <ArticleBorder />
              <div className="w-full flex flex-col items-center">
              <Title text={"Polityka Prywatności"} type="main-article" />
                <button 
                  className="flex flex-row border-[#12874a] border-2 p-[2px] px-2 w-fit rounded-xl m-2 font-bold bg-white"
                  onClick={togglePrivacyPolicy}
                >
                  {showPrivacyPolicy ? "Zwiń politykę prywatności" : "Rozwiń politykę prywatności"}
                </button>
                {showPrivacyPolicy && <PrivacyPolicyContent />}
              </div>
              <ArticleBorder />
              <GraphImage src={MemePhoto} size={"small"} alt={"Mem matematyczny"} styles=" p-[2px] bg-black rounded max-h-[300px]" />
              <ArticleBorder />
              <Title text="Znalazłeś błąd?" type="main-article" />
              <p>Jestem autorem każdego artykułu jaki znajdziesz na <b>majza.eu</b>. Jest bardzo prawdopodobne, że znajdziesz błąd, którego nie byłem w stanie wyłapać. Może to być błąd gramatyczny lub, co gorsze, merytoryczny. W takim przypadku daj mi koniecznie o tym znać na jeden z poniższych sposobów:</p>
              <p><b>(1)</b> pisząc komentarz na podstronie, której błąd dotyczy (Baza Wiedzy / Kalkulatory)</p>
              <p><b>(2)</b> tworząc nowy wątek na <NavigateTo to="\forum">forum</NavigateTo></p>
              <p><b>(3)</b> wysyłając maila na <b>rtomaszewski@majza.eu</b></p>
              <br /><p> Z góry dziękuję :)</p>
            </div>
            <GraphImage size={"logo"} src={Brand} alt={"Logo majza.eu"} />
          </div>

        </GeneralWrapper>
      </div>
    </>);
}
