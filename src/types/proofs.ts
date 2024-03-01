import { GeometricSequencesEquations } from "./equations";

//Arithetic Sequence
export const arithmeticThreeConsecutiveTermsProof = [
    `\\frac{a_{n-1}+a_{n+1}}{2}`,
    `\\frac{a_1+\\left(\\left(n-1\\right)-1\\right)r+a_1+\\left(\\left(n+1\\right)-1\\right)r}{2}`,
    `\\frac{2a_1+\\left(n-2\\right)r+nr}{2}`,
    `\\frac{2a_1+\\left(n-2+n\\right)r}{2}`,
    `\\frac{2a_1+2\\left(n-1\\right)r}{2}`,
    `a_1+\\left(n-1\\right)r`,
    `a_n`,
];
//Geometric Sequence
export const geometricThreeConsecutiveTermsProof = [
    `P=\\sqrt{a_{n-1}\\cdot a_{n+1}}`,
    `\\sqrt{a_1\\cdot q^{\\left(n-1\\right)-1}\\cdot a_1\\cdot q^{\\left(n+1\\right)-1}}`,
    `\\sqrt{a_1\\cdot q^{\\left(n-2\\right)}\\cdot a_1\\cdot q^n}`,
    `\\sqrt{a_1^2\\cdot q^{\\left(n-2+n\\right)}}`,
    `\\sqrt{a_1^2\\cdot q^{2\\left(n-1\\right)}}`,
    `\\sqrt{a_1^2\\cdot q^{\\left(n-1\\right)^2}}`,
    `\\sqrt{a_1^2}\\cdot\\sqrt{q^{\\left(n-1\\right)^2}}`,
    `a_1\\cdot q^{n-1}`,
    `a_n = L`,
];

export const isoscelesTrapezoidProof = [
    GeometricSequencesEquations.areaTrapezeLong,
    `P_3=\\frac{1}{4} \\cdot \\frac{\\left( a + b \\right)}{|a-b|} \\sqrt{(|a-b|+c+c)(|a-b|+c-c)(|a-b|-c+c)(-|a-b|+c+c)}`,
    `P_3=\\frac{1}{4} \\cdot \\frac{\\left( a + b \\right)}{|a-b|} \\sqrt{|a-b|^2(|a-b|+2c)(-|a-b|+2c)}`,
    `P_3=\\frac{1}{4} \\cdot \\frac{\\left( a + b \\right)}{|a-b|} \\sqrt{|a-b|^2(2c+|a-b|)(2c-|a-b|)}`,
    `P_3=\\frac{1}{4} \\cdot \\left( a + b \\right) \\sqrt{4c^2-(a-b)^2}`,
];