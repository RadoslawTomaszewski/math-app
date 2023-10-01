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
