import FractionFloat from "../Fraction/FractionFloat";

class GeometricSequence {

    private formula: string = '';
    private reducedFormula: string = '';
    private sumFormula: string = '';
    private a: FractionFloat = new FractionFloat(0, 1);
    private b: FractionFloat = new FractionFloat(0, 1);
    private an: number = 0;
    private sequenceArray: number[] = [];
    private sequence: string[] = [];
    private sum: number = 0;

    constructor(private a1: number, private q: number) {
        if (this.q !== 0) {
            this.setFormula();
            this.setReducedFormula();
        }
    }

    private setFormula() {
        if (this.q === 0) this.formula = `0`;
        else if (this.q > 0) this.formula = this.formula = `a_n=${this.a1} \\cdot ${this.q}^{n-1}`;
        this.formula = this.formula = `a_n=${this.a1} \\cdot \\left(${this.q}\\right)^{n-1}`;
    }

    private setReducedFormula() {
        this.a = new FractionFloat(this.a1, this.q);
        this.b = new FractionFloat(this.q, 1);
        if (this.q < 0) this.reducedFormula = `a_n = ${this.a.getFractionReducedString()} \\cdot \\left(${new FractionFloat(this.q, 1).getFractionReducedString()}\\right)^{n}`;
        else this.reducedFormula = `a_n = ${this.a.getFractionReducedString()} \\cdot ${new FractionFloat(this.q, 1).getFractionReducedString()}^{n}`;
    }

    private setSumFormula(n: number) {
        if (this.q === 1) {
            this.sumFormula = `=${n * this.a1}`;
            return;
        }
        const result = new FractionFloat((this.roundToTwoDecimalPlaces(1 - Math.pow(this.q, n))), 1 - this.q).multiplyByInt(this.a1);
        result.getIsValueApproximate() ? this.sumFormula = `\\approx${result.getValue()}` : this.sumFormula = `=${result.getValue()}`;
    }

    setSequence(n: number): void {
        const term = [];
        const term2 = [];
        if (this.b.getValue() < 0) {
            for (let i = 1; i <= n; i++) {
                const result = this.roundToTwoDecimalPlaces(this.a.getValue() * Math.pow(this.b.getValue(), i));
                term.push(`a_{${i}} = ${this.a.getFractionReducedString()} \\cdot \\left( ${this.b.getFractionReducedString()} \\right)^{${i}} = ${result}`);
                term2.push(result);
            }
            this.sequence = term;
            this.sequenceArray = term2;
            return;
        }
        else for (let i = 1; i <= n; i++) {
            const result = this.roundToTwoDecimalPlaces(this.a.getValue() * Math.pow(this.b.getValue(), i));
            term.push(`a_{${i}} = ${this.a.getFractionReducedString()} \\cdot ${this.b.getFractionReducedString()}^{${i}} = ${result}`);
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

    getQ(): number {
        return this.q;
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

export default GeometricSequence;
