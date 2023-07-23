import React, { useState } from "react";
import Title from "../../../utilities/Title";
import { ChangeEvent } from "react";
import Formula from "../../../utilities/articleItems/Formula";
import { FC } from "react";
import SquareRootNumber from "../../../types/objects/SquareRootCalculator";

const SquareRootCalculator: FC = () => {
  const [inputValue, setInputValue] = useState<string | undefined>("0");
  const [inputNumber, setInputNumber] = useState<number | null>(0);
  const [factorizationBefore1, setFactorizationBefore1] = useState<
    string | null
  >("0");
  const [factorizationBefore2, setFactorizationBefore2] = useState<
    string | null
  >(null);
  const [errorMessage, setErrorMessage] = useState<string[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    setInputValue(inputValue);
    setErrorMessage([]);
    let errors = [];
    let inputValueNumber = Number(inputValue);
    if (
      (Number.isInteger(inputValueNumber) &&
        inputValueNumber > 0 &&
        inputValueNumber <= 10000000) ||
      inputValue === "0"
    ) {
      errors = [];
      setInputNumber(inputValueNumber);
      factorizeBefore1(inputValueNumber);
    } else {
      if (!Number.isInteger(inputValueNumber) || inputValueNumber === 0)
        errors.push("Wprowadzona wartość nie jest liczbą całkowitą");
      if (inputValueNumber < 0)
        errors.push("Wprowadzona wartość jest liczbą ujemną");
      if (inputValueNumber >= 10000000)
        errors.push("Maksymalna wartość to 10000000");
      setErrorMessage(errors);
      setFactorizationBefore1(null);
    }
  };

  const factorizeBefore1 = (num: number) => {
    let divident = num;
    let factors = [];
    if (divident === 0) {
      setFactorizationBefore1("0");
      return;
    }
    if (divident === 1) {
      setFactorizationBefore1("1");
      return;
    }
    let divider = 2;
    while (divider <= divident) {
      if (divident % divider === 0) {
        factors.push(divider);
        divident = divident / divider;
        divider = 1;
      }
      divider += 1;
    }
    factorizeBefore2(factors);
    setFactorizationBefore1(factors.join(" \\cdot "));
    factors = [];
  };

  const factorizeBefore2 = (factors: number[]) => {
    const preSquares: number[] = [];
    const underSquares: number[] = factors.slice();
    const indicesToRemove: number[] = [];

    for (let i = 0; i < underSquares.length; i++) {
      for (let j = i + 1; j < underSquares.length; j++) {
        if (underSquares[i] === underSquares[j]) {
          preSquares.push(underSquares[i]);
          indicesToRemove.push(i, j);
          break;
        }
      }
    }
    for (let i = indicesToRemove.length - 1; i >= 0; i--) {
      underSquares.splice(indicesToRemove[i], 1);
    }

    const preSquaresString = preSquares.join(" \\cdot ");
    const underSquaresString = underSquares.join(" \\cdot ");

    if (underSquaresString === "") {
      setFactorizationBefore2(`${preSquaresString}`);
    } else {
      setFactorizationBefore2(
        `${preSquaresString}\\sqrt{${underSquaresString}}`
      );
    }
  };

  const step1 = new SquareRootNumber(36);

  return (
    <div className="flex flex-col justify-center w-full items-center">
      <Title
        text="Wyciąganie czynnika całkowitego przed pierwiastek"
        size="H2"
      />
      <p>Wprowadź liczbę naturalną dodatnią:</p>
      <input
        className="m-2 text-center w-3/12 font-math bg-bgColor border-2 border-black rounded appearance-none focus:outline-none"
        placeholder="0"
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        name="square"
        min="0"
      />

      {errorMessage.length !== 0 ? (
        <div className="text-red-600">
          {errorMessage.map((error) => (
            <div>{error}</div>
          ))}
        </div>
      ) : (
        <>
          <Formula formula={`\\sqrt{${inputNumber}}=`} />
          <Formula formula={`=\\sqrt{${factorizationBefore1}}`} />
          <Formula formula={`=${factorizationBefore2}`} />
        </>
      )}
      <div>_______________</div>
      <div>
        <Formula formula={step1.getStep1()} />
        <Formula formula={step1.getStep2()} />
      </div>
    </div>
  );
};

export default SquareRootCalculator;
