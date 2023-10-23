import PrimeFactors from "./PrimeFactors";

class TwoNumberPrimeFactors {
    private firstFactors: number[] = [];
    private secondFactors: number[] = [];
    private GCD: number = 0;
    private GCDdecomposition: string = "";
    private LCM: number = 0;
    private LCMdecomposition: string = "";

  
    constructor(private num1: PrimeFactors, private num2: PrimeFactors) {
        if(num1.getValue() === 0 || num2.getValue() === 0){
            this.GCD = -1;
            this.LCM = -1;
            this.GCDdecomposition = "";
            this.LCMdecomposition = "";
        }
        else{
            this.setFields(this.num1, this.num2);
            this.setGCD();
            this.setLCM();
        }
    }
    private setFields = (num1: PrimeFactors, num2: PrimeFactors):void =>{
        this.firstFactors = num1.getFactors();
        this.secondFactors = num2.getFactors();
    }
    private setGCD = (): void =>{
        const GCD = this.findCommonPairs(this.firstFactors, this.secondFactors);
        let product = 1;
        for (let i = 0; i < GCD.length; i++) {
            product *= GCD[i];
        }
        this.GCD = product;
        const primeNumberDecomposition = new PrimeFactors(this.GCD).getFactorsInExponentialForm();
        this.GCDdecomposition = primeNumberDecomposition;
    }
    private findCommonPairs = (arr1: number[], arr2: number[]): number[] => {
        const pairs: number[] = [];
        const map: { [key: number]: number } = {};
        for (const num of arr1) {
            map[num] = (map[num] || 0) + 1;
        }
        for (const num of arr2) {
            if (map[num] && map[num] > 0) {
                pairs.push(num);
                map[num] -= 1;
            }
        }
        return pairs;
    }
    private setLCM = (): void => {
        const firstFactorsMap: { [key: number]: number } = {};
        const secondFactorsMap: { [key: number]: number } = {};
    
        this.firstFactors.forEach((num) => {
            firstFactorsMap[num] = (firstFactorsMap[num] || 0) + 1;
        });
    
        this.secondFactors.forEach((num) => {
            secondFactorsMap[num] = (secondFactorsMap[num] || 0) + 1;
        });
    
        const allFactorsMap: { [key: number]: number } = { ...firstFactorsMap };
    
        for (const factor in secondFactorsMap) {
            if (!allFactorsMap[factor] || secondFactorsMap[factor] > allFactorsMap[factor]) {
                allFactorsMap[factor] = secondFactorsMap[factor];
            }
        }
    
        let LCM = 1;
    
        for (const factor in allFactorsMap) {
            const occurrences = allFactorsMap[factor];
            LCM *= Math.pow(parseInt(factor), occurrences);
        }
    
        this.LCM = LCM;
        const primeNumberDecomposition = new PrimeFactors(this.LCM).getFactorsInExponentialForm();
        this.LCMdecomposition = primeNumberDecomposition;
    };


    getGCDString = (): string =>{
        if(this.GCD<0) return "";
        const step1 = this.GCDdecomposition;
        const step2 = this.GCD.toString();
        if(step1 === step2 || !step1) return this.GCD.toString();
        else
            return step1 + " = " + step2;
    }

    getGCD = (): number =>{
        return this.GCD;
    }

    getLCMString = (): string =>{
        if(this.LCM<0) return "";
        const step1 = this.LCMdecomposition;
        const step2 = this.LCM.toString();
        if(step1 === step2 || !step1) return this.LCM.toString();
        else
            return step1 + " = " + step2;
    }


}
export default TwoNumberPrimeFactors;
  