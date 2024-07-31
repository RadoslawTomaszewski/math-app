import React, { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/articleItems/Title";
import { ErrorMessage, InputCoefficientStyle } from "../../../../utilities/styles";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Loader from "../../../../components/Loader/Loader";
import Formula from "../../../../components/articleItems/Formula";
import LogarithmicFormula from "../../../../types/LogharitmicFormula/LogarithmicFormula";
import { numberRegisterOptions } from "../../../../utilities/validation";
import Explanation from "../../../../components/articleItems/Explanation";


interface FormData {
    a: string;
}

const LogarithmicFunctionCalculatorContent: FC = () => {
    const [logarithmicFunction, setLogarithmicFunction] = useState<LogarithmicFormula>(new LogarithmicFormula(1));
    const [showGraph, setShowGraph] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormData>({ defaultValues: { a: "" } });

    const watchA = watch("a");

    useEffect(() => {
        if (watchA && !errors.a) {
            setLogarithmicFunction(new LogarithmicFormula(Number(watchA)));
            setShowGraph(false);
        }
    }, [watchA, errors.a]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setValue("a", inputValue, { shouldValidate: true });
    }
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

        const equation1 = `y=\\log_{${watchA}}x`;
        const Pox = { id: 'x2', latex: `P_{OX}=(1,0)` };
        calculator.setExpression({ id: 'graph1', latex: equation1 });
        calculator.setExpression(Pox);
        setLoading(false);
    };

    return (
        <>
            <Title
                text="Kalkulator funkcji logarytmicznej"
                type="main-article"
            />
            <form className="flex flex-col justify-center items-center w-full">
                <div className="flex justify-center w-full">
                    <label className="flex pt-4 flex-col flex-wrap items-center">
                        <span className="text-wrap">Wprowadź podstawę funkcji logarytmicznej:</span>
                        <div className="InputsWrapper flex flex-row items-end mt-2">
                            <div className="mx-1 pb-2"><b>f(x)= log</b></div>
                            <input
                                className={InputCoefficientStyle}
                                type="number"
                                step="0.01"
                                {...register("a", numberRegisterOptions.logarithmicCoefficient)}
                                onChange={handleInputChange}
                            />
                            <div className="mx-1 pb-2"><b>x</b></div>
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
                {(!errors.a && watchA) && (
                    <>
                        {logarithmicFunction.getA() > 1 && (
                            <>
                                <Formula formula={logarithmicFunction.getFormula()} />
                                <br />
                                <div className="flex flex-wrap justify-center flex-row text-center gap-2">
                                    <div className="min-w-full lg:min-w-[210px]">
                                        <p><b>Dziedzina:</b></p>
                                        <Formula formula={"D_f: x\\in \\left(0;\\infty\\right)"} />
                                    </div>
                                    <div className="min-w-full lg:min-w-[210px]"><p><b>Zbiór wartości funkcji:</b></p>
                                        <Formula formula={"ZW_f: y\\in \\mathbb{R}"} />
                                    </div>
                                    <div className="min-w-full lg:min-w-[210px]"><p><b>Monotoniczność:</b></p>
                                        <p>Funkcja rosnąca, bo </p>
                                        <Formula formula={"a \\in \\left(1; \\infty \\right)"} margin="none" />
                                    </div>
                                    <div className="min-w-full lg:min-w-[210px]"><p><b>Miejsca zerowe:</b></p>
                                        <Formula formula={"x_0=1"} margin="none" />
                                    </div>
                                    <div className="min-w-full lg:min-w-[210px]"><p><b>Pozostałe cechy:</b></p>
                                        <p>funkcja różnowartościowa</p>
                                    </div>
                                </div>
                            </>)
                        }
                        {logarithmicFunction.getA() < 1 && logarithmicFunction.getA() > 0 && (
                            <>
                                <Formula formula={logarithmicFunction.getFormula()} />
                                <br />
                                <div className="flex flex-wrap justify-center flex-row text-center gap-2">
                                    <div className="min-w-full lg:min-w-[210px]">
                                        <p><b>Dziedzina:</b></p>
                                        <Formula formula={"D_f: x\\in \\left(0;\\infty\\right)"} />
                                    </div>
                                    <div className="min-w-full lg:min-w-[210px]"><p><b>Zbiór wartości funkcji:</b></p>
                                        <Formula formula={"ZW_f: y\\in \\mathbb{R}"} />
                                    </div>
                                    <div className="min-w-full lg:min-w-[210px]"><p><b>Monotoniczność:</b></p>
                                        <p>Funkcja malejąca, bo </p>
                                        <Formula formula={"a \\in \\left(0; 1 \\right)"} margin="none" />
                                    </div>
                                    <div className="min-w-full lg:min-w-[210px]"><p><b>Miejsca zerowe:</b></p>
                                        <Formula formula={"x_0=1"} margin="none" />
                                    </div>
                                    <div className="min-w-full lg:min-w-[210px]"><p><b>Pozostałe cechy:</b></p>
                                        <p>funkcja różnowartościowa</p>
                                    </div>
                                </div>
                            </>)
                        }
                        {logarithmicFunction.getA() === 1 && (
                            <>
                                <p className="text-[red]">Nie da się wyliczyć logarytmu o podstawie 1.</p>
                                <Explanation text={"Dlaczego?"}>
                                    <p>Eksperymentalnie zakładając, że podstawą logarytmu może być liczba <b>1</b>, a <b>y</b> to szukana wartość logarytmu otrzymamy z definicji logarytmu:</p>
                                    <Formula formula={"\\log_{1}{x}=y \\Leftrightarrow 1^y=x"} />
                                    <p className={"text-red"}>Potęga o podstawie <b>1</b> i dowolnym wykładniku zawsze będzie równa <b>1</b> Z tego powodu równanie, gdzie szukana jest wartość <b>y</b> jest sprzeczne i nie da się go rozwiązać.</p>
                                </Explanation>
                            </>)
                        }
                        {logarithmicFunction.getA() === 0 && (
                            <>
                                <p className="text-[red]">Nie da się wyliczyć logarytmu o podstawie 0.</p>
                                <Explanation text={"Dlaczego?"}>
                                    <p>Eksperymentalnie zakładając, że podstawą logarytmu może być liczba <b>0</b>, a <b>y</b> to szukana wartość logarytmu otrzymamy z definicji logarytmu:</p>
                                    <Formula formula={"\\log_{0}{x}=y \\Leftrightarrow 0^y=x"} />
                                    <p className={"text-red"}>Potęga o podstawie <b>0</b> i dowolnym <u>dodatnim</u> wykładniku zawsze będzie równa <b>0</b>. Z tego powodu równanie, gdzie szukana jest wartość <b>y</b> jest sprzeczne i nie da się go rozwiązać.</p>
                                </Explanation>
                            </>)
                        }

                        <div className="w-full">
                            <ArticleBorder />
                            {showGraph && (
                                <>
                                    {loading && <Loader />}
                                    <div id="graph-container" />
                                </>
                            )}
                        </div>
                        {logarithmicFunction.getA() !== 1 && logarithmicFunction.getA() !== 0 && (<button type="button" className="my-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={handleGenerateGraph}>
                            {showGraph ? 'odśwież wykres' : 'generuj wykres'}
                        </button>)}
                    </>
                )}
            </form >
        </>
    );
};
export default LogarithmicFunctionCalculatorContent;