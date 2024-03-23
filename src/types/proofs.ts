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

//Algebraic Expressions
export const squareOfTheSum = [
    "(a + b)^2",
    "(a + b)(a + b)",
    "a^2+ab+ab+b^2",
    "a^2+2ab+b^2",
];
export const squareOfTheDifference = [
    "(a - b)^2",
    "(a - b)(a - b)",
    "a^2-ab-ab+b^2",
    "a^2-2ab+b^2",
];
export const differenceOfSquares = [
    "(a - b)(a + b)", "a^2+ab-ab-b^2", "a^2-b^2"
];
export const cubeOfTheSum = [
    "(a + b)^3",
    "(a + b)(a^2 + 2ab + b^2)",
    "a(a^2) + a(2ab) + a(b^2) + b(a^2) + b(2ab) + b(b^2)",
    "a^3 + 2a^2b + ab^2 + a^2b + 2ab^2 + b^3",
    "a^3 + 3a^2b + 3ab^2 + b^3",
];
export const cubeOfTheDifference = [
    "(a - b)^3",
    "(a - b)(a^2 - 2ab + b^2)",
    "a(a^2) + a(-2ab) + a(b^2) - b(a^2) - b(-2ab) + b(b^2)",
    "a^3 - 2ab^2 + a^2b - a^2b + 2ab^2 + b^3",
    "a^3 - 3a^2b + 3ab^2 - b^3",
];
export const sumOfCubes = [
    "(a + b)(a^2 - ab + b^2)",
    "a(a^2) + a(-ab) + a(b^2) + b(a^2) + b(-ab) + b(b^2)",
    "a^3 - a^2b + ab^2 + a^2b - ab^2 + b^3",
    "a^3 + b^3",
];
export const differenceOfCubes = [
    "(a - b)(a^2 + ab + b^2)",
    "a(a^2) + a(ab) + a(b^2) - b(a^2) - b(ab) - b(b^2)",
    "a^3 + a^2b + ab^2 - a^2b - ab^2 - b^3",
    "a^3 - b^3",
];

//Functions
//Quadratic Function
export const QuadraticFunction_zeroPlaceProof = [
    `ax^2 + bx + c = 0`,
    `x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0`,
    `x^2 + \\frac{b}{a}x = -\\frac{c}{a}`,
    `x^2 + \\frac{b}{a}x + \\frac{b^2}{4a^2} = -\\frac{c}{a} + \\frac{b^2}{4a^2}`,
    `\\left(x + \\frac{b}{2a}\\right)^2 = -\\frac{c}{a} + \\frac{b^2}{4a^2}`,
    `\\left(x + \\frac{b}{2a}\\right)^2 = -\\frac{4ac}{4a^2} + \\frac{b^2}{4a^2}`,
    `\\left({x} + \\frac{b}{2a}\\right)^2 = \\frac{b^2-4ac}{4a^2}`,
    `\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{\\Delta}{4a^2}`,
    `\\sqrt{\\left(x + \\frac{b}{2a}\\right)^2} = \\sqrt{\\frac{\\Delta}{4a^2}}`,
    `\\left|x + \\frac{b}{2a}\\right| = \\frac{\\sqrt{\\Delta}}{2a}`,
    `x + \\frac{b}{2a} = \\frac{\\sqrt{\\Delta}}{2a} \\lor x + \\frac{b}{2a} = -\\frac{\\sqrt{\\Delta}}{2a}`,
    `x = -\\frac{b}{2a} + \\frac{\\sqrt{\\Delta}}{2a} \\lor x = -\\frac{b}{2a} - \\frac{\\sqrt{\\Delta}}{2a}`,
    `x = \\frac{-b + \\sqrt{\\Delta}}{2a} \\lor x = \\frac{-b - \\sqrt{\\Delta}}{2a}`,
    `x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}`,
];
export const QuadraticFunction_pProof = [
    `p = \\frac{x_1+x_2}{2}`,
    `p = \\frac{1}{2}\\left(\\frac{-b + \\sqrt{\\Delta}}{2a}+\\frac{-b - \\sqrt{\\Delta}}{2a}\\right)`,
    `p = \\frac{1}{2}\\left(\\frac{-2b + \\sqrt{\\Delta}-\\sqrt{\\Delta}}{2a}\\right)`,
    `p = \\frac{-b}{2a}`,
];
export const QuadraticFunction_qProof = [
    `q = f(p)`,
    `q = ap^2 + bp + c`,
    `q = a\\left(\\frac{-b}{2a}\\right)^2 + b\\left(\\frac{-b}{2a}\\right) + c`,
    `q = a\\left(\\frac{b^2}{4a^2}\\right) + b\\left(\\frac{-b}{2a}\\right) + c`,
    `q = \\frac{b^2}{4a} + \\frac{-b^2}{2a}+ c`,
    `q = \\frac{b^2}{4a} + \\frac{-2b^2}{4a}+ \\frac{4ac}{4a}`,
    `q = \\frac{-b^2+4ac}{4a}`,
    `q = \\frac{-\\left(b^2-4ac\\right)}{4a}`,
    `q = \\frac{-\\Delta}{4a}`,
];

