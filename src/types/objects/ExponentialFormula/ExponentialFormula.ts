import Fraction from "../Fraction/Fraction";

class ExponentialFormula {

    private formula: string = '';
    private aFraction: Fraction = new Fraction(1);


    constructor(private a: number) {
        this.setFraction();
        this.setFormula();
    }

    private setFraction() {
        this.aFraction = new Fraction(this.a);
    }

    private setFormula() {
        if (this.a % 1 === 0) this.formula = `f(x)=${this.a}^x`;
        else this.formula = `f(x)=\\left(${this.getaFraction()}\\right)^x`;
    }

    getFormula(): string {
        return this.formula;
    }

    getA(): number {
        return this.a;
    }

    getaFraction(): string {
        return this.aFraction.getStep2();
    }



}

export default ExponentialFormula;
