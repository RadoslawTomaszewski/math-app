export enum arithmeticSequencesEquations {
    nthTermOfArithmeticSequence = `a_n=a_1+\\left(n-1\\right)\\cdot r`,
    nthTermOfArithmeticSequence2 = `a_n=a_k+\\left(n-k\\right)`,
    threeConsecutiveTermsArithmeticSequence = `a_n=\\frac{a_{n-1}+a_{n+1}}{2}`,
}
export enum GeometricSequencesEquations {
    nthTermOfGeometricSequence = `a_n=a_1\\cdot q^{n-1}`,
    nthTermOfGeometricSequence2 = `a_n=a_k\\cdot q^{n-k}`,
    threeConsecutiveTermsGeometricSequence = `a_n=\\sqrt{a_{n-1}\\cdot a_{n+1}}`,
}
export enum GeometryEquations {
    // Perimeters
    TrapezoidPerimeter = `L=a+b+c+d`,
    IsoscelesTrapezoidPerimeter = `L=a+b+2c`,
    ParallelogramPerimeter = `L=2a+2b`,
    DiamondPerimeter = `L=4a`,
    HalfPerimeter = `p=\\frac{a+b+c+d}{2}`,

    // Areas
    QuadrangleArea = `P_1=\\sqrt{\\left( p - a \\right)\\left( p - b \\right)\\left( p - c \\right)\\left( p - d \\right)-abcd \\cdot \\cos^2 \\left(\\frac{\\alpha + \\gamma}{2}\\right)}`,
    QuadrangleArea2 = `P_1=\\frac{1}{4}\\sqrt{\\left( -a+b+c+d \\right)\\left( a-b+c+d \\right)\\left( a+b-c+d \\right)\\left( a+b+c-d \\right)-abcd \\cdot \\cos^2 \\left(\\frac{\\alpha + \\gamma}{2}\\right)}`,
    TrapezoidArea = `P_2=\\frac{1}{2} \\cdot d_1 \\cdot d_2 \\cdot  \\sin\\alpha`,
    TrapezoidArea_Isosceles = `P_2=\\frac{1}{2} \\cdot d^2 \\cdot \\sin\\alpha`,
    TrapezoidArea_Square = `P_2=\\frac{1}{2} \\cdot d^2`,
    TrapezoidArea_Diamond = `P_2=\\frac{1}{2}\\cdot d_1 \\cdot d_2`,
    TrapeziumArea = `P_3=\\frac{1}{2} \\cdot \\left( a + b \\right) \\cdot h`,
    TrapeziumArea_Rectangular = `P_3=\\frac{1}{2}\\cdot \\left( a+b \\right) \\cdot c`,
    TrapeziumArea_Parallelogram = `P_3=a \\cdot h`,
    TrapeziumArea_Rectangle = `P_4=a \\cdot b`,
    TrapeziumArea_Square = `P_4=a^2`,
    TrapeziumArea2 = `P_4=\\frac{1}{4} \\cdot \\frac{\\left( a + b \\right)}{|a-b|} \\sqrt{(|a-b|+c+d)(|a-b|+c-d)(|a-b|-c+d)(-|a-b|+c+d)}`,
    TrapeziumArea2_Isosceles = `P_4=\\frac{1}{4} \\cdot \\left( a + b \\right) \\sqrt{4c^2-(a-b)^2}`,
    ParallelogramArea = `P_5=a \\cdot b \\cdot \\sin{\\beta}`,
    ParallelogramArea_Rectangle = `P_5=a \\cdot b`,
    ParallelogramArea_Square = 'P_5=a^2',
    ParallelogramArea_Diamond = 'P_5=a^2 \\cdot \\sin{\\beta}',
    RectangleArea = `P = a \\cdot b`,
    DeltoidArea = `P_6 = a \\cdot b \\cdot \\sin \\gamma`,
    trapezoidInCircleArea = `P_1 = \\sqrt{\\left( p - a \\right)\\left( p - b \\right)\\left( p - c \\right)\\left( p - d \\right)}`,
    trapezoidInCircleArea2 = `P_1 = \\frac{1}{4}\\sqrt{\\left( -a+b+c+d \\right)\\left( a-b+c+d \\right)\\left( a+b-c+d \\right)\\left( a+b+c-d \\right)}`,
    trapezoidOnCircleArea = 'P_7 = p \\cdot r',
    trapezoidOnCircleArea2 = 'P_7 = \\frac{1}{2} \\left( a + b + c + d \\right) \\cdot r',

