import { useState, FC, ChangeEvent } from "react";
import Title from "../../../utilities/Title";
import Formula from "../../../utilities/articleItems/Formula";
import SquareRootNumber from "../../../types/objects/RootNumber/SquareRootNumber";
import { NavLink } from "react-router-dom";

const SquareRootCalculator: FC = () => {
  const [inputState, setInputState] = useState<{
    value: string | undefined;
    squareRoot: SquareRootNumber;
    errorMessage: string[];
  }>({
    value: "0",
    squareRoot: new SquareRootNumber(0),
    errorMessage: [],
  });

  const isValidInput = (valueNumber: number) => {
    return (
      (Number.isInteger(valueNumber) &&
        valueNumber > 0 &&
        valueNumber <= 10000000) ||
      inputState.value === "0"
    );
  };

  const setError = (valueNumber: number, errors: string[]) => {
    if (!Number.isInteger(valueNumber) || valueNumber === 0)
      errors.push("Wprowadzona wartość nie jest liczbą naturalną dodatnią");
    if (valueNumber < 0) errors.push("Wprowadzona wartość jest liczbą ujemną");
    if (valueNumber >= 10000000) errors.push("Maksymalna wartość to 10000000");
    setInputState((prev) => ({
      ...prev,
      errorMessage: errors,
    }));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setInputState((prev) => ({
      ...prev,
      value: value,
      errorMessage: [],
    }));
    let errors: string[] = [];
    let valueNumber = Number(value);
    if (isValidInput(valueNumber)) {
      errors = [];
      setInputState((prev) => ({
        ...prev,
        squareRoot: new SquareRootNumber(valueNumber),
      }));
    } else {
      setError(valueNumber, errors);
      setInputState((prev) => ({
        ...prev,
        squareRoot: new SquareRootNumber(0),
      }));
    }
  };

  return (
    <div className="p-2 justify-center flex flex-col">
      <div>
        <NavLink to={"../"}>Kalkulatory</NavLink> → Pierwiastki → Wyciąganie
        czynnika przed pierwiastek kwadratowy
      </div>
      <div className="w-full h-full">
        <div className="p-3 border-2 border-navColor rounded w-full min-h-[calc(100vh-154px)] flex flex-col items-center">
          <Title
            text="Wyciąganie czynnika całkowitego przed pierwiastek kwadratowy"
            type="main-article"
          />
          <p className="pt-4">
            Wprowadź liczbę naturalną dodatnią pod pierwiastkiem:
          </p>
          <input
            className="m-2 text-center w-[80px] font-math bg-bgColor border-2 border-black rounded appearance-none focus:outline-none"
            placeholder="0"
            type="number"
            value={inputState.value}
            onChange={handleInputChange}
            name="square"
            min="0"
          />
          <div className="pt-4">Rozwiązanie:</div>
          {inputState.errorMessage.length !== 0 ? (
            <div className="text-red-600">
              {inputState.errorMessage.map((error) => (
                <div key={error}>{error}</div>
              ))}
            </div>
          ) : (
            <>
              {inputState.squareRoot.getAllUniqueSteps().map((step, index) => (
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
