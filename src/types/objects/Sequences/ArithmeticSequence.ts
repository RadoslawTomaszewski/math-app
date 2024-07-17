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
    private proof: string[] = [];

    constructor(private a1: number, private r: number) {
        this.setFormula();
        this.setReducedFormula();
        // this.setProof();
    }

    private setFormula() {
        if (this.r === 0) this.formula = `a_n=${this.a1}`
        else if (this.r > 0) this.formula = this.formula = `a_n=${this.a1}+(n-1)\\cdot ${this.r}`;
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
        this.an = this.roundToTwoDecimalPlaces(this.a1 + (n - 1) * this.r);
        const term = [`a_1=${this.a1}`];
        const term2 = [];
        if (this.r === 0) {
            for (let i = 2; i <= n; i++) {
                term.push(`a_{${i}} = ${this.a1}`);
                term2.push(this.a1);
            }
            this.sequence = term;
            this.sequenceArray = term2;
            return;
        }
        else if (this.r < 0) {
            for (let i = 2; i <= n; i++) {
                const result = this.roundToTwoDecimalPlaces(this.a1 + (i - 1) * this.r);
                term.push(`a_{${i}} = ${this.a1} + ${i - 1} \\cdot (${this.r})= ${result}`);
                term2.push(result);
            }
            this.sequence = term;
            this.sequenceArray = term2;
            return;
        }
        else for (let i = 2; i <= n; i++) {
            const result = this.roundToTwoDecimalPlaces(this.a1 + (i - 1) * this.r);
            term.push(`a_{${i}} = ${this.a1} + ${i - 1} \\cdot ${this.r}= ${result}`);
            term2.push(result);
        }
        this.sequence = term;
        this.sequenceArray = term2;
    }

    private roundToTwoDecimalPlaces(value: number): number {
        const roundedValue = Math.round(value * 100) / 100;
        return roundedValue;
    }

    // private setProof(): void {
    //     this.proof.push("a_{n+1}-a_{n}");

    //     const aPlusOneStr = this.a === 1 ? 'n+1' : (this.a === -1 ? '-(n+1)' : `${this.a}(n+1)`);
    //     const aNStr = this.a === 1 ? 'n' : (this.a === -1 ? '-n' : `${this.a}n`);

    //     if (this.a === 0) {
    //         this.proof.push(`${this.a1}-${this.a1}`);
    //     } else if (this.b > 0) {
    //         this.proof.push(`(${aPlusOneStr}+${this.b})-(${aNStr}+${this.b})`);
    //         this.proof.push(`${aNStr}+${this.a}+${this.b} - ${aNStr}-${this.b}`);
    //     } else if (this.b === 0) {
    //         this.proof.push(`${aPlusOneStr}-${aNStr}`);
    //         this.proof.push(`${aNStr}+${this.a} - ${aNStr}`);
    //     } else {
    //         this.proof.push(`(${aPlusOneStr}${this.b})-(${aNStr}${this.b})`);
    //         this.proof.push(`${aNStr}+${this.a}${this.b} - ${aNStr} + ${Math.abs(this.b)}`);
    //     }

    //     this.proof.push(`${this.r}`);
    //     this.proof.push("\\text{const.}");
    // }


    getProof(): string[] {
        return this.proof;
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
    getA(): number {
        return this.a;
    }
    getB(): number {
        return this.b;
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
