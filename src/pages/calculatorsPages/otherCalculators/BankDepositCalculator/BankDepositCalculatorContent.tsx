import React, { useEffect, useState } from "react";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import LegendParagraph from "../../../../components/articleItems/LegendParagraph";
import { ErrorMessage, InputBankDepositStyle, InputCapitalizationStyle, InputCoefficientStyle } from "../../../../utilities/styles";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import { useForm } from "react-hook-form";
import { CapitalizationType } from "./utilities";
import { numberRegisterOptions } from "../../../../utilities/validation";
import BankDeposit from "../../../../types/BankDeposit/BankDeposit";
import BankDepositYears from "../../../../types/BankDeposit/BankDepositYears";

interface FormData {
  K0: string;
  p: string;
  capitalizationType: CapitalizationType;
  n: string;
}

const BankDepositCalculatorContent = () => {

  const [bankDeposit, setBankDeposit] = useState<BankDeposit>(new BankDeposit(0, 0, CapitalizationType.ROCZNA, 0));
  const [bankDepositYears, setBankDepositYears] = useState<BankDepositYears>(new BankDepositYears(0, 0, CapitalizationType.ROCZNA, 0));
  const [useYears, setUseYears] = useState(false);


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

  const handleUseYearsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUseYears(event.target.checked);
  };

  useEffect(() => {
    if (watchK0 && watchP && watchN && watchCapitalizationType && !errors.K0 && !errors.n && !errors.p && !errors.capitalizationType) {
      if (useYears) setBankDepositYears(new BankDepositYears(Number(watchK0), Number(watchP), watchCapitalizationType, Number(watchN)));
      setBankDeposit(new BankDeposit(Number(watchK0), Number(watchP), watchCapitalizationType, Number(watchN)));
    }
  }, [watchK0, watchP, watchCapitalizationType, watchN, errors.K0, errors.n, errors.p, errors.capitalizationType, useYears]);

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
                  step="0.01"
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
            <div className="flex flex-col md:flex-row flex-wrap items-center">
              <div className="md:min-w-[240px]">{useYears ? "Lata oszczędzania:" : "Liczba kapitalizacji:"}</div>
              <div className="md:min-w-[160px]">
                <input
                  className={InputCoefficientStyle}
                  type="number"
                  {...register("n", numberRegisterOptions.naturalNumberMax200)}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap items-center">
              <div className="md:min-w-[160px]">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    onChange={handleUseYearsChange}
                  />
                  <span>Użyj lat oszczędzania</span>
                </label>
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
        {!useYears && (<>
          <span>Kapitał zgromadzony po {watchN} kapitalizacjach:</span>
          <Formula formula={"K_n = K_0 \\cdot \\left(1 + \\frac{p}{100} \\right)^{n}"} styles="min-w-[190px]" />
          <Formula formula={bankDeposit.getFormula() + bankDeposit.getReducedPercentFormulaPlus1() + bankDeposit.getResultString()} styles="min-w-[550px]" />
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
          <Formula formula={"Z_{\\text{brutto}}=K_n-K_0"} styles="min-w-[100px]" />
          <Formula formula={`Z_{\\text{brutto}}${bankDeposit.getResultString()} - ${watchK0}=` + bankDeposit.getProfitBrutto().toString()} />
          <span>Kwota podatku <b>19%</b> od zysków kapitałowych (tzw. podatek Belki):</span>
          <Formula formula={"P=19\\% \\cdot Z_{\\text{brutto}}"} styles="min-w-[245px]" />
          <Formula formula={`P=19\\% \\cdot ${bankDeposit.getProfitBrutto().toString()}=${bankDeposit.getTaxAmount()}`} styles="min-w-[245px]" />
          <span>Zysk netto po odtrąceniu <b>19%</b> podatku </span>
          <Formula formula={"Z_{\\text{netto}}=81\\% \\cdot Z_{\\text{brutto}}"} styles="min-w-[245px]" />
          <Formula formula={"Z_{\\text{netto}}=" + bankDeposit.getProfitNettoCalculation()} />
          <span>Kapitał zgromadzony po {watchN} kapitalizacjach po odtrąceniu <b>19%</b> podatku:</span>
          <Formula formula={`K_{${watchN}\\ \\text{netto}}=K_0 + Z_{\\text{netto}}`} styles="min-w-[245px]" />
          <Formula formula={`K_{${watchN}\\ \\text{netto}} = ${watchK0} + ${bankDeposit.getProfitNettoResult()} = ${bankDeposit.getResultNetto().toString()}`} />
          <ArticleBorder />
        </>
        )}
        {useYears && (<>
          <span>Kapitał zgromadzony po {watchN} latach:</span>
          <Formula formula={"K_n = K_0 \\cdot \\left(1 + \\frac{p}{100 \\cdot k} \\right)^{n \\cdot k}"} styles="min-w-[190px]" />
          <Formula formula={bankDepositYears.getFormula() + bankDepositYears.getReducedPercentFormulaPlus1() + bankDepositYears.getResultString()} styles="min-w-[550px]" />
          <p className="text-gray-500">Kalkulator wykonuje obliczenia z dokładnością do 15 miejsc po przecinku. Aby jednak obliczenia były wygodniejsze do odczytu zastosowano przybliżone wyświetlanie wyników do 5 miejsc po przecinku dla obliczeń oraz do 2 miejsc po przecinku dla wyniku końcowego.</p>
          <ArticleBorder />
          <p>Alternatywnie można liczyć <b>procent składany</b> rekurencyjnie stosując wzór:</p>
          <Formula formula={"K_n = K_{n-1} \\cdot \\left(1 + \\frac{p}{100 \\cdot k} \\right)^{k}"} styles="min-w-[225px]" />
          {bankDepositYears.getIsApproximate() ? (<Formula formula={`K_n \\approx K_{n-1} \\cdot ${bankDepositYears.getReducedPercentPlus1()} `} styles="min-w-[225px]" />) : (<Formula formula={`K_n = K_{n-1} \\cdot ${bankDepositYears.getReducedPercentPlus1()} `} styles="min-w-[225px]" />)}

          {bankDepositYears.getCompoundInterestCalculations().map((formula, index) => (
            <Formula key={index} formula={formula} />
          ))}
          <ArticleBorder />
          <span>Zysk brutto:</span>
          <Formula formula={"Z_{\\text{brutto}}=K_n-K_0"} styles="min-w-[100px]" />
          <Formula formula={`Z_{\\text{brutto}}${bankDepositYears.getResultString()} - ${watchK0}=` + bankDepositYears.getProfitBrutto().toString()} />
          <span>Kwota podatku <b>19%</b> od zysków kapitałowych (tzw. podatek Belki):</span>
          <Formula formula={"P=19\\% \\cdot Z_{\\text{brutto}}"} styles="min-w-[245px]" />
          <Formula formula={`P=19\\% \\cdot ${bankDepositYears.getProfitBrutto().toString()}=${bankDepositYears.getTaxAmount()}`} styles="min-w-[245px]" />
          <span>Zysk netto po odtrąceniu  <b>19%</b> podatku</span>
          <Formula formula={"Z_{\\text{netto}}=81\\% \\cdot Z_{\\text{brutto}}"} styles="min-w-[245px]" />
          <Formula formula={"Z_{\\text{netto}}=" + bankDepositYears.getProfitNettoCalculation()} />
          <span>Kapitał zgromadzony po {watchN} kapitalizacjach po odtrąceniu <b>19%</b> podatku od zysków kapitałowych (tzw. podatek Belki) :</span>
          <Formula formula={`K_{${watchN}\\ \\text{netto}}=K_0 + Z_{\\text{netto}}`} styles="min-w-[245px]" />
          <Formula formula={`K_{${watchN}\\ \\text{netto}} = ${watchK0} + ${bankDepositYears.getProfitNettoResult()} = ${bankDepositYears.getResultNetto().toString()}`} />
          <ArticleBorder />
        </>
        )}



      </>)}

      <p>Lokata bankowa i konto oszczędnościowe to najbezpieczniejsze formy pomnożenia Twoich oszczędności. Zysk brutto liczy się stosując <b>procent składany</b></p>
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
