import { SidebarCategory } from "./SidebarCategoryItem";

export const sidebarLinksKnowledgeBase: SidebarCategory[] = [
  {
    category: { to: "arytmetyka", text: "Arytmetyka" },
    links: [
      { to: "dodawanie", text: "Dodawanie" },
      { to: "odejmowanie", text: "Odejmowanie" },
      { to: "mnozenie", text: "Mnożenie" },
      { to: "dzielenie", text: "Dzielenie" },
      { to: "modulo", text: "Modulo" },
      { to: "potegowanie", text: "Potęgowanie" },
      { to: "pierwiastkowanie", text: "Pierwiastkowanie" },
      { to: "logarytmy", text: "Logarytmy" },
      { to: "wartosc-bezwzgledna", text: "Wartość bezwzględna" },
      { to: "silnia", text: "Silnia" },
      { to: "symbol newtona", text: "Symbol Newtona" },
      { to: "operatory-logiczne", text: "Operatory logiczne" },
    ],
  },
  {
    category: { to: "zbiory", text: "Zbiory" },
    links: [
      { to: "dzialania-na-zbiorach", text: "Działania na zbiorach" },
      { to: "przedziały", text: "Przedziały" },
      { to: "liczby-naturalne", text: "Liczby naturalne" },
      { to: "liczby-całkowite", text: "Liczby całkowite" },
      { to: "liczby-wymierne", text: "Liczby wymierne" },
      { to: "liczby-niewymierne", text: "Liczby niewymierne" },
      { to: "liczby-rzeczywiste", text: "Liczby rzeczywiste" },
      { to: "liczby-zespolone", text: "Liczby zespolone" },
    ],
  },
  {
    category: { to: "wyrazenia-algebraiczne", text: "Wyrażenia Algebraiczne" },
    links: [
      { to: "wielomiany", text: "Wielomiany" },
      { to: "wzory-skroconego-mnozenia", text: "Wzory Skr. Mnożenia" },
      { to: "rownania", text: "Równania" },
      { to: "nierownosci", text: "Nierówności" },
      { to: "uklady-rownan", text: "Układy równań" },
      { to: "macierze", text: "Macierze" },
    ],
  },

  {
    category: { to: "funkcje", text: "Funkcje" },
    links: [
      { to: "funkcja-liniowa", text: "Liniowa" },
      { to: "funkcja-kwadratowa", text: "Kwadratowa" },
      { to: "funkcja-sześcienna", text: "Sześcienna" },
      { to: "funkcja-wielomianowa", text: "Wielomianowa" },
      { to: "funkcja-wykladnicza", text: "Wykładnicza" },
      { to: "funkcja-logarytmiczna", text: "Logarytmiczna" },
      { to: "funkcja-homograficzna", text: "Homograficzna" },
      { to: "funkcje-wymierne", text: "Wymierne" },
      { to: "funkcje-trygonometryczne", text: "Trygonometryczne" },
      { to: "funkcje-cyklometryczne", text: "Cyklometryczne" },
      { to: "granica-funkcji", text: "Granica funkcji" },
      { to: "rozniczkowanie", text: "Różniczkowanie" },
      { to: "całkowanie", text: "Całkowanie" },
    ],
  },
  {
    category: { to: "ciagi", text: "Ciągi" },
    links: [
      { to: "ciag-arytmetyczny", text: "Ciąg arytmetyczny" },
      { to: "ciag-geometryczny", text: "Ciąg geometryczny" },
      { to: "ciag-rekurencyjny", text: "Ciąg rekurencyjny" },
      { to: "ciag-fibonachiego", text: "Ciąg Fibonacchiego" },
      { to: "ciag-eulera", text: "Ciąg Eulera" },
      { to: "ciag-Padovana", text: "Ciąg Padovana" },
      { to: "granica-ciagu", text: "Granica ciągu" },
    ],
  },
  {
    category: { to: "planimetria", text: "Planimetria" },
    links: [
      { to: "trójkaty", text: "Trójkąty" },
      { to: "czworokaty", text: "Czworokąty" },
      { to: "wielokąty", text: "Wielokąty" },
      { to: "pola i obwody", text: "Pola i obwody" },
    ],
  },
  {
    category: { to: "stereometria", text: "Stereometria" },
    links: [
      { to: "graniastoslupy", text: "Graniastosłupy" },
      { to: "ostroslupy", text: "Ostrosłupy" },
      { to: "bryly-obrotowe", text: "Bryły obrotowe" },
    ],
  },


  {
    category: { to: "geometria-analityczna", text: "Geometria Analityczna" },
    links: [
      { to: "równanie-prostej", text: "równanie prostej" },
      { to: "równanie-paraboli", text: "równanie paraboli" },
      { to: "równanie-wielomianu", text: "równanie wielomianu" },
      { to: "równanie-okręgu", text: "równanie okręgu" },
    ],
  },
  {
    category: { to: "statystyka", text: "Statystyka" },
    links: [
      { to: "srednie-liczbowe", text: "Średnie liczbowe" },
      { to: "rozklad-normalny", text: "Rozkład normalny" },
      { to: "rozklad-dwumianowy", text: "Rozkład dwumianowy" },
      { to: "rozklad-poissona", text: "Rozkład Poissona" },
      { to: "rozklad-hipergeometryczny", text: "Rozkład hipergeometryczny" },
    ],
  },
  {
    category: { to: "matematyka-dyskretna", text: "Matematyka Dyskretna" },
    links: [
      { to: "kombinacja", text: "Kombinacja" },
      { to: "permutacja", text: "Permutacja" },
      { to: "wariacja", text: "Wariacja" },
      { to: "prawdopodobieństwo", text: "Prawdopodobieństwo" },
    ],
  },
  {
    category: { to: "grafy", text: "Grafy" },
    links: [
      { to: "graf-planarny", text: "Graf planarny" },
      { to: "graf-eulerowski", text: "Graf eulerowski" },
      { to: "graf-hamiltonowski", text: "Graf hamiltonowski" },
      { to: "drzewa", text: "drzewa" },
    ],
  },
  {
    category: { to: "twierdzenia", text: "Twierdzenia" },
    links: [
      { to: "twierdzenie-pitagoras", text: "Pitagorasa" },
      { to: "twierdzenie-talesa", text: "Talesa" },
      { to: "twierdzenie-sinusow", text: "Sinusów" },
      { to: "twierdzenie-cosinusow", text: "Cosinusów" },
      { to: "twierdzenie-bezouta", text: "Bézouta" },
      { to: "twierdzenie-ptomeleusza", text: "Ptolemeusza" },

      { to: "twierdzenie-o-stycznych", text: "stycznych" },
      { to: "twierdzenie-o-siecznych", text: "siecznych" },
      { to: "twierdzenie-o-siecznej-i-stycznej", text: "siecznej i stycznej" },
    ],
  },
  {
    category: { to: "stale-matematyczne", text: "Stałe matematyczne" },
    links: [
      { to: "liczba-pi", text: "Liczba Pi" },
      { to: "liczba-e", text: "Liczba Eulera" },
      { to: "zloty-podzial", text: "Złoty podział" },
      { to: "srebrny-podzial", text: "Srebrny podział" },
      { to: "liczba-plastikowa", text: "Liczba plastikowa" },
    ],
  },
  {
    category: { to: "systemy-liczbowe", text: "Systemy liczbowe" },
    links: [
      { to: "system-dziesietny", text: "rzymski" },
      { to: "system-dziesietny", text: "dziesiętny" },
      { to: "system-oktalny", text: "oktalny" },
      { to: "system-heksadecymalny", text: "heksadecymalny" },
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
    ],
  },
  {
    category: { to: "arytmetyka", text: "Arytmetyka" },
    links: [
      { to: "czynnik-przed-pierwiastek-kwadratowy", text: "Pierwiastek Kwadratowy" },
      { to: "czynnik-przed-pierwiastek-szescienny", text: "Pierwiastek Sześcienny" },
      { to: "pisemne-dodawanie", text: "Dodawanie pisemne" },
    ],
  },
  {
    category: { to: "funkcje", text: "Funkcje" },
    links: [
      { to: "funkcji-liniowej", text: "Funkcja Liniowa" },
      { to: "funkcji-kwadratowej", text: "Funkcja Kwadratowa" },
    ],
  },
  {
    category: { to: "pozostale", text: "Pozostałe" },
    links: [
      { to: "gra-w-zycie", text: "Gra w życie" },
    ],
  },
];