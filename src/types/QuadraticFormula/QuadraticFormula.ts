import { joinUniqueWithEquals } from "../../utilities";
import Fraction from "../Fraction/Fraction";
import IrrationalSum from "../Irrational/IrrationalSum";
import IrrationalSumDividedByInt from "../Irrational/IrrationalSumDividedByInt";
import SquareRootNumber from "../RootNumber/SquareRootNumber";

class QuadraticFormula {
    private delta: number = 0;
    private sqrtDelta: SquareRootNumber = new SquareRootNumber(0);
    private p: Fraction = new Fraction(0, 1);
    private q: Fraction = new Fraction(0, 1);
    private x0: Fraction = new Fraction(0, 1);
    private x1: IrrationalSumDividedByInt = new IrrationalSumDividedByInt(new IrrationalSum(0, false, new SquareRootNumber(1)), 1);
    private x2: IrrationalSumDividedByInt = new IrrationalSumDividedByInt(new IrrationalSum(0, true, new SquareRootNumber(1)), 1);
    private standardForm: string = "";
    private canonicalForm: string = "";
    private factoredForm: string = "";
    private vietasSum: Fraction = new Fraction(0, 1);
    private vietasProduct: Fraction = new Fraction(0, 1);
    // TODO: REFACTOR FOR x1 and x2 results
    private x1Result: string = '0';
    private x2Result: string = '0';


