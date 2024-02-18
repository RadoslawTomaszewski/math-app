import { RegisterFormOptions } from "../types/types";

interface IRootFormData {
  rootNumber: string;
}

export const rootRegisterOptions: RegisterFormOptions<IRootFormData> = {
  rootNumber: {
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
};

interface IIntegerFormData {
  nominator: string;
  denominator: string;
}

export const integerRegisterOptions: RegisterFormOptions<IIntegerFormData> = {
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
  denominator:{
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
  }
};
