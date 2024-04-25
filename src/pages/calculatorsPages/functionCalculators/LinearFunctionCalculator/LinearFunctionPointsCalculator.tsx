import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage, InputCoefficientStyle } from "../../../../utilities/styles";
import Loader from "../../../../components/Loader/Loader";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Formula from "../../../../components/articleItems/Formula";
import LinearFormulaFromPoints from "../../../../types/objects/LinearFormula/LinearFormulaFromPoints";
import { numberRegisterOptions } from "../../../../utilities/validation";


interface FormData {
    x1: string;
    x2: string;
    y1: string;
    y2: string;
}

const LinearFunctionPointsCalculator: FC = () => {
    const [linearFunction, setLinearFunction] = useState<LinearFormulaFromPoints>(new LinearFormulaFromPoints(1, 1, 1, 1));
    const [showGraph, setShowGraph] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormData>({ defaultValues: { x1: "", x2: "", y1: "", y2: "" } });

    const watchX1 = watch("x1");
    const watchX2 = watch("x2");
    const watchY1 = watch("y1");
    const watchY2 = watch("y2");


    useEffect(() => {
        if (watchX1 && watchX2 && watchY1 && watchY2 && !errors.x1 && !errors.x2 && !errors.y1 && !errors.y2) {
            setLinearFunction(new LinearFormulaFromPoints(Number(watchX1), Number(watchX2), Number(watchY1), Number(watchY2)));
            setShowGraph(false);
        }
    }, [watchX1, watchX2, watchY1, watchY2, errors.x1, errors.x2, errors.y1, errors.y2]);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const inputName = event.target.name;
        if (inputName === 'x1' || inputName === 'x2' || inputName === 'y1' || inputName === 'y2')
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

        // const equation1 = `y=${Awatch}x${Number(watchB) >= 0 ? '+' : ''}${watchB}`;
        const equation1 = linearFunction.getEquation();
        calculator.setExpression({ id: 'graph1', latex: equation1 });
        setLoading(false);
    };


    return (
        <>
            <div className="flex justify-center w-full">
                <label className="flex pt-4 flex-col flex-wrap items-center">
                    <span className="text-wrap">Wprowadź współrzędne dwóch punktów:</span>
                    <div className="InputsWrapper flex flex-col mt-2">
                        <div className="flex flex-row items-center">
                            <span className="mx-1"><b>A = (</b></span>
                            <input
                                className={InputCoefficientStyle}
                                type="number"
                                {...register("x1", numberRegisterOptions.coefficient)}
                                onChange={handleInputChange}
                            />
                            <span className="mx-1"><b>,</b></span>
                            <input
                                className={InputCoefficientStyle}
                                type="number"
                                {...register("y1", numberRegisterOptions.coefficient)}
                                onChange={handleInputChange}
                            />
                            <span>)</span>
                        </div>
                        <div className="flex flex-row items-center">
                            <span className="mx-1"><b>B = (</b></span>
                            <input
                                className={InputCoefficientStyle}
                                type="number"
                                {...register("x2", numberRegisterOptions.coefficient)}
                                onChange={handleInputChange}
                            />
                            <span className="mx-1"><b>,</b></span>
                            <input
                                className={InputCoefficientStyle}
                                type="number"
                                {...register("y2", numberRegisterOptions.coefficient)}
                                onChange={handleInputChange}
                            />
                            <span>)</span>
                        </div>
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
            {(watchX1 && watchX2 && watchY1 && watchY2 && !errors.x1 && !errors.x2 && !errors.y1 && !errors.y2) && (

                <div className="w-full">
                    <div className="flex flex-col w-full items-start">
                        <div className="flex items-start flex-wrap">
                            <Formula formula={`A=(${watchX1};${watchY1})`} />
                            <Formula formula={`B=(${watchX2};${watchY2})`} />
                        </div>
                    </div>
                    <div><b>Wzór funkcji</b></div>
                    <Formula formula={'f(x)=\\frac{y_2-y_1}{x_2-x_1}\\cdot x + \\frac{y_1 \\cdot x_2 - y_2 \\cdot x_1}{x_2 - x_1}'} styles="min-w-[310px]" />
                    <Formula formula={linearFunction.getSubstitutionEquation()} styles="min-w-[540px]" />
                    <Formula formula={linearFunction.getEquation()} styles="min-w-[540px]" />
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
                                            <Formula formula={`11111111111`} />
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                        <div className="flex flex-col items-start md:items-center min-w-full lg:min-w-[210px]">
                            <p><b>Kąt nachylenia prostej do osi OX:</b></p>
                            <div className="flex items-start">
                                <Formula formula={`1111111111`} styles="min-w-[216px]" />
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
                            <Formula formula={'111111111111'} />
                        </div>
                        <div className="flex flex-col items-start md:items-center min-w-full lg:min-w-[320px]">
                            <div><b>równanie prostej w postaci ogólnej:</b></div>
                            <Formula formula={'1111111111111'} />
                        </div>
                        <div className="flex flex-col items-start md:items-center min-w-full lg:min-w-[320px]">
                            <div><b>równanie prostej w postaci odcinkowej:</b></div>
                            {!(linearFunction.getA() === 0 || linearFunction.getA() === 0) && <Formula formula={'11111111111111'} />}
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
                    <div className="w-full text-center">
                        <button type="button" className="my-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={handleGenerateGraph}>
                            {showGraph ? 'odśwież wykres' : 'generuj wykres'}
                        </button>
                        <div className="flex flex-col">
                            <span><b>problem 01:</b> Brak znaku przybliżenia dla kąta alfa</span>
                            <br />
                        </div>
                    </div>
                </div>
            )}
        </>

    );
};

export default LinearFunctionPointsCalculator;