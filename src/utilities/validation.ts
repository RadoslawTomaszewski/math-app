import { RegisterFormOptions } from ".";

interface IIntegerFormData {
  squareRootNumber: string;
  cubeRootNumber: string;
  nominator: string;
  denominator: string;
  numberGCDandLCM: number;
  primeFactorNumber: string;
  coefficientNotZero: string;
  exponentialCoefficient: string;
  coefficient: string;
}

export const numberRegisterOptions: RegisterFormOptions<IIntegerFormData> = {
  squareRootNumber: {
    max: {
      value: 10000000,
      message: "Maksymalna wartość to 10000000",
    },
    min: {
      value: 0,
      message: "Minimalna wartość to 0",
    },
    pattern: {
      value: /^\d+$/,
      message: "Wprowadzona wartość musi być liczbą całkowitą",
    },
  },
  cubeRootNumber: {
    max: {
      value: 10000000,
      message: "Maksymalna wartość to 10000000",
    },
    min: {
      value: -10000000,
      message: "Minimalna wartość to -10000000",
    },
    pattern: {
      value: /^-?\d+$/,
      message: "Wprowadzona wartość musi być liczbą całkowitą",
    },
  },
  nominator: {
    max: {
      value: 10000000,
      message: "Maksymalna wartość to 10000000",
    },
    min: {
      value: -10000000,
      message: "Minimalna wartość to -10000000",
    },
    pattern: {
      value: /^-?\d+$/,
      message: "Wprowadzona wartość musi być liczbą całkowitą",
    },
  },
  denominator: {
    validate: {
      notZero: value => parseInt(value) !== 0 || "Mianownik nie może być równy zero",
    },
    max: {
      value: 10000000,
      message: "Maksymalna wartość to 10000000",
    },
    min: {
      value: -10000000,
      message: "Minimalna wartość to -10000000",
    },
    pattern: {
      value: /^-?\d+$/,
      message: "Wprowadzona wartość musi być liczbą całkowitą różną od zera",
    },
  },
  numberGCDandLCM: {
    max: {
      value: 1_000_000,
      message: "Maksymalna wartość to 1000000 (milion)",
    },
    min: {
      value: 1,
      message: "Minimalna wartość to 1",
    },
    pattern: {
      value: /^\d+$/,
      message: "Wprowadzona wartość musi być liczbą całkowitą",
    },
  },
  primeFactorNumber: {
    max: {
      value: 1_000_000_000_000,
      message: "Maksymalna wartość to 1'000'000'000'000 (bilion)",
    },
    min: {
      value: 0,
      message: "Minimalna wartość to 0",
    },
    pattern: {
      value: /^\d+$/,
      message: "Wprowadzona wartość musi być liczbą całkowitą",
    },
  },
  coefficientNotZero: {
    validate: {
      notZero: value => parseInt(value) !== 0 || "To nie jest funkcja kwadratowa",
    },
    max: {
      value: 1000,
      message: "Maksymalna wartość to 1000",
    },
    min: {
      value: -1000,
      message: "Minimalna wartość to -1000",
    },
    pattern: {
      value: /^-?[0-9]+$/,
      message: "Wprowadzona wartość musi być liczbą całkowitą",
    },
  },
  exponentialCoefficient: {
    max: {
      value: 100000,
      message: "Maksymalna wartość to 100000",
    },
    min: {
      value: 0,
      message: "Minimalna wartość to 0",
    },
    pattern: {
      value: /^-?\d+(\.\d+)?(e)?$/,
      message: "Wprowadzona wartość musi być liczbą",
    },
  },
  coefficient: {
    max: {
      value: 1000,
      message: "Maksymalna wartość to 1000",
    },
    min: {
      value: -1000,
      message: "Minimalna wartość to -1000",
    },
    pattern: {
      value: /^-?[0-9]+$/,
      message: "Wprowadzona wartość musi być liczbą całkowitą",
    },
  },
};
