import { joinUniqueWithApproximations, joinUniqueWithEquals } from "../../../utilities";
import Fraction from "./Fraction";


class FractionFloat extends Fraction {

    private originalFractionBeforeExpanded: string = "";

    constructor(nominatorFloat: number, denominatorFloat: number) {
        if (!Number.isFinite(nominatorFloat) || !Number.isFinite(denominatorFloat) || denominatorFloat === 0) {
            throw new Error('Invalid fraction');
        }

        const nominatorDecimals = (nominatorFloat.toString().split('.')[1] || '').length;
        const denominatorDecimals = (denominatorFloat.toString().split('.')[1] || '').length;
        const maxDecimals = Math.max(nominatorDecimals, denominatorDecimals);
        const factor = Math.pow(10, maxDecimals);
        const newNominator = Math.round(nominatorFloat * factor);
        const newDenominator = Math.round(denominatorFloat * factor);
        super(newNominator, newDenominator);

        this.setOriginalFractionBeforeExpanded(nominatorFloat, denominatorFloat);
    }

    private setOriginalFractionBeforeExpanded(nominator: number, denominator: number) {
        this.originalFractionBeforeExpanded = `\\frac{${nominator}}{${denominator}}`
    }
    getOriginalFractionBeforeExpanded(): string {
        return this.originalFractionBeforeExpanded;
    }
    getCalculations(): string {
        const calculations = joinUniqueWithEquals(this.getOriginalFractionBeforeExpanded(), this.getFractionWithOriginalPlacedSign(), this.getOriginalFractionString(), this.getOriginalFractionStringReducedByGCD(), this.getFractionReducedString(), this.getMixedFractionString());
        if (this.getIsValueApproximate()) return joinUniqueWithApproximations(calculations, `${this.getValue()}`);
        else if (Number.isInteger(this.getValue())) return calculations;
        else return joinUniqueWithEquals(calculations, `${this.getValue()}`);
    }

}
export default FractionFloat;