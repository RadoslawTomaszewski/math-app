import { joinUniqueWithEquals } from "../../utilities";
import PrimeFactors from "../PrimeFactors/PrimeFactors";
import TwoNumberPrimeFactors from "../PrimeFactors/TwoNumberPrimeFactors";
import SquareRootNumber from "../RootNumber/SquareRootNumber";

//IN:   A+sqrt(B) 
//OUT:  C(D+sqrt(E))
class IrrationalSum {
    private preRoot: number = 1;                                //B.1
    private underRoot: number = 1;                              //B.2 && E.2
    private commonFactor: number = 1;                           //C
    private intDividedByCommonFactor: number = 1;               //D
    private preRootDividedByCommonFactor: number = 1;           //E.1
    private isIntegerPositive: boolean = true;
    private isIntegerEqualZero: boolean = false;
    private isIrrational: boolean = true;

    // (0: int, 1: root) = (2: commonFactor, 3: intDivided, 4:preRootDivided)
    private signArray: string[] = ["+", "+", "+", "+", "+"];
    // (0: integer, 1: preRoot, 2:underRoot) = (3: commonFactor, 4:intDivided, 5:preRootDivided, 6:underRootDivided)
    private results: number[] = [1, 1, 1, 1, 1, 1, 1];



    constructor(private integer: number, private isPreRootPositive: boolean, private squareRoot: SquareRootNumber) {
        this.checkIsIrrational();
        if (this.isIrrational) {
            this.setSigns();
            this.simplifySqrt();
            this.setCommonFactor();
            this.divideByCommonFactor();
            this.setResults();
            this.setCorrectVariableSigns();
        }
    }
    private checkIsIrrational(): void {
        if (this.squareRoot.getUnderRoot() === 1) {
            this.isIrrational = false;
            this.results[0] = this.integer + this.squareRoot.getPreRoot()!;
            if (!this.isPreRootPositive) this.results[0] = this.integer - this.squareRoot.getPreRoot()!;
        }
        if (this.integer === 0) this.isIntegerEqualZero = true;
    }
    private setSigns(): void {
        if (this.integer >= 0) this.isIntegerPositive = true;
        else this.isIntegerPositive = false;
        this.integer = Math.abs(this.integer);

        if (this.isIntegerPositive && this.isPreRootPositive) {
            this.signArray[0] = "";
            this.signArray[1] = "+";
            this.signArray[2] = "";
            this.signArray[3] = "";
            this.signArray[4] = "+";
        }

        if (this.isIntegerPositive && !this.isPreRootPositive) {
            this.signArray[0] = "";
            this.signArray[1] = "-";
            this.signArray[2] = "";
            this.signArray[3] = "";
            this.signArray[4] = "-";
        }

        if (!this.isIntegerPositive && this.isPreRootPositive) {
            this.signArray[0] = "-";
            this.signArray[1] = "+";
            this.signArray[2] = "-";
            this.signArray[3] = "";
            this.signArray[4] = "-";
        }

        if (!this.isIntegerPositive && !this.isPreRootPositive) {
            this.signArray[0] = "-";
            this.signArray[1] = "-";
            this.signArray[2] = "-";
            this.signArray[3] = "";
            this.signArray[4] = "+";
        }
    }
    private setCommonFactor(): void {
        let factorizedNum1 = new PrimeFactors(this.integer);
        let factorizedNum2 = new PrimeFactors(this.preRoot);
        const numberCompares = new TwoNumberPrimeFactors(factorizedNum1, factorizedNum2);
        this.commonFactor = numberCompares.getGCD();
        if (this.commonFactor === -1) this.commonFactor *= -1;
    }
    private simplifySqrt(): void {
        if (this.squareRoot.getPreRoot() !== null) this.preRoot = this.squareRoot.getPreRoot()!;
        if (this.squareRoot.getUnderRoot() !== null) this.underRoot = this.squareRoot.getUnderRoot()!;
    }
    private divideByCommonFactor(): void {
        this.intDividedByCommonFactor = this.integer / Math.abs(this.commonFactor);
        this.preRootDividedByCommonFactor = this.preRoot / Math.abs(this.commonFactor);
    }
    private setResults(): void {
        this.results[0] = this.integer;
        this.results[1] = this.preRoot;
        this.results[2] = this.underRoot;
        this.results[3] = this.commonFactor;
        this.results[4] = this.intDividedByCommonFactor;
        this.results[5] = this.preRootDividedByCommonFactor;
        this.results[6] = this.underRoot;
    }
    private setCorrectVariableSigns(): void {
        if (this.signArray[0] === "-") this.results[0] *= (-1);
        if (this.signArray[1] === "-") this.results[1] *= (-1);
        if (this.signArray[2] === "-") this.results[3] *= (-1);
        if (this.signArray[3] === "-") this.results[4] *= (-1);
        if (this.signArray[4] === "-") this.results[5] *= (-1);
    }
    getCommonFactor(): number {
        return this.commonFactor;
    }
    getPreRoot(): number {
        return this.preRoot;
    }
    getUnderRoot(): number {
        return this.underRoot;
    }
    getIntDividedByCommonFactor(): number {
        return this.intDividedByCommonFactor;
    }
    getPreRootDividedByCommonFactor(): number {
        return this.preRootDividedByCommonFactor;
    }
    getProductForm(): string {
        if (!this.isIrrational) return `${this.results[0]}`;
        let productFormA = `${this.signArray[2]}${this.commonFactor}`;

        let productFormRoot = `${this.preRootDividedByCommonFactor}\\sqrt{${this.underRoot}}`;
        if (this.preRootDividedByCommonFactor === 1) productFormRoot = `\\sqrt{${this.underRoot}}`;

        let productFormB = `\\left(${this.signArray[3]}${this.intDividedByCommonFactor}${this.signArray[4]}${productFormRoot}\\right)`;
        if (this.commonFactor === 1 && this.isIntegerPositive) {
            productFormA = "";
            productFormB = `${this.signArray[3]}${this.intDividedByCommonFactor}${this.signArray[4]}${productFormRoot}`;
        }
        if (this.commonFactor === 1 && !this.isIntegerPositive) {
            productFormA = "-";
            productFormB = `\\left(${this.signArray[3]}${this.intDividedByCommonFactor}${this.signArray[4]}${productFormRoot}\\right)`;
        }

        if (this.integer === 0) {
            productFormB = `${productFormRoot}`;
            return `${productFormA}${productFormB}`
        }
        return `${productFormA}${productFormB}`;
    }

