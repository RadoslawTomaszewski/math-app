import Fraction from "../Fraction/Fraction";
// import LinearFormula from "./LinearFormula";

class LinearFormulaFromPoints {
    private substitutionEquation: string = "";
    private equation: string = "";
    private isParellToOy = false;
    private isCoefficiantsInt = false;
    private a: number = 0;
    private b: number = 0;
    // private linearFormula: LinearFormula = new LinearFormula(0, 0);


    constructor(private x1: number, private x2: number, private y1: number, private y2: number) {
        this.setSubstitutionEquation();
        this.setEquation();



        this.checkIsParellToOy();
        this.checkIsCoefficiantsInt();

        if (!this.isParellToOy && this.isCoefficiantsInt) {
            this.calculateFromPointsIntCoefficiants();
            // this.setLinearFormulaIntCoefficiants();
        }
    }

    private setSubstitutionEquation = (): void => {
        let x1 = `${this.x1}`;
        if (this.x1 < 0) x1 = `(-${Math.abs(this.x1)})`;
        let x2 = `${this.x2}`;
        if (this.x2 < 0) x2 = `(-${Math.abs(this.x2)})`;
        let y1 = `${this.y1}`;
        if (this.y1 < 0) y1 = `(-${Math.abs(this.y1)})`;
        let y2 = `${this.y2}`;
        if (this.y2 < 0) y2 = `(-${Math.abs(this.y2)})`;

        this.substitutionEquation = `f(x)=\\frac{${y2}-${y1}}{${x2}-${x1}}\\cdot x + \\frac{${y1} \\cdot ${x2} - ${y2} \\cdot ${x1}}{${x2} - ${x1}}`;
        if (this.x1 === this.x2) this.substitutionEquation = "\\text{nie funkcja}"
    }
    private setEquation = (): void => {
        if (this.x1 === this.x2) this.equation = `x=${this.x1}`;
        if (this.x1 !== this.x2) {
            const a = new Fraction((this.y2 - this.y1), (this.x2 - this.x1));
            const b = new Fraction((this.y1 * this.x2 - this.y2 - this.x1), (this.x2 - this.x1));
            this.equation = `f(x)=${a.getFractionString()}x + ${b.getFractionString()}`;
        }
        if (this.y1 === this.y2) this.equation = `f(x)=${this.y2}`;
    }






    private checkIsParellToOy = (): void => {
        if (this.x1 === this.x2) {
            this.isParellToOy = true;
        }
    }
    private checkIsCoefficiantsInt() {
        const deltay2y1 = this.y2 - this.y1;
        const deltax2x1 = this.y2 - this.y1;
        const aCoefficiant = new Fraction(deltay2y1, deltax2x1);
        const diffy1x2andy2x1 = this.y1 * this.x2 - this.y2 * this.x1;
        const bCoefficiant = new Fraction(diffy1x2andy2x1, deltax2x1);
        if (aCoefficiant.getDenominator() === 1 && bCoefficiant.getDenominator() === 1) this.isCoefficiantsInt = true;
    }

    private calculateFromPointsIntCoefficiants = (): void => {
        this.a = (this.y2 - this.y1) / (this.x2 - this.x1);
        this.b = this.y1 - this.a * this.x1;
    }

    // private setLinearFormulaIntCoefficiants = (): void => {
    //     this.linearFormula = new LinearFormula(this.a, this.b);
    // }

    getA(): number {
        return this.a;
    }

    getB(): number {
        return this.b;
    }

    getSubstitutionEquation(): string {
        return this.substitutionEquation;
    }
    getEquation(): string {
        console.log(this.equation);
        return this.equation;
    }

    // getLinearFormula(): LinearFormula {
    //     return this.linearFormula;
    // }

    getIsParellToOy(): boolean {
        return this.isParellToOy;
    }

    getIsCoefficiantsInt(): boolean {
        return this.isCoefficiantsInt;
    }

}

export default LinearFormulaFromPoints;
