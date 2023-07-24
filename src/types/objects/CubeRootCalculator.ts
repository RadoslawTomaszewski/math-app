class CubeRootNumber {
  private factors: number[] = [];
  private preFactors: number[] = [];
  private underFactors: number[] = [];
  private preCube: number | null = null;
  private underCube: number | null = null;


    constructor(private num: number) {
      this.setFactors();
      this.setpreFactorsAndUnderFactors();
      this.setPreCubeAndUnderCube();
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

    //DO EDYCJI
    private setpreFactorsAndUnderFactors(): void {
      this.underFactors = this.factors.slice();
      const indicesToRemove: number[] = [];
    
      for (let i = 0; i < this.underFactors.length; i++) {
        let foundDuplicate = false;
        for (let j = i + 1; j < this.underFactors.length; j++) {
          if (this.underFactors[i] === this.underFactors[j]) {
            this.preFactors.push(this.underFactors[i]);
            indicesToRemove.push(i, j);
            foundDuplicate = true;
            break;
          }
        }
        if (foundDuplicate) {
          break;
        }
      }
      while (indicesToRemove.length > 0) {
        for (let i = indicesToRemove.length - 1; i >= 0; i--) {
          this.underFactors.splice(indicesToRemove[i], 1);
        }
        indicesToRemove.length = 0;
        for (let i = 0; i < this.underFactors.length; i++) {
          let foundDuplicate = false;
          for (let j = i + 1; j < this.underFactors.length; j++) {
            if (this.underFactors[i] === this.underFactors[j]) {
              this.preFactors.push(this.underFactors[i]);
              indicesToRemove.push(i, j);
              foundDuplicate = true;
              break;
            }
          }
          if (foundDuplicate) {
            break;
          }
        }
      }
    }
    
    private setPreCubeAndUnderCube():void{
      let productPre = 1;
      let productUnder = 1;

      this.preFactors.forEach((element) => {
        productPre *= element;
      });
      this.underFactors.forEach((element) => {
        productUnder *= element;
      });

      this.preCube = productPre;
      this.underCube = productUnder;
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
      if (this.underCube === 1) return `${this.preCube}`
      if (this.preCube === 1) return `\\sqrt[3]{${this.underCube}}`;
      return `${this.preCube}\\sqrt[3]{${this.underCube}}`;
    }
    getPreCube():number | null {
      return this.preCube;
    }
    getUnderCube():number | null {
      return this.underCube;
    }
    }

  
    
  export default CubeRootNumber;