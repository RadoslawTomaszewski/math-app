import { NavLink } from "react-router-dom";
import Title from "../../components/Title/Title";
import { GeneralWrapper } from "../../components/Wrappers/GeneralWrapper";

export default function PrivacyPolicyPage() {
    return (
        <div className="p-3 justify-center flex flex-col items-center">
            <GeneralWrapper>
                <div className="flex flex-col bg-articleColor p-4">
                    <Title text={"Polityka Prywatności"} type="main-article" />
                    <p><b>(1) Administrator danych osobowych.</b></p>
                    <p className="ml-5">Administratorem danych osobowych w serwisie <b>majza.eu</b> w rozumieniu przepisów o ochronie danych osobowych jest Radosław Tomaszewski, z którym możesz się skontaktować przez adres e-mail: <b>rtomaszewski@majza.eu</b></p>
                    <br />
                    <p><b>(2) Rodzaje gromadzonych danych.</b></p>
                    <p className="ml-5"><b>a. dane wprowadzane przez użytkownika podczas rejestracji konta:</b></p>
                    <div className="ml-8">
                        <ul className="list-disc ml-5">
                            <li><b>nick</b>, czyli nazwa użytkownika wprowadzona przez użytkownika wyświetlana publicznie w przypadku aktywnego korzystania z forum. Administrator strony ma do niej wgląd w panelu usługi Firebase.</li>
                            <li><b>adres e-mail</b>, za pomocą którego użytkownik jest zdolny założyć konto. Adres e-mail nie jest widoczny dla innych użytkowników, ale jest widoczny dla zalogowanego użytkownika. Administrator strony ma wgląd do tej informacji w panelu usługi Firebase.</li>
                            <li><b>hasło</b>, które jest zaszyfrowanym ciągiem znaków wymyślony przez użytkownika i znany jedynie właścicielowi konta. Wartości skrótu haseł są obliczane przy użyciu skomplikowanych algorytmów kryptograficznych, dzięki którym nawet w przypadku wycieku bazy danych hasła użytkowników pozostają bezpieczne i nieodwracalne. Hasła są jednokierunkowo haszowane, co oznacza, że nie można ich odzyskać z wartości skrótu. W praktyce oznacza to, że nawet administrator systemu nie ma możliwości odszyfrowania hasła użytkownika. </li>
                        </ul>
                    </div>
                    <p className="ml-5"><b>b. dane analityczne</b></p>
                    <div className="ml-8">
                        <ul className="list-disc ml-5">
                            <li>dane zbierane przez Google Analytics w celu analizy użyteczności i skuteczności naszej aplikacji. Dane te mogą obejmować zachowania użytkowników na stronie, takie jak czas spędzony na stronie, odwiedzone strony, lokalizację geograficzną (na podstawie adresu IP), typ urządzenia i przeglądarki. Więcej informacji: <NavLink to="https://policies.google.com/privacy" className="hover:underline"><b>Polityka Prywatności Google</b></NavLink>
                            </li>
                        </ul>
                    </div>
                    <p className="ml-5"><b>c. daty aktywności na koncie:</b></p>
                    <div className="ml-8">
                        <ul className="list-disc ml-5">
                            <li>informacje o dacie rejestracji użytkownika konta.</li>
                            <li>informacje o dacie ostatniego logowania oraz aktywności na koncie wykonanych w obrębie serwisu.</li>
                        </ul>
                    </div>
                    <br />
                    <p><b>(3) Wykorzystanie Danych</b></p>
                    <ul className="list-disc ml-5">
                        <li><b>dane identyfikacyjne</b> (nick oraz e-mail) użytkownika są wykorzystywane do personalizacji doświadczenia użytkownika w aplikacji oraz w celu komunikacji z użytkownikiem, głównie w przypadku resetowania hasła.</li>
                        <li><b>dane logowania</b> (adres e-mail oraz hasło) są wykorzystywane do uwierzytelniania użytkownika i zapewnienia bezpieczeństwa konta.</li>
                        <li><b>dane analityczne</b> zbierane przez Google Analytics są wykorzystywane w celu analizy zachowań użytkowników i doskonalenia platformy <b>majza.eu</b>.</li>
                    </ul>
                    <br />
                    <p><b>(4) Udostępnianie Danych</b></p>
                    <p className="ml-5">Nigdy nie udostępniam Twoich danych stronom trzecim, zastrzegam jednak taką możliwość, jeżeli jest to wymagane przez prawo (mowa o udostępnianiu informacji organom publicznym przeciwdziałającym nadużyciom).</p>
                    <br />
                    <p><b>(5) Bezpieczeństwo Danych</b></p>
                    <p className="ml-5"><b>a. Szyfrowanie haseł:</b></p>
                    <div className="ml-8">
                        <ul className="list-disc ml-5"><li> Hasła użytkowników są bezpiecznie przechowywane dzięki zastosowaniu silnego algorytmu haszowania SCRYPT dostarczonego przez usługę Firebase. <NavLink to="https://github.com/firebase/scrypt" className="hover:underline"><b>Więcej informacji.</b></NavLink> </li>
                        </ul>
                    </div>
                    <p className="ml-5"><b>b. Bezpieczeństwo Firebase:</b></p>
                    <div className="ml-8">
                        <ul className="list-disc ml-5"><li>Korzystam z usług Firebase do zarządzania danymi użytkowników oraz dostarczania funkcji backendowych aplikacji. Firebase zapewnia zaawansowane mechanizmy bezpieczeństwa, w tym autoryzację, uwierzytelnianie i kontrolę dostępu, aby zabezpieczyć dane użytkowników przed nieuprawnionym dostępem, utratą lub kradzieżą. Więcej informacji na temat bezpieczeństwa Firebase można znaleźć w <NavLink to="https://firebase.google.com/support/privacy" className="hover:underline"><b>Polityce Prywatności Firebase</b></NavLink>.</li>
                        </ul>
                    </div>
                    <br />
                    <p><b>(6) Prawa Użytkowników</b></p>
                    <ul className="list-disc ml-5">
                        <li>Masz prawo do niewyrażenia zgody na przetwarzanie Twoich danych osobowych</li>
                        <li>Masz prawo do żądania usunięcia swoich danych z platformy. W takim przypadku należy skontaktować się z administratorem serwisu.</li>
                    </ul>
                    <br />
                    <p><b>(7) Opłaty</b></p>
                    <ul className="list-disc ml-5">
                        <li><b>majza.eu</b> jest darmową platformą. Rejestracja konta i dostęp do zasobów strony jest w pełni darmowy. Zastrzegam sobie jednak prawo do wprowadzenia opłat w przyszłości.</li>
                        <li>Dobrowolna wpłata w formie darowizny dla autora projektu, którą znajdziesz w zakładce <NavLink to='../wsparcie'><b> wsparcie, </b></NavLink> w całości zostanie przeznaczona na dalszy rozwój serwisu, w tym na utrzymanie kosztów hostingu i domeny.</li>
                    </ul>
                    <br />
                    <p><b>(8) Pliki Cookies (ciasteczka)</b></p>
                    <p className="ml-5">Pliki cookie to pliki tekstowe o małych rozmiarach przechowywane na urządzeniu użytkownika podczas odwiedzania strony internetowej. Są wykorzystywane w celu zapewnienia prawidłowego działania strony. Pliki cookie są wykorzystywane do zbierania danych analitycznych o zachowaniach użytkowników na stronie.</p>
                    <br />
                    <p className="ml-5">Na stronie <b>majza.eu</b> stosuję pliki cookie w celu analizy użyteczności strony oraz zachowań użytkowników za pomocą narzędzia Google Analytics</p>
                    <br />
                    <p className="ml-5">Korzystając z <b>majza.eu</b>, zgadzasz się na wykorzystanie plików cookie zgodnie z polityką prywatności. W każdej chwili możesz zmienić ustawienia dotyczące plików cookie w swojej przeglądarce internetowej lub całkowicie je wyłączyć.</p>
                    <br />
                    <p><b>(9) Kontakt</b></p>
                    <p className="ml-5">Jeśli masz jakiekolwiek pytania dotyczące polityki prywatności lub sposobu, w jaki przetwarzam Twoje dane, proszę o kontakt pod adresem e-mail: <b>rtomaszewski@majza.eu</b></p>
                    <br />
                    <p>Dziękuję za korzystanie z <b>majza.eu</b>.</p>
                </div>
            </GeneralWrapper>
        </div >
    );
}
