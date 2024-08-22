import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage, InputCoefficientStyle } from "../../../../styles/styles";
import Loader from "../../../../components/Loader/Loader";
import ArticleBorder from "../../../../components/ArticleBorder/ArticleBorder";
import Formula from "../../../../components/Formula/Formula";
import LinearFormulaFromPoints from "../../../../MajzaMath/LinearFormula/LinearFormulaFromPoints";
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
        const equation1 = linearFunction.getEquation();
        const equation2 = linearFunction.getGeneralForm();
        const equation3 = linearFunction.getSegmentForm();
        const A = { id: 'A', latex: `A=(${watchX1},${watchY1})` };
        const B = { id: 'B', latex: `B=(${watchX2},${watchY2})` };

        calculator.setExpression({ id: 'graph1', latex: equation1 });
        calculator.setExpression({ id: 'graph3', latex: equation2 });
        calculator.setExpression({ id: 'graph4', latex: equation3 });
        calculator.setExpression(A);
        calculator.setExpression(B);
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
                    <ArticleBorder />
                    {watchX1 === watchX2 && watchY1 !== watchY2 && (<p className="text-[red] text-center">To nie jest funkcja liniowa</p>)}
                    {watchX1 === watchX2 && watchY1 === watchY2 && (<p className="text-[red] text-center">Wprowadź dwa różne punkty</p>)}
                    {watchX1 !== watchX2 && (<>
                        <div className="w-full overflow-x-auto ">
                            <div className="flex flex-col min-w-[540px] items-start md:items-center"><p className="text-center"><b>Wzór funkcji:</b></p>
                                <Formula formula={'f(x)=\\frac{y_2-y_1}{x_2-x_1}\\cdot x + \\frac{y_1 \\cdot x_2 - y_2 \\cdot x_1}{x_2 - x_1}'} />
                                <Formula formula={linearFunction.getSubstitutionEquation()} />
                                <Formula formula={linearFunction.getEquation()} />
                            </div>
                        </div>
                        <div className="flex w-full items-start">
                            <div className="flex items-start">
                                <Formula formula={`a=${linearFunction.getA().getFractionReducedString()}`} styles="min-h-[62px] items-center" />
                                <Formula formula={`b=${linearFunction.getB().getFractionReducedString()}`} styles="min-h-[62px] items-center" />
                            </div>
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
                                {!linearFunction.getA().getIsFractionPositive() && (
                                    <p>Funkcja malejąca</p>
                                )}
                                {linearFunction.getA().getNominator() === 0 && (
                                    <p>Funkcja stała</p>
                                )}
                                {linearFunction.getA().getNominator() !== 0 && linearFunction.getA().getIsFractionPositive() && (
                                    <p>Funkcja rosnąca</p>
                                )}
                            </div>
                            <div className="flex flex-col items-start md:items-center min-w-full lg:min-w-[280px]">
                                <p><b>Miejsca zerowe:</b></p>
                                <div className="flex flex-col items-start md:items-center  w-full overflow-x-auto ">
                                    <Formula formula={linearFunction.getX0Calculations()} />
                                </div>
                            </div>
                            {linearFunction.getA().getNominator() === 0 && (
                                <div className="min-w-full lg:min-w-[210px]">
                                    <p><b>Pozostałe cechy:</b></p>
                                    <p>funkcja parzysta</p>
                                    {linearFunction.getA().getNominator() === 0 && linearFunction.getB().getNominator() === 0 && (<p>funkcja nieparzysta</p>)}
                                </div>
                            )}

                        </div>
                    </>)}
                    {(watchX1 !== watchX2 || watchY1 !== watchY2) && (<>
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
                                {(linearFunction.getA().getNominator() !== 0 && linearFunction.getB().getNominator() !== 0) && watchX1 !== watchX2 ? <Formula formula={linearFunction.getSegmentForm()} /> : <p>nie istnieje</p>}
                            </div>
                            <div className="min-w-full lg:min-w-[280px]">
                                <div className="flex flex-col items-start md:items-center w-full overflow-x-auto ">
                                    <p><b>Kąt nachylenia prostej do osi OX:</b></p>
                                    {watchX1 === watchX2 ? <Formula formula={"\\alpha=90^{\\circ}"} /> : <Formula formula={linearFunction.getSlopeAlphaCalculation()} />}
                                </div>
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
                        </div>
                    </>)}
                </div>
            )}
        </>

    );
};

export default LinearFunctionPointsCalculator;