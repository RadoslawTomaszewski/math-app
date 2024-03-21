import React, { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/articleItems/Title";
import { ErrorMessage, InputCoefficientStyle } from "../../../../utilities/styles";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Formula from "../../../../components/articleItems/Formula";
import QuadraticFormula from "../../../../types/objects/QuadraticFormula/QuadraticFormula";
import { integerRegisterOptions } from "../../../../utilities/validation";
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
        console.log(showGraph);
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

        const equation1 = `y=${watchA}x^2${Number(watchB) >= 0 ? '+' : ''}${watchB}x${Number(watchC) >= 0 ? '+' : ''}${watchC}`;
        calculator.setExpression({ id: 'graph1', latex: equation1 });
        setLoading(false);
    };

    return (
        <>
            <Title
                text="Kalkulator funkcji kwadratowej"
                type="main-article"
            />
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
                                    {...register("a", integerRegisterOptions.coefficientNotZero)}
                                    onChange={handleInputChange}
                                />
                                <span><b>x<sup>2</sup></b>&nbsp;</span>
                            </div>
                            <div>
                                <span><b>+</b></span>
                                <input
                                    className={InputCoefficientStyle}
                                    type="number"
                                    {...register("b", integerRegisterOptions.coefficient)}
                                    onChange={handleInputChange}
                                />
                                <span><b>x&nbsp;</b></span>
                            </div>
                            <div>
                                <span><b>+</b></span>
                                <input
                                    className={InputCoefficientStyle}
                                    type="number"
                                    {...register("c", integerRegisterOptions.coefficient)}
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
                {(errors.a && Number(watchA) === 0) && <span>Czy masz na myśli funkcję liniową?</span>}
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
                                        <span>{quadraticFormula.getFactoredForm()}</span>
                                    }
                                    {quadraticFormula.getDelta() === 0 &&
                                        <Formula formula={`${quadraticFormula.getFactoredForm()}`} />
                                    }
                                    {quadraticFormula.getDelta() > 0 &&
                                        <Formula formula={`${quadraticFormula.getFactoredForm()}`} />
                                    }
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
                            <span>Nie wiesz co tu się dzieje?</span>
                            <span> Przeczytaj artykuł o <NavLink to="../../baza-wiedzy/funkcja-kwadratowa"><b>funkcji kwadratowej</b></NavLink></span>
                        </div>
                    </>)}
            </form >
        </>
    );
};
export default QuadraticFunctionCalculatorContent;
