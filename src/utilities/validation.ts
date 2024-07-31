import { RegisterFormOptions } from ".";

interface IIntegerFormData {
  squareRootNumber: string;
  cubeRootNumber: string;
  nominator: string;
  denominator: string;
  numberGCDandLCM: number;
  naturalNumber: string;
  naturalNumberMax200: string;
  naturalNumberMaxMillion: string;
  coefficientNotZero: string;
  exponentialCoefficient: string;
  logarithmicCoefficient: string;
  coefficient: string;
  cash: string;
  percentMax100: string;
  naturalNumberMax200NotZero: string;
  rationalNumber2places: string;
  rationalNumber2placesNotZero: string;
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
  naturalNumber: {
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
  naturalNumberMax200: {
    max: {
      value: 200,
      message: "Maksymalna wartość to 200",
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
  naturalNumberMaxMillion: {
    max: {
      value: 1000000,
      message: "Maksymalna wartość to 1'000'000",
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
  naturalNumberMax200NotZero: {
    max: {
      value: 200,
      message: "Maksymalna wartość to 200",
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
  cash: {
    max: {
      value: 100000000000,
      message: "Maksymalna wartość to 100 bilionów",
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
  percentMax100: {
    max: {
      value: 100,
      message: "Maksymalna wartość to 100%",
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
  logarithmicCoefficient: {
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
  rationalNumber2places: {
    max: {
      value: 1000,
      message: "Maksymalna wartość to 1000",
    },
    min: {
      value: -1000,
      message: "Minimalna wartość to -1000",
    },
    pattern: {
      value: /^-?\d+(\.\d{1,2})?$/,
      message: "Wprowadzona wartość musi być liczbą z maksymalnie dwoma miejscami po przecinku",
    },
  },
  rationalNumber2placesNotZero: {
    validate: {
      notZero: value => Number(value) !== 0 || "Liczba nie może być równa zero",
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
      value: /^-?\d+(\.\d{1,2})?$/,
      message: "Wprowadzona wartość musi być liczbą z maksymalnie dwoma miejscami po przecinku",
    },
  },
};
