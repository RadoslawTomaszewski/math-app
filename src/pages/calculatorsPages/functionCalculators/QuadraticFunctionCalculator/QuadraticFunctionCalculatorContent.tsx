import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/articleItems/Title";
import { ErrorMessage, InputCoefficientStyle } from "../../../../utilities/styles";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Formula from "../../../../components/articleItems/Formula";
import QuadraticFormula from "../../../../types/objects/QuadraticFormula/QuadraticFormula";
import { integerRegisterOptions } from "../../../../utilities/validation";
import { quadraticEquations } from "../../../../types/equations";
import IrrationalSum from "../../../../types/objects/Irrational/IrrationalSum";

interface FormData {
    a: string;
    b: string;
    c: string;
}
declare global {
    interface Window {
        Desmos: any;
    }
}
const QuadraticFunctionCalculatorContent: FC = () => {
    const [quadraticFormula, setQuadraticFormula] = useState<QuadraticFormula>(new QuadraticFormula(0, 0, 0));
    const [showGraph, setShowGraph] = useState(false);

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

    }, [showGraph, watchA, watchB, watchC]);

    useEffect(() => {
        if (watchA && watchB && watchC && !errors.a && !errors.b && !errors.c) {
            setQuadraticFormula(new QuadraticFormula(Number(watchA), Number(watchB), Number(watchC)));
        }
    }, [watchA, watchB, watchC, errors.a, errors.b, errors.c]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const inputName = event.target.name;
        if (inputName === 'a' || inputName === 'b' || inputName === 'c')
            setValue(inputName, inputValue, { shouldValidate: true });
    };

    const handleGenerateGraph = () => {
        setShowGraph(true);
        const graphContainer = document.getElementById('graph-container');
        if (graphContainer) {
            while (graphContainer.firstChild) {
                graphContainer.removeChild(graphContainer.firstChild);
            }
        }
        if (showGraph) {
            const script = document.createElement('script');
            script.src = 'https://www.desmos.com/api/v1.8/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';
            script.async = true;
            document.body.appendChild(script);

            script.onload = () => {
                const elt = document.createElement('div');
                elt.style.width = '600px';
                elt.style.height = '400px';
                document.getElementById('graph-container')?.appendChild(elt);

                const Desmos = window.Desmos;
                const calculator = Desmos.GraphingCalculator(elt);

                const equation = `y=${watchA}x^2${Number(watchB) >= 0 ? '+' : ''}${watchB}x${Number(watchC) >= 0 ? '+' : ''}${watchC}`;

                calculator.setExpression({ id: 'graph1', latex: equation });
            };
        }
    };

    return (
        <>
            <Title
                text="Kalkulator funkcji kwadratowej"
                type="main-article"
            />
            <form className="text-center">
                <div className="flex justify-center">
                    <label className="flex pt-4 flex-col items-center">
                        Wprowadź współczynniki funkcji kwadratowej:
                        <div className="InputsWrapper flex flex-row items-end mt-2">
                            <input
                                className={InputCoefficientStyle}
                                type="number"
                                {...register("a", integerRegisterOptions.coefficientNotZero)}
                                onChange={handleInputChange}
                            />
                            <div className="mx-1"><b>x<sup>2</sup> +</b></div>
                            <input
                                className={InputCoefficientStyle}
                                type="number"
                                {...register("b", integerRegisterOptions.coefficient)}
                                onChange={handleInputChange}
                            />
                            <div className="mx-1"><b>x +</b></div>
                            <input
                                className={InputCoefficientStyle}
                                type="number"
                                {...register("c", integerRegisterOptions.coefficient)}
                                onChange={handleInputChange}
                            />
                        </div>
                    </label>
                </div>
                <ArticleBorder />
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
                {(!errors.a && !errors.b && !errors.c && watchA && watchB && watchC) && (<>
                    <div className="flex flex-row flex-wrap m-2 justify-center">
                        <div className="m-2">
                            <div>Postać ogólna:</div>
                            <Formula margin="none" formula={quadraticFormula.getStandardForm()} />
                            <Formula formula={`a=${quadraticFormula.getA()}`} />
                            <Formula formula={`b=${quadraticFormula.getB()}`} />
                            <Formula formula={`c=${quadraticFormula.getC()}`} />
                        </div>
                        <div className="m-2">
                            <div>Postać kanoniczna:</div>
                            <Formula margin="none" formula={quadraticFormula.getCanonicalForm()} />
                            <Formula formula={`a=${quadraticFormula.getA()}`} />
                            <Formula formula={`p=${quadraticFormula.getPResult()}`} />
                            <Formula formula={`q=${quadraticFormula.getQResult()}`} />
                        </div>
                        <div className="m-2">
                            <div>Postać iloczynowa:</div>
                            {quadraticFormula.getDelta() < 0 &&
                                <>
                                    <span><b>{quadraticFormula.getFactoredForm()}</b></span>
                                </>
                            }
                            {quadraticFormula.getDelta() === 0 &&
                                <>
                                    <Formula formula={`${quadraticFormula.getFactoredForm()}`} />
                                    <Formula formula={`a=${quadraticFormula.getA()}`} />
                                    <Formula formula={`x_0=${quadraticFormula.getPResult()}`} />
                                </>
                            }
                            {quadraticFormula.getDelta() > 0 &&
                                <>
                                    <Formula formula={`${quadraticFormula.getFactoredForm()}`} />
                                    <Formula formula={`a=${quadraticFormula.getA()}`} />
                                    <Formula formula={`x_1=`} />
                                    <Formula formula={`x_2=`} />
                                </>
                            }


                        </div>
                    </div>
                    <ArticleBorder />
                    <span>
                        <Formula formula={`${quadraticEquations.DELTA} = ${quadraticFormula.getDeltaCalculations()}`} />
                        {quadraticFormula.getDelta() >= 0 &&
                            <>
                                <Formula formula={`\\sqrt{\\Delta}=${quadraticFormula.getSqrtDeltaCalculations()}`} />
                            </>
                        }
                        {quadraticFormula.getDelta() > 0 &&
                            <>
                                {/* TO DO CALCULATE THIS ON CLASS QUADRATIC FORMULA */}
                                <Formula formula={`${quadraticEquations.X1}=\\frac{${quadraticFormula.getB() > 0 ? '-' : ''}${Math.abs(quadraticFormula.getB())}-${quadraticFormula.getSqrtDeltaString()}}{${quadraticFormula.getA() * 2}}`} />
                                <Formula formula={`${new IrrationalSum(Math.abs(quadraticFormula.getB()), quadraticFormula.getSqrtDelta()).getProductForm()}`} />
                                <Formula formula={`${quadraticEquations.X2}=\\frac{${quadraticFormula.getB() > 0 ? '-' : ''}${Math.abs(quadraticFormula.getB())}+${quadraticFormula.getSqrtDeltaString()}}{${quadraticFormula.getA() * 2}}`} />
                            </>
                        }
                        {quadraticFormula.getDelta() === 0 &&
                            <>
                                {/* TO DO CALCULATE THIS ON CLASS QUADRATIC FORMULA */}
                                <Formula formula={`${quadraticEquations.X0}=${quadraticFormula.getPCalculations()}`} />
                            </>
                        }
                    </span>
                    <ArticleBorder />
                    <div>
                        <Formula formula={`${quadraticEquations.P} = ${quadraticFormula.getPCalculations()}`} />
                        <Formula formula={`${quadraticEquations.Q} = ${quadraticFormula.getQCalculations()}`} />
                        <Formula formula={`W=\\left(${quadraticFormula.getPResult()},${quadraticFormula.getQResult()}\\right)`} />
                    </div>
                    <button type="button" className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleGenerateGraph}>
                        {showGraph ? 'odśwież wykres' : 'generuj wykres'}
                    </button>
                    {showGraph && (
                        <>
                            <div>Przycisk TRUE</div>
                            <div>
                                Wykres:
                                <div id="graph-container" />
                            </div>
                        </>
                    )}
                </>)}
            </form>
        </>
    );
};
export default QuadraticFunctionCalculatorContent;
