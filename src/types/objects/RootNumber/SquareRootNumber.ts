import { IRootNumber } from "./IRootNumber";

class SquareRootNumber implements IRootNumber {
  private factors: number[] = [];
  private preFactors: number[] = [];
  private underFactors: number[] = [];
  private preSquare: number | null = null;
  private underSquare: number | null = null;
  private steps: string[] = [];

    constructor(private num: number) {
      this.setFactors();
      this.setpreFactorsAndUnderFactors();
      this.setPreSquareAndUnderSquare();
      this.setAllSteps();
    }

    private setFactors():void{
      let divident = this.num;
      if(divident === 0 || divident === 1) this.factors.push(divident);
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

    private setpreFactorsAndUnderFactors(): void {
      this.underFactors = this.factors.slice();
      const indicesToRemove: number[] = [];
      for(let i=0; i<this.underFactors.length;i++){
        if(this.underFactors[i] === this.underFactors[i+1]){
          indicesToRemove.push(i, i + 1);
          this.preFactors.push(this.underFactors[i]);
          i++;
        }
      }
      if (indicesToRemove.length > 0) {
        for (let i = indicesToRemove.length - 1; i >= 0; i--) {
          const indexToRemove = indicesToRemove[i];
          this.underFactors.splice(indexToRemove, 1);
        }
      }
    }

    private setPreSquareAndUnderSquare():void{
      let productPre = 1;
      let productUnder = 1;

      this.preFactors.forEach((element) => {
        productPre *= element;
      });
      this.underFactors.forEach((element) => {
        productUnder *= element;
      });

      this.preSquare = productPre;
      this.underSquare = productUnder;
    }

    private setAllSteps():void{
      this.steps = [
        this.getStep1(),
        this.getStep2(),
        this.getStep3(),
        this.getStep4(),
      ];
    }
   
    getFactors(): string{
      return this.factors.join(", ")
    }

    getStep1(): string{
      return `\\sqrt{${this.num}}`
    }

    getStep2():string{
      const step2 = this.factors.join(" \\cdot ");
      return `\\sqrt{${step2}}`
    }
    getStep3():string{
      const preFactorsString = this.preFactors.join(" \\cdot ");
      const underFactorsString = this.underFactors.join(" \\cdot ");
  
      if (underFactorsString === "") {
        return `${preFactorsString}`;
      } else {
        return `${preFactorsString}\\sqrt{${underFactorsString}}`;
      }
    }
    getStep4():string{
      if (this.underSquare === 1) return `${this.preSquare}`
      if (this.preSquare === 1) return `\\sqrt{${this.underSquare}}`;
      return `${this.preSquare}\\sqrt{${this.underSquare}}`;
    }

    getAllSteps():string[]{
      return this.steps;
    }

    getAllUniqueSteps():string[]{
      return Array.from(new Set(this.steps));
    }

    getPreRoot():number | null {
      return this.preSquare;
    }
    getUnderRoot():number | null {
      return this.underSquare;
    }
  }

  
    
  export default SquareRootNumber;