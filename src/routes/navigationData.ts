import { SidebarCategory } from "../components/Sidebar/SidebarCategoryItem";

const gray = "text-gray-400";

export const sidebarLinksKnowledgeBase: SidebarCategory[] = [
    {
        category: { to: "arytmetyka", text: "Arytmetyka" },
        links: [
            { to: "dodawanie", text: "Dodawanie" },
            { to: "odejmowanie", text: "Odejmowanie" },
            { to: "mnozenie", text: "Mnożenie" },
            { to: "dzielenie", text: "Dzielenie" },
            { to: "potegowanie", text: "Potęgowanie" },
            { to: "pierwiastkowanie", text: "Pierwiastkowanie" },
            { to: "logarytmowanie", text: "logarytmy" },
            { to: "tetracja", text: "tetracja" },
        ],
    },
    {
        category: { to: "Symbole matematyczne", text: "Symbole matematyczne" },
        links: [
            { to: "wartosc-bezwzgledna", text: "Wartość bezwzględna", color: gray },
            { to: "silnia", text: "Silnia", color: gray },
            { to: "symbol-newtona", text: "Symbol Newtona", color: gray },
        ],
    },
    {
        category: { to: "zbiory", text: "Zbiory" },
        links: [
            { to: "dzialania-na-zbiorach", text: "Działania na zbiorach" },
            { to: "przedziały", text: "Przedziały", color: gray },
            { to: "liczby-naturalne", text: "Liczby naturalne" },
            { to: "liczby-całkowite", text: "Liczby całkowite", color: gray },
            { to: "liczby-wymierne", text: "Liczby wymierne", color: gray },
            { to: "liczby-niewymierne", text: "Liczby niewymierne", color: gray },
            { to: "liczby-rzeczywiste", text: "Liczby rzeczywiste", color: gray },
            { to: "liczby-zespolone", text: "Liczby zespolone", color: gray },
        ],
    },
    {
        category: { to: "geometria", text: "Geometria" },
        links: [
            { to: "punkt", text: "Punkt", color: gray },
            { to: "prosta", text: "Prosta" },
            { to: "odcinek", text: "odcinek", color: gray },
        ],
    },
    {
        category: { to: "trojkaty", text: "Trójkąty" },
        links: [
            { to: "podzial-trojkatow", text: "Podział trójkątów" },
            { to: "trojkat-rownoboczny", text: "Trójkąt równoboczny" },
            { to: "trojkat-prostokatny", text: "Trójkąt prostokątny", color: gray },
            { to: "pole-trojkata", text: "Pole trójkąta" },
            { to: "relacja-z-okregiem", text: "Relacja z okręgiem", color: gray },
            { to: "twierdzenia", text: "Twierdzenia" },
        ],
    },
    {
        category: { to: "czworokaty", text: "Czworokąty" },
        links: [
            { to: "trapezoid", text: "Trapezoid" },
            { to: "trapez", text: "Trapez" },
            { to: "trapez-prostokatny", text: "Trapez Prostokątny" },
            { to: "trapez-rownoramienny", text: "Trapez Równoramienny" },
            { to: "rownoleglobok", text: "Równoległobok" },
            { to: "romb", text: "Romb" },
            { to: "prostokat", text: "Prostokąt" },
            { to: "kwadrat", text: "Kwadrat" },
            { to: "deltoid", text: "Deltoid" },
            { to: "relacja-z-okregiem", text: "Relacja z okręgiem" },
        ],
    },
    {
        category: { to: "kola-i-okregi", text: "Koła i Okręgi" },
        links: [
            { to: "polozenie-dwoch-okregow", text: "Położenie dwóch okręgów", color: gray },
            { to: "polozenie-prostej-i-okregu", text: "Położenie prostej i okręgu", color: gray },
            { to: "katy-w-okregu", text: "Kąty w okręgu", color: gray },
            { to: "koło", text: "Koło", color: gray },
        ],
    },
    {
        category: { to: "funkcje", text: "Funkcje" },
        links: [
            { to: "funkcja-liniowa", text: "Funkcja Liniowa" },
            { to: "funkcja-kwadratowa", text: "Funkcja Kwadratowa" },
            { to: "funkcja-sześcienna", text: "Funkcja Sześcienna", color: gray },
            { to: "funkcja-wielomianowe", text: "Funkcja Wielomianowa", color: gray },
            { to: "funkcja-homograficzna", text: "Funkcja Homograficzna" },
            { to: "funkcja-wykladnicza", text: "Funkcja Wykładnicza", color: gray },
            { to: "funkcja-logarytmiczna", text: "Funkcja Logarytmiczna", color: gray },
            { to: "funkcje-wymierne", text: "Funkcje Wymierne", color: gray },
            { to: "funkcje-trygonometryczne", text: "Funkcje Trygonometryczne", color: gray },
            { to: "funkcje-cyklometryczne", text: "Funkcje Cyklometryczne", color: gray },
        ],
    },
    {
        category: { to: "wyrazenia-algebraiczne", text: "Wyrażenia Algebraiczne" },
        links: [
            { to: "wzory-skroconego-mnozenia", text: "Wzory skróconego mnożenia" },
            { to: "wielomiany", text: "Wielomiany", color: gray },
            { to: "rownania", text: "Równania", color: gray },
            { to: "nierownosci", text: "Nierówności", color: gray },
        ],
    },
    {
        category: { to: "ciagi", text: "Ciągi" },
        links: [
            { to: "ciag-arytmetyczny", text: "Ciąg arytmetyczny" },
            { to: "ciag-geometryczny", text: "Ciąg geometryczny" },
            { to: "ciag-harmoniczny", text: "Ciąg harmoniczny", color: gray },
            { to: "ciag-fibonachiego", text: "Ciąg Fibonacchiego", color: gray },
            { to: "ciag-eulera", text: "Ciąg Eulera", color: gray },
            { to: "ciag-Padovana", text: "Ciąg Padovana", color: gray },
            { to: "granica-ciagu", text: "Granica ciągu", color: gray },
        ],
    },
    {
        category: { to: "analiza-matematyczna", text: "Analiza Matematyczna" },
        links: [
            { to: "granica-funkcji", text: "Granica Funkcji", color: gray },
            { to: "asymptoty", text: "Asymptoty", color: gray },
            { to: "pochodna-funkcji", text: "Pochodna Funkcji" },
            { to: "monotonicznosc-i-ekstremum", text: "Monotoniczność i ekstremum" },
            { to: "calki", text: "Całki", color: gray },
        ],
    },
    // {
    //   category: { to: "stereometria", text: "Stereometria" },
    //   links: [
    //     { to: "graniastoslupy", text: "Graniastosłupy" },
    //     { to: "ostroslupy", text: "Ostrosłupy" },
    //     { to: "bryly-obrotowe", text: "Bryły obrotowe" },
    //   ],
    // },
    // {
    //   category: { to: "geometria-analityczna", text: "Geometria Analityczna" },
    //   links: [
    //     { to: "równanie-prostej", text: "równanie prostej" },
    //     { to: "równanie-paraboli", text: "równanie paraboli" },
    //     { to: "równanie-wielomianu", text: "równanie wielomianu" },
    //     { to: "równanie-okręgu", text: "równanie okręgu" },
    //   ],
    // },
    {
        category: { to: "statystyka", text: "Statystyka" },
        links: [
            { to: "srednie-liczbowe", text: "Średnie liczbowe" },
            //     { to: "rozklad-normalny", text: "Rozkład normalny" },
            //     { to: "rozklad-dwumianowy", text: "Rozkład dwumianowy" },
            //     { to: "rozklad-poissona", text: "Rozkład Poissona" },
            //     { to: "rozklad-hipergeometryczny", text: "Rozkład hipergeometryczny" },
        ],
    },
    {
        category: { to: "matematyka-dyskretna", text: "Matematyka Dyskretna" },
        links: [
            { to: "kombinacja", text: "Kombinacja", color: gray },
            { to: "permutacja", text: "Permutacja", color: gray },
            { to: "wariacja", text: "Wariacja", color: gray },
            { to: "prawdopodobieństwo", text: "Prawdopodobieństwo", color: gray },
        ],
    },


    // {
    //   category: { to: "grafy", text: "Grafy" },
    //   links: [
    //     { to: "graf-planarny", text: "Graf planarny" },
    //     { to: "graf-eulerowski", text: "Graf eulerowski" },
    //     { to: "graf-hamiltonowski", text: "Graf hamiltonowski" },
    //     { to: "drzewa", text: "drzewa" },
    //   ],
    // },
    // {
    {
        category: { to: "stale-matematyczne", text: "Stałe matematyczne" },
        links: [
            { to: "liczba-pi", text: "Liczba Pi" },
            { to: "liczba-e", text: "Liczba Eulera", color: gray },
            { to: "liczba-fi", text: "Liczba Fibonacciego", color: gray },
            // { to: "zloty-podzial", text: "Złoty podział" },
            // { to: "srebrny-podzial", text: "Srebrny podział" },
            { to: "liczba-plastikowa", text: "Liczba plastikowa", color: gray },
        ],
    },

];


