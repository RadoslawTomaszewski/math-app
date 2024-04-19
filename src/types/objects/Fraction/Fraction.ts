import PrimeFactors from "../PrimeFactors/PrimeFactors";
import TwoNumberPrimeFactors from "../PrimeFactors/TwoNumberPrimeFactors";

class Fraction {
    private fraction: number[] = [];
    private isFractionPositive: boolean = true;
    private GCD: number = 1;
    private value: number = 0;
    //Dokladnosc do 14 miejsc po przecinku
    private isValueApproximate: boolean = false;
    //Step 1 ulamek w pierwotnej formie z wylaczonym minusem
    private step1: string = "";
    //Step 2 ulamek w pierwotnej formie z zapisem dzielenia przez NWD
    private step2: string = "";
    //Step 3 ulamek w skroconej formie z wylaczonym minusem
    private step3: string = "";
    //AbstStep 3 modul ulamka w skroconej formie
    private absStep3: string = "";

    constructor(private nominator: number, private denominator: number) {
        if (denominator !== 0) {
            this.setFraction(nominator, denominator);
            this.calculate();
            this.checkIsFractionPositive();
            this.reduceMinuses();
            this.setGCD();
            this.setStep1();
            this.setStep2();
            this.reduceFraction();
            this.setStep3();
            this.setAbsStep3();
        }
    }
    private setFraction(nominator: number, denominator: number): void {
        this.nominator = nominator;
        this.denominator = denominator;
        this.fraction = [nominator, denominator];
    }
    private calculate(): void {
        if (this.fraction[1] !== 0) this.value = this.fraction[0] / this.fraction[1]
        const roundedValue = Number(this.value.toFixed(14));
        this.isValueApproximate = (roundedValue === this.value);
    }
    private checkIsFractionPositive(): void {
        if (this.fraction[0] * this.fraction[1] >= 0) this.isFractionPositive = true;
        else this.isFractionPositive = false;
    }
    private reduceMinuses(): void {
        this.fraction[0] = Math.abs(this.fraction[0]);
        this.fraction[1] = Math.abs(this.fraction[1]);
    }
    private setGCD(): void {
        const GCD = new TwoNumberPrimeFactors(new PrimeFactors(this.fraction[0]), new PrimeFactors(this.fraction[1])).getGCD();
        this.GCD = GCD;
    }
    private reduceFraction(): void {
        if (this.GCD !== 0) {
            this.fraction[0] = this.fraction[0] / this.GCD;
            this.fraction[1] = this.fraction[1] / this.GCD;
        }
    }
    private setStep1(): void {
        let minus = "";
        if (!this.isFractionPositive) minus = '-';

        if (this.fraction[0] === 0) {
            this.step1 = '0';
            return;
        }

        if (this.fraction[1] === 1) {
            this.step1 = `${minus}${this.fraction[0]}`;
            return
        }

        this.step1 = `${minus}\\frac{${this.fraction[0]}}{${this.fraction[1]}}`;
    }
    private setStep2(): void {
        let minus = "";
        if (!this.isFractionPositive) minus = '-';

        if (this.fraction[0] === 0) {
            this.step2 = '0';
            return;
        }

        if (this.fraction[1] === 1) {
            this.step2 = `${minus}${this.fraction[0]}`;
            return
        }

        this.step2 = `${minus}\\frac{${this.fraction[0]}:${this.GCD}}{${this.fraction[1]}:${this.GCD}}`;
    }
    private setStep3(): void {
        let minus = "";
        if (!this.isFractionPositive) minus = '-';

        if (this.fraction[0] === 0) {
            this.step3 = '0';
            return;
        }

        if (this.fraction[1] === 1) {
            this.step3 = `${minus}${this.fraction[0]}`;
            return
        }

        this.step3 = `${minus}\\frac{${this.fraction[0]}}{${this.fraction[1]}}`;
    }
    private setAbsStep3(): void {
        if (this.fraction[0] === 0) {
            this.absStep3 = '0';
            return;
        }
        if (this.fraction[1] === 1) {
            this.absStep3 = `${this.fraction[0]}`;
            return
        }
        this.absStep3 = `\\frac{${this.fraction[0]}}{${this.fraction[1]}}`;
    }

    getNominator(): number {
        return this.nominator;
    }
    getDenominator(): number {
        return this.denominator;
    }
    getFraction(): number[] {
        return this.fraction;
    }
    getValue(): number {
        return this.value;
    }
    getIsValueApproximate(): boolean {
        return this.isValueApproximate;
    }
    getGCD(): number {
        return this.GCD;
    }
    getIsFractionPositive(): boolean {
        return this.isFractionPositive;
    }
    getStep0(): string {
        return `\\frac{${this.nominator}}{${this.denominator}}`
    }
    getStep1(): string {
        return this.step1;
    }
    getStep2(): string {
        return this.step2;
    }
    getFractionString(): string {
        return this.step3;
    }
    getAbsFractionString(): string {
        return this.absStep3;
    }
    getMixedFraction(): string {
        const wholePart = Math.floor(Math.abs(this.value));
        const fractionalPart = Math.abs(this.value) - wholePart;
        let fractionSign = '';
        if (!this.isFractionPositive) fractionSign = '-';

        if (fractionalPart === 0) {
            return `${fractionSign}${wholePart}`;
        } else if (wholePart === 0) {
            return `${this.step3}`;
        } else {
            return `${fractionSign}${wholePart} \\frac{${this.fraction[0] - wholePart * this.fraction[1]}}{${this.fraction[1]}}`;
        }
    }
}
export default Fraction;