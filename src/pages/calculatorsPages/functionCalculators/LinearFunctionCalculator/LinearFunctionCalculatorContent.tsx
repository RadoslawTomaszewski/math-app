import React, { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/articleItems/Title";
import { ErrorMessage, InputCoefficientStyle } from "../../../../utilities/styles";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Formula from "../../../../components/articleItems/Formula";
import Loader from "../../../../components/Loader/Loader";

interface FormData {
    a: string;
    b: string;
}

const LinearFunctionCalculatorContent: FC = () => {
    const [linearFunction, setLinearFunction] = useState<string>('');
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
            const a = Number(watchA);
            const b = Number(watchB);
            const functionExpression = `f(x) = ${a !== 1 ? a : ''}x ${b > 0 ? '+' : ''} ${b}`;
            setLinearFunction(functionExpression);
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
                {(errors.a && Number(watchA) === 0) && <span>Czy masz na myśli funkcję liniową?</span>}
                {(!errors.a && !errors.b && watchA && watchB) && (
                    <>
                        <div className="flex flex-col w-full items-start">
                            <div className="flex items-start">
                                <Formula formula={linearFunction} />
                            </div>
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