    getAbsProductFormForFirstIntegerEqualZero(): string {
        if (this.integer === 0) {
            return `${this.squareRoot.getStep4()}ss`;
        }
        return 'First Integer isn\'t equal zero';
    }

    getRoundBracketValuesFromProductForm(): string {
        let productFormRoot = `${this.preRootDividedByCommonFactor}\\sqrt{${this.underRoot}}`;
        if (this.preRootDividedByCommonFactor === 1) productFormRoot = `\\sqrt{${this.underRoot}}`;
        return `${this.signArray[3]}${this.intDividedByCommonFactor}${this.signArray[4]}${productFormRoot}`;
    }

    getProductFormCalculation(): string {
        let sign = "+";
        if (!this.isPreRootPositive) sign = "-";
        if (!this.isIrrational) {
            return joinUniqueWithEquals(`${this.integer}${sign}${this.squareRoot.getPreRoot()}`, `${this.results[0]}`);
        }
        return joinUniqueWithEquals(`${this.signArray[0]}${this.integer}${this.signArray[1]}${this.squareRoot.getStep4()}`, this.getProductForm());
    }
    getIsIrrational(): boolean {
        return this.isIrrational;
    }
    getResults(): number[] {
        return this.results;
    }

    getSquareRoot(): SquareRootNumber {
        return this.squareRoot;
    }
    getIsPreRootIsPositive(): boolean {
        return this.isPreRootPositive;
    }
}
export default IrrationalSum;