//Derived Function
export const derivedOfPowerFunctionNaturalFrom2 = [
    "\\left(x^n\\right)'",
    "\\lim_{{h \\to 0}} \\frac{(x +h)^{n} - x ^n}{h}",
    "\\lim_{{h \\to 0}} \\frac{{n \\choose 0}\\cdot x ^n+{n \\choose 1}\\cdot x ^{n-1}\\cdot h + {n \\choose 2}\\cdot x ^{n-2}\\cdot h^2 + \\cdots +{n \\choose n-1}\\cdot x \\cdot h^{n-1}+{n \\choose n}\\cdot h^{n}-x ^n}{h}",
    "\\lim_{{h \\to 0}} \\frac{x ^n+n\\cdot x ^{n-1}\\cdot h + {n \\choose 2}\\cdot x ^{n-2}\\cdot h^2 + \\cdots +n\\cdot x \\cdot h^{n-1}+ h^{n}-x ^n}{h}",
    "\\lim_{{h \\to 0}} \\frac{n\\cdot x ^{n-1}\\cdot h + {n \\choose 2}\\cdot x ^{n-2}\\cdot h^2 + \\cdots +n\\cdot x \\cdot h^{n-1}+ h^{n}}{h}",
    "\\lim_{{h \\to 0}} \\frac{h\\left( n\\cdot x ^{n-1} + {n \\choose 2}\\cdot x ^{n-2}\\cdot h + \\cdots +n\\cdot x \\cdot h^{n-2}+ h^{n-1}\\right)}{h}",
    "\\lim_{{h \\to 0}} \\left(n\\cdot x ^{n-1} + {n \\choose 2}\\cdot x ^{n-2}\\cdot h + \\cdots +n\\cdot x \\cdot h^{n-2}+ h^{n-1}\\right)",
    "n\\cdot x ^{n-1}",
];
export const derivedOfPowerFunctionNaturalEqual1 = [
    "\\left(x^1\\right)'",
    "\\lim_{{h \\to 0}} \\frac{f(x + h) - f(x)}{h}",
    "\\lim_{{h \\to 0}} \\frac{(x + h) - x}{h}",
    "\\lim_{{h \\to 0}} \\frac{h}{h}",
    "\\lim_{{h \\to 0}} 1",
    "1",
    "1 \\cdot 1",
    "1 \\cdot x^{0}",
    "1 \\cdot x^{1-1}",
];
export const derivedOfPowerFunctionNaturalEqual0 = [
    "\\left(x^0\\right)'",
    "\\lim_{{h \\to 0}} \\frac{(x+ h)^0 - x^0}{h}",
    "\\lim_{{h \\to 0}} \\frac{1-1}{h}",
    "\\lim_{{h \\to 0}} \\frac{0}{h}",
    "0",
    "0\\cdot x^{0-1}",
];
export const derivedOfPowerFunctionNegativeIntegralToMinus2 = [
    "\\left(x^{-n}\\right)'",
    "\\lim_{{h \\to 0}} \\frac{(x+h)^{-n} - x^{-n}}{h}",
    "\\lim_{{h \\to 0}} \\frac{\\frac{1}{(x+h)^{n}} - \\frac{1}{x^{n}}}{h}",
    "\\lim_{{h \\to 0}} \\left(\\frac{1}{h} \\cdot \\left(\\frac{1}{(x+h)^n} - \\frac{1}{x^n}\\right)\\right)",
    "\\lim_{{h \\to 0}} \\left(\\frac{1}{h} \\cdot \\left(\\frac{x^n}{(x+h)^n\\cdot x^n} - \\frac{(x+h)^n}{(x+h)^n\\cdot x^n}\\right)\\right)",
    "\\lim_{{h \\to 0}} \\left(\\frac{1}{h} \\cdot \\frac{x^n-(x+h)^n}{(x+h)^n\\cdot x^n}\\right)",
    "\\lim_{{h \\to 0}} \\left(\\frac{1}{h} \\cdot \\frac{x^n- \\left({n \\choose 0}\\cdot x^n+{n \\choose 1}\\cdot x^{n-1}\\cdot h+{n \\choose 2}\\cdot x^{n-2}\\cdot h^2+\\cdots+{n \\choose n-1}\\cdot x\\cdot h^{n-1}+{n \\choose n}\\cdot h^{n} \\right)}{(x+h)^n\\cdot x^n}\\right)",
    "\\lim_{{h \\to 0}} \\left(\\frac{1}{h} \\cdot \\frac{x^n- \\left(x^n+n\\cdot x^{n-1}\\cdot h+{n \\choose 2}\\cdot x^{n-2}\\cdot h^2+\\cdots+n\\cdot x\\cdot h^{n-1}+h^{n} \\right)}{(x+h)^n\\cdot x^n}\\right)",
    "\\lim_{{h \\to 0}} \\left(\\frac{1}{h} \\cdot \\frac{x^n- x^n - n\\cdot x^{n-1}\\cdot h - {n \\choose 2}\\cdot x^{n-2}\\cdot h^2 - \\cdots+n\\cdot x\\cdot h^{n-1} - h^{n}}{(x+h)^n\\cdot x^n}\\right)",
    "\\lim_{{h \\to 0}} \\left(\\frac{1}{h} \\cdot \\frac{h\\left(- n\\cdot x^{n-1} - {n \\choose 2}\\cdot x^{n-2}\\cdot h - \\cdots+n\\cdot x\\cdot h^{n-2} - h^{n-1}\\right)}{(x+h)^n\\cdot x^n}\\right)",
    "\\lim_{{h \\to 0}} \\frac{- n\\cdot x^{n-1} - {n \\choose 2}\\cdot x^{n-2}\\cdot h - \\cdots+n\\cdot x\\cdot h^{n-2} - h^{n-1}}{(x+h)^n\\cdot x^n}",
    "\\frac{- n\\cdot x^{n-1}}{x^n\\cdot x^n}",
    "\\frac{- n\\cdot x^{n-1}}{x^{2n}}",
    "- n\\cdot x^{n-1-2n}",
    "- n\\cdot x^{-n-1}",
];
export const derivedOfPowerFunctionNegativeIntegralMinus1 = [
    "\\left(x^{-1}\\right)'",
    "\\lim_{{h \\to 0}} \\frac{(x+h)^{-1} - x^{-1}}{h}",
    "\\lim_{{h \\to 0}} \\frac{\\frac{1}{x+h} - \\frac{1}{x}}{h}",
    "\\lim_{{h \\to 0}} \\left(\\frac{1}{h} \\cdot \\left(\\frac{1}{x+h} - \\frac{1}{x}\\right)\\right)",
    "\\lim_{{h \\to 0}} \\left(\\frac{1}{h} \\cdot \\left(\\frac{x}{(x+h)\\cdot x} - \\frac{x+h}{(x+h)\\cdot x}\\right)\\right)",
    "\\lim_{{h \\to 0}} \\left(\\frac{1}{h} \\cdot \\frac{x-(x+h)}{(x+h)\\cdot x}\\right)",
    "\\lim_{{h \\to 0}} \\left(\\frac{1}{h} \\cdot \\frac{x-x-h}{(x+h)\\cdot x}\\right)",
    "\\lim_{{h \\to 0}} \\left(\\frac{1}{h} \\cdot \\frac{-h}{(x+h)\\cdot x}\\right)",
    "\\lim_{{h \\to 0}} \\frac{-1}{(x+h)\\cdot x}",
    "\\frac{-1}{x\\cdot x}",
    "-\\frac{1}{x^2}",
    "-x^{-2}",
    "- 1\\cdot x^{-1-1}",
];
export const derivedOfPowerFunctionNegativeRational = [
    "\\left(x^{\\frac{m}{n}}\\right)'",
    "...",
    "\\frac{m}{n} \\cdot x^{\\frac{a}{b}-1}",
];

