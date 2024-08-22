
import { CapitalizationType } from "../../pages/calculatorsPages/otherCalculators/BankDepositCalculator/utilities";
import { joinUniqueWithEquals } from "../../utilities";
import Fraction from "../Fraction/Fraction";
import FractionFloat from "../Fraction/FractionFloat";

class BankDeposit {

    private formula: string = '';
    private reducentPercentFormula: string = '';
    private reducentPercentFormulaPlus1: string = '';
    private resultString: string = '';

    private interestRate: FractionFloat = new FractionFloat(0, 1);
    private reducedPercent: Fraction = new FractionFloat(0, 1);
    private reducedPercentPlus1: number = 0;
    private result: number = 0;
    private isApproximate: boolean = false;

    private profitBrutto: number = 0;
    private profitNetto: number = 0;
    private resultNetto: number = 0;
    private taxAmount: number = 0;

    private TAX = 0.19;

    constructor(private K0: number, private p: number, private capitalizationType: CapitalizationType, private n: number) {
        this.setInterestRate();
        this.calculate();
        this.setFormulas();
    }

    private setInterestRate(): void {
        let interestRateDenominator = 1;
        if (this.capitalizationType === CapitalizationType.MIESIECZNA) interestRateDenominator = 12;
        else if (this.capitalizationType === CapitalizationType.KWARTALNA) interestRateDenominator = 4;
        else if (this.capitalizationType === CapitalizationType.POLROCZNA) interestRateDenominator = 2;
        this.interestRate = new FractionFloat(this.p, interestRateDenominator);
    }
    private calculate(): void {
        this.reducedPercent = this.interestRate.dividedByOtherFraction(new Fraction(100, 1));
        this.reducedPercentPlus1 = this.reducedPercent.getValue() + 1;
        this.result = this.K0 * (Math.pow(this.reducedPercentPlus1, this.n));
        this.profitBrutto = this.result - this.K0;
        this.taxAmount = this.TAX * this.profitBrutto;
        this.profitNetto = this.profitBrutto * (1 - this.TAX);
        this.resultNetto = this.K0 + this.profitNetto;

    }
    private setFormulas() {
        const roundedFormula = this.roundToFiveDecimalPlaces(this.interestRate.getValue());
        if (this.isApproximate) this.formula = `K_{${this.n}}\\approx${this.K0} \\cdot \\left(1+ \\frac{${roundedFormula}}{100}\\right)^{${this.n}}`
        else this.formula = `K_{${this.n}}=${this.K0} \\cdot \\left(1+ \\frac{${roundedFormula}}{100 }\\right)^{${this.n}}`

        const roundedReducentPercentFormula = this.roundToFiveDecimalPlaces(this.reducedPercent.getValue());
        if (this.isApproximate) this.reducentPercentFormula = `\\approx${this.K0} \\cdot \\left(1+ ${roundedReducentPercentFormula}\\right)^{${this.n}}`
        else this.reducentPercentFormula = `=${this.K0} \\cdot \\left(1+ ${roundedReducentPercentFormula}\\right)^{${this.n}}`

        const roundedReducentPercentFormulaPlus1 = this.roundToFiveDecimalPlaces(this.reducedPercentPlus1);
        if (this.isApproximate) this.reducentPercentFormulaPlus1 = `\\approx${this.K0} \\cdot \\left(${roundedReducentPercentFormulaPlus1}\\right)^{${this.n}}`
        else this.reducentPercentFormulaPlus1 = `=${this.K0} \\cdot \\left(${roundedReducentPercentFormulaPlus1}\\right)^{${this.n}}`

        const roundedResult = this.roundToTwoDecimalPlaces(this.result);
        if (this.isApproximate) this.resultString = `\\approx${roundedResult.toFixed(2)}`
        else this.resultString = `=${roundedResult.toFixed(2)}`
    }
    private roundToFiveDecimalPlaces(value: number): number {
        const roundedValue = Math.round(value * 100000) / 100000;
        if (roundedValue !== value) {
            this.isApproximate = true;
        }
        return roundedValue;
    }
    private roundToTwoDecimalPlaces(value: number): number {
        const roundedValue = Math.round(value * 100) / 100;
        if (roundedValue !== value) {
            this.isApproximate = true;
        }
        return roundedValue;
    }

    getInterestRate(): FractionFloat {
        return this.interestRate;
    }
    getInterestRateCalculation(): string {
        return joinUniqueWithEquals('p', this.interestRate.getCalculations());
    }
    getFormula(): string {
        return this.formula;
    }
    getReducedPercentFormula(): string {
        return this.reducentPercentFormula;
    }
    getReducedPercentFormulaPlus1(): string {
        return this.reducentPercentFormulaPlus1;
    }
    getResultString(): string {
        return this.resultString;
    }
    getCompoundInterestCalculations(): string[] {
        let currentAmount = this.K0;
        let equation = `K_0 = ${this.K0}`
        const calculations: string[] = [];
        calculations.push(equation);
        let sign = "=";
        if (this.isApproximate) sign = "\\approx";

        for (let i = 1; i <= this.n; i++) {
            equation = `K_{${i}}${sign}${this.roundToTwoDecimalPlaces(currentAmount).toFixed(2)} \\cdot ${this.roundToFiveDecimalPlaces(this.reducedPercentPlus1)}=`
            currentAmount = currentAmount * this.reducedPercentPlus1;
            equation += this.roundToTwoDecimalPlaces(currentAmount).toFixed(2);
            calculations.push(equation);
        }

        return calculations;
    }
    getReducedPercentPlus1(): number {
        return this.roundToFiveDecimalPlaces(this.reducedPercentPlus1);
    }
    getIsApproximate(): boolean {
        return this.isApproximate;
    }
    getProfitBrutto(): number {
        return this.roundToTwoDecimalPlaces(this.profitBrutto);
    }
    getProfitNettoCalculation(): string {
        return `81\\% \\cdot ${this.roundToTwoDecimalPlaces(this.profitBrutto)} = ${this.roundToTwoDecimalPlaces(this.profitNetto)}`;
    }
    getProfitNettoResult(): string {
        return this.roundToTwoDecimalPlaces(this.profitNetto).toString();
    }
    getResultNetto(): number {
        return this.roundToTwoDecimalPlaces(this.resultNetto);
    }
    getTaxAmount(): number {
        return this.roundToTwoDecimalPlaces(this.taxAmount);
    }
}

export default BankDeposit;
