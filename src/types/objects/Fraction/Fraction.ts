import PrimeFactors from "../PrimeFactors/PrimeFactors";
import TwoNumberPrimeFactors from "../PrimeFactors/TwoNumberPrimeFactors";

class Fraction {
    private fraction: number[] = [];
  
    constructor(private nominator: number, private denominator: number) {
        this.fraction = [nominator, denominator];
        this.reduceFraction();
    }

    private reduceFraction = ():void =>{
        const twoNumberPrimeFactors = new TwoNumberPrimeFactors(new PrimeFactors(this.fraction[0]), new PrimeFactors(this.fraction[1]));
        const GCD = twoNumberPrimeFactors.getGCD();
        console.log(GCD);
        if(GCD !== 0){
            this.fraction[0] = this.fraction[0]/GCD;
            this.fraction[1] = this.fraction[1]/GCD;
        }
        console.log('dzialam');
    }    

    getFraction(): number[]{
        return this.fraction;
    }
    getFractionString(): string{
        return `\\frac{${this.fraction[0]}}{${this.fraction[1]}}`;
    }

}
export default Fraction;
  