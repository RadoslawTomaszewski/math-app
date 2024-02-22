import { joinUniqueWithEquals } from "../../../utilities";
import Fraction from "../Fraction/Fraction";
import SquareRootNumber from "../Irrational/RootNumber/SquareRootNumber";

class QuadraticFormula {
    private delta: number = 0;
    private sqrtDelta: SquareRootNumber = new SquareRootNumber(0);
    private p: Fraction = new Fraction(0, 1);
    private q: Fraction = new Fraction(0, 1);
    private standardForm: string = "";
    private canonicalForm: string = "";
    private factoredForm: string = "";


    constructor(private a: number, private b: number, private c: number) {
        if (this.a !== 0) {
            this.setDelta();
            this.setP();
            this.setQ();
            this.setStandardForm();
            this.setCanonicalForm();
            this.setFactoredForm();
        }
    }
    private setDelta = (): void => {
        this.delta = this.b * this.b - 4 * this.a * this.c;
        this.sqrtDelta = new SquareRootNumber(this.delta);
    }
    private setP = (): void => {
        this.p = new Fraction((-1) * this.b, 2 * this.a);
    }
    private setQ = (): void => {
        this.q = new Fraction((-1) * this.delta, 4 * this.a);
    }
    private setStandardForm = (): void => {
        let standardFormA = `${this.a}x^2`;
        let standardFormB = "";
        let standardFormC = "";

        if (Math.abs(this.a) === 1) standardFormA = `${this.a < 0 ? '-' : ''}x^2`;
        if (Math.abs(this.b) === 1) standardFormB = `${this.b < 0 ? '-' : '+'}x`;
        else if (this.b !== 0) standardFormB = `${this.b < 0 ? '-' : '+'}${Math.abs(this.b)}x`;
        if (this.c !== 0) standardFormC = `${this.c < 0 ? '-' : '+'}${Math.abs(this.c)}`;

        this.standardForm = `f(x)=${standardFormA}${standardFormB}${standardFormC}`;
    }
    private setCanonicalForm = (): void => {
        if (this.a === 0) {
            this.canonicalForm = `${this.q.getFractionString()}`;
            return;
        }

        let signBeforeP = '';
        if (this.p.getIsFractionPositive()) signBeforeP = '-';
        else signBeforeP = '+';

        let signBeforeQ = '';
        if (this.q.getIsFractionPositive()) signBeforeQ = '+';
        else signBeforeQ = '-';

        let canonicalFormA = "";
        let canonicalFormP = "";
        let canonicalFormQ = "";

        if (this.a !== 1) canonicalFormA = `${this.a}`

        if (this.p.getNominator() === 0) {
            canonicalFormP = `x^2`;
        }
        else canonicalFormP = `\\left(x${signBeforeP}${this.p.getAbsFractionString()}\\right)^2`;

        if (this.q.getNominator() !== 0) canonicalFormQ = `${signBeforeQ}${this.q.getAbsFractionString()}`;

        this.canonicalForm = 'f(x)=' + canonicalFormA + canonicalFormP + canonicalFormQ;
    }
    private setFactoredForm = (): void => {
        if (this.delta > 0) {
            this.factoredForm = "f(x)=a(x-x_1)(x-x_2)"
            return;
        }
        if (this.delta === 0) {
            this.factoredForm = this.canonicalForm;
            return;
        }
        this.factoredForm = "nie istnieje"
    }
    getA(): number {
        return this.a;
    }
    getB(): number {
        return this.b;
    }
    getC(): number {
        return this.c;
    }
    getDelta(): number {
        return this.delta;
    }
    getDeltaCalculations(): string {
        const calcA = `${this.b < 0 ? `\\left(${this.b}\\right)^2` : `${this.b}^2`}-4\\cdot${this.a}\\cdot${this.c}`;
        const calcB = `${this.getDelta()}`;
        return joinUniqueWithEquals(calcA, calcB);
    }
    getSqrtDelta(): SquareRootNumber {
        return this.sqrtDelta;
    }
    getSqrtDeltaString(): string {
        return this.sqrtDelta.getStep4();
    }
    getSqrtDeltaCalculations(): string {
        const calcA = (this.delta < 0 ? '' : `\\sqrt{${this.delta}}`);
        const calcB = (this.delta < 0 ? '' : this.getSqrtDeltaString());
        return joinUniqueWithEquals(calcA, calcB);
    }
    getP(): Fraction {
        return this.p;
    }
    getPResult(): string {
        return this.p.getFractionString();
    }
    getPCalculations(): string {
        return joinUniqueWithEquals(this.p.getStep1(), this.p.getFractionString(), this.p.getMixedFraction());
    }
    getQ(): Fraction {
        return this.q;
    }
    getQResult(): string {
        return this.q.getFractionString();
    }
    getQCalculations(): string {
        return joinUniqueWithEquals(this.q.getStep1(), this.q.getFractionString(), this.q.getMixedFraction());
    }
    getStandardForm(): string {
        return this.standardForm;
    }
    getCanonicalForm(): string {
        return this.canonicalForm;
    }
    getFactoredForm(): string {
        return this.factoredForm;
    }
}
export default QuadraticFormula;
