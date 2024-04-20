
class LogarithmicFormula {

    private formula: string = '';

    constructor(private a: number) {
        this.setFormula();
    }

    private setFormula() {
        this.formula = `f(x)=\\log_{${this.a}}{x}`;
    }

    getFormula(): string {
        return this.formula;
    }

    getA(): number {
        return this.a;
    }
}

export default LogarithmicFormula;
