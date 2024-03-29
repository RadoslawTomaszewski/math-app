import React, { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/articleItems/Title";
import { ErrorMessage, InputCoefficientStyle } from "../../../../utilities/styles";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Formula from "../../../../components/articleItems/Formula";
import Loader from "../../../../components/Loader/Loader";
import LinearFormula from "../../../../types/objects/LinearFormula/LinearFormula";
import { linearEquations } from "../../../../types/equations";

interface FormData {
    a: string;
    b: string;
}

const LinearFunctionCalculatorContent: FC = () => {
    const [linearFunction, setLinearFunction] = useState<LinearFormula>(new LinearFormula(1, 1));
    const [showGraph, setShowGraph] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormData>({ defaultValues: { a: "", b: "" } });

    const watchA = watch("a");
    const watchB = watch("b");

    useEffect(() => {
        if (watchA && watchB && !errors.a && !errors.b) {
            setLinearFunction(new LinearFormula(Number(watchA), Number(watchB)));
            setShowGraph(false);
        }
    }, [watchA, watchB, errors.a, errors.b]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const inputName = event.target.name;
        if (inputName === 'a' || inputName === 'b')
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

        const equation1 = `y=${watchA}x${Number(watchB) >= 0 ? '+' : ''}${watchB}`;
        calculator.setExpression({ id: 'graph1', latex: equation1 });
        setLoading(false);
    };

    return (
        <>
            <Title
                text="Kalkulator funkcji liniowej"
                type="main-article"
            />
            <form className="flex flex-col justify-center items-center w-full">
                <div className="flex justify-center w-full">
                    <label className="flex pt-4 flex-col flex-wrap items-center">
                        <span className="text-wrap">Wprowadź współczynniki funkcji liniowej:</span>
                        <div className="InputsWrapper flex flex-row items-end mt-2">
                            <div className="mx-1"><b>f(x)=</b></div>
                            <input
                                className={InputCoefficientStyle}
                                type="number"
                                {...register("a")}
                                onChange={handleInputChange}
                            />
                            <div className="mx-1"><b>x +</b></div>
                            <input
                                className={InputCoefficientStyle}
                                type="number"
                                {...register("b")}
                                onChange={handleInputChange}
                            />
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
                {(!errors.a && !errors.b && watchA && watchB) && (
                    <>

                        <div className="flex flex-col w-full items-start">
                            <div className="flex items-start">
                                <Formula formula={`a=${watchA}`} />
                                <Formula formula={`b=${watchB}`} />
                            </div>
                        </div>
                        <div><b>Postać kierunkowa:</b></div>
                        <div className="flex items-start">
                            <Formula formula={linearFunction.getStandardForm()} />
                        </div>
                        <div><b>Miejsce zerowe:</b></div>
                        <div className="flex items-start">
                            {linearFunction.getA() === 0 &&
                                <>
                                    {linearFunction.getB() === 0 && <span>Nieskończenie wiele miejsc zerowych</span>}
                                    {linearFunction.getB() !== 0 && <span>Brak miejsca zerowego</span>}
                                </>
                            }
                            {linearFunction.getA() !== 0 &&
                                <>
                                    <div className="flex items-start">
                                        <Formula formula={`${linearEquations.X0}=${linearFunction.getX0().getFractionString()}`} />
                                    </div>
                                </>
                            }

                            {/* <div className="flex items-start">
                                {linearFunction.getA() > 0 && <span>Funkcja rosnąca</span>}
                                {linearFunction.getA() === 0 && <span>Funkcja stała</span>}
                                {linearFunction.getA() < 0 && <span>Funkcja malejąca</span>}
                            </div> */}

                        </div>
                        <div><b>Kąt nachylenia prostej do osi OX:</b></div>
                        <div className="flex items-start">
                            <Formula formula={`${linearEquations.SLOPE}${linearFunction.getSlopeAlphaCalculation()}`} />
                        </div>

                        <div className="w-full">
                            <ArticleBorder />
                        </div>

                        <div><b>Równanie prostej w postaci kierunkowej:</b></div>
                        <div className="flex items-start">
                            <Formula formula={linearFunction.getSlopeForm()} />
                        </div>
                        <div><b>Równanie prostej w postaci ogólnej:</b></div>
                        <div className="flex items-start">
                            <Formula formula={linearFunction.getGeneralForm()} />
                        </div>
                        <div><b>Równanie prostej w postaci odcinkowej:</b></div>
                        <div className="flex items-start">
                            <Formula formula={linearFunction.getSegmentForm()} />
                        </div>
                        <div className="w-full">
                            <ArticleBorder />
                        </div>






                        <div className="w-full">
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
                            <span><b>problem 01:</b> Błędny sposób wyświetlenia postaci prostej, gdy a=0</span>
                            <span><b>problem 02:</b> Brak znaku przybliżenia dla kąta alfa</span>
                            <span><b>problem 03:</b> Nieoptylna forma postaci odcinkowej, gdy b {'<'} 0</span>
                            <br />
                            <span>Znalazłeś błąd? Daj mi o tym znać!
                                <br /> e-mail: rtomaszewski.ck@gmail.com</span>
                        </div>
                    </>
                )}
            </form >
        </>
    );
};
export default LinearFunctionCalculatorContent;
