import React, { useState } from "react";
import Title from "../../../utilities/Title";
import { ChangeEvent } from "react";
import Formula from "../../../utilities/articleItems/Formula";
import { FC } from "react";
import SquareRootNumber from "../../../types/objects/RootNumber/SquareRootNumber";

const SquareRootCalculator: FC = () => {
  const [inputValue, setInputValue] = useState<string | undefined>("0");
  const [squareRoot, setSquareRoot] = useState<SquareRootNumber>(
    new SquareRootNumber(0)
  );
  const [errorMessage, setErrorMessage] = useState<string[]>([]);

  const isValidInput = (inputValueNumber: number) => {
    return (
      (Number.isInteger(inputValueNumber) &&
        inputValueNumber > 0 &&
        inputValueNumber <= 10000000) ||
      inputValue === "0"
    );
  };

  const setError = (inputValueNumber: number, errors: string[]) => {
    if (!Number.isInteger(inputValueNumber) || inputValueNumber === 0)
      errors.push("Wprowadzona wartość nie jest liczbą naturalną dodatnią");
    if (inputValueNumber < 0)
      errors.push("Wprowadzona wartość jest liczbą ujemną");
    if (inputValueNumber >= 10000000)
      errors.push("Maksymalna wartość to 10000000");
    setErrorMessage(errors);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    setInputValue(inputValue);
    setErrorMessage([]);
    let errors: string[] = [];
    let inputValueNumber = Number(inputValue);
    if (isValidInput(inputValueNumber)) {
      errors = [];
      setSquareRoot(new SquareRootNumber(inputValueNumber));
    } else {
      setError(inputValueNumber, errors);
      setSquareRoot(new SquareRootNumber(0));
    }
  };

  return (
    <div className="p-2 justify-center flex">
      <div className="w-full">
        <div className="flex flex-col justify-center w-full items-center">
          <Title
            text="Wyciąganie czynnika całkowitego przed pierwiastek kwadratowy"
            size="H2"
          />
          <p className="pt-4">
            Wprowadź liczbę naturalną dodatnią pod pierwiastkiem:
          </p>
          <input
            className="m-2 text-center w-[80px] font-math bg-bgColor border-2 border-black rounded appearance-none focus:outline-none"
            placeholder="0"
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            name="square"
            min="0"
          />
          <div className="pt-4">Rozwiązanie:</div>
          {errorMessage.length !== 0 ? (
            <div className="text-red-600">
              {errorMessage.map((error) => (
                <div key={error}>{error}</div>
              ))}
            </div>
          ) : (
            <>
              {squareRoot.getAllUniqueSteps().map((step, index) => (
                <Formula key={index} formula={step} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SquareRootCalculator;