export const proofOfTheSumRuleForDerivatives = [
    "\\left(f\\left(x\\right) + g\\left(x\\right)\\right)'",
    "\\lim_{{h \\to 0}} \\frac{\\left(f(x_0 + h) + g(x_0 + h)\\right) - \\left(f(x_0) + g(x_0)\\right)}{h}",
    "\\lim_{{h \\to 0}} \\frac{f(x_0 + h) + g(x_0 + h) - f(x_0) - g(x_0)}{h}",
    "\\lim_{{h \\to 0}} \\frac{f(x_0 + h) - f(x_0) + g(x_0 + h) - g(x_0)}{h}",
    "\\lim_{{h \\to 0}} \\left(\\frac{f(x_0 + h) - f(x_0)}{h} + \\frac{g(x_0 + h) - g(x_0)}{h}\\right)",
    "\\lim_{{h \\to 0}} \\frac{f(x_0 + h) - g(x_0)}{h} + \\lim_{{h \\to 0}} \\frac{g(x_0 + h) - g(x_0)}{h}",
    "f'\\left(x\\right) + g'\\left(x\\right)",
];

export const proofOfTheDifferenceRuleForDerivatives = [
    "\\left(f\\left(x\\right) - g\\left(x\\right)\\right)'",
    "\\lim_{{h \\to 0}} \\frac{\\left(f(x_0 + h) - g(x_0 + h)\\right) - \\left(f(x_0) - g(x_0)\\right)}{h}",
    "\\lim_{{h \\to 0}} \\frac{f(x_0 + h) - g(x_0 + h) - f(x_0) + g(x_0)}{h}",
    "\\lim_{{h \\to 0}} \\frac{f(x_0 + h) - f(x_0) - g(x_0 + h) + g(x_0)}{h}",
    "\\lim_{{h \\to 0}} \\frac{f(x_0 + h) - f(x_0) - \\left(g(x_0 + h) - g(x_0)\\right)}{h}",
    "\\lim_{{h \\to 0}} \\left(\\frac{f(x_0 + h) - f(x_0)}{h} - \\frac{g(x_0 + h) - g(x_0)}{h}\\right)",
    "\\lim_{{h \\to 0}} \\frac{f(x_0 + h) - g(x_0)}{h} - \\lim_{{h \\to 0}} \\frac{g(x_0 + h) - g(x_0)}{h}",
    "f'\\left(x\\right) - g'\\left(x\\right)",
]

