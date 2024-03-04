import { GeometryEquations } from "./equations";

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
    GeometryEquations.TrapeziumArea2,
    `P_3=\\frac{1}{4} \\cdot \\frac{\\left( a + b \\right)}{|a-b|} \\sqrt{(|a-b|+c+c)(|a-b|+c-c)(|a-b|-c+c)(-|a-b|+c+c)}`,
    `P_3=\\frac{1}{4} \\cdot \\frac{\\left( a + b \\right)}{|a-b|} \\sqrt{|a-b|^2(|a-b|+2c)(-|a-b|+2c)}`,
    `P_3=\\frac{1}{4} \\cdot \\frac{\\left( a + b \\right)}{|a-b|} \\sqrt{|a-b|^2(2c+|a-b|)(2c-|a-b|)}`,
    `P_3=\\frac{1}{4} \\cdot \\left( a + b \\right) \\sqrt{4c^2-(a-b)^2}`,
];

export const isoscelesTrapezoidLongerSegmentProof = [
    `\\frac{a-b}{2}+b`, `\\frac{a-b}{2}+\\frac{2b}{2}`, `\\frac{a+b}{2}`,
]

export const TrapeziumAreaParallelogramProof = [
    GeometryEquations.TrapeziumArea,
    `\\frac{1}{2} \\cdot \\left(a+a\\right) \\cdot h`,
    `\\frac{1}{2} \\cdot 2a \\cdot h`,
    `a \\cdot h`,
]

export const TrapeziumAreaRectangleProof = [
    GeometryEquations.RectangleArea,
    `\\frac{1}{2} \\cdot \\left(a+a\\right) \\cdot b`,
    `\\frac{1}{2} \\cdot 2a \\cdot b`,
    `a \\cdot b`,
]

export const ParallelogramAreaRectangleProof = [
    GeometryEquations.ParallelogramArea,
    `a \\cdot b \\cdot \\sin 90 ^{\\circ}`,
    `a \\cdot b \\cdot 1`,
    `a \\cdot b`,
]

export const TrapeziumAreaSquareProof = [
    GeometryEquations.TrapeziumArea,
    `\\frac{1}{2} \\cdot \\left(a+a\\right) \\cdot a`,
    `\\frac{1}{2} \\cdot 2a \\cdot a`,
    `a^2`,
]

export const ParallelogramAreaSquareProof = [
    GeometryEquations.ParallelogramArea,
    `a \\cdot a \\cdot \\sin 90 ^{\\circ}`,
    `a^2 \\cdot 1`,
    `a^2`,
]

export const ParallelogramAreaDiamondProof = [
    GeometryEquations.ParallelogramArea,
    `a \\cdot a \\cdot \\sin \\beta`,
    `a^2 \\sin \\beta`,
]

export const TrapezoidAreaSquareProof = [
    GeometryEquations.TrapezoidArea,
    `\\frac{1}{2} \\cdot d^2 \\cdot \\sin 90 ^{\\circ}`,
    `\\frac{1}{2} \\cdot d^2 \\cdot 1`,
    `\\frac{1}{2} \\cdot d^2`,
]

export const TrapezoidAreaDiamondProof = [
    GeometryEquations.TrapezoidArea,
    `\\frac{1}{2} \\cdot d_1 \\cdot d_2 \\cdot \\sin 90 ^{\\circ}`,
    `\\frac{1}{2} \\cdot d_1 \\cdot d_2 \\cdot 1`,
    `\\frac{1}{2} \\cdot d_1 \\cdot d_2`,
]

export const DeltoidAreaProof = [
    `P_5=\\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin \\gamma + \\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin \\gamma `,
    `a \\cdot b \\cdot \\sin \\gamma`,
]

