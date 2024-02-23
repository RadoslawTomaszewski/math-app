import { joinUniqueWithEquals } from "../../../utilities";
import Fraction from "../Fraction/Fraction";
import IrrationalSum from "../Irrational/IrrationalSum";
import SquareRootNumber from "../Irrational/RootNumber/SquareRootNumber";

class QuadraticFormula {
    private delta: number = 0;
    private sqrtDelta: SquareRootNumber = new SquareRootNumber(0);
    private p: Fraction = new Fraction(0, 1);
    private q: Fraction = new Fraction(0, 1);
    private x0: Fraction = new Fraction(0, 1);
    //TODO: zamien irrational sum na irrational sum divided by integer
    private x1: IrrationalSum = new IrrationalSum(0, true, new SquareRootNumber(1));
    private x2: IrrationalSum = new IrrationalSum(0, false, new SquareRootNumber(1));
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
            this.setRootAndFactoredForm();

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
    private setRootAndFactoredForm = (): void => {
        if (this.delta > 0) {
            this.x1 = new IrrationalSum(this.b * (-1), false, this.sqrtDelta);
            this.x2 = new IrrationalSum(this.b * (-1), true, this.sqrtDelta);
            this.factoredForm = "Do naprawienia";
            return;
        }
        if (this.delta === 0) {
            this.x0 = this.p;
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
        const calcA = `${this.b < 0 ? `\\left(${this.b}\\right)^2` : `${this.b}^2`}-4\\cdot${this.a < 0 ? `\\left(${this.a}\\right)` : `${this.a}`}\\cdot${this.c < 0 ? `\\left(${this.c}\\right)` : `${this.c}`}`;
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
        const substitution = `${this.b < 0 ? `\\frac{-\\left(${this.b}\\right)}{2\\cdot${this.a}}` : `\\frac{-${this.b}}{2\\cdot${this.a}}`}`;
        return joinUniqueWithEquals(substitution, this.p.getStep1(), this.p.getFractionString(), this.p.getMixedFraction());
    }
    getQ(): Fraction {
        return this.q;
    }
    getQResult(): string {
        return this.q.getFractionString();
    }
    getQCalculations(): string {
        const substitution = `${this.delta < 0 ? `\\frac{-\\left(${this.delta}\\right)}{4\\cdot${this.a}}` : `\\frac{-${this.delta}}{4\\cdot${this.a}}`}`;
        return joinUniqueWithEquals(substitution, this.q.getStep1(), this.q.getFractionString(), this.q.getMixedFraction());
    }
    getX0(): Fraction {
        return this.x0;
    }
    getX0Calculations(): string {
        const substitution = `${this.b < 0 ? `\\frac{-\\left(${this.b}\\right)}{2\\cdot${this.a}}` : `\\frac{-${this.b}}{2\\cdot${this.a}}`}`;
        return joinUniqueWithEquals(substitution, this.p.getStep1(), this.p.getFractionString(), this.p.getMixedFraction());
    }
    getX0Result() {
        return this.p.getFractionString();
    }
    getX1(): IrrationalSum {
        return this.x1;
    }
    getX1Calculations(): string {
        const substitution = `${this.b < 0 ? `\\frac{-\\left(${this.b}\\right)-\\sqrt{${this.delta}}}{2\\cdot${this.a}}` : `\\frac{-${this.b}}{2\\cdot${this.a}}`}`;



        return joinUniqueWithEquals(substitution);
    }
    getX2(): IrrationalSum {
        return this.x2;
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