export const proofOfTheProductRuleForDerivatives = [
    "\\left(f\\left(x\\right) \\cdot g\\left(x\\right)\\right)'",
    "\\lim_{{h \\to 0}} \\frac{f(x + h) \\cdot g(x + h) - f(x) \\cdot g(x)}{h}",
    "\\lim_{{h \\to 0}} \\frac{f(x + h) \\cdot g(x + h) - f(x) \\cdot g(x) + f(x) \\cdot g(x + h) - f(x) \\cdot g(x + h)}{h}",
    "\\lim_{{h \\to 0}} \\frac{f(x + h) \\cdot g(x + h) - f(x) \\cdot g(x + h) + f(x) \\cdot g(x + h) - f(x) \\cdot g(x)}{h} ",
    "\\lim_{{h \\to 0}} \\frac{g(x + h) \\cdot \\left( f\\left(x + h\\right) - f\\left(x\\right)\\right) + f(x) \\cdot \\left(g(x + h) - g(x)\\right)}{h} ",
    "\\lim_{{h \\to 0}} \\left(\\frac{g(x + h) \\cdot \\left( f\\left(x + h\\right) - f\\left(x\\right)\\right)}{h} + \\frac{f(x) \\cdot \\left(g(x + h) - g(x)\\right)}{h}\\right)",
    "\\lim_{{h \\to 0}} \\frac{g(x + h) \\cdot \\left( f\\left(x + h\\right) - f\\left(x\\right)\\right)}{h} + \\lim_{{h \\to 0}} \\frac{f(x) \\cdot \\left(g\\left(x + h\\right) - g\\left(x\\right)\\right)}{h}",
    "\\lim_{{h \\to 0}} \\left(g\\left(x + h\\right) \\cdot \\frac{f\\left(x + h\\right) - f\\left(x\\right)}{h}\\right) + \\lim_{{h \\to 0}} \\left(f(x) \\cdot \\frac{g(x + h) - g(x)}{h}\\right)",
    "\\lim_{{h \\to 0}} g\\left(x + h\\right) \\cdot \\lim_{{h \\to 0}} \\frac{f\\left(x + h\\right) - f\\left(x\\right)}{h} + \\lim_{{h \\to 0}} f(x) \\cdot \\lim_{{h \\to 0}} \\frac{g(x + h) - g(x)}{h}",
    "\\lim_{{h \\to 0}} \\frac{f\\left(x + h\\right) - f\\left(x\\right)}{h}  \\cdot  \\lim_{{h \\to 0}} g\\left(x + h\\right) + \\lim_{{h \\to 0}} f(x) \\cdot \\lim_{{h \\to 0}} \\frac{g(x + h) - g(x)}{h}",
    "f'(x) \\cdot g(x) + f(x) \\cdot g'(x)",
];

export const proofOfEquationOfTheTangentToFunction_b = [
    "f(x)=a\\cdot x+b",
    "f(x_0)=a\\cdot x_0 +b",
    "f(x_0)=f'(x_0) \\cdot x_0 +b",
    "b=f(x_0)-f'(x_0) \\cdot x_0",
]


