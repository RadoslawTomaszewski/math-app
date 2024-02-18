import PrimeFactors from "../PrimeFactors/PrimeFactors";
import TwoNumberPrimeFactors from "../PrimeFactors/TwoNumberPrimeFactors";

class Fraction {
    private nominator: number = 0;
    private denominator: number = 1;
    private fraction: number[] = [];
    private isFractionPositive: boolean = true;
    private GCD: number = 1;
    private value: number = 0;
    //Step 1 ulamek w pierwotnej formie z wylaczonym minusem
    private step1: string = "";
    //Step 2 ulamek w pierwotnej formie z zapisem dzielenia przez NWD
    private step2: string = "";
    //Step 3 ulamek w skroconej formie z wylaczonym minusem
    private step3: string = "";
    
  
    constructor(nominator: number, denominator: number) {
        if(denominator !== 0){
            this.setFraction(nominator, denominator);
            this.calculate();
            this.checkIsFractionPositive();
            this.reduceMinuses();
            this.setGCD();
            this.setStep1();
            this.setStep2();
            this.reduceFraction();
            this.setStep3();
        }
    }

    private setFraction(nominator: number, denominator: number): void{
        this.nominator = nominator;
        this.denominator = denominator;
        this.fraction = [nominator, denominator];
    }
    private calculate(): void{
        if(this.fraction[1] !== 0) this.value = this.fraction[0] / this.fraction[1]
    }
    private checkIsFractionPositive(): void{
        if (this.fraction[0] * this.fraction[1] >= 0) this.isFractionPositive = true;
        else this.isFractionPositive = false;        
    }
    private reduceMinuses(): void{
        this.fraction[0] = Math.abs(this.fraction[0]);
        this.fraction[1] = Math.abs(this.fraction[1]);
    }
    private setGCD(): void{
        const GCD = new TwoNumberPrimeFactors(new PrimeFactors(this.fraction[0]), new PrimeFactors(this.fraction[1])).getGCD();
        this.GCD = GCD;
    }
    private reduceFraction(): void {
        if(this.GCD !== 0){
            this.fraction[0] = this.fraction[0]/this.GCD;
            this.fraction[1] = this.fraction[1]/this.GCD;
        }
    }   
    private setStep1(): void{
        let minus = "";
        if(!this.isFractionPositive) minus = '-';

        if (this.fraction[0]===0) {
            this.step1 = '0';
            return;
        }

        if (this.fraction[1]===1) {
            this.step1 = `${minus}${this.fraction[0]}`;
            return
        }

        this.step1 = `${minus}\\frac{${this.fraction[0]}}{${this.fraction[1]}}`;
    }
    private setStep2(): void{
        let minus = "";
        if(!this.isFractionPositive) minus = '-';

        if (this.fraction[0]===0) {
            this.step2 = '0';
            return;
        }

        if (this.fraction[1]===1) {
            this.step2 = `${minus}${this.fraction[0]}`;
            return
        }

        this.step2 = `${minus}\\frac{${this.fraction[0]}:${this.GCD}}{${this.fraction[1]}:${this.GCD}}`;
    }
    private setStep3(): void{
        let minus = "";
        if(!this.isFractionPositive) minus = '-';

        if (this.fraction[0]===0) {
            this.step3 = '0';
            return;
        }

        if (this.fraction[1]===1) {
            this.step3 = `${minus}${this.fraction[0]}`;
            return
        }

        this.step3 = `${minus}\\frac{${this.fraction[0]}}{${this.fraction[1]}}`;
    }

    getNominator(): number{
        return this.nominator;
    }
    getDenominator(): number{
        return this.denominator;
    }
    getFraction(): number[]{
        return this.fraction;
    }
    getValue(): number{
        return this.value;
    }
    getGCD(): number{
        return this.GCD;
    }
    getStep0(): string{
        return `\\frac{${this.nominator}}{${this.denominator}}`
    }
    getStep1(): string{
        return this.step1;
    }
    getStep2(): string{
        return this.step2;
    }
    getFractionString(): string{
        return this.step3;
    }
}
export default Fraction;
  