    constructor(private a: number, private b: number, private c: number) {
        if (this.a !== 0) {
            this.setDelta();
            this.setP();
            this.setQ();
            this.setStandardForm();
            this.setCanonicalForm();
            this.setRootAndFactoredForm();
            this.setVietasFormulas();
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
        let signBeforeP = '';
        if (this.p.getIsFractionPositive()) signBeforeP = '-';
        else signBeforeP = '+';

        let signBeforeQ = '';
        if (this.q.getIsFractionPositive()) signBeforeQ = '+';
        else signBeforeQ = '-';

        let canonicalFormA = "";
        let canonicalFormP = "";
        let canonicalFormQ = "";

        if (Math.abs(this.a) !== 1) canonicalFormA = `${this.a}`;
        if (this.a === -1) canonicalFormA = `-`;
        if (this.p.getNominator() === 0) {
            canonicalFormP = `x^2`;
        }
        else canonicalFormP = `\\left(x${signBeforeP}${this.p.getAbsFractionReducedString()}\\right)^2`;

        if (this.q.getNominator() !== 0) canonicalFormQ = `${signBeforeQ}${this.q.getAbsFractionReducedString()}`;

        this.canonicalForm = 'f(x)=' + canonicalFormA + canonicalFormP + canonicalFormQ;
    }
    private setRootAndFactoredForm = (): void => {
        if (this.delta > 0) {
            this.x1 = new IrrationalSumDividedByInt(new IrrationalSum(this.b * (-1), false, this.sqrtDelta), 2 * this.a)
            this.x2 = new IrrationalSumDividedByInt(new IrrationalSum(this.b * (-1), true, this.sqrtDelta), 2 * this.a)

            let factoredFormB = "";
            let factoredFormC = "";

            if (this.x1.getIsPositive()) factoredFormB = `\\left(x-${this.x1.getAbsResultString()}\\right)`;
            if (!this.x1.getIsPositive()) factoredFormB = `\\left(x+${this.x1.getAbsResultString()}\\right)`;

            if (this.x2.getIsPositive()) factoredFormC = `\\left(x-${this.x2.getAbsResultString()}\\right)`;
            else factoredFormC = `\\left(x+${this.x2.getAbsResultString()}\\right)`;

            if (this.x1.getIsFraction()) {
                if (((-1) * this.b - Math.sqrt(this.delta)) / this.a >= 0) factoredFormB = `\\left(x-${(this.x1.getFractionResult().getAbsFractionReducedString())}\\right)`;
                else factoredFormB = `\\left(x+${(this.x1.getFractionResult().getAbsFractionReducedString())}\\right)`;
                if (this.b === 0 && this.a > 0) factoredFormB = `\\left(x-${(this.x1.getFractionResult().getAbsFractionReducedString())}\\right)`;
                if (this.b === 0 && this.a < 0) factoredFormB = `\\left(x+${(this.x1.getFractionResult().getAbsFractionReducedString())}\\right)`;
            }

            if (this.x2.getIsFraction()) {
                if (((-1) * this.b + Math.sqrt(this.delta)) / this.a >= 0) factoredFormC = `\\left(x-${(this.x2.getFractionResult().getAbsFractionReducedString())}\\right)`;
                else factoredFormC = `\\left(x+${(this.x2.getFractionResult().getAbsFractionReducedString())}\\right)`;
                if (this.b === 0 && this.a > 0) factoredFormC = `\\left(x+${(this.x2.getFractionResult().getAbsFractionReducedString())}\\right)`;
                if (this.b === 0 && this.a < 0) factoredFormC = `\\left(x-${(this.x2.getFractionResult().getAbsFractionReducedString())}\\right)`;
            }

            if (!this.x1.getIsFirstInteger()) {
                factoredFormB = `\\left(x${this.x1.getReducedForm()}\\right)`;
                factoredFormC = `\\left(x+${this.x2.getReducedForm()}\\right)`;
            }

            let factoredFormA = `${this.a}`;
            if (this.a === 1) factoredFormA = ``;
            if (this.a === -1) factoredFormA = `-`;

            if (this.c === 0) {
                if (this.x1.getFractionResult()['nominator'] === 0) {
                    factoredFormB = `x`
                }
                if (this.x2.getFractionResult()['nominator'] === 0) {
                    factoredFormC = `x`
                    let temp = factoredFormB;
                    factoredFormB = factoredFormC;
                    factoredFormC = temp;
                }
            }

            this.factoredForm = `f(x)=${factoredFormA}${factoredFormB}${factoredFormC}`;
            return;
        }
        if (this.delta === 0) {
            this.x0 = this.p;
            this.factoredForm = this.canonicalForm;
            return;
        }
        this.factoredForm = ""

    }
    private setVietasFormulas = (): void => {
        if (this.delta >= 0) {
            this.vietasSum = new Fraction(this.b * (-1), this.a);
            this.vietasProduct = new Fraction(this.c, this.a);
        }
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
        return this.p.getMixedFractionString();
    }
    getPCalculations(): string {
        let substA = `\\frac{-${this.b}}`;
        if (this.b < 0) {
            substA = `\\frac{-\\left(${this.b}\\right)}`;
        }
        let substB = `{2\\cdot${this.a}}`;
        if (this.a < 0) {
            substB = `{2\\cdot\\left(${this.a}\\right)}`;
        }
        const substitution = substA + substB;
        return joinUniqueWithEquals(substitution, this.p.getOriginalFractionString(), this.p.getFractionReducedString(), this.p.getMixedFractionString());
    }
    getQ(): Fraction {
        return this.q;
    }
    getQResult(): string {
        return this.q.getMixedFractionString();
    }
    getQCalculations(): string {
        let substA = `\\frac{${this.delta}}`;
        if (this.delta < 0) {
            substA = `\\frac{-\\left(${this.delta}\\right)}`;
        }
        let substB = `{4\\cdot${this.a}}`;
        if (this.a < 0) {
            substB = `{4\\cdot\\left(${this.a}\\right)}`;
        }
        const substitution = substA + substB;
        return joinUniqueWithEquals(substitution, this.q.getOriginalFractionString(), this.q.getFractionReducedString(), this.q.getMixedFractionString());
    }
    getX0(): Fraction {
        return this.x0;
    }
    getX0Calculations(): string {
        let substA = `\\frac{-${this.b}}`;
        if (this.b < 0) {
            substA = `\\frac{-\\left(${this.b}\\right)}`;
        }
        let substB = `{2\\cdot${this.a}}`;
        if (this.a < 0) {
            substB = `{2\\cdot\\left(${this.a}\\right)}`;
        }
        const substitution = substA + substB;
        return joinUniqueWithEquals(substitution, this.p.getOriginalFractionString(), this.p.getFractionReducedString(), this.p.getMixedFractionString());
    }
    getX0Result() {
        return this.p.getFractionReducedString();
    }
    getX1(): IrrationalSumDividedByInt {
        return this.x1;
    }
    getX1Calculations(): string {
        const substB = `${this.b < 0 ? `-(${this.b})` : `-${this.b}`} `;
        const substDelta = `- ${this.getSqrtDeltaString()} `;
        const substA = `${this.a < 0 ? `2\\cdot\\left(${this.a}\\right)` : `2\\cdot${this.a}`}`;
        const substitution = `\\frac{${substB}${substDelta}}{${substA}}`;
        const calculations = `\\frac{${this.x1.getNominatorBeforeCalc().getProductForm()}}{${2 * this.a}} `
        const result = `${this.x1.getResultString()} `
        return joinUniqueWithEquals(substitution, calculations, result);
    }
    getX2(): IrrationalSumDividedByInt {
        return this.x2;
    }
    getX2Calculations(): string {
        const substB = `${this.b < 0 ? `-(${this.b})` : `-${this.b}`} `;
        const substDelta = `+ ${this.getSqrtDeltaString()} `;
        const substA = `${this.a < 0 ? `2\\cdot\\left(${this.a}\\right)` : `2\\cdot${this.a}`}`;
        const substitution = `\\frac{${substB}${substDelta}}{${substA}}`;
        const calculations = `\\frac{${this.x2.getNominatorBeforeCalc().getProductForm()}}{${2 * this.a}}`
        const result = `${this.x2.getResultString()} `
        return joinUniqueWithEquals(substitution, calculations, result);
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
    getVietasProductCalculations(): string {
        if (this.delta === 0) return joinUniqueWithEquals("x_0 \\cdot x_0", "\\frac{c}{a}", `\\frac{${this.c}}{${this.a}}`, this.vietasProduct.getFractionReducedString());
        return joinUniqueWithEquals("x_1 \\cdot x_2", "\\frac{c}{a}", `\\frac{${this.c}}{${this.a}}`, this.vietasProduct.getFractionReducedString());
    }
    getVietasProduct(): string {
        return this.vietasProduct.getFractionReducedString();
    }
    getVietasSumCalculations(): string {
        let substA = `\\frac{-${this.b}}`;
        if (this.b < 0) {
            substA = `\\frac{-\\left(${this.b}\\right)}`;
        }
        const substitution = substA + `{${this.a}}`;
        if (this.delta === 0) return joinUniqueWithEquals("x_0+x_0", "\\frac{-b}{a}", substitution, this.vietasSum.getFractionReducedString());
        return joinUniqueWithEquals("x_1 + x_2", "\\frac{-b}{a}", substitution, this.vietasSum.getFractionReducedString());
    }
    getVietasSum(): string {
        return this.vietasSum.getFractionReducedString();
    }
    getX1Result(): string {
        return this.x1Result;
    }
    getX2Result(): string {
        return this.x2Result;
    }
}
export default QuadraticFormula;
