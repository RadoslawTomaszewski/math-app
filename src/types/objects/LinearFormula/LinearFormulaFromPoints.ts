import { joinUniqueWithEquals } from "../../../utilities";
import { linearEquations } from "../../equations";
import Fraction from "../Fraction/Fraction";


class LinearFormulaFromPoints {
    private substitutionEquation: string = "";
    private equation: string = "";
    private isParellToOy = false;
    private a: Fraction = new Fraction(1, 1);
    private b: Fraction = new Fraction(1, 1);
    private x0: Fraction = new Fraction(1, 1);
    private alphaRad: number = 0;
    private alphaDeg: number = 0;

    private slopeForm: string = '';
    private generalForm: string = '';
    private segmentForm: string = '';

    constructor(private x1: number, private x2: number, private y1: number, private y2: number) {
        this.setSubstitutionEquation();
        this.setEquation();
        this.setX0();
        this.calculateAlpha();
        this.setGeneralForm();
        this.setSegmentForm();

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
        if (this.x1 === this.x2) {
            this.equation = `x=${this.x1}`;
            this.slopeForm = `x=${this.x1}`;
            this.isParellToOy = true;
        }

        if (this.x1 !== this.x2) {
            this.a = new Fraction((this.y2 - this.y1), (this.x2 - this.x1));
            this.b = new Fraction((this.y1 * this.x2 - this.y2 * this.x1), (this.x2 - this.x1));

            let equationA = `${this.a.getFractionReducedString()}x`;
            if (this.a.getValue() === 1) equationA = `x`;
            if (this.a.getValue() === -1) equationA = `-x`;

            let equationB = `+ ${this.b.getFractionReducedString()}`;
            if (!this.b.getIsFractionPositive()) equationB = `${this.b.getFractionReducedString()}`;
            if (this.y1 * this.x2 - this.y2 * this.x1 === 0) equationB = "";

            this.equation = `f(x)=${equationA} ${equationB}`;
            this.slopeForm = `y=${equationA} ${equationB}`;
        }
        if (this.y1 === this.y2) {
            this.equation = `f(x)=${this.y2}`;
            this.slopeForm = `y=${this.y2}`;
            this.a = new Fraction(0, 1);
            this.b = new Fraction(this.y1, 1);
        }
    }
    private setX0 = (): void => {
        if (this.x1 !== this.x2) {
            this.x0 = new Fraction(((this.y1 * this.x2 - this.y2 * this.x1) * (-1)), (this.x2 - this.x1)).dividedByOtherFraction(this.a);
        }
    }
    private calculateAlpha = (): void => {
        const tanAlpha = this.a.getValue();
        this.alphaRad = Math.atan(tanAlpha);
        this.alphaDeg = this.alphaRad * (180 / Math.PI);
        if (this.alphaDeg < 0) this.alphaDeg += 180;
        if (this.alphaDeg > 180) this.alphaDeg -= 180;
    }
    private setGeneralForm = (): void => {
        if (this.a.getNominator() === 0 && this.b.getNominator() === 0) {
            this.generalForm = 'y=0';
            return;
        }

        let greaterDenominator = Math.abs(this.a.getDenominator());
        if (Math.abs(this.b.getDenominator()) > greaterDenominator) greaterDenominator = Math.abs(this.b.getDenominator());


        let generalFormA = `${this.a.multiplyByInt(greaterDenominator).getFractionReducedString()}x`;
        if (this.a.getNominator() === 0) generalFormA = '';
        if (Math.abs(this.a.getNominator()) === 1 && this.a.getIsFractionPositive()) generalFormA = 'x';
        if (Math.abs(this.a.getNominator()) === 1 && !this.a.getIsFractionPositive()) generalFormA = '-x';

        let B = -1 * greaterDenominator;
        let generalFormB = `+${B}y`;
        if (B < 0) generalFormB = `${B}y`;
        if (B === 0) generalFormB = '';
        if (B === -1) generalFormB = '-y';
        if (B === 1) generalFormB = '+y';

        let generalFormC = `+ ${this.b.multiplyByInt(greaterDenominator).getFractionReducedString()}`;
        if (this.b.getValue() < 0) generalFormC = `${this.b.multiplyByInt(greaterDenominator).getFractionReducedString()}`;
        if (this.b.getNominator() === 0) generalFormC = ``;

        this.generalForm = `${generalFormA}${generalFormB}${generalFormC}=0`;
    }
    private setSegmentForm = (): void => {
        if (this.b.getNominator() === 0 || this.a.getNominator() === 0) {
            this.segmentForm = '\\text{nie istnieje}';
            return;
        }
        let segmentFormA = `\\frac{x}{${this.x0.getAbsFractionReducedString()}}`;
        const minusSign = '-';
        if (Math.abs(this.x0.getValue()) === 1) segmentFormA = `x`;
        if (!this.x0.getIsFractionPositive()) segmentFormA = minusSign + segmentFormA;

        let segmentFormB = `+\\frac{y}{${this.b.getFractionReducedString()}}=1`;
        if (this.b.getValue() < 0) segmentFormB = `-\\frac{y}{${this.b.getAbsFractionReducedString()}}=1`;
        if (this.b.getValue() === 1) segmentFormB = `+y=1`;
        if (this.b.getValue() === -1) segmentFormB = `-y=1`;
        this.segmentForm = segmentFormA + segmentFormB;
    }
    getX0Calculations = (): string => {
        if (this.x1 !== this.x2) {
            if (this.a.getNominator() === 0 && this.b.getNominator() === 0) return '\\infty';
            if (this.a.getNominator() === 0 && this.b.getNominator() !== 0) return '\\text{brak}';
            const minusB = this.b.multiplyByInt(-1);
            return joinUniqueWithEquals("x_0", "\\frac{-b}{a}", `\\frac{${minusB.getFractionReducedString()}}{${this.a.getFractionReducedString()}}`, this.x0.getFractionReducedString());
        }
        return '';
    }
    getA(): Fraction {
        return this.a;
    }
    getB(): Fraction {
        return this.b;
    }
    getSubstitutionEquation(): string {
        return this.substitutionEquation;
    }
    getEquation(): string {
        return this.equation;
    }
    getIsParellToOy(): boolean {
        return this.isParellToOy;
    }
    getSlopeAlphaCalculation(): string {
        let slopeAlphaFormulaA = '';
        if (this.alphaDeg % 1 === 0) slopeAlphaFormulaA = `${linearEquations.SLOPE}\\Leftrightarrow\\alpha=`;
        else slopeAlphaFormulaA = `${linearEquations.SLOPE}\\Leftrightarrow\\alpha \\approx`;

        let slopeAlphaFormulaB = `${Math.floor(this.alphaDeg * 100) / 100}^{\\circ}`;
        return slopeAlphaFormulaA + slopeAlphaFormulaB;
    }
    getSlopeForm(): string {
        if (this.x1 === this.x2) return `x=${this.x1}`;
        return this.slopeForm;
    }
    getGeneralForm(): string {
        if (this.x1 === this.x2) {
            if (this.x1 > 0) return `x-${this.x1}=0`;
            else if (this.x1 === 0) return 'x=0';
            else return `x+${this.x1 * (-1)}=0`
        }

        return this.generalForm;
    }
    getSegmentForm(): string {
        if (this.x1 === this.x2) return '';
        if (this.y1 === this.y2) return '';
        if (this.b.getValue() === 0) return '';
        return this.segmentForm;
    }


}

export default LinearFormulaFromPoints;
