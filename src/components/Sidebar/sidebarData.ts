import { SidebarCategory } from "../../components/Sidebar/Sidebar";

export const sidebarLinksKnowledgeBase: SidebarCategory[] = [
    {
      category: "Funkcje",
      links: [
        { to: "funkcja-liniowa", text: "Funkcja liniowa" },
        { to: "funkcja-kwadratowa", text: "Funkcja kwadratowa" },
      ],
    },
    {
      category: "Ciągi",
      links: [
        { to: "ciag-arytmetyczny", text: "Ciąg arytmetyczny" },
        { to: "ciag-geometryczny", text: "Ciąg geometryczny" },
      ],
    },
  ];


  export const sidebarLinksCalculators: SidebarCategory[] = [
    {
      category: "Przeliczniki",
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
      category: "Pierwiastki",
      links: [
        { to: "czynnik-przed-pierwiastek-kwadratowy", text: "Kwadratowy" },
        { to: "czynnik-przed-pierwiastek-szescienny", text: "Sześcienny" },
      ],
    },
  ];