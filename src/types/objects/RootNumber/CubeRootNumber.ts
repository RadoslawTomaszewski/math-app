import { IRootNumber } from "./IRootNumber";

class CubeRootNumber implements IRootNumber {
  private factors: number[] = [];
  private preFactors: number[] = [];
  private underFactors: number[] = [];
  private preRoot: number | null = null;
  private underRoot: number | null = null;
  private steps: string[] = [];

    constructor(private num: number) {
      this.setFactors();
      this.setpreFactorsAndUnderFactors();
      this.setpreRootAndunderRoot();
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
        if(this.underFactors[i] === this.underFactors[i+1] && this.underFactors[i] === this.underFactors[i+2]){
          indicesToRemove.push(i, i + 1, i + 2);
          this.preFactors.push(this.underFactors[i]);
          i+=2;
        }
      }
      if (indicesToRemove.length > 0) {
        for (let i = indicesToRemove.length - 1; i >= 0; i--) {
          const indexToRemove = indicesToRemove[i];
          this.underFactors.splice(indexToRemove, 1);
        }
      }
    }

    private setpreRootAndunderRoot():void{
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
      return `\\sqrt[3]{${this.num}}`
    }

    getStep2():string{
      const step2 = this.factors.join(" \\cdot ");
      return `\\sqrt[3]{${step2}}`
    }
    getStep3():string{
      const preFactorsString = this.preFactors.join(" \\cdot ");
      const underFactorsString = this.underFactors.join(" \\cdot ");
  
      if (underFactorsString === "") {
        return `${preFactorsString}`;
      } else {
        return `${preFactorsString}\\sqrt[3]{${underFactorsString}}`;
      }
    }
    getStep4():string{
      if (this.underRoot === 1) return `${this.preRoot}`
      if (this.preRoot === 1) return `\\sqrt[3]{${this.underRoot}}`;
      return `${this.preRoot}\\sqrt[3]{${this.underRoot}}`;
    }

    getAllSteps():string[]{
      return this.steps;
    }

    getAllUniqueSteps():string[]{
      return Array.from(new Set(this.steps));
    }

    getPreRoot():number | null {
      return this.preRoot;
    }
    getUnderRoot():number | null {
      return this.underRoot;
    }
  }

  
    
  export default CubeRootNumber;