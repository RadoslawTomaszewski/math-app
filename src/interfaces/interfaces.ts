import Decimal from "decimal.js";
import { ChangeEventHandler } from "react";

export interface IConvertInputField {
    label: string;
    value: Decimal | null;
    onChange: ChangeEventHandler<HTMLInputElement>;
    name: string;
}
export interface ITitle {
    text: string;
    size?: string;
}


//article items
export interface ILegendParagraph{
    type: string,
    notation: string,
    explanation: string,
}
export interface IFormula {
    formula: string;
}
export interface IMathExpression {
    expression: string;
}
export interface IGraphImage{
    size: string;
    src: string;
    alt: string;
}
 export interface IProof {
    steps: string[];
    text: string;
}