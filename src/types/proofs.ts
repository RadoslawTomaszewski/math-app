import { GeometryEquations } from "./equations";


//Arithmetic
export const exp1Proof = [
    'a ^ x \\cdot a ^ y',
    '\\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{x \\text{ razy}} \\cdot \\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{y \\text{ razy}}',
    '\\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{x+y \\text{ razy}}',
    'a^{x+y}'
];
export const exp2Proof = [
    '\\frac{a ^ x}{ a ^ y}',
    '\\underbrace{a \\cdot a \\cdot \\ldots \\cdot a \\cdot a}_{x \\text{ razy}}\\cdot\\frac{1}{\\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{y \\text{ razy}}}',
    '\\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{x-y \\text{ razy}}',
    'a^{x-y}'
];
export const exp3Proof = [
    'a^x \\cdot b^x',
    '\\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{x \\text{ razy}} \\cdot \\underbrace{b \\cdot b \\cdot \\ldots \\cdot b}_{x \\text{ razy}}',
    '\\underbrace{ab \\cdot ab \\cdot \\ldots \\cdot ab}_{x \\text{ razy}}',
    '(a \\cdot b)^x'
];
export const exp4Proof = [
    '\\frac{a^x}{b^x}',
    '\\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{x \\text{ razy}} \\cdot \\frac{1}{\\underbrace{b \\cdot b \\cdot \\ldots \\cdot b}_{x \\text{ razy}}}',
    '\\underbrace{\\frac{a}{b} \\cdot \\frac{a}{b} \\cdot \\ldots \\cdot \\frac{a}{b}}_{x \\text{ razy}}',
    '\\left(\\frac{a}{b}\\right)^x'
];
export const exp5Proof = [
    '\\left(a^x\\right)^y',
    '\\left(\\underbrace{ a \\cdot \\ldots \\cdot a \\cdot a}_{x \\text{ razy}}\\right)^y',
    '\\underbrace{\\underbrace{ a \\cdot \\ldots \\cdot a \\cdot a}_{x \\text{ razy}} \\cdot \\underbrace{a \\cdot \\ldots \\cdot a \\cdot a}_{x \\text{ razy}} \\cdot \\ldots \\cdot \\underbrace{a \\cdot \\ldots \\cdot a \\cdot a}_{x \\text{ razy}}}_{y \\text{ razy}}',
    'a^{x \\cdot y}'
]
export const logarithmProductProof = [
    "zał: \\left(x=\\log_{a}b \\Leftrightarrow a^x=b\\right) \\wedge \\left(y=\\log_{a}c\\Leftrightarrow a^y=c\\right)",
    "\\Downarrow",
    "\\log_{a}\\left(b\\cdot c\\right)",
    "\\log_{a}\\left(a^x\\cdot a^y\\right)",
    "\\log_{a}a^{x+y}",
    "x+y",
    "\\log_{a}b + \\log_{a}c",
]
export const logarithmDivideProof = [
    "zał: \\left(x=\\log_{a}b \\Leftrightarrow a^x=b\\right) \\wedge \\left(y=\\log_{a}c\\Leftrightarrow a^y=c\\right)",
    "\\Downarrow",
    "\\log_{a}\\left(\\frac{b}{c}\\right)",
    "\\log_{a}\\left(\\frac{a^x}{a^y}\\right)",
    "\\log_{a}a^{x-y}",
    "x-y",
    "\\log_{a}b - \\log_{a}c",
]
export const logarithmicBaseExpressedAsPowerProof = [
    "\\log_{a}b^k",
    "\\log_{a}\\left(\\underbrace{b \\cdot b \\cdot \\ldots \\cdot b \\cdot b}_{k \\text{ razy}}\\right)",
    "\\underbrace{\\log_{a}b + \\log_{a}b + \\cdots + \\log_{a}b}_{k \\text{ razy}}",
    "k\\cdot \\log_{a}b"
]
export const logarithmicBaseExpressedAsPower_1Proof1 = [
    "\\log_{a}{a^k}=x",
    "a^x=a^k",
    "x=k",
]
export const logarithmicBaseExpressedAsPower_1Proof2 = [
    "\\log_{a}a^k",
    "k \\cdot \\log_{a}a",
    "k \\cdot 1",
    "k",
]
export const logarithmicBaseExpressedAsRootProof = [
    "\\log_{a}{\\sqrt[n]{b^m}}",
    "\\log_{a}{b^{\\frac{m}{n}}}",
    "\\frac{m}{n} \\cdot \\log_{a}{b}",
]
export const changeOfBaseForLogarithmProof = [
    "\\log_{a}b=x",
    "a^x=b",
    "\\log_{c}{a^x}=\\log_{c}{b}",
    "x\\cdot \\log_{c}{a}=\\log_{c}{b}",
    "x = \\frac{\\log_{c}b}{\\log_{c}a}",
]
export const switchOfBaseForLogarithmProof1 = [
    "\\log_{a}b=x",
    "a^x=b",
    "\\log_{b}{a^x}=\\log_{b}{b}",
    "x\\cdot \\log_{b}{a}=1",
    "x = \\frac{1}{\\log_{b}a}",
]
export const switchOfBaseForLogarithmProof2 = [
    "\\log_{a}b",
    "\\frac{\\log_{b}b}{\\log_{b}a}",
    "\\frac{1}{\\log_{b}a}",
]

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
    `\\sqrt{a_{n-1}\\cdot a_{n+1}}`,
    `\\sqrt{a_1\\cdot q^{\\left(n-1\\right)-1}\\cdot a_1\\cdot q^{\\left(n+1\\right)-1}}`,
    `\\sqrt{a_1\\cdot q^{\\left(n-2\\right)}\\cdot a_1\\cdot q^n}`,
    `\\sqrt{a_1^2\\cdot q^{\\left(n-2+n\\right)}}`,
    `\\sqrt{a_1^2\\cdot q^{2\\left(n-1\\right)}}`,
    `\\sqrt{a_1^2\\cdot \\left(q^{n-1}\\right)^{2}}`,
    `\\sqrt{a_1^2}\\cdot\\sqrt{\\left(q^{n-1}\\right)^{2}}`,
    `|a_1|\\cdot |q^{n-1}|`,
    `|a_1\\cdot q^{n-1}|`,
    `|a_n|`,
];
export const geometricSequenceRatioProof = [
    "\\frac{a_{n+1}}{a_n}",
    "\\frac{a_1 \\cdot q^{n}}{a_1 \\cdot q^{n-1}}",
    "\\frac{q^{n}}{q^{n-1}}",
    "\\frac{q^{n}}{q^{n} \\cdot \\frac{1}{q}}",
    "q",
];
export const geometricSequenceRatio_sumProof = [
    "\\frac{S_n-a_1}{S_n-a_n}",
    "\\frac{a_1\\cdot\\frac{1-q^n}{1-q}-a_1}{a_1\\cdot\\frac{1-q^n}{1-q}-a_1\\cdot q^{n-1}}",
    "\\frac{a_1\\cdot\\left(\\frac{1-q^n}{1-q}-1\\right)}{a_1\\left(\\frac{1-q^n}{1-q}- q^{n-1}\\right)}",
    "\\frac{\\frac{1-q^n}{1-q}-1}{\\frac{1-q^n}{1-q}- q^{n-1}}",
    "\\frac{\\frac{1-q^n}{1-q}-\\frac{1-q}{1-q}}{\\frac{1-q^n}{1-q}-\\frac{q^{n-1} \\cdot \\left(1-q\\right)}{1-q}}",
    "\\frac{\\frac{1-q^n-1+q}{1-q}}{\\frac{1-q^n-q^{n-1} \\cdot \\left(1-q\\right)}{1-q}}",
    "\\frac{\\frac{-q^n+q}{1-q}}{\\frac{1-q^n-q^{n-1} + q^n}{1-q}}",
    "\\frac{\\frac{-q^n+q}{1-q}}{\\frac{1-q^{n-1}}{1-q}}",
    "\\frac{-q^n+q}{1-q}\\cdot\\frac{1-q}{1-q^{n-1}}",
    "\\frac{q-q^n}{1-q^{n-1}}",
    "\\frac{q\\cdot(1-q^{n-1})}{1-q^{n-1}}",
    "q",
]

