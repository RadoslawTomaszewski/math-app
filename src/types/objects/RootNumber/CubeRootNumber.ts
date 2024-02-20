class CubeRootNumber {
  private sign: string = "";
  private factors: number[] = [];
  private preFactors: number[] = [];
  private underFactors: number[] = [];
  private preRoot: number | null = null;
  private underRoot: number | null = null;
  private steps: string[] = [];

  //TODO naprawić problem z ujemnymi pierwiastkami i komunikatem o braku mozliwosci wyciagniecia czynnika przed pierwiastek (brak komunikatu)
  constructor(private num: number) {
    this.setSign();
    this.setFactors();
    this.setPreFactorsAndUnderFactors();
    this.setPreRootAndUnderRoot();
    this.setAllSteps();
  }
  private setSign(): void {
    if (this.num < 0) this.sign = "-";
    this.num = Math.abs(this.num);
  }
  private setFactors(): void {
    let divident = this.num;
    if (divident === 0 || divident === 1) this.factors.push(divident);
    let divider = 2;
    while (divider <= divident) {
      if (divident % divider === 0) {
        this.factors.push(divider);
        divident = divident / divider;
        divider = 1;
      }
      divider += 1;
    }
  }
  private setPreFactorsAndUnderFactors(): void {
    this.underFactors = this.factors.slice();
    const indicesToRemove: number[] = [];
    for (let i = 0; i < this.underFactors.length; i++) {
      if (this.underFactors[i] === this.underFactors[i + 1] && this.underFactors[i] === this.underFactors[i + 2]) {
        indicesToRemove.push(i, i + 1, i + 2);
        this.preFactors.push(this.underFactors[i]);
        i += 2;
      }
    }
    if (indicesToRemove.length > 0) {
      for (let i = indicesToRemove.length - 1; i >= 0; i--) {
        const indexToRemove = indicesToRemove[i];
        this.underFactors.splice(indexToRemove, 1);
      }
    }
  }
  private setPreRootAndUnderRoot(): void {
    let productPre = 1;
    let productUnder = 1;

    this.preFactors.forEach((element) => {
      productPre *= element;
    });
    this.underFactors.forEach((element) => {
      productUnder *= element;
    });

    this.preRoot = productPre;
    this.underRoot = productUnder;
  }
  private setAllSteps(): void {
    this.steps = [
      this.getStep1(),
      this.getStep2(),
      this.getStep3(),
      this.getStep4(),
    ];
  }
  convertToExponentialTable(num: number[]): number[][] {
    const numbers: number[] = num.slice();
    const pows: number[][] = [];
    let exponent = 1;
    if (numbers.length === 1) {
      pows.push([numbers[0], 1]);
      return pows;
    }
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] !== numbers[i - 1]) {
        pows.push([numbers[i - 1], exponent]);
        exponent = 1;
      } else exponent++;
      if (i === numbers.length - 1) pows.push([numbers[i], exponent]);
    }
    return pows;
  }
  convertExponentialTableToString(arr: number[][]) {
    const formula = arr
      .map(item => {
        const base = item[0];
        const exp = item[1];
        return exp === 1 ? base.toString() : `${base}^{${exp}}`;
      })
      .join("\\cdot ");
    return formula;
  }
  getFactors(): string {
    return this.factors.join(", ")
  }
  getStep1(): string {
    return `\\sqrt[3]{${this.sign}${this.num}}`
  }
  getStep2(): string {
    const pows = this.convertToExponentialTable(this.factors);
    const step2 = this.convertExponentialTableToString(pows);
    return `${this.sign}\\sqrt[3]{${step2}}`;
  }
  getStep3(): string {
    const prePows = this.convertToExponentialTable(this.preFactors);
    const preFactorsString = this.convertExponentialTableToString(prePows);

    const underPows = this.convertToExponentialTable(this.underFactors);
    const underFactorsString = this.convertExponentialTableToString(underPows);

    if (underFactorsString === "") return `${this.sign}${preFactorsString}`;
    return `${this.sign}${preFactorsString}\\sqrt[3]{${underFactorsString}}`;
  }
  getStep4(): string {
    if (this.underRoot === 1) return `${this.sign}${this.preRoot}`
    if (this.preRoot === 1) return `${this.sign}\\sqrt[3]{${this.underRoot}}`;
    return `${this.sign}${this.preRoot}\\sqrt[3]{${this.underRoot}}`;
  }
  getAllSteps(): string[] {
    return this.steps;
  }
  getAllUniqueSteps(): string[] {
    return Array.from(new Set(this.steps));
  }
  getPreRoot(): number | null {
    return this.preRoot;
  }
  getUnderRoot(): number | null {
    return this.underRoot;
  }
  getSign(): string {
    return this.sign;
  }
}



export default CubeRootNumber;