    // Segments
    TrapeziumMidpointsConnector = `\\frac{a+b}{2}`,
    IsoscelesTrapezium_ShorterSegment = `\\frac{a-b}{2}`,
    IsoscelesTrapezium_LongerSegment = `\\frac{a+b}{2}`,
    ParallelogramDiagonal_short = 'd_1=\\sqrt{a^2+b^2+2ab \\cos \\beta}',
    ParallelogramDiagonal_long = 'd_2=\\sqrt{a^2+b^2-2ab \\cos \\beta}',
    DiamondDiagonal_short = 'd_1=\\sqrt{2a^2\\left(1+\\cos \\alpha\\right)}',
    DiamondDiagonal_long = 'd_2=\\sqrt{2a^2\\left(1-\\cos \\alpha\\right)}',
    DeltoidDiagonal_short = 'd_1=\\sqrt{2a^2\\left(1-\\cos \\alpha\\right)}=\\sqrt{2b^2(1- \\cos \\beta)}',
    DeltoidDiagonal_long = 'd_2=\\sqrt{a^2+b^2 - 2ab \\cdot  \\cos \\gamma}',
    RectangleDiagonal = 'd=\\sqrt{a^2+b^2}',
    SquareDiagonal = 'd=\\sqrt{2}\\cdot a',
    circualDiagonal = `d_1=\\sqrt{\\frac{\\left(a \\cdot c + b \\cdot d \\right) \\left(a \\cdot b + c \\cdot d \\right)}{a \\cdot d + b \\cdot c}}`,
    circualDiagonal2 = `d_2=\\sqrt{\\frac{\\left(a \\cdot c + b \\cdot d \\right) \\left(a \\cdot d + b \\cdot c \\right)}{a \\cdot b + c \\cdot d}}`,

    // Conditions
    trapezoid_in_circle = `\\alpha + \\gamma = \\beta + \\delta = 180^{\\circ}`,
    trapezoid_on_circle = `a + c = b + d`,
    quadrilateral_interior_angles_theorem = `\\alpha + \\beta + \\gamma + \\delta = 360^{\\circ} `,
    ptolemeusTheory = `a \\cdot c + b \\cdot d = d_1 \\cdot d_2`,

}
export enum linearEquations {
    X0 = "x_0=\\frac{-b}{a}",
    SLOPE = "a=\\tan{\\alpha}",
    SLOPE_FORMULA = "f(x)=ax+b",

}
export enum quadraticEquations {
    DELTA = "\\Delta=b^2-4ac",
    P = "p=\\frac{-b}{2a}",
    P_arithmetic = "p = \\frac{x_1+x_2}{2}",
    Q = "q=\\frac{-\\Delta}{4a}",
    Q_function = "q=f(p)",
    X0 = "x_0=\\frac{-b}{2a}",
    X1 = "x_1=\\frac{-b-\\sqrt{\\Delta}}{2a}",
    X2 = "x_2=\\frac{-b+\\sqrt{\\Delta}}{2a}",
    X12 = "x_0 = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}",
    W = "W\\left(p,q\\right)",

