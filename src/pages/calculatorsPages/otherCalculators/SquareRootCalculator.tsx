import React, { useState } from "react";
import Title from "../../../utilities/Title";
import Decimal from "decimal.js";
import { ChangeEvent } from "react";

const SquareRootCalculator = () => {
  const [inputNumber, setInputNumber] = useState("");
  const [factorization, setFactorization] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputNumber(inputValue);
    if (Number.isInteger(Number(inputValue))) {
      const number = new Decimal(inputValue);
      factorizeNumber(number);
    } else {
      setFactorization("");
    }
  };

  const factorizeNumber = (num: Decimal) => {
    let number = num;
    let factors = [];
    for (let i = 2; i < Number(num); i++) {
      while (number.mod(i).eq(0)) {
        factors.push(i);
        number = number.dividedBy(i);
      }
    }
    if (number.greaterThan(1)) {
      factors.push(number);
    }
    setFactorization(factors.join(" * "));
  };

  return (
    <div className="flex flex-col justify-center w-full items-center">
      <Title text="Rozkład liczby złożonej na czynniki pierwsze" size="H2" />
      <p>Wprowadź liczbę:</p>
      <input
        className="m-2 text-center w-3/12 font-math bg-bgColor border-2 border-black rounded appearance-none focus:outline-none"
        placeholder="0"
        type="number"
        value={inputNumber}
        onChange={handleInputChange}
        name="square"
        min="0"
      />
      <p>Liczba rozłożona na czynniki: {factorization}</p>
    </div>
  );
};

export default SquareRootCalculator;
