import FractionFloat from "../Fraction/FractionFloat";

class ArithmeticSequence {

    private formula: string = '';
    private reducedFormula: string = '';
    private sumFormula: string = '';
    private a: number = 0;
    private b: number = 0;
    private an: number = 0;
    private sequenceArray: number[] = [];
    private sequence: string[] = [];
    private sum: number = 0;

    constructor(private a1: number, private r: number) {
        this.setFormula();
        this.setReducedFormula();
    }

    private setFormula() {
        if (this.r === 0) this.formula = `${this.a1}`
        if (this.r > 0) this.formula = this.formula = `a_n=${this.a1}+(n-1)\\cdot ${this.r}`;
        else this.formula = `a_n=${this.a1}+(n-1)\\cdot \\left( ${this.r} \\right)`;
    }

    private setReducedFormula() {
        if (this.r === 0) {
            this.reducedFormula = `a_n = ${this.a1}`;
            return;
        }
        this.a = this.r;
        this.b = this.roundToTwoDecimalPlaces(this.a1 - this.r);

        if (this.b > 0) {
            if (this.r === 1) this.reducedFormula = `a_n = n + ${this.b} `;
            else if (this.r === -1) this.reducedFormula = `a_n = -n + ${this.b} `;
            else this.reducedFormula = `a_n = ${this.r} n + ${this.b} `;
            return;
        }
        if (this.b === 0) {
            if (this.r === 1) this.reducedFormula = `a_n = n`;
            else if (this.r === -1) this.reducedFormula = `a_n = -n`;
            else this.reducedFormula = `a_n = ${this.r} n `;
            return;
        }
        else {
            if (this.r === 1) this.reducedFormula = `a_n = n ${this.b} `;
            else if (this.r === -1) this.reducedFormula = `a_n = -n ${this.b} `;
            else this.reducedFormula = `a_n = ${this.r} n ${this.b} `;
        }
    }

    private setSumFormula(n: number) {
        const result = new FractionFloat((this.roundToTwoDecimalPlaces(this.a1 + this.an)), 2).multiplyByInt(n);
        result.getIsValueApproximate() ? this.sumFormula = `\\approx${result.getValue()}` : this.sumFormula = `=${result.getValue()}`;
    }

    setSequence(n: number): void {
        this.an = this.roundToTwoDecimalPlaces(this.a * n + this.b);
        const term = [];
        const term2 = [];
        if (this.b === 0) {
            for (let i = 1; i <= n; i++) {
                const result = this.roundToTwoDecimalPlaces(this.a * i + this.b);
                term.push(`a_{${i}} = ${this.a} * ${i} = ${result}`);
                term2.push(result);
            }
            this.sequence = term;
            this.sequenceArray = term2;
            return;
        }
        else if (this.b < 0) {
            for (let i = 1; i <= n; i++) {
                const result = this.roundToTwoDecimalPlaces(this.a * i + this.b);
                term.push(`a_{${i}} = ${this.a} * ${i} ${this.b}= ${result}`);
                term2.push(result);
            }
            this.sequence = term;
            this.sequenceArray = term2;
            return;
        }
        else for (let i = 1; i <= n; i++) {
            const result = this.roundToTwoDecimalPlaces(this.a * i + this.b);
            term.push(`a_{${i}} = ${this.a} * ${i} + ${this.b} = ${result}`);
            term2.push(result);
        }
        this.sequence = term;
        this.sequenceArray = term2;
    }

    private roundToTwoDecimalPlaces(value: number): number {
        const roundedValue = Math.round(value * 100) / 100;
        return roundedValue;
    }

    getFormula(): string {
        return this.formula;
    }

    getReducedFormula(): string {
        return this.reducedFormula;
    }

    getSumFormula(): string {
        return this.sumFormula;
    }

    getA1(): number {
        return this.a1;
    }

    getR(): number {
        return this.r;
    }

    getAn(): number {
        return this.an;
    }

    getSequence(n: number): string[] {
        this.setSequence(n);
        this.setSumFormula(n);
        return this.sequence;
    }

    getSequenceArray(): number[] {
        return this.sequenceArray;
    }
}

export default ArithmeticSequence;
