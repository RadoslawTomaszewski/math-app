import { linearEquations } from "../../data/equations";
import Fraction from "../Fraction/Fraction";

class LinearFormula {
    private standardForm: string = '';
    private x0: Fraction = new Fraction(0, 1);
    private alphaRad: number = 0;
    private alphaDeg: number = 0;
    private slopeForm: string = '';
    private generalForm: string = '';
    private segmentForm: string = '';



    constructor(private a: number, private b: number) {
        this.setStandardForm();
        this.setX0();
        this.calculateAlpha();
        this.setGeneralForm();
        this.setSegmentForm();
    }

    private setStandardForm = (): void => {
        if (this.a === 0 && this.b === 0) {
            this.standardForm = 'f(x)=0';
            this.slopeForm = 'y=0';
            return;
        }
        let standardFormA = `${this.a}x`;
        if (this.a === 0) standardFormA = '';
        if (this.a === 1) standardFormA = 'x';
        if (this.a === -1) standardFormA = '-x';

        let standardFormB = `+${this.b}`;
        if (this.a === 0) {
            standardFormB = `${this.b}`;
        }
        if (this.b < 0) standardFormB = `${this.b}`;
        if (this.b === 0) standardFormB = ``;


        this.standardForm = `f(x)=${standardFormA}${standardFormB}`;
        this.slopeForm = `y=${standardFormA}${standardFormB}`;
    }

    private setX0 = (): void => {
        this.x0 = new Fraction(this.b * (-1), this.a);
    }

    private calculateAlpha = (): void => {
        const tanAlpha = this.a;
        this.alphaRad = Math.atan(tanAlpha);
        this.alphaDeg = this.alphaRad * (180 / Math.PI);
        if (this.alphaDeg < 0) this.alphaDeg += 180;
        if (this.alphaDeg > 180) this.alphaDeg -= 180;
    }

    private setGeneralForm = (): void => {

        if (this.a === 0 && this.b === 0) {
            this.generalForm = 'y=0';
            return;
        }
        let generalFormA = `${this.a}x`;
        if (this.a === 0) generalFormA = '';
        if (this.a === 1) generalFormA = 'x';
        if (this.a === -1) generalFormA = '-x';

        let generalFormB = `+${this.b}`;
        if (this.a === 0) {
            generalFormB = `+${this.b}`;
        }
        if (this.b < 0) generalFormB = `${this.b}`;
        if (this.b === 0) generalFormB = ``;

        this.generalForm = `${generalFormA}-y${generalFormB}=0`;
    }

    private setSegmentForm = (): void => {
        if (this.b === 0 || this.a === 0) {
            this.segmentForm = '';
            return;
        }
        let segmentFormA = `\\frac{x}{${this.x0.getAbsFractionReducedString()}}`;
        const minusSign = '-';
        if (Math.abs(this.x0.getValue()) === 1) segmentFormA = `x`;
        if (!this.x0.getIsFractionPositive()) segmentFormA = minusSign + segmentFormA;

        let segmentFormB = `+\\frac{y}{${this.b}}=1`;
        if (this.b < 0) segmentFormB = `-\\frac{y}{${Math.abs(this.b)}}=1`;
        if (this.b === 1) segmentFormB = `+y=1`;
        if (this.b === -1) segmentFormB = `-y=1`;
        this.segmentForm = segmentFormA + segmentFormB;
    }

    getA(): number {
        return this.a;
    }
    getB(): number {
        return this.b;
    }
    getStandardForm(): string {
        return this.standardForm;
    }
    getSlopeForm(): string {
        return this.slopeForm;
    }
    getGeneralForm(): string {
        return this.generalForm;
    }
    getSegmentForm(): string {
        return this.segmentForm;
    }
    getX0(): Fraction {
        return this.x0;
    }
    getAlphaRad(): number {
        return this.alphaRad;
    }
    getAlphaDeg(): number {
        return this.alphaDeg;
    }
    getSlopeAlphaCalculation(): string {
        let slopeAlphaFormulaA = '';
        if (this.alphaDeg % 1 === 0) slopeAlphaFormulaA = `${linearEquations.SLOPE}\\Leftrightarrow\\alpha=`;
        else slopeAlphaFormulaA = `${linearEquations.SLOPE}\\Leftrightarrow\\alpha \\approx`;

        let slopeAlphaFormulaB = `${Math.floor(this.alphaDeg * 100) / 100}^{\\circ}`;
        return slopeAlphaFormulaA + slopeAlphaFormulaB;
    }
}

export default LinearFormula;