export const sidebarLinksCalculators: SidebarCategory[] = [
    {
        category: { to: "przeliczniki", text: "Przeliczniki" },
        links: [
            { to: "kalkulator-dlugosci", text: "Długości" },
            { to: "kalkulator-powierzchni", text: "Powierzchni" },
            { to: "kalkulator-objetosci", text: "Objętości" },
            { to: "kalkulator-masy", text: "Masy" },
            { to: "kalkulator-czasu", text: "Czasu" },
            { to: "kalkulator-predkosci", text: "Prędkości" },
            { to: "kalkulator-informacji", text: "Informacji" },
            { to: "kalkulator-temperatury", text: "Temperatury", color: gray },
        ],
    },
    {
        category: { to: "arytmetyka", text: "Arytmetyka" },
        links: [
            { to: "czynnik-przed-pierwiastek-kwadratowy", text: "Pierwiastek Kwadratowy" },
            { to: "czynnik-przed-pierwiastek-szescienny", text: "Pierwiastek Sześcienny" },
            { to: "rozklad-na-czynniki-pierwsze", text: "Rozkład na czynniki pierwsze" },
            { to: "nww-i-nwd", text: "NWW i NWD" },
            { to: "skracanie-ulamkow", text: "Skracanie ułamków" },
            { to: "generator-liczb-pierwszych", text: "Liczby pierwsze", color: gray },
        ],
    },
    {
        category: { to: "funkcje", text: "Funkcje" },
        links: [
            { to: "funkcji-liniowej", text: "Funkcja Liniowa" },
            { to: "funkcji-kwadratowej", text: "Funkcja Kwadratowa" },
            { to: "funkcji-wykladniczej", text: "Funkcja Wykładnicza" },
            { to: "funkcji-logarytmicznej", text: "Funkcja Logarytmiczna" },
            { to: "funkcji-homograficznej", text: "Funkcja Homograficzna", color: gray },
            { to: "funkcji-wielomianowej", text: "Funkcja Wielomianowa", color: gray },
        ],
    },
    {
        category: { to: "Ciągi", text: "Ciągi" },
        links: [
            { to: "ciagu-arytmetycznego", text: "Ciąg arytmetyczny" },
            { to: "ciagu-geometrycznego", text: "Ciąg geometryczny" },
            { to: "ciągu fibonacciego", text: "Ciąg Fibonacciego", color: gray },
        ],
    },
    {
        category: { to: "systemy-liczbowe", text: "Systemy liczbowe" },
        links: [
            { to: "system-rzymski", text: "rzymski", color: gray },
            { to: "system-binarny", text: "binarny", color: gray },
            { to: "system-dziesietny", text: "dziesiętny", color: gray },
            { to: "system-oktalny", text: "oktalny", color: gray },
            { to: "system-heksadecymalny", text: "heksadecymalny", color: gray },
        ],
    },
    {
        category: { to: "pozostale", text: "Pozostałe" },
        links: [
            { to: "gra-w-zycie", text: "Gra w życie" },
            { to: "lokaty", text: "Lokaty" },
        ],
    },
];