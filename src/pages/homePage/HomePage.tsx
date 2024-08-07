import Brand from "../../assets/images/majza.eu_logo.png";
import Title from "../../components/Title/Title";
import AutorPhoto from "../../assets/images/photos/ja.jpg";
import ArticleBorder from "../../components/ArticleBorder/ArticleBorder";
import { NavLink } from "react-router-dom";
import GraphImage from "../../components/imageComponents/GraphImage";
import { CoreCurriculum, CoreCurriculumTypes } from "../../components/CoreCurriculum/CoreCurriculum";
import NavigateTo from "../../components/NavigateTo/NavigateTo";
import { GeneralWrapper } from "../../components/Wrappers/GeneralWrapper";


export default function HomePage() {
  return (
    <>
      <div className="p-3 justify-center flex flex-col items-center">
        <GeneralWrapper>
          <div className="flex flex-col items-center bg-articleColor">
            <GraphImage size={"smaller"} src={AutorPhoto} alt="Autor platformy" styles=" p-[2px] bg-black rounded max-h-[300px]" />
            <Title text="Witam na platformie majza.eu!" type="main-article" />
            <div>
              <p>Jeżeli czytasz ten tekst, oznacza to, że jesteś jednym z pierwszych użytkowników platformy matematycznej majza.eu, której jestem twórcą.
                Z racji tego, że projekt jest jeszcze we wczesnej fazie produkcyjnej mogą się pojawiać błędy. Platforma ma charakter hobbystyczny ale nie wykluczam przeznaczenia jej do celów komercyjnych w przyszłości. Warto spieszyć się z <NavigateTo to="/premium">założeniem konta premium</NavigateTo>, póki jest darmowe :)
              </p>
              <ArticleBorder />
              <Title text="Kim jestem?" type="main-article" />
              <p>Jestem studentem Informatyki (Wydział Zastosowań Matematyki i Informatyki) na SGGW i od 5 lat udzielam korepetycji z matematyki</p>
              <ArticleBorder />
              <Title text="A komu to potrzebne? A dlaczego?" type="main-article" />
              <p>Matematyka jest fundamentem wielu dziedzin nauki i życia codziennego. Serwis tworzę z myślą wsparcia procesu nauki matematyki na każdym etapie edukacyjnym i w myśl zasady, że wszystko należy upraszczać jak tylko można, ale nie bardziej.</p>
              <br />
              <p>Artykuły zawarte w <NavLink to="baza-wiedzy" className="hover:underline"><b>bazie wiedzy</b></NavLink> można traktować jak notatki matematyczne. Szersze wytłumaczenie zagadnień w nich opisywanych oraz więcej przykładów znajdziesz w innych źródłach. Tutaj zamieściłem same konkrety: wzory, zależności, twierdzenia i ich dowody.</p>
              <br />
              <p>Część informacji zawartych w artykułach można utrwalić oraz zweryfikować samemu dzięki dynamicznym <NavLink to="kalkulatory" className="hover:underline"><b>kalkulatorom</b></NavLink></p>
              <br />
              <p>Zachęcam do odwiedzenia <NavigateTo to="\forum">forum </NavigateTo> i zakładania wątków związanych z szeroko pojętą matematyką lub związanych z działaniem platformy.</p>
              <br />
              <p>Dla mnie projekt majza.eu jest okazją do rozwijania umiejętności programowania. Z pewnością będzie rozwijany w wolnych chwilach jako projekt hobbystyczny.</p>
              <ArticleBorder />
              <Title text="Oznaczenia" type="main-article" />
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
              <b>UWAGA</b><p>powyższe oznaczenia mają jedynie charakter orientacyjny, niektóre definicje mogą wykraczać poza oznaczony zakres.</p>
              <ArticleBorder />
              <Title text="Co nowego?" type="main-article" />
              <p>[01/08/2024] <NavigateTo to="kalkulatory/dzielniki"><b>Kalkulator wypisujący dzielniki liczby</b></NavigateTo></p>
              <p>[02/08/2024] <NavigateTo to="\forum">Forum</NavigateTo> gotowe :)</p>
              <p>[02/08/2024] Wdrożenie funkcji konta <NavigateTo to="./premium">Premium</NavigateTo> (obecnie w pełni darmowe, wystarczy założyć konto i rozwiązać zagadkę)</p>
              <p>[08/08/2024] Naprawa błędów</p>
              <br /><p className="italic">aktualizacja: 08/08/2024</p>
              <ArticleBorder />
              <Title text="Polityka prywatności" type="main-article" />
              <p>Przeczytaj: <NavLink to="polityka-prywatnosci" className="hover:underline"><b>Polityka prywatności</b></NavLink></p>
              <ArticleBorder />
              <Title text="Znalazłeś błąd?" type="main-article" />
              <p>Jestem autorem każdego artykułu jaki znajdziesz na <b>majza.eu</b>. Jest bardzo prawdopodobne, że znajdziesz błąd, którego nie byłem w stanie wyłapać. Może to być błąd gramatyczny lub, co gorsze, merytoryczny. W takim przypadku daj mi koniecznie o tym znać na jeden z poniższych sposobów:</p>
              <p><b>(1)</b> pisząc komentarz na podstronie, której błąd dotyczy (Baza Wiedzy / Kalkulatory)</p>
              <p><b>(2)</b> tworząc nowy wątekna <NavigateTo to="\forum">Forum</NavigateTo></p>
              <p><b>(3)</b> wysyłając maila na <b>rtomaszewski@majza.eu</b></p>
              <br /><p> Z góry dziękuję :)</p>
            </div>
            <GraphImage size={"logo"} src={Brand} alt={"Logo majza.eu"} />
          </div>

        </GeneralWrapper>
      </div>
    </>);
}
