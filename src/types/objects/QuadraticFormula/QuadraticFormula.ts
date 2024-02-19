import { joinUniqueWithEquals } from "../../../utilities";
import Fraction from "../Fraction/Fraction";

class QuadraticFormula {
    private a: number = 0;
    private b: number = 0;
    private c: number = 0;
    private delta: number = 0;
    private p: Fraction = new Fraction(0, 1);
    private q: Fraction = new Fraction(0, 1);
    private standardForm: string = "";
    private canonicalForm: string = "";


    constructor(private A: number, private B: number, private C: number) {
        if (A !== 0) {
            this.setCoefficients(A, B, C);
            this.setDelta();
            this.setP();
            this.setQ();
            this.setStandardForm();
            this.setCanonicalForm();
        }
    }

    private setCoefficients = (A: number, B: number, C: number): void => {
        this.a = A;
        this.b = B;
        this.c = C;
    }
    private setDelta = (): void => {
        this.delta = this.b * this.b - 4 * this.a * this.c;
    }
    private setP = (): void => {
        this.p = new Fraction((-1) * this.b, 2 * this.a);
    }
    private setQ = (): void => {
        this.q = new Fraction((-1) * this.delta, 4 * this.a);
    }
    private setStandardForm = (): void => {
        this.standardForm = `f(x)=${this.a}x^2${this.b < 0 ? '-' : '+'}${Math.abs(this.b)}x${this.c < 0 ? '-' : '+'}${Math.abs(this.c)}`
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
        else canonicalFormP = `(x${signBeforeP}${this.p.getAbsFractionString()})^2`;

        if (this.q.getNominator() !== 0) canonicalFormQ = `${signBeforeQ}${this.q.getAbsFractionString()}`;

        this.canonicalForm = 'f(x)=' + canonicalFormA + canonicalFormP + canonicalFormQ;
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
    getDelta = () => {
        return this.delta;
    }
    getP = () => {
        return this.p;
    }
    getPshort = () => {
        return this.p.getFractionString();
    }
    getPlong = () => {
        return joinUniqueWithEquals(this.p.getStep1(), this.p.getFractionString(), this.p.getMixedFraction());
    }
    getQ = () => {
        return this.q;
    }
    getQshort = () => {
        return this.q.getFractionString();
    }
    getQlong = () => {
        return joinUniqueWithEquals(this.q.getStep1(), this.q.getFractionString(), this.q.getMixedFraction());
    }
    getStandardForm = () => {
        return this.standardForm;
    }
    getCanonicalForm = () => {
        return this.canonicalForm;
    }
}
export default QuadraticFormula;
