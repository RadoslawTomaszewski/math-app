import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/articleItems/Title";
import { RegisterFormOptions } from "../../../../types/types";
import { InputCoefficientStyle } from "../../../../utilities/styles";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Formula from "../../../../components/articleItems/Formula";
import QuadraticFormula from "../../../../types/objects/QuadraticFormula/QuadraticFormula";

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
    } = useForm<FormData>({ defaultValues: { a: "0", b: "0", c: "0" } });

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

    const registerOptions: RegisterFormOptions<FormData> = {
        a: {
            max: {
                value: 1_000,
                message: "Maksymalna wartość to 1'000 (tysiąc)",
            },
            min: {
                value: -1_000,
                message: "Minimalna wartość to -1'000 (tysiąc)",
            },
            pattern: {
                value: /^-?\d+$/,
                message: "Wprowadzona wartość musi być liczbą całkowitą",
            },
        },
        b: {
            max: {
                value: 1_000,
                message: "Maksymalna wartość to 1'000 (tysiąc)",
            },
            min: {
                value: -1_000,
                message: "Minimalna wartość to -1'000 (tysiąc)",
            },
            pattern: {
                value: /^-?\d+$/,
                message: "Wprowadzona wartość musi być liczbą całkowitą",
            },
        },
        c: {
            max: {
                value: 1_000,
                message: "Maksymalna wartość to 1'000 (tysiąc)",
            },
            min: {
                value: -1_000,
                message: "Minimalna wartość to -1'000 (tysiąc)",
            },
            pattern: {
                value: /^-?\d+$/,
                message: "Wprowadzona wartość musi być liczbą całkowitą",
            },
        },
    };

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
                                placeholder="0"
                                type="number"
                                {...register("a", registerOptions.a)}
                                onChange={handleInputChange}
                            />
                            <div className="mx-1"><b>x<sup>2</sup> +</b></div>
                            <input
                                className={InputCoefficientStyle}
                                placeholder="0"
                                type="number"
                                {...register("b", registerOptions.b)}
                                onChange={handleInputChange}
                            />
                            <div className="mx-1"><b>x +</b></div>
                            <input
                                className={InputCoefficientStyle}
                                placeholder="0"
                                type="number"
                                {...register("c", registerOptions.c)}
                                onChange={handleInputChange}
                            />
                        </div>
                        {errors.a && (
                            <span className="text-errorColor">{errors.a.message}</span>
                        )}
                        {errors.b && (
                            <span className="text-errorColor">{errors.b.message}</span>
                        )}
                        {errors.c && (
                            <span className="text-errorColor">{errors.c.message}</span>
                        )}
                    </label>
                </div>
                <ArticleBorder />
                <div className="flex flex-row flex-wrap m-2 justify-center">
                    <div className="m-2">
                        <div>Postać ogólna:</div>
                        <Formula margin="none" formula={`f(x)=${watchA}x^2${Number(watchB) < 0 ? '-' : '+'}${Math.abs(Number(watchB))}x${Number(watchC) < 0 ? '-' : '+'}${Math.abs(Number(watchC))}`} />
                        <Formula formula={`a=${watchA}`} />
                        <Formula formula={`b=${watchB}`} />
                        <Formula formula={`c=${watchC}`} />
                    </div>
                    <div className="m-2">
                        <div>Postać kanoniczna:</div>
                        <Formula margin="none" formula={`f(x)=${watchA}x^2${Number(watchB) < 0 ? '-' : '+'}${Math.abs(Number(watchB))}x${Number(watchC) < 0 ? '-' : '+'}${Math.abs(Number(watchC))}`} />
                        <Formula formula={`a=${watchA}`} />
                        <Formula formula={`p=${watchB}`} />
                        <Formula formula={`q=${watchC}`} />
                    </div>
                    <div className="m-2">
                        <div>Postać iloczynowa:</div>
                        <Formula margin="none" formula={`f(x)=${watchA}x^2${Number(watchB) < 0 ? '-' : '+'}${Math.abs(Number(watchB))}x${Number(watchC) < 0 ? '-' : '+'}${Math.abs(Number(watchC))}`} />
                        <Formula formula={`a=${watchA}`} />
                        <Formula formula={`x_1=${watchB}`} />
                        <Formula formula={`x_2=${watchC}`} />
                    </div>
                </div>
                <ArticleBorder />
                <div>
                    Współrzędne wierzchołka paraboli:
                    <Formula formula={'p=\\frac{-b}{2a}=' + quadraticFormula.getP()} />
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
            </form>
        </>
    );
};
export default QuadraticFunctionCalculatorContent;