    FACTORIAL_FORM_2 = "f(x)=a\\left(x-x_1\\right)\\left(x-x_2\\right)",
    FACTORIAL_FORM_1 = "f(x) = a\\left(x-x_0\\right)^2",
    FACTORIAL_FORM_0 = "f(x)=a\\left(x-x_1\\right)\\left(x-x_2\\right)",
    STANDARD_FORM = "f(x)=ax^2+bx+c",
    CANONICAL_FORM = "f(x)=a\\left(x-p\\right)^2+q",
}
export enum mathConstants {
    //4000 char after dot
    PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632788659361533818279682303019520353018529689957736225994138912497217752834791315155748572424541506959508295331168617278558890750983817546374649393192550604009277016711390098488240128583616035637076601047101819429555961989467678374494482553797747268471040475346462080466842590694912933136770289891521047521620569660240580381501935112533824300355876402474964732639141992726042699227967823547816360093417216412199245863150302861829745557067498385054945885869269956909272107975093029553211653449872027559602364806654991198818347977535663698074265425278625518184175746728909777727938000816470600161452491921732172147723501414419735685481613611573525521334757418494684385233239073941433345477624168625189835694855620992192221842725502542568876717904946016534668049886272327917860857843838279679766814541009538837863609506800642251252051173929848960841284886269456042419652850222106611863067442786220391949450471237137869609563643719172874677646575739624138908658326459958133904780275900946576407895126946839835259570982582262052248940772671947826848260147699090264013639443745530506820349625245174939965143142980919065925093722169646151570985838741059788595977297549893016175392846813826868386894277415599185592524595395943104997252468084598727364469584865383673622262609912460805124388439045124413654976278079771569143599770012961608944169486855584840635342207222582848864815845602850601684273945226746767889525213852254995466672782398645659611635488623057745649803559363456817432411251507606947945109659609402522887971089314566913686722874894056010150330861792868092087476091782493858900971490967598526136554978189312978482168299894872265880485756401427047755513237964145152374623436454285844479526586782105114135473573952311342716610213596953623144295248493718711014576540359027993440374200731057853906219838744780847848968332144571386875194350643021845319104848100537061468067491927819119793995206141966342875444064374512371819217999839101591956181467514269123974894090718649423196156794520809514655022523160388193014209376213785595663893778708303906979207734672218256259966150142150306803844773454920260541466592520149744285073251866600213243408819071048633173464965145390579626856100550810665879699816357473638405257145910289706414011097120628043903975951567715770042033786993600723055876317635942187312514712053292819182618612586732157919841484882916447060957527069572209175671167229109816909152801735067127485832228718352093539657251210835791513698820914442100675103346711031412671113699086585163983150197016515116851714376576183515565088490998985998238734552833163550764791853589322618548963213293308985706420467525907091548141654985946163718027098199430992448895757128289059232332609729971208443357326548938239119325974636673058360414281388303203824903758985243744170291327656180937734440307074692112019130203303801976211011004492932151608424448596376698389522868478312355265821314495768572624334418930396864262434107732269780280731891544110104468232527162010526522721116603966",
    PI_APPROXIMATION_1 = "\\pi\\approx\\frac{22}{7}",

}
export enum statisticEquations {
    AVERAGE_DEFINITION_FUNCTION = `f(x_1,x_2,...x_n)`,
    AVERAGE_DEFINITION_INEQUALITY = `\\min \\left(x_1,x_2,...x_n\\right)\\leq f(x_1,x_2,...x_n) \\leq \\max \\left(x_1,x_2,...x_n\\right)`,
    MEDIANA_2N = `\\bar{m}=\\frac{x_{\\frac{n}{2}}+x_{\\frac{n+2}{2}}}{2}`,
    MEDIANA_2N_1 = `\\bar{m}=x_{\\frac{n+1}{2}}`,
    ARITHMETIC_MEAN = `\\bar{a}=\\frac{x_1+x_2+\\cdots+x_n}{n}=\\frac{1}{n}\\sum_{i=1}^{n}x_i`,
    GEOMETRIC_MEAN = `\\bar{g}=\\sqrt[n]{x_1 \\cdot x_2 \\cdots x_n}=\\sqrt[n]{\\prod_{i=1}^{n} x_i}`,
    HARMONIC_MEAN = `\\bar{h}=\\frac{n}{\\frac{1}{x_1}+\\frac{1}{x_2}+\\cdots+\\frac{1}{x_n}}=\\frac{n}{\\sum_{i=1}^{n}\\frac{1}{x_i}}`,
    SQUARE_MEAN = `\\bar{k}=\\sqrt{\\frac{\\left(x_1\\right)^2+\\left(x_2\\right)^2+\\cdots+\\left(x_n\\right)^2}{n}}=\\sqrt{\\frac{1}{n}\\sum_{i=1}^{n}x_i^2}`,
    RANGE_MIDDLE = `\\bar{M}=\\frac{\\min(x_1, x_2, ..., x_n) + \\max(x_1, x_2, ..., x_n)}{2}`,
    CAUCHY_INEQUALITY = `\\bar{k} \\geq \\bar{a} \\geq \\bar{g} \\geq \\bar{h}`,
    CAUCHY_INEQUALITY_CASE = `\\bar{k} = \\bar{a} = \\bar{g} = \\bar{h}`,
    CAUCHY_INEQUALITY_FULL = `\\sqrt{\\frac{\\left(x_1\\right)^2+\\left(x_2\\right)^2+\\cdots+\\left(x_n\\right)^2}{n}} \\geq \\frac{x_1+x_2+\\cdots+x_n}{n} \\geq  \\sqrt[n]{x_1 \\cdot x_2 \\cdots x_n} \\geq \\frac{n}{\\frac{1}{x_1}+\\frac{1}{x_2}+\\cdots+\\frac{1}{x_n}}`
}

//Algebraic Expressions
export enum shortmultiplicationFormulas {
    SQUARE_OF_THE_SUM = "(a + b)^2 = a^2 + 2ab + b^2",
    SQUARE_OF_THE_DIFFERENCE = "(a - b)^2 = a^2 - 2ab + b^2",
    DIFFERENCE_OF_SQUARES = "a^2 - b^2 = (a - b)(a + b)",
    CUBE_OF_THE_SUM = "(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3",
    CUBE_OF_THE_DIFFERENCE = "(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3",
    SUM_OF_CUBES = "a^3 + b^3 = (a + b)(a^2 - ab + b^2)",
    DIFFERENCE_OF_CUBES = "a^3 - b^3 = (a - b)(a^2 + ab + b^2)",
    NTH_POWER_OF_THE_SUM = "(a + b)^n = \\sum_{k=0}^{n}{n \\choose k} a^{n-k} b^k",
    NTH_POWER_OF_THE_DIFFERENCE = "(a - b)^n = \\sum_{k=0}^{n}{(-1)^k {n \\choose k}} a^{n-k} b^k",
    DIFFERENCE_OF_NTH_POWERS = "a^n-b^n=\\left(a-b\\right)\\left(a^{n-1}+a^{n-2}b+...+ab^{n-2}+b^{n-1}\\right)"
}


//Mathematical Analytics
export enum mathematicalAnalyticsFormulas {
    derivedFunctionDefinition = "f'(x_0)=\\lim_{{h \\to 0}} \\frac{f(x_0 + h) - f(x_0)}{h}",
    derivedFunctionDefinition_tangens = "\\tan{\\alpha}=\\frac{f\\left(x_0+h\\right)-f\\left(x_0\\right)}{h}",
    derivedFunctionDefinitionLong = "f'\\left(x_0\\right)=a=\\tan{\\alpha}=\\lim_{{h \\to 0}} \\frac{f(x + h) - f(x)}{h}",
    derivedFunctionDefinition_2 = "f'(x_0)=\\lim_{{x \\to x_0}} \\frac{f(x) - f(x_0)}{x-x_0}",
    derivedFunctionDefinition_pointA = "A=\\left(x_0,f(x_0)\\right)",
    derivedFunctionDefinition_pointB = "B=\\left(x_0+h, f\\left(x_0+h\\right)\\right)",
    DeltaX = "\\Delta x = h",
    DeltaY = "\\Delta y = f\\left(x_0+h\\right)-f\\left(x_0\\right) ",
    differentaliQuotient = "\\tan{\\alpha}=\\frac{\\Delta y}{\\Delta x}",
    derivedOfPowerFunctionReal = "\\left(x^a\\right)'=a\\cdot x^{a-1}",
    derivedOfPowerFunctionNatural = "\\left(x^n\\right)'=n\\cdot x^{n-1}",
    derivedOfPowerFunctionNegativeIntegral = "\\left(x^{-n}\\right)'={-n}\\cdot x^{-n-1}",
    derivedOfPowerFunctionRational = "\\left(x^{\\frac{m}{n}}\\right)'={\\frac{m}{n}}\\cdot x^{\\frac{m}{n}-1}",
    sumRuleForDerivatives = "\\left(f\\left(x\\right) + g\\left(x\\right)\\right)' = f'\\left(x\\right) + g'\\left(x\\right)",
    productRuleForDerivatives = "\\left(f\\left(x\\right)\\cdot g\\left(x\\right)\\right)' = f'\\left(x\\right)\\cdot g\\left(x\\right) + f\\left(x\\right)\\cdot g'\\left(x\\right)",
    equationOfTheTangentToFunction = "y = f'(x_0)(x - x_0) + f(x_0)",
    equationOfTheTangentToFunction_2 = "y = f'(x_0)+f(x_0)-f'(x_0) \\cdot x_0",
    equationOfTheTangentToFunction_b = "b=f(x_0)-f'(x_0) \\cdot x_0",
    equationOfTheTangentToFunction_a = "a=f'(x_0)",


}