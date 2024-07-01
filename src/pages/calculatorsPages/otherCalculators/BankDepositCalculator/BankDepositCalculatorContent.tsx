import React from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";



const BankDepositCalculatorContent = () => {
  return (
    <>
      <Title text="Kalkulator lokat bankowych" type="main-article" />
      <p>Lokata bankowa to najbezpieczniejsza forma pomnożenia Twoich oszczędności. Zysk brutto liczy się stosując <b>procent składany</b></p>
      <Formula formula={"K_n = K_0 \\cdot \\left(1 + \\frac{p}{100 \\cdot k} \\right)^{n \\cdot k}"} />
      <LegendParagraph type={"top"} notation={"K_n"} explanation={"Kapitał po n latach oszczędzania"} />
      <LegendParagraph type={"top"} notation={"K_0"} explanation={"Kapitał zdeponowany w chwili rozpoczęcia lokaty"} />
      <LegendParagraph type={"short"} notation={"p"} explanation={"oprocentowanie lokaty w procentach"} />
      <LegendParagraph type={"top"} notation={"k"} explanation={"liczba kapitalizacji odsetek w ciągu roku"} />

    </>);
};

export default BankDepositCalculatorContent;
