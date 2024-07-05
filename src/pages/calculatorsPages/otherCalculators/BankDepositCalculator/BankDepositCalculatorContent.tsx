import React, { useEffect, useState } from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import { ErrorMessage, InputBankDepositStyle, InputCapitalizationStyle, InputCoefficientStyle } from "../../../../utilities/styles";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import { useForm } from "react-hook-form";
import { CapitalizationType } from "./utilities";
import { numberRegisterOptions } from "../../../../utilities/validation";
import BankDeposit from "../../../../types/objects/BankDeposit/BankDeposit";

interface FormData {
  K0: string;
  p: string;
  capitalizationType: CapitalizationType;
  n: string;
}

const BankDepositCalculatorContent = () => {

  const [bankDeposit, setBankDeposit] = useState<BankDeposit>(new BankDeposit(0, 0, CapitalizationType.ROCZNA, 0));

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: { K0: "", p: "", capitalizationType: CapitalizationType.ROCZNA, n: "" } });

  const watchK0 = watch("K0");
  const watchP = watch("p");
  const watchCapitalizationType = watch("capitalizationType");
  const watchN = watch("n");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    if (inputName === 'K0' || inputName === 'p' || inputName === 'n')
      setValue(inputName, inputValue, { shouldValidate: true });
  };
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    if (inputName === 'capitalizationType')
      setValue(inputName, inputValue as CapitalizationType, { shouldValidate: true });
  };

  useEffect(() => {
    if (watchK0 && watchP && watchN && watchCapitalizationType && !errors.K0 && !errors.n && !errors.p && !errors.capitalizationType) {
      setBankDeposit(new BankDeposit(Number(watchK0), Number(watchP), watchCapitalizationType, Number(watchN)));
    }
  }, [watchK0, watchP, watchCapitalizationType, watchN, errors.K0, errors.n, errors.p, errors.capitalizationType]);

  return (
    <>
      <Title text="Kalkulator zysku z lokat bankowych" type="main-article" />
      <form className="flex flex-col justify-center items-center max-w-full">
        <span className="text-wrap"><b>Wprowadź warunki lokaty / konta oszczędnościowego:</b></span>
        <div className="flex justify-center w-full">
          <label className="flex pt-4 flex-col flex-wrap items-center gap-1">
            <div className="flex flex-col md:flex-row flex-wrap items-center">
              <div className="md:min-w-[240px]">kapitał początkowy:</div>
              <div className="md:min-w-[160px]">
                <input
                  className={InputBankDepositStyle}
                  type="number"
                  {...register("K0", numberRegisterOptions.cash)}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap items-center">
              <div className="md:min-w-[240px]">oprocentowanie w skali roku:</div>
              <div className="md:min-w-[160px]">
                <input
                  className={InputCoefficientStyle}
                  type="number"
                  {...register("p", numberRegisterOptions.percentMax100)}
                  onChange={handleInputChange}
                />
                <span>%</span></div>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap items-center">
              <div className="md:min-w-[240px]">rodzaj kapitalizacji:</div>
              <div className="md:min-w-[160px]">
                <select
                  className={InputCapitalizationStyle}
                  {...register("capitalizationType")}
                  onChange={handleSelectChange}
                >
                  <option value={CapitalizationType.MIESIECZNA}>miesięczna</option>
                  <option value={CapitalizationType.KWARTALNA}>kwartalna</option>
                  <option value={CapitalizationType.POLROCZNA}>półroczna</option>
                  <option value={CapitalizationType.ROCZNA}>roczna</option>
                </select>
              </div>
            </div>
            {/* DODAJ OPCJE PRZELACZANIA NA LATA OSZCZEDZANIA */}
            <div className="flex flex-col md:flex-row flex-wrap items-center">
              <div className="md:min-w-[240px]">liczba kapitalizacji</div>
              <div className="md:min-w-[160px]">
                <input
                  className={InputCoefficientStyle}
                  type="number"
                  {...register("n", numberRegisterOptions.naturalNumberMax200)}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </label>
        </div>
      </form>
      <ArticleBorder />
      <div>
        {Object.entries(errors).map(([key, error]) => (
          error && (
            <>
              <span key={key} className={ErrorMessage}>{error.message}</span>
              <br />
            </>
          )
        ))}
      </div>
      {(watchK0 && watchP && watchN && watchCapitalizationType && !errors.K0 && !errors.n && !errors.p && !errors.capitalizationType) && (<>
        {watchCapitalizationType === CapitalizationType.MIESIECZNA && (<span>miesięczna stopa procentowa <b>p</b> (wyrażona w %)</span>)}
        {watchCapitalizationType === CapitalizationType.KWARTALNA && (<span>kwartalna stopa procentowa <b>p</b> (wyrażona w %):</span>)}
        {watchCapitalizationType === CapitalizationType.POLROCZNA && (<span>półroczna stopa procentowa <b>p</b> (wyrażona w %):</span>)}
        {watchCapitalizationType === CapitalizationType.ROCZNA && (<span>roczna stopa procentowa <b>p</b> (wyrażona w %):</span>)}
        <Formula formula={"p=\\frac{\\text{oprocentowanie w skali roku}}{\\text{liczba kapitalizacji w roku}}"} styles="min-w-[275px]" />
        {watchCapitalizationType !== CapitalizationType.ROCZNA && (<Formula formula={bankDeposit.getInterestRateCalculation()} styles="min-w-[450px]" />)}
        {watchCapitalizationType === CapitalizationType.ROCZNA && (<Formula formula={`p=${watchP}`} />)}
        <span>Kapitał zgromadzony po {watchN} kapitalizacjach:</span>
        <Formula formula={"K_n = K_0 \\cdot \\left(1 + \\frac{p}{100} \\right)^{n}"} styles="min-w-[190px]" />
        <Formula formula={bankDeposit.getFormula()} styles="min-w-[225px]" />
        <Formula formula={bankDeposit.getReducedPercentFormulaPlus1()} styles="min-w-[225px]" />
        <Formula formula={bankDeposit.getResultString()} styles="min-w-[225px]" />
        <p className="text-gray-500">Kalkulator wykonuje obliczenia z dokładnością do 15 miejsc po przecinku. Aby jednak obliczenia były wygodniejsze do odczytu zastosowano przybliżone wyświetlanie wyników do 5 miejsc po przecinku dla obliczeń oraz do 2 miejsc po przecinku dla wyniku końcowego.</p>
        <ArticleBorder />
        <p>Alternatywnie można liczyć <b>procent składany</b> rekurencyjnie stosując wzór:</p>
        <Formula formula={"K_n = K_{n-1} \\cdot \\left(1 + \\frac{p}{100} \\right)"} styles="min-w-[225px]" />
        {bankDeposit.getIsApproximate() ? (<Formula formula={`K_n \\approx K_{n-1} \\cdot ${bankDeposit.getReducedPercentPlus1()} `} styles="min-w-[225px]" />) : (<Formula formula={`K_n = K_{n-1} \\cdot ${bankDeposit.getReducedPercentPlus1()} `} styles="min-w-[225px]" />)}

        {bankDeposit.getCompoundInterestCalculations().map((formula, index) => (
          <Formula key={index} formula={formula} />
        ))}
        <ArticleBorder />
        <span>Zysk brutto:</span>
        <Formula formula={bankDeposit.getProfitBrutto().toString()} />
        <span>Zysk netto:</span>
        <Formula formula={bankDeposit.getProfitNetto().toString()} />
        <span>Kapitał zgromadzony po {watchN} kapitalizacjach po odtrąceniu podatku od zysku kapitałowych (tzw. podatek Belki) <b>19%</b> :</span>
        <Formula formula={bankDeposit.getResultNetto().toString()} />
        <ArticleBorder />

      </>)}

      <p>Lokata bankowa to najbezpieczniejsza forma pomnożenia Twoich oszczędności. Zysk brutto liczy się stosując <b>procent składany</b></p>
      <Formula formula={"K_n = K_0 \\cdot \\left(1 + \\frac{p}{100} \\right)^{n}"} styles="min-w-[225px]" />
      <LegendParagraph type={"top"} notation={"K_n"} explanation={"Kapitał po n okresach kapitalizacji"} />
      <LegendParagraph type={"top"} notation={"K_0"} explanation={"Kapitał zdeponowany w chwili rozpoczęcia lokaty"} />
      <LegendParagraph type={"short"} notation={"p"} explanation={"stopa procentowa lokaty w okresie, po którym następuje kapitalizacja"} />
      <LegendParagraph type={"short"} notation={"n"} explanation={"liczba kapitalizacji"} />
      <br /><p>W przypadku liczenia zysku brutto z lokat wyrażonych w latach oszczędzania stosuje się wzór: </p>
      <Formula formula={"K_n = K_0 \\cdot \\left(1 + \\frac{p}{100 \\cdot k} \\right)^{n \\cdot k}"} styles="min-w-[225px]" />
      <LegendParagraph type={"top"} notation={"K_n"} explanation={"Kapitał po n latach oszczędzania"} />
      <LegendParagraph type={"top"} notation={"K_0"} explanation={"Kapitał zdeponowany w chwili rozpoczęcia lokaty"} />
      <LegendParagraph type={"short"} notation={"p"} explanation={"oprocentowanie lokaty w skali roku"} />
      <LegendParagraph type={"short"} notation={"n"} explanation={"liczba lat oszczędzania"} />
      <LegendParagraph type={"top"} notation={"k"} explanation={"liczba kapitalizacji w ciągu roku"} />
    </>);
};

export default BankDepositCalculatorContent;
