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