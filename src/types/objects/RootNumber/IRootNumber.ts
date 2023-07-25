export interface IRootNumber {
    getFactors(): string;
    getStep1(): string;
    getStep2(): string;
    getStep3(): string;
    getStep4(): string;
    getAllSteps(): string[];
    getAllUniqueSteps(): string[];
    getPreRoot(): number | null;
    getUnderRoot(): number | null;
  }