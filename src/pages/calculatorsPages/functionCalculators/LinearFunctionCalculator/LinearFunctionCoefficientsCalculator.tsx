import { FC, useEffect, useState } from "react";

import LinearFormula from "../../../../types/objects/LinearFormula/LinearFormula";
import { useForm } from "react-hook-form";
import { ErrorMessage, InputCoefficientStyle } from "../../../../utilities/styles";
import Loader from "../../../../components/Loader/Loader";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Formula from "../../../../components/articleItems/Formula";
import { linearEquations } from "../../../../types/equations";


interface FormData {
    a: string;
    b: string;
}

const LinearFunctionCoefficientsCalculator: FC = () => {
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

    // TODO: CREATE PERSNONALIZED HOOK
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

        const equation1 = `y=${watchA}x${Number(watchB) >= 0 ? '+' : ''}${watchB}`;
        calculator.setExpression({ id: 'graph1', latex: equation1 });
        setLoading(false);
    };

    return (
        <>
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
                    <div><b>Wzór funkcji</b></div>
                    <div className="flex items-start">
                        <Formula formula={linearFunction.getStandardForm()} />
                    </div>



                    <ArticleBorder styles="w-full" />
                    <div className="flex flex-wrap justify-center flex-row text-center gap-2">
                        <div className="flex flex-col items-start md:items-center min-w-full lg:min-w-[210px]">
                            <p><b>Dziedzina:</b></p>
                            <Formula formula={"D_f: x\\in \\mathbb{R}"} />
                        </div>
                        <div className="flex flex-col items-start md:items-center min-w-full lg:min-w-[210px]"><p><b>Zbiór wartości funkcji:</b></p>
                            <Formula formula={"ZW_f: y\\in \\mathbb{R}"} />
                        </div>
                        <div className="flex flex-col items-start md:items-center min-w-full lg:min-w-[210px]">
                            <div><b>Monotoniczność funkcji:</b></div>
                            {linearFunction.getA() < 0 && (
                                <p>Funkcja malejąca</p>
                            )}
                            {linearFunction.getA() === 0 && (
                                <p>Funkcja stała</p>
                            )}
                            {linearFunction.getA() > 0 && (
                                <p>Funkcja rosnąca</p>
                            )}
                        </div>
                        <div className="flex flex-col items-start md:items-center min-w-full lg:min-w-[210px]">
                            <p><b>Miejsca zerowe:</b></p>
                            <div className="flex items-start">
                                {linearFunction.getA() === 0 &&
                                    <>
                                        {linearFunction.getB() === 0 && <span>Nieskończenie wiele miejsc zerowych</span>}
                                        {linearFunction.getB() !== 0 && <span>Brak</span>}
                                    </>
                                }
                                {linearFunction.getA() !== 0 &&
                                    <>
                                        <div className="flex items-start">
                                            <Formula formula={`${linearEquations.X0}=${linearFunction.getX0().getFractionString()}`} />
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                        <div className="flex flex-col items-start md:items-center min-w-full lg:min-w-[210px]">
                            <p><b>Kąt nachylenia prostej do osi OX:</b></p>
                            <div className="flex items-start">
                                <Formula formula={`${linearEquations.SLOPE}${linearFunction.getSlopeAlphaCalculation()}`} styles="min-w-[216px]" />
                            </div>
                        </div>
                        {linearFunction.getA() === 0 && (
                            <div className="min-w-full lg:min-w-[210px]">
                                <p><b>Pozostałe cechy:</b></p>
                                <p>funkcja parzysta</p>
                            </div>
                        )}

                    </div>
                    <ArticleBorder styles="w-full" />
                    <div className="flex flex-wrap justify-center flex-row text-center gap-2">
                        <div className="flex flex-col items-start md:items-center min-w-full lg:min-w-[320px]">
                            <div><b>równanie prostej w postaci kierunkowej:</b></div>
                            <Formula formula={linearFunction.getSlopeForm()} />
                        </div>
                        <div className="flex flex-col items-start md:items-center min-w-full lg:min-w-[320px]">
                            <div><b>równanie prostej w postaci ogólnej:</b></div>
                            <Formula formula={linearFunction.getGeneralForm()} />
                        </div>
                        <div className="flex flex-col items-start md:items-center min-w-full lg:min-w-[320px]">
                            <div><b>równanie prostej w postaci odcinkowej:</b></div>
                            {!(linearFunction.getA() === 0 || linearFunction.getA() === 0) && <Formula formula={linearFunction.getSegmentForm()} />}
                            {(linearFunction.getA() === 0 || linearFunction.getA() === 0) && <p>nie istnieje</p>}
                        </div>
                    </div>
                    <ArticleBorder styles="w-full" />
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
                        <span><b>problem 01:</b> Brak znaku przybliżenia dla kąta alfa</span>
                        <br />
                    </div>
                </>
            )}
        </>

    );
};

export default LinearFunctionCoefficientsCalculator;