//Geometry
export const isoscelesTrapezoidProof = [
    GeometryEquations.TrapeziumArea2,
    `P_3=\\frac{1}{4} \\cdot \\frac{\\left( a + b \\right)}{|a-b|} \\sqrt{(|a-b|+c+c)(|a-b|+c-c)(|a-b|-c+c)(-|a-b|+c+c)}`,
    `P_3=\\frac{1}{4} \\cdot \\frac{\\left( a + b \\right)}{|a-b|} \\sqrt{|a-b|^2(|a-b|+2c)(-|a-b|+2c)}`,
    `P_3=\\frac{1}{4} \\cdot \\frac{\\left( a + b \\right)}{|a-b|} \\sqrt{|a-b|^2(2c+|a-b|)(2c-|a-b|)}`,
    `P_3=\\frac{1}{4} \\cdot \\left( a + b \\right) \\sqrt{4c^2-(a-b)^2}`,
];
export const isoscelesTrapezoidLongerSegmentProof = [
    `\\frac{a-b}{2}+b`, `\\frac{a-b}{2}+\\frac{2b}{2}`, `\\frac{a+b}{2}`,
];
export const TrapeziumAreaParallelogramProof = [
    GeometryEquations.TrapeziumArea,
    `\\frac{1}{2} \\cdot \\left(a+a\\right) \\cdot h`,
    `\\frac{1}{2} \\cdot 2a \\cdot h`,
    `a \\cdot h`,
];
export const TrapeziumAreaRectangleProof = [
    GeometryEquations.RectangleArea,
    `\\frac{1}{2} \\cdot \\left(a+a\\right) \\cdot b`,
    `\\frac{1}{2} \\cdot 2a \\cdot b`,
    `a \\cdot b`,
];
export const ParallelogramAreaRectangleProof = [
    GeometryEquations.ParallelogramArea,
    `a \\cdot b \\cdot \\sin 90 ^{\\circ}`,
    `a \\cdot b \\cdot 1`,
    `a \\cdot b`,
];
export const TrapeziumAreaSquareProof = [
    GeometryEquations.TrapeziumArea,
    `\\frac{1}{2} \\cdot \\left(a+a\\right) \\cdot a`,
    `\\frac{1}{2} \\cdot 2a \\cdot a`,
    `a^2`,
];
export const ParallelogramAreaSquareProof = [
    GeometryEquations.ParallelogramArea,
    `a \\cdot a \\cdot \\sin 90 ^{\\circ}`,
    `a^2 \\cdot 1`,
    `a^2`,
];
export const ParallelogramAreaDiamondProof = [
    GeometryEquations.ParallelogramArea,
    `a \\cdot a \\cdot \\sin \\beta`,
    `a^2 \\sin \\beta`,
];
export const TrapezoidAreaSquareProof = [
    GeometryEquations.TrapezoidArea,
    `\\frac{1}{2} \\cdot d^2 \\cdot \\sin 90 ^{\\circ}`,
    `\\frac{1}{2} \\cdot d^2 \\cdot 1`,
    `\\frac{1}{2} \\cdot d^2`,
];
export const TrapezoidAreaDiamondProof = [
    GeometryEquations.TrapezoidArea,
    `\\frac{1}{2} \\cdot d_1 \\cdot d_2 \\cdot \\sin 90 ^{\\circ}`,
    `\\frac{1}{2} \\cdot d_1 \\cdot d_2 \\cdot 1`,
    `\\frac{1}{2} \\cdot d_1 \\cdot d_2`,
];
export const DeltoidAreaProof = [
    `P_5=\\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin \\gamma + \\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin \\gamma `,
    `a \\cdot b \\cdot \\sin \\gamma`,
];

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
export const derivedOfPowerFunctionRational = [
    "\\left(x^{\\frac{m}{n}}\\right)'",
    "\\lim_{{h \\to 0}} \\frac{(x +h)^{\\frac{m}{n}} - x^{\\frac{m}{n}}}{h}",
    "\\lim_{{h \\to 0}} \\frac{ - x^{\\frac{m}{n}} + (x +h)^{\\frac{m}{n}}}{h}",
    "\\lim_{{h \\to 0}} \\frac{- x^{\\frac{m}{n}} + {\\frac{m}{n} \\choose 0}\\cdot x ^{\\frac{m}{n}}+{\\frac{m}{n} \\choose 1}\\cdot x ^{\\frac{m}{n}-1}\\cdot h + {\\frac{m}{n} \\choose 2}\\cdot x ^{\\frac{m}{n}-2}\\cdot h^2 + {\\frac{m}{n} \\choose 3}\\cdot x ^{\\frac{m}{n}-3}\\cdot h^3 + \\cdots}{h}",
    "\\lim_{{h \\to 0}} \\frac{- x^{\\frac{m}{n}} + x ^{\\frac{m}{n}}+\\frac{m}{n}\\cdot x ^{\\frac{m}{n}-1}\\cdot h + \\frac{\\frac{m}{n}\\left(\\frac{m}{n}-1\\right)}{2!}\\cdot x ^{\\frac{m}{n}-2}\\cdot h^2 + \\frac{\\frac{m}{n}\\left(\\frac{m}{n}-1\\right)\\left(\\frac{m}{n}-2\\right)}{3!}\\cdot x ^{\\frac{m}{n}-3}\\cdot h^3 + \\cdots}{h}",
    "\\lim_{{h \\to 0}} \\frac{h \\cdot \\left(\\frac{m}{n}\\cdot x ^{\\frac{m}{n}-1} + \\frac{\\frac{m}{n}\\left(\\frac{m}{n}-1\\right)}{2!}\\cdot x ^{\\frac{m}{n}-2}\\cdot h + \\frac{\\frac{m}{n}\\left(\\frac{m}{n}-1\\right)\\left(\\frac{m}{n}-2\\right)}{3!}\\cdot x ^{\\frac{m}{n}-3}\\cdot h^2 + \\cdots \\right)}{h}",
    "\\lim_{{h \\to 0}} \\left(\\frac{m}{n}\\cdot x ^{\\frac{m}{n}-1} + \\frac{\\frac{m}{n}\\left(\\frac{m}{n}-1\\right)}{2!}\\cdot x ^{\\frac{m}{n}-2}\\cdot h + \\frac{\\frac{m}{n}\\left(\\frac{m}{n}-1\\right)\\left(\\frac{m}{n}-2\\right)}{3!}\\cdot x ^{\\frac{m}{n}-3}\\cdot h^2 + \\cdots\\right)",
    "\\frac{m}{n} \\cdot x^{\\frac{m}{n}-1}",
];
export const derivedOfPowerFunctionReal = [
    "\\left(x^a\\right)'",
    "\\left(e^{\\ln{x^a}}\\right)'",
    "\\left(e^{a \\cdot \\ln{x}}\\right)'",
    "e^{a \\cdot \\ln{x}} \\cdot \\left(a \\cdot \\ln{x}\\right)'",
    "e^{\\ln{x^a}} \\cdot a \\cdot \\left(\\ln{x}\\right)'",
    "x^a \\cdot a \\cdot \\frac{1}{x}",
    "a \\cdot \\frac{x^a}{x}",
    "a \\cdot x^{a-1}",
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
];
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
export const proofOfTheQuotientRuleForDerivatives = [
    "\\left(\\frac{f\\left(x\\right)}{g\\left(x\\right)}\\right)'",
    "\\lim_{{h \\to 0}} \\frac{\\frac{f(x + h)}{g(x + h)} - \\frac{f(x)}{g(x)}}{h}",
    "\\lim_{{h \\to 0}} \\left(\\frac{1}{h} \\cdot \\left( \\frac{f(x + h)}{g(x + h)} - \\frac{f(x)}{g(x)} \\right) \\right)",
    "\\lim_{{h \\to 0}} \\left(\\frac{1}{h} \\cdot \\left(\\frac{f(x + h)\\cdot g(x)}{g(x + h)\\cdot g(x)} - \\frac{f(x)\\cdot g(x+h)}{g(x+h)\\cdot g(x)}\\right)\\right)",
    "\\lim_{{h \\to 0}} \\left( \\frac{1}{h} \\cdot \\frac{f(x + h)\\cdot g(x) - f(x)\\cdot g(x+h)}{g(x + h) \\cdot g(x)} \\right)",
    "\\lim_{{h \\to 0}} \\left( \\frac{1}{h} \\cdot \\frac{f(x + h)\\cdot g(x) - f(x)\\cdot g(x+h) + g(h+x)\\cdot f(x+h)-g(h+x) \\cdot f(x+h)}{g(x + h) \\cdot g(x)} \\right)",
    "\\lim_{{h \\to 0}} \\left( \\frac{1}{h} \\cdot \\frac{f(x + h)\\cdot g(x) -g(h+x) \\cdot f(x+h) + g(h+x)\\cdot f(x+h) - f(x)\\cdot g(x+h)}{g(x + h) \\cdot g(x)} \\right)",
    "\\lim_{{h \\to 0}} \\left( \\frac{1}{h} \\cdot \\frac{-f(x + h) \\left( -g(x) + g(h+x) \\right) + g(h+x) \\cdot \\left(f(x+h) - f(x)\\right)}{g(x + h) \\cdot g(x)} \\right)",
    "\\lim_{{h \\to 0}} \\left( \\frac{1}{h} \\cdot \\left( \\frac{-f(x + h) \\left(g(h+x)-g(x) \\right)}{g(x + h) \\cdot g(x)} + \\frac{g(h+x) \\cdot \\left(f(x+h) - f(x)\\right)}{g(x + h) \\cdot g(x)}\\right) \\right)",
    "\\lim_{{h \\to 0}} \\left( \\frac{1}{h} \\cdot \\left( \\frac{-f(x + h)}{g(x + h) \\cdot g(x)} \\cdot \\left(g(h+x) -g(x) \\right) + \\frac{g(h+x)}{g(x + h) \\cdot g(x)} \\cdot \\left(f(x+h) - f(x)\\right)\\right) \\right)",
    "\\lim_{{h \\to 0}} \\left( \\frac{-f(x + h)}{g(x + h) \\cdot g(x)} \\cdot \\frac{g(h+x)-g(x)}{h} + \\frac{g(h+x)}{g(x + h) \\cdot g(x)} \\cdot \\frac{f(x+h) - f(x)}{h}\\right)",
    "\\lim_{{h \\to 0}} \\frac{-f(x + h)}{g(x + h) \\cdot g(x)} \\cdot \\lim_{{h \\to 0}} \\frac{g(h+x)-g(x)}{h} + \\lim_{{h \\to 0}} \\frac{g(h+x)}{g(x + h) \\cdot g(x)} \\cdot \\lim_{{h \\to 0}} \\frac{f(x+h) - f(x)}{h}",
    "\\lim_{{h \\to 0}} \\frac{f(x+h) - f(x)}{h} \\cdot \\lim_{{h \\to 0}} \\frac{g(h+x)}{g(x + h) \\cdot g(x)} + \\lim_{{h \\to 0}} \\frac{-f(x + h)}{g(x + h) \\cdot g(x)} \\cdot \\lim_{{h \\to 0}} \\frac{g(h+x)-g(x)}{h}",
    "f'(x) \\cdot \\frac{g(x)}{\\left(g(x)\\right)^2} + \\frac{-f(x)}{\\left(g(x)\\right)^2} \\cdot g'(x)",
    "\\frac{f'(x)\\cdot g(x)}{\\left(g(x)\\right)^2} + \\frac{-f(x)\\cdot g'(x)}{\\left(g(x)\\right)^2}",
    "\\frac{f'(x) \\cdot g(x) - f(x) \\cdot g'(x)}{\\left(g'(x)\\right)^2}",
];
export const proofOfEquationOfTheTangentToFunction_b = [
    "f(x)=a\\cdot x+b",
    "f(x_0)=a\\cdot x_0 +b",
    "f(x_0)=f'(x_0) \\cdot x_0 +b",
    "b=f(x_0)-f'(x_0) \\cdot x_0",
];


