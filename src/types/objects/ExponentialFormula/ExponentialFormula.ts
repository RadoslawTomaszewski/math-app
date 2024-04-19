
class ExponentialFormula {

    private formula: string = '';

    constructor(private a: number) {
        this.setFormula();
    }

    private setFormula() {
        if (this.a % 1 === 0) this.formula = `f(x)=${this.a}^x`;
        else this.formula = `f(x)=\\left(${this.a}\\right)^x`;
    }

    getFormula(): string {
        return this.formula;
    }

    getA(): number {
        return this.a;
    }
}

export default ExponentialFormula;
