import { joinUniqueWithApproximations, joinUniqueWithEquals } from "../../utilities";
import PrimeFactors from "../PrimeFactors/PrimeFactors";
import TwoNumberPrimeFactors from "../PrimeFactors/TwoNumberPrimeFactors";

class Fraction {
    private isFractionPositive: boolean = true;
    private sign: string = "";
    private GCD: number = 1;
    private value: number = 0;
    //Dokladnosc do 14 miejsc po przecinku
    private isValueApproximate: boolean = false;

    private fractionWithOriginalPlacedSign = "";
    private originalFractionString: string = "";
    private originalFractionStringReducedByGCD: string = "";
    private fractionReducedString: string = "";
    private mixedFractionString: string = "";

    private absFractionReducedString: string = "";
    private calculations: string = "";

    constructor(private nominator: number, private denominator: number) {
        if (Number.isInteger(nominator) && Number.isInteger(denominator) && denominator !== 0) {
            this.setFractionWithOriginalPlacedSign();
            this.calculate();
            this.checkIsFractionPositive();
            this.reduceMinuses();
            this.setGCD();
            this.setOriginalFractionString();
            this.setOriginalFractionStringReducedByGCD();
            this.reduceFraction();
            this.setabsFractionReducedString();
            this.setFractionReducedString();
            this.setMixedFractionString();
            this.setCalculations();
        }
    }
    private setFractionWithOriginalPlacedSign(): void {
        this.fractionWithOriginalPlacedSign = `\\frac{${this.nominator}}{${this.denominator}}`;
    }

    private calculate(): void {
        this.value = this.nominator / this.denominator
        const roundedValue = Number(this.value.toFixed(14));
        this.isValueApproximate = !(roundedValue === this.value);
    }
    private checkIsFractionPositive(): void {
        if (this.nominator * this.denominator >= 0) {
            this.isFractionPositive = true;
            this.sign = "";
        }
        else {
            this.isFractionPositive = false;
            this.sign = "-";
        }
    }
    private reduceMinuses(): void {
        this.nominator = Math.abs(this.nominator);
        this.denominator = Math.abs(this.denominator);
    }
    private setGCD(): void {
        const GCD = new TwoNumberPrimeFactors(new PrimeFactors(this.nominator), new PrimeFactors(this.denominator)).getGCD();
        this.GCD = GCD;
    }
    private reduceFraction(): void {
        if (this.GCD !== 0) {
            this.nominator = this.nominator / this.GCD;
            this.denominator = this.denominator / this.GCD;
        }
    }
    private setOriginalFractionString(): void {
        if (this.nominator === 0) {
            this.originalFractionString = '0';
            return;
        }
        if (this.denominator === 1) {
            this.originalFractionString = `${this.sign}${this.nominator}`;
            return
        }
        this.originalFractionString = `${this.sign}\\frac{${this.nominator}}{${this.denominator}}`;
    }
    private setOriginalFractionStringReducedByGCD(): void {
        if (this.nominator === 0) {
            this.originalFractionStringReducedByGCD = '0';
            return;
        }
        if (this.denominator === 1) {
            this.originalFractionStringReducedByGCD = `${this.sign}${this.nominator}`;
            return
        }
        if (this.GCD === 1) {
            this.originalFractionStringReducedByGCD = this.originalFractionString;
            return;
        }
        this.originalFractionStringReducedByGCD = `${this.sign}\\frac{${this.nominator}:${this.GCD}}{${this.denominator}:${this.GCD}}`;
    }
    private setabsFractionReducedString(): void {
        if (this.nominator === 0) {
            this.absFractionReducedString = '0';
            return;
        }
        if (this.denominator === 1) {
            this.absFractionReducedString = `${this.nominator}`;
            return
        }
        this.absFractionReducedString = `\\frac{${this.nominator}}{${this.denominator}}`;
    }
    private setFractionReducedString(): void {
        this.fractionReducedString = `${this.sign}${this.absFractionReducedString}`;
    }

    private setMixedFractionString(): void {
        const wholePart = Math.floor(Math.abs(this.value));
        const fractionalPart = Math.abs(this.value) - wholePart;
        if (fractionalPart === 0) {
            this.mixedFractionString = `${this.sign}${wholePart}`;
        } else if (wholePart === 0) {
            this.mixedFractionString = `${this.fractionReducedString}`;
        } else {
            this.mixedFractionString = `${this.sign}${wholePart} \\frac{${this.nominator - wholePart * this.denominator}}{${this.denominator}}`;
        }
    }
    private setCalculations(): void {
        const calculations = joinUniqueWithEquals(this.fractionWithOriginalPlacedSign, this.originalFractionString, this.originalFractionStringReducedByGCD, this.fractionReducedString, this.mixedFractionString);
        if (this.isValueApproximate) this.calculations = joinUniqueWithApproximations(calculations, `${this.value}`);
        else if (Number.isInteger(this.value)) this.calculations = calculations;
        else this.calculations = joinUniqueWithEquals(calculations, `${this.value}`);
    }
    multiplyByInt(num: number): Fraction {
        const newNominator = this.nominator * num;
        const result = new Fraction(newNominator, this.denominator);
        return result;
    }
    multiplyByOtherFraction(otherFraction: Fraction): Fraction {
        const newNominator = this.nominator * otherFraction.nominator;
        const newDenominator = this.denominator * otherFraction.denominator;
        const result = new Fraction(newNominator, newDenominator);
        return result;
    }
    dividedByOtherFraction(otherFraction: Fraction): Fraction {
        const newNominator = this.nominator * otherFraction.denominator;
        const newDenominator = this.denominator * otherFraction.nominator;
        const result = new Fraction(newNominator, newDenominator);
        return result;
    }
    getNominator(): number {
        return this.nominator;
    }
    getDenominator(): number {
        return this.denominator;
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
    getFractionWithOriginalPlacedSign(): string {
        return this.fractionWithOriginalPlacedSign;
    }
    getOriginalFractionString(): string {
        return this.originalFractionString;
    }
    getOriginalFractionStringReducedByGCD(): string {
        return this.originalFractionStringReducedByGCD;
    }
    getFractionReducedString(): string {
        return this.fractionReducedString;
    }
    getAbsFractionReducedString(): string {
        return this.absFractionReducedString;
    }
    getMixedFractionString(): string {
        return this.mixedFractionString
    }
    getCalculations(): string {
        return this.calculations;
    }
}
export default Fraction;