import React, { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/Title/Title";
import { ErrorMessage, InputCoefficientStyle } from "../../../../styles/styles";
import ArticleBorder from "../../../../components/ArticleBorder/ArticleBorder";
import Formula from "../../../../components/Formula/Formula";
import { numberRegisterOptions } from "../../../../utilities/validation";
import Loader from "../../../../components/Loader/Loader";
import GeometricSequence from "../../../../types/Sequences/GeometricSequence";

interface FormData {
    a1: string;
    q: string;
    n: string;
}

const GeometricSequencesCalculatorContent: FC = () => {
    const [geometricSequence, setGeometricSequence] = useState<GeometricSequence>(new GeometricSequence(0, 1));
    const [showGraph, setShowGraph] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormData>({ defaultValues: { a1: "", q: "", n: "" } });

    const watchA1 = watch("a1");
    const watchQ = watch("q");
    const watchN = watch("n");

    useEffect(() => {
        if (watchA1 && watchQ && !errors.a1 && !errors.q) {
            setGeometricSequence(new GeometricSequence(Number(watchA1), Number(watchQ)));
            setShowGraph(false);
            setValue("n", "");
        }
    }, [watchA1, watchQ, errors.a1, errors.q, setValue]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const inputName = event.target.name;
        if (inputName === 'a1' || inputName === 'q' || inputName === 'n')
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

        const sequenceArray = geometricSequence.getSequenceArray();

        const points = sequenceArray.map((value, index) => `(${index + 1}, ${value})`).join(', ');
        const pointsExpression = `P = ${points}`;

        calculator.setExpression({ id: 'sequence-points', latex: pointsExpression });
        setLoading(false);
    };

    return (
        <>
            <Title text="Kalkulator ciągu geometrycznego" type="main-article" />
            <form className="flex flex-col justify-center items-center max-w-full">
                <div className="flex justify-center w-full">
                    <label className="flex pt-4 flex-col flex-wrap items-center">
                        <span className={ErrorMessage}>Kalkulator działa ale nie jest jeszcze zoptymalizowany pod względem złożoności obliczeniowej. Jeżeli wpiszesz zbyt duże wartości strona może się zawiesić. Wówczas zamknij kartę i wróć w to miejsce ponownie :)</span>
                        <span className="text-wrap">Wprowadź dane ciągu geometrycznego:</span>
                        <div className="InputsWrapper flex flex-row flex-wrap items-end mt-2">
                            <div>
                                <span><b>a<sub>1</sub>&nbsp;=</b></span>
                                <input
                                    className={InputCoefficientStyle}
                                    type="number"
                                    {...register("a1", numberRegisterOptions.rationalNumber2places)}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="InputsWrapper flex flex-row flex-wrap items-end mt-2">
                            <div>
                                <span><b>q =</b></span>
                                <input
                                    className={InputCoefficientStyle}
                                    type="number"
                                    {...register("q", numberRegisterOptions.rationalNumber2placesNotZero)}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </label>
                </div>
                <ArticleBorder styles="w-full" />
                <div>
                    {Object.entries(errors)
                        .filter(([key]) => key !== 'n')
                        .map(([key, error]) => (
                            error && (
                                <React.Fragment key={key}>
                                    <span className={ErrorMessage}>{error.message}</span>
                                    <br />
                                </React.Fragment>
                            )
                        ))}
                </div>
                {(!errors.a1 && !errors.q && watchA1 && watchQ) && (
                    <>
                        <div className="flex items-start overflow-x-auto overflow-y-hidden w-full">
                            <div className="md:min-w-[700px] w-full">
                                <div className="flex flex-row w-full items-start">
                                    <Formula formula={`a_1=${geometricSequence.getA1()}`} />
                                    <Formula formula={`r=${geometricSequence.getQ()}`} />
                                </div>

                                <div className="flex flex-col items-center w-full">
                                    <div><b>Wzór ogólny ciągu:</b></div>
                                    <Formula formula={`a_n = a_1\\cdot q^{n-1}`} />
                                    <Formula formula={geometricSequence.getFormula()} />
                                    <span>zredukowana postać:</span>
                                    <Formula formula={geometricSequence.getReducedFormula()} />
                                    <div><b>Monotoniczność ciągu:</b></div>
                                    {Number(watchA1) < 0 && Number(watchQ) < -1 && (<span>niemonotoniczny</span>)}
                                    {Number(watchA1) < 0 && Number(watchQ) === -1 && (<span>niemonotoniczny</span>)}
                                    {Number(watchA1) < 0 && Number(watchQ) > -1 && Number(watchQ) < 0 && (<span>niemonotoniczny</span>)}
                                    {Number(watchA1) < 0 && Number(watchQ) === 0 && (<span>stały od drugiego wyrazu</span>)}
                                    {Number(watchA1) < 0 && Number(watchQ) > 0 && Number(watchQ) < 1 && (<span>rosnący</span>)}
                                    {Number(watchA1) < 0 && Number(watchQ) === 1 && (<span>stały</span>)}
                                    {Number(watchA1) < 0 && Number(watchQ) > 1 && (<span>malejący</span>)}
                                    {Number(watchA1) === 0 && (<span>stały</span>)}
                                    {Number(watchA1) > 0 && Number(watchQ) < -1 && (<span>niemonotoniczny</span>)}
                                    {Number(watchA1) > 0 && Number(watchQ) === -1 && (<span>niemonotoniczny</span>)}
                                    {Number(watchA1) > 0 && Number(watchQ) > -1 && Number(watchQ) < 0 && (<span>niemonotoniczny</span>)}
                                    {Number(watchA1) > 0 && Number(watchQ) === 0 && (<span>stały od drugiego wyrazu</span>)}
                                    {Number(watchA1) > 0 && Number(watchQ) > 0 && Number(watchQ) < 1 && (<span>malejący</span>)}
                                    {Number(watchA1) > 0 && Number(watchQ) === 1 && (<span>stały</span>)}
                                    {Number(watchA1) > 0 && Number(watchQ) > 1 && (<span>rosnący</span>)}
                                    <div><b>Zbieżność ciągu:</b></div>
                                    {Number(watchA1) < 0 && Number(watchQ) < -1 && (<span>rozbieżny</span>)}
                                    {Number(watchA1) < 0 && Number(watchQ) === -1 && (<span>rozbieżny</span>)}
                                    {Number(watchA1) < 0 && Number(watchQ) > -1 && Number(watchQ) < 0 && (<span>zbieżny do <b>0</b></span>)}
                                    {Number(watchA1) < 0 && Number(watchQ) === 0 && (<span>zbieżny do <b>0</b></span>)}
                                    {Number(watchA1) < 0 && Number(watchQ) > 0 && Number(watchQ) < 1 && (<span>zbieżny do <b>0</b></span>)}
                                    {Number(watchA1) < 0 && Number(watchQ) === 1 && (<span>zbieżny do {watchA1}</span>)}
                                    {Number(watchA1) < 0 && Number(watchQ) > 1 && (<span>zbieżny do <b>-∞</b></span>)}
                                    {Number(watchA1) === 0 && (<span>zbieżny do <b>0</b></span>)}
                                    {Number(watchA1) > 0 && Number(watchQ) < -1 && (<span>rozbieżny</span>)}
                                    {Number(watchA1) > 0 && Number(watchQ) === -1 && (<span>rozbieżny</span>)}
                                    {Number(watchA1) > 0 && Number(watchQ) > -1 && Number(watchQ) < 0 && (<span>zbieżny do <b>0</b></span>)}
                                    {Number(watchA1) > 0 && Number(watchQ) === 0 && (<span>zbieżny do <b>0</b></span>)}
                                    {Number(watchA1) > 0 && Number(watchQ) > 0 && Number(watchQ) < 1 && (<span>zbieżny do <b>0</b></span>)}
                                    {Number(watchA1) > 0 && Number(watchQ) === 1 && (<span>zbieżny do {watchA1}</span>)}
                                    {Number(watchA1) > 0 && Number(watchQ) > 1 && (<span>zbieżny do <b>∞</b></span>)}
                                </div>
                            </div>
                        </div>
                        <ArticleBorder styles="w-full" />
                        <div className="flex justify-center w-full">
                            <label className="flex flex-col flex-wrap items-center">
                                <span className="text-wrap">Wprowadź liczbę <b>n</b> początkowych wyrazów ciągu:</span>
                                <div className="InputsWrapper flex flex-row flex-wrap items-end mt-2">
                                    <div>
                                        <span><b>n&nbsp;=</b></span>
                                        <input
                                            className={InputCoefficientStyle}
                                            type="number"
                                            {...register("n", numberRegisterOptions.naturalNumberMax200NotZero)}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </label>
                        </div>

                        {watchN && !errors.n && (
                            <>
                                <ArticleBorder styles="w-full" />
                                {geometricSequence.getSequence(Number(watchN)).map((sequence, index) => (
                                    <div key={index}>
                                        <Formula formula={sequence} />
                                    </div>
                                ))}
                                <span>Suma <b>n</b> początkowych wyrazów:</span>
                                {Number(watchQ) === 1 && (
                                    <Formula formula={"S_n=a_1 \\cdot n"} />
                                )}
                                {Number(watchQ) !== 1 && (
                                    <>
                                        <Formula formula={"S_n=a_1 \\cdot \\frac{1-q^n}{1-q}"} />
                                        <Formula formula={`S_{${watchN}}=${geometricSequence.getA1()} \\cdot \\frac{1-${geometricSequence.getQ()}^{${watchN}}}{1-${geometricSequence.getQ()}}${geometricSequence.getSumFormula()}`} />
                                    </>)}
                                <div className="w-full">
                                    {showGraph && (
                                        <>
                                            {loading && <Loader />}
                                            <div id="graph-container" />
                                        </>
                                    )}
                                </div>

                                <button type="button" className="my-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={handleGenerateGraph}>
                                    {showGraph ? 'odśwież wykres' : `generuj wykres dla ${watchN} wyrazów`}
                                </button>
                            </>
                        )}
                        {errors.n && (
                            <div>
                                <span className={ErrorMessage}>{errors.n?.message}</span>
                                <br />
                            </div>
                        )}
                    </>)}
            </form >
        </>
    );
};
export default GeometricSequencesCalculatorContent;
