import PrimeFactors from "../PrimeFactors/PrimeFactors";
import TwoNumberPrimeFactors from "../PrimeFactors/TwoNumberPrimeFactors";
import SquareRootNumber from "./RootNumber/SquareRootNumber";

//Zrób dodawanie, a potem zmodyfikujesz na odejmowanie dodajac isPlusSign (boolean)
class IrrationalSum {
    private commonFactor: number = 1;

    private preRoot: number = 1;
    private underRoot: number = 1;

    private intDividedByCommonFactor: number = 1;
    private preRootDividedByCommonFactor: number = 1;

    constructor(private integer: number, private squareRoot: SquareRootNumber) {
        this.simplifySqrt();
        this.setCommonFactor();
        this.divideByCommonFactor();
    }

    private setCommonFactor(): void {
        let factorizedNum1 = new PrimeFactors(this.integer);
        let factorizedNum2 = new PrimeFactors(this.preRoot);
        const numberCompares = new TwoNumberPrimeFactors(factorizedNum1, factorizedNum2);
        this.commonFactor = numberCompares.getGCD();
    }
    private simplifySqrt(): void {
        if (this.squareRoot.getPreRoot() !== null) this.preRoot = this.squareRoot.getPreRoot()!;
        if (this.squareRoot.getUnderRoot() !== null) this.underRoot = this.squareRoot.getUnderRoot()!;
    }
    private divideByCommonFactor(): void {
        this.intDividedByCommonFactor = this.integer / this.commonFactor;
        this.preRootDividedByCommonFactor = this.preRoot / this.commonFactor;
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
    //O KURWA MAĆ, DZIAŁA
    getProductForm(): string {
        return `${this.integer}+${this.squareRoot.getStep4()}=${this.commonFactor}\\left(${this.intDividedByCommonFactor}+${this.preRootDividedByCommonFactor}\\sqrt{${this.underRoot}}\\right)`;
    }



}
export default IrrationalSum;
