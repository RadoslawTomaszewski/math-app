export const triangleConditionProof = [
    "(a+b>c) \\wedge (a+c>b) \\wedge (b+c>a)",
    "(b-c>-a) \\wedge (a>b-c) \\wedge (b+c>a)",
    "(b-c>-a) \\wedge (b-c<a) \\wedge (b+c>a)",
    "(b-c<a) \\wedge (b-c>-a) \\wedge (b+c>a)",
    "(|b-c|<a) \\wedge (a<b+c)",
    "|b-c|<a<b+c",
];

export const HeronProof = [
    "\\sqrt{p(p-a)(p-b)(p-c)}",
    "\\sqrt{\\frac{a+b+c}{2} \\left( \\frac{a+b+c}{2} - \\frac{2a}{2} \\right) \\left(\\frac{a+b+c}{2} - \\frac{2b}{2} \\right) \\left(\\frac{a+b+c}{2} - \\frac{2c}{2} \\right) }",
    "\\sqrt{\\frac{a+b+c}{2} \\cdot \\frac{-a+b+c}{2} \\cdot \\frac{a-b+c}{2} \\cdot \\frac{a+b-c}{2} }",
    "\\sqrt{\\frac{1}{16} \\cdot \\left(a+b+c\\right)\\left(-a+b+c\\right)\\left(a-b+c\\right)\\left(a+b-c\\right)}",
    "\\frac{1}{4} \\sqrt{\\left(a+b+c\\right)\\left(-a+b+c\\right)\\left(a-b+c\\right)\\left(a+b-c\\right)}",

]