import React, { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/articleItems/Title";
import { ErrorMessage, InputCoefficientStyle } from "../../../../utilities/styles";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Formula from "../../../../components/articleItems/Formula";
import QuadraticFormula from "../../../../types/objects/QuadraticFormula/QuadraticFormula";
import { numberRegisterOptions } from "../../../../utilities/validation";
import { quadraticEquations } from "../../../../types/equations";
import Loader from "../../../../components/Loader/Loader";
import { NavLink } from "react-router-dom";

interface FormData {
    a: string;
    b: string;
    c: string;
}

const QuadraticFunctionCalculatorContent: FC = () => {
    const [quadraticFormula, setQuadraticFormula] = useState<QuadraticFormula>(new QuadraticFormula(0, 0, 0));
    const [showGraph, setShowGraph] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormData>({ defaultValues: { a: "", b: "", c: "" } });

    const watchA = watch("a");
    const watchB = watch("b");
    const watchC = watch("c");

    useEffect(() => {
        if (watchA && watchB && watchC && !errors.a && !errors.b && !errors.c) {
            setQuadraticFormula(new QuadraticFormula(Number(watchA), Number(watchB), Number(watchC)));
            setShowGraph(false);
        }
    }, [watchA, watchB, watchC, errors.a, errors.b, errors.c]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const inputName = event.target.name;
        if (inputName === 'a' || inputName === 'b' || inputName === 'c')
            setValue(inputName, inputValue, { shouldValidate: true });
    };

    const loadDesmosScript = () => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://www.desmos.com/api/v1.8/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    };

    const handleGenerateGraph = async () => {
        setShowGraph(true);
        setLoading(true);
        const graphContainer = document.getElementById('graph-container');
        if (graphContainer) {
            while (graphContainer.firstChild) {
                graphContainer.removeChild(graphContainer.firstChild);
            }
        }
        await loadDesmosScript();
        const elt = document.createElement('div');
        elt.style.maxWidth = '100%';
        elt.style.width = '100%';
        elt.style.height = '400px';
        document.getElementById('graph-container')?.appendChild(elt);

        const Desmos = window.Desmos;
        const calculator = Desmos.GraphingCalculator(elt);
        const equation1 = quadraticFormula.getStandardForm();
        const equation2 = quadraticFormula.getCanonicalForm();
        const equation3 = quadraticFormula.getFactoredForm();
        const W = { id: 'W', latex: `W=(${quadraticFormula.getPResult()},${quadraticFormula.getQResult()})` };
        const Poy = { id: 'Poy', latex: `P_{OY}=(0,${quadraticFormula.getC()})` };

        calculator.setExpression({ id: 'graph1', latex: equation1 });
        calculator.setExpression({ id: 'graph2', latex: equation2 });
        calculator.setExpression({ id: 'graph3', latex: equation3 });

        calculator.setExpression(W);
        calculator.setExpression(Poy);

        if (quadraticFormula.getDelta() > 0) {
            const x1 = { id: 'x1', latex: `x_1=(${quadraticFormula.getX1().getResultString()},0)` };
            const x2 = { id: 'x2', latex: `x_2=(${quadraticFormula.getX2().getResultString()},0)` };
            calculator.setExpression(x1);
            calculator.setExpression(x2);
        }
        if (quadraticFormula.getDelta() === 0) {
            const x0 = { id: 'x0', latex: `x_0=(${quadraticFormula.getPResult()},${quadraticFormula.getQResult()})` };
            calculator.setExpression(x0);
        }

        const lineXEquals1 = { id: 'lineXEquals1', latex: `x=${quadraticFormula.getPResult()}`, lineStyle: Desmos.Styles.DASHED };
        calculator.setExpression(lineXEquals1);
        setLoading(false);
    };

    return (
        <>
            <Title text="Kalkulator funkcji kwadratowej" type="main-article" />
            <form className="flex flex-col justify-center items-center max-w-full">
                <div className="flex justify-center w-full">
                    <label className="flex pt-4 flex-col flex-wrap items-center">
                        <span className="text-wrap">Wprowadź współczynniki funkcji kwadratowej:</span>
                        <div className="InputsWrapper flex flex-row flex-wrap items-end mt-2">
                            <div>
                                <span><b>f(x)&nbsp;=</b></span>
                                <input
                                    className={InputCoefficientStyle}
                                    type="number"
                                    {...register("a", numberRegisterOptions.coefficientNotZero)}
                                    onChange={handleInputChange}
                                />
                                <span><b>x<sup>2</sup></b>&nbsp;</span>
                            </div>
                            <div>
                                <span><b>+</b></span>
                                <input
                                    className={InputCoefficientStyle}
                                    type="number"
                                    {...register("b", numberRegisterOptions.coefficient)}
                                    onChange={handleInputChange}
                                />
                                <span><b>x&nbsp;</b></span>
                            </div>
                            <div>
                                <span><b>+</b></span>
                                <input
                                    className={InputCoefficientStyle}
                                    type="number"
                                    {...register("c", numberRegisterOptions.coefficient)}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </label>
                </div>
                <div className="w-full">
                    <ArticleBorder />
                </div>
                <div>
                    {Object.entries(errors).map(([key, error]) => (
                        error && (
                            <>
                                <span key={key} className={ErrorMessage}>{error.message}</span>
                                <br />
                            </>
                        )
                    ))}
                </div>
                {(errors.a && Number(watchA) === 0) && <span>Czy masz na myśli <NavLink to="../funkcji-liniowej" className="hover:underline"><b>funkcję liniową?</b></NavLink></span>}
                {(!errors.a && !errors.b && !errors.c && watchA && watchB && watchC) && (
                    <>
                        <div className="flex items-start overflow-x-auto overflow-y-hidden w-full">
                            <div className="min-w-[700px]">
                                <div className="flex flex-row w-full items-start">
                                    <Formula formula={`a=${quadraticFormula.getA()}`} />
                                    <Formula formula={`b=${quadraticFormula.getB()}`} />
                                    <Formula formula={`c=${quadraticFormula.getC()}`} />
                                </div>

                                <div className="flex flex-col w-full items-start md:items-center">
                                    <div><b>Postać ogólna:</b></div>
                                    <Formula formula={quadraticFormula.getStandardForm()} />
                                </div>
                                <div className="w-full">
                                    <ArticleBorder />
                                </div>
                                <div className="flex flex-col w-full items-start overflow-x-auto">
                                    <Formula formula={`${quadraticEquations.DELTA} = ${quadraticFormula.getDeltaCalculations()}`} />
                                    <Formula formula={`${quadraticEquations.P} = ${quadraticFormula.getPCalculations()}`} />
                                    <Formula formula={`${quadraticEquations.Q} = ${quadraticFormula.getQCalculations()}`} />
                                </div>
                                <div className="flex flex-col w-full items-start md:items-center">
                                    <div><b>Postać kanoniczna:</b></div>
                                    <Formula formula={quadraticFormula.getCanonicalForm()} />
                                </div>
                                <div className="w-full">
                                    <ArticleBorder />
                                </div>
                                <div className="flex flex-col w-full items-start">
                                    <div className="flex flex-col items-start">
                                        <>
                                            <Formula formula={`${quadraticEquations.DELTA} = ${quadraticFormula.getDeltaCalculations()}`} />
                                            {quadraticFormula.getDelta() > 0 &&
                                                <>
                                                    <Formula formula={`\\sqrt{\\Delta}=${quadraticFormula.getSqrtDeltaCalculations()}`} />
                                                    <Formula formula={`${quadraticEquations.X1}=${quadraticFormula.getX1Calculations()}`} />
                                                    <Formula formula={`${quadraticEquations.X2}=${quadraticFormula.getX2Calculations()}`} />
                                                </>
                                            }
                                            {quadraticFormula.getDelta() === 0 &&
                                                <Formula formula={`${quadraticEquations.X0}=${quadraticFormula.getX0Calculations()}`} />
                                            }
                                        </>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full items-start md:items-center">
                                    <div><b>Postać iloczynowa:</b></div>
                                    {quadraticFormula.getDelta() < 0 &&
                                        <span>nie istnieje</span>
                                    }
                                    {quadraticFormula.getDelta() === 0 &&
                                        <Formula formula={`${quadraticFormula.getFactoredForm()}`} />
                                    }
                                    {quadraticFormula.getDelta() > 0 &&
                                        <Formula formula={`${quadraticFormula.getFactoredForm()}`} />
                                    }
                                </div>
                                <ArticleBorder />
                                <div className="flex flex-col w-full items-start md:items-center">
                                    {quadraticFormula.getDelta() >= 0 && (<>
                                        <div><b>Wzory Viete'a:</b></div>
                                        <Formula formula={quadraticFormula.getVietasSumCalculations()} />
                                        <Formula formula={quadraticFormula.getVietasProductCalculations()} />
                                    </>)}
                                    {quadraticFormula.getDelta() < 0 && (<>
                                        <div><b>Wzory Viete'a:</b></div>
                                        <p>brak pierwiastków trójmianu kwadratowego</p>
                                    </>)}
                                </div>
                                <ArticleBorder />
                                <div className="flex flex-wrap justify-center flex-row text-center gap-2">
                                    <div className="flex flex-col items-start md:items-center min-w-full lg:min-w-[210px]">
                                        <p><b>Dziedzina:</b></p>
                                        <Formula formula={"D_f: x\\in \\mathbb{R}"} />
                                    </div>
                                    <div className="flex flex-col items-start md:items-center min-w-full lg:min-w-[210px]"><p><b>Zbiór wartości funkcji:</b></p>
                                        {quadraticFormula.getA() > 0 && (<Formula formula={`ZW_f: y\\in \\left[${quadraticFormula.getQResult()};\\infty\\right)`} />)}
                                        {quadraticFormula.getA() < 0 && (<Formula formula={`ZW_f: y\\in \\left(-\\infty ; ${quadraticFormula.getQResult()} \\right]`} />)}
                                    </div>
                                    <div className="flex flex-col items-start md:items-center min-w-full lg:min-w-[210px]">
                                        <div><b>Monotoniczność funkcji:</b></div>
                                        {quadraticFormula.getA() > 0 && (
                                            <>
                                                <p>Funkcja maleje w przedziale:</p>
                                                <Formula formula={`x \\in \\left( - \\infty ; ${quadraticFormula.getPResult()} \\right]`} />

                                                <p>Funkcja rośnie w przedziale:</p>
                                                <Formula formula={`x \\in \\left[ ${quadraticFormula.getPResult()}; \\infty \\right)`} />
                                            </>
                                        )}
                                        {quadraticFormula.getA() < 0 && (
                                            <>
                                                <p>Funkcja rośnie w przedziale:</p>
                                                <Formula formula={`x \\in \\left( - \\infty ; ${quadraticFormula.getPResult()} \\right]`} />

                                                <p>Funkcja maleje w przedziale:</p>
                                                <Formula formula={`x \\in \\left[ ${quadraticFormula.getPResult()}; \\infty \\right)`} />
                                            </>
                                        )}
                                    </div>

                                    <div className="flex flex-col items-start md:items-center min-w-full lg:min-w-[210px]">
                                        <p><b>Miejsca zerowe:</b></p>
                                        {quadraticFormula.getDelta() > 0 && (<Formula formula={`x \\in \\{ x_1, x_2 \\}`} />)}
                                        {quadraticFormula.getDelta() === 0 && (<Formula formula={`x \\in \\{ x_0 \\}`} />)}
                                        {quadraticFormula.getDelta() < 0 && (<p>brak</p>)}
                                    </div>

                                    <div className="flex flex-col items-start md:items-center min-w-full lg:min-w-[210px]">
                                        <p><b>oś symetrii:</b></p>
                                        <Formula formula={`x=${quadraticFormula.getPResult()}`} />
                                    </div>


                                    {quadraticFormula.getB() === 0 && (
                                        <div className="min-w-full lg:min-w-[210px]">
                                            <p><b>Pozostałe cechy:</b></p>
                                            <p>funkcja parzysta</p>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <ArticleBorder />
                            {showGraph && (
                                <>
                                    {loading && <Loader />}
                                    <div id="graph-container" />
                                </>
                            )}
                        </div>
                        <button type="button" className="my-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={handleGenerateGraph}>
                            {showGraph ? 'odśwież wykres' : 'generuj wykres'}
                        </button>
                        <div className="flex flex-col">
                            <span><b>Znane błędy:</b></span>
                            <p>(01) nieprawidłowa postać iloczynowa, gdy b=0</p>
                            <br />
                            <span>Nie wiesz co tu się dzieje?</span>
                            <span> Przeczytaj artykuł o <NavLink to="../../baza-wiedzy/funkcja-kwadratowa"><b>funkcji kwadratowej</b></NavLink></span>
                        </div>
                    </>)}
            </form >
        </>
    );
};
export default QuadraticFunctionCalculatorContent;
