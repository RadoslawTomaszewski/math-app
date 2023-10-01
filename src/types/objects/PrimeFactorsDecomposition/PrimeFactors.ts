class PrimeFactors {
  private value: number = 0;
  private factors: number[] = [];
  private decomposition: number[][] = [];

  constructor(private num: number) {
    if(this.num > 0){
      this.value = this.num;
      this.calculateFactors();
      this.calculateDecomposition();
    }
  }

  private calculateFactors(): void {
    let numberToOperate = this.num;
    const sqrtDivident = Math.sqrt(numberToOperate);
    let factor = 2;

    while (factor <= sqrtDivident) {
      if (numberToOperate % factor === 0) {
        this.factors.push(factor);
        numberToOperate /= factor;
      } else {
        factor++;
      }
    }

    if (numberToOperate > 1) {
      this.factors.push(numberToOperate);
    }
  }

  private calculateDecomposition(): void {
    let divident = this.num;
    for (let i = this.factors.length-1; divident !== 1; i--) {
      this.decomposition.push([divident, this.factors[i]]);
      divident /= this.factors[i];
    }
    this.decomposition.push([1, 1])
  }

  private convertToExponentialTable(num: number[]):number[][]{
    const numbers: number[] = num.slice();
    const pows: number[][] = [];
    let exponent = 1;
    if(numbers.length === 1){
      pows.push([numbers[0],1]);
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

  private convertExponentialTableToString(arr: number[][]){
    const formula = arr
    .map(item => {
      const base = item[0];
      const exp = item[1];
      return exp === 1 ? base.toString() : `${base}^{${exp}}`;
    })
    .join("\\cdot ");
  return formula;
  }

  getValue(): number{
    return this.value;
  }

  getFactors(): string {
    return this.factors.join(" ");
  }

  getDecomposition(): number[][] {
    return this.decomposition;
  }

  getFactorsInExponentialForm(): string{
    const pows = this.convertToExponentialTable(this.factors);
    const factorsString = this.convertExponentialTableToString(pows);
    return factorsString;
    }
  }

export default PrimeFactors;
