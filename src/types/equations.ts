//Linear Formula
export enum linearEquations {
    X0 = "x_0=\\frac{-b}{a}",
    SLOPE = "a=\\tan{\\alpha}",

    SLOPE_FORMULA = "f(x)=ax+b",
}


//Quadratic Formula
export enum quadraticEquations {
    DELTA = "\\Delta=b^2-4ac",
    P = "p=\\frac{-b}{2a}",
    Q = "q=\\frac{-\\Delta}{4a}",
    X0 = "x_0=\\frac{-b}{2a}",
    X1 = "x_1=\\frac{-b-\\sqrt{\\Delta}}{2a}",
    X2 = "x_2=\\frac{-b+\\sqrt{\\Delta}}{2a}",
    W = "W\\left(p,q\\right)",

    FACTORIAL_FORM = "f(x)=a\\left(x-x_1\\right)\\left(x-x_2\\right)",
    STANDARD_FORM = "f(x)=ax^2+bx+c",
    CANONICAL_FORM = "f(x)=a\\left(x-p\\right)^2+q",
}
