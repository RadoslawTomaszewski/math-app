import { joinUniqueWithEquals } from "../../../utilities";
import Fraction from "../Fraction/Fraction";
import PrimeFactors from "../PrimeFactors/PrimeFactors";
import TwoNumberPrimeFactors from "../PrimeFactors/TwoNumberPrimeFactors";
import IrrationalSum from "./IrrationalSum";

//IN:   { A(B+sqrt(C)) } / { D }
//OUT:  { E(F+sqrt(G)) } / { H } 
class IrrationalSumDividedByInt {
    private sign: string = "";
    private commonFactorIrrationalSum: number = 1;
    private commonFactor: number = 1;

    private commonFactorIrrSumDivByCommonFactor: number = 1;
    private denominatorDivByCommonFactor: number = 1;

    private reducedForm: string = "";
    private absReducedForm: string = "";

    private isFraction: boolean = true;
    private fractionResult: Fraction = new Fraction(1, 1);

    private isPositive: boolean = true;

    private isFirstInteger: boolean = true;
    private firstIntegerEqualZeroResult: string = "";

    //(0: commonFactorIrrSumDivByCommonFactor, 1:integerIrrSum, 2:preRootIrrSum, 3:underRootIrrSum, 4:denominatorDivByCommonFactor)
    private results: number[] = [1, 1, 1, 1, 1]


    constructor(private nominator: IrrationalSum, private denominator: number) {
        this.setSign();
        this.checkIsFraction();
        this.checkIsFirstInteger();
        if (this.isFraction) {
            this.setFractionResult();
        }
        else {
            this.setCommonFactor();
            this.simplify();
            this.setResults();
            if (!this.isFirstInteger) {
                this.setFirstIntegerEqualZeroResult();
            }
            this.setReducedForm();
        }
    }

    private setSign() {
        if (!this.isFirstInteger) {
            if (this.nominator.getIsPreRootIsPositive()) {
                if (this.denominator > 0) {
                    this.isPositive = true;
                    this.sign = "";
                }
                else {
                    this.isPositive = false;
                    this.sign = "-";
                }
            }
            else {
                if (this.denominator > 0) {
                    this.isPositive = false;
                    this.sign = "-";
                }
                else {
                    this.isPositive = true;
                    this.sign = "";
                }
            }
            return;
        }
        if (this.nominator.getResults()[3] * this.denominator < 0) {
            this.isPositive = false;
            this.sign = "-";
        }
        this.isPositive = true;
    }
    private checkIsFraction() {
        if (!this.nominator.getIsIrrational()) {
            this.isFraction = true;
            return;
        }
        this.isFraction = false;
    }
    private checkIsFirstInteger() {
        if (this.nominator.getIntDividedByCommonFactor() === 0) {
            this.isFirstInteger = false;
        }
    }
    private setFirstIntegerEqualZeroResult() {
        let resultA = `${new Fraction(this.results[2], this.results[4]).getFractionString()}`;
        let resultB = `\\sqrt{${this.nominator.getSquareRoot().getUnderRoot()}}`;
        this.firstIntegerEqualZeroResult = resultA + resultB;
    }
    private setFractionResult() {
        this.fractionResult = new Fraction(this.nominator.getResults()[0], this.denominator)
    }

    private setCommonFactor() {
        this.commonFactorIrrationalSum = this.nominator.getResults()[3];
        let factorizedNominator = new PrimeFactors(Math.abs(this.commonFactorIrrationalSum));
        let factorizedDenominator = new PrimeFactors(Math.abs(this.denominator));
        const numberCompares = new TwoNumberPrimeFactors(factorizedNominator, factorizedDenominator);
        this.commonFactor = numberCompares.getGCD();
    }
    private simplify() {
        this.commonFactorIrrSumDivByCommonFactor = this.commonFactorIrrationalSum / this.commonFactor;
        this.denominatorDivByCommonFactor = this.denominator / this.commonFactor;
    }

    private setResults() {
        this.results[0] = this.commonFactorIrrSumDivByCommonFactor;
        this.results[1] = this.nominator.getResults()[4];
        this.results[2] = this.nominator.getResults()[5];
        this.results[3] = this.nominator.getResults()[6];
        this.results[4] = this.denominatorDivByCommonFactor;
    }

    private setReducedForm() {
        if (!this.isFirstInteger) {
            this.reducedForm = this.firstIntegerEqualZeroResult;
            return;
        }

        let resultNominatorA = `${Math.abs(this.commonFactorIrrSumDivByCommonFactor)}`;
        if (Math.abs(this.commonFactorIrrSumDivByCommonFactor) === 1) resultNominatorA = ``;

        let resultNominatorB = `\\left(${this.nominator.getRoundBracketValuesFromProductForm()}\\right)`;

        if (Math.abs(this.commonFactorIrrSumDivByCommonFactor) === 1) {
            resultNominatorA = ``;
            resultNominatorB = `${this.nominator.getRoundBracketValuesFromProductForm()}`;
        }
        const resultDenominator = `${Math.abs(this.denominatorDivByCommonFactor)}`;
        this.reducedForm = `${this.sign}\\frac{${resultNominatorA}${resultNominatorB}}{${resultDenominator}}`;
        if (Math.abs(this.denominatorDivByCommonFactor) === 1) this.reducedForm = `${this.sign}${resultNominatorA}${resultNominatorB}`;
    }
    getCalculations(): string {
        const substNominator = this.nominator.getProductForm();
        const substDenominator = this.denominator.toString();
        let substitution = `\\frac{${substNominator}}{${substDenominator}}`;

        if (!this.isFirstInteger) {
            substitution = `${this.sign}${this.nominator.getAbsProductFormForFirstIntegerEqualZero()}`;
        }

        return joinUniqueWithEquals(substitution, this.reducedForm);
    }
    getResultString(): string {
        if (this.isFraction) return this.fractionResult.getFractionString()
        return this.reducedForm;
    }
    getResult(): number[] {
        return this.results;
    }
    getNominatorBeforeCalc(): IrrationalSum {
        return this.nominator;
    }
    getSign() {
        return this.sign;
    }
    getIsPositive() {
        return this.isPositive;
    }
    getIsFraction() {
        return this.isFraction;
    }
    getFractionResult(): Fraction {
        return this.fractionResult;
    }
    getIsFirstInteger(): boolean {
        return this.isFirstInteger;
    }
    getReducedForm(): string {
        return this.reducedForm;
    }
}
export default IrrationalSumDividedByInt;
