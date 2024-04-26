import React, { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/articleItems/Title";
import { ErrorMessage, InputCoefficientStyle } from "../../../../utilities/styles";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import Loader from "../../../../components/Loader/Loader";
import Formula from "../../../../components/articleItems/Formula";
import ExponentialFormula from "../../../../types/objects/ExponentialFormula/ExponentialFormula";
import { numberRegisterOptions } from "../../../../utilities/validation";

interface FormData {
    a: string;
}

const ExponentialFunctionCalculatorContent: FC = () => {
    const [exponentialFunction, setExponentialFunction] = useState<ExponentialFormula>(new ExponentialFormula(1));
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
            setExponentialFunction(new ExponentialFormula(Number(watchA)));
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

        const equation1 = `y=${watchA}^x`;
        calculator.setExpression({ id: 'graph1', latex: equation1 });
        setLoading(false);
    };

    return (
        <>
            <Title
                text="Kalkulator funkcji wykładniczej"
                type="main-article"
            />
            <form className="flex flex-col justify-center items-center w-full">
                <div className="flex justify-center w-full">
                    <label className="flex pt-4 flex-col flex-wrap items-center">
                        <span className="text-wrap">Wprowadź podstawę funkcji wykładniczej:</span>
                        <div className="InputsWrapper flex flex-row items-end mt-2">
                            <div className="mx-1"><b>f(x)=</b></div>
                            <input
                                className={InputCoefficientStyle}
                                type="number"
                                step="0.01"
                                {...register("a", numberRegisterOptions.exponentialCoefficient)}
                                onChange={handleInputChange}
                            />
                            <div className="mx-1"><b><sup>x</sup></b></div>
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
                        {exponentialFunction.getA() > 1 && (
                            <>
                                <Formula formula={exponentialFunction.getFormula()} />
                                <br />
                                <div className="flex flex-wrap justify-center flex-row text-center gap-2">
                                    <div className="min-w-full lg:min-w-[210px]">
                                        <p><b>Dziedzina:</b></p>
                                        <Formula formula={"D_f: x\\in \\mathbb{R}"} />
                                    </div>
                                    <div className="min-w-full lg:min-w-[210px]"><p><b>Zbiór wartości funkcji:</b></p>
                                        <Formula formula={"ZW_f: y\\in \\left(0;\\infty\\right)"} />
                                    </div>
                                    <div className="min-w-full lg:min-w-[210px]"><p><b>Monotoniczność:</b></p>
                                        <p>Funkcja rosnąca, bo </p>
                                        <Formula formula={"a \\in \\left(1; \\infty \\right)"} margin="none" />
                                    </div>
                                    <div className="min-w-full lg:min-w-[210px]"><p><b>Miejsca zerowe:</b></p>
                                        <p>brak</p>
                                    </div>
                                    <div className="min-w-full lg:min-w-[210px]"><p><b>Pozostałe cechy:</b></p>
                                        <p>funkcja różnowartościowa</p>
                                    </div>
                                </div>
                            </>)
                        }
                        {exponentialFunction.getA() < 1 && exponentialFunction.getA() > 0 && (
                            <>
                                <Formula formula={exponentialFunction.getFormula()} />
                                <br />
                                <div className="flex flex-wrap justify-center flex-row text-center gap-2">
                                    <div className="min-w-full lg:min-w-[210px]">
                                        <p><b>Dziedzina:</b></p>
                                        <Formula formula={"D_f: x\\in \\mathbb{R}"} />
                                    </div>
                                    <div className="min-w-full lg:min-w-[210px]"><p><b>Zbiór wartości funkcji:</b></p>
                                        <Formula formula={"ZW_f: y\\in \\left(0;\\infty\\right)"} />
                                    </div>
                                    <div className="min-w-full lg:min-w-[210px]"><p><b>Monotoniczność:</b></p>
                                        <p>Funkcja malejąca, bo </p>
                                        <Formula formula={"a \\in \\left(0; 1 \\right)"} margin="none" />
                                    </div>
                                    <div className="min-w-full lg:min-w-[210px]"><p><b>Miejsca zerowe:</b></p>
                                        <p>brak</p>
                                    </div>
                                    <div className="min-w-full lg:min-w-[210px]"><p><b>Pozostałe cechy:</b></p>
                                        <p>funkcja różnowartościowa</p>
                                    </div>
                                </div>
                            </>)
                        }
                        {exponentialFunction.getA() === 1 && (
                            <>
                                <p className="text-[red]">To nie jest funkcja wykładnicza!</p>
                                <Formula formula={exponentialFunction.getFormula()} />
                                <p className={"text-red"}>Ta funkcja sprowadza się do funkcji liniowej stałej:</p>
                                <Formula formula={"f(x)=1"} />
                                <p></p>
                            </>)
                        }
                        {exponentialFunction.getA() === 0 && (
                            <>
                                <p className="text-[red]">To nie jest funkcja wykładnicza!</p>
                                <Formula formula={exponentialFunction.getFormula()} />
                                <p className={"text-red"}>Ta funkcja sprowadza się do funkcji liniowej ograniczonej dziedziną dla argumentów dodatnich</p>
                                <Formula formula={"f(x)=0"} />
                                <Formula formula={"\\text{D}_f:x\\in \\left(0 ; \\infty \\right)"} />
                                <p></p>
                            </>)
                        }


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
                    </>
                )}
            </form >
        </>
    );
};
export default ExponentialFunctionCalculatorContent;