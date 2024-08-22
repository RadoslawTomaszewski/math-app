import React, { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/Title/Title";
import { ErrorMessage, InputCoefficientStyle } from "../../../../styles/styles";
import ArticleBorder from "../../../../components/ArticleBorder/ArticleBorder";
import Formula from "../../../../components/Formula/Formula";
import { numberRegisterOptions } from "../../../../utilities/validation";
import Loader from "../../../../components/Loader/Loader";
import ArithmeticSequence from "../../../../MajzaMath/Sequences/ArithmeticSequence";
import PremiumContent from "../../../../components/PremiumContent/PremiumContent";

interface FormData {
    a1: string;
    r: string;
    n: string;
}

const ArithmeticSequencesCalculatorContent: FC = () => {
    const [arithmeticSequence, setArithmeticSequence] = useState<ArithmeticSequence>(new ArithmeticSequence(0, 0));
    const [showGraph, setShowGraph] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormData>({ defaultValues: { a1: "", r: "", n: "" } });

    const watchA1 = watch("a1");
    const watchR = watch("r");
    const watchN = watch("n");

    useEffect(() => {
        if (watchA1 && watchR && !errors.a1 && !errors.r) {
            setArithmeticSequence(new ArithmeticSequence(Number(watchA1), Number(watchR)));
            setShowGraph(false);
        }
    }, [watchA1, watchR, watchN, errors.a1, errors.r, errors.n]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const inputName = event.target.name;
        if (inputName === 'a1' || inputName === 'r' || inputName === 'n')
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

        const sequenceArray = arithmeticSequence.getSequenceArray();

        const points = sequenceArray.map((value, index) => `(${index + 1}, ${value})`).join(', ');
        const pointsExpression = `P = ${points}`;

        calculator.setExpression({ id: 'sequence-points', latex: pointsExpression });
        setLoading(false);
    };

    return (
        <>
            <Title text="Kalkulator ciągu arytmetycznego" type="main-article" />
            <form className="flex flex-col justify-center items-center max-w-full">
                <div className="flex justify-center w-full">
                    <label className="flex pt-4 flex-col flex-wrap items-center">
                        <span className="text-wrap">Wprowadź dane ciągu arytmetycznego:</span>
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
                                <span><b>r =</b></span>
                                <input
                                    className={InputCoefficientStyle}
                                    type="number"
                                    {...register("r", numberRegisterOptions.rationalNumber2places)}
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
                {(!errors.a1 && !errors.r && watchA1 && watchR) && (
                    <>
                        <PremiumContent>
                            <div className="flex items-start overflow-x-auto overflow-y-hidden w-full">
                                <div className="md:min-w-[700px] w-full">
                                    <div className="flex flex-row w-full items-start">
                                        <Formula formula={`a_1=${arithmeticSequence.getA1()}`} />
                                        <Formula formula={`r=${arithmeticSequence.getR()}`} />
                                    </div>

                                    <div className="flex flex-col items-center w-full">
                                        <div><b>Wzór ogólny ciągu:</b></div>
                                        <Formula formula={`a_n = a_1 + (n-1) \\cdot r`} />
                                        <Formula formula={arithmeticSequence.getFormula()} />
                                        {arithmeticSequence.getR() !== 0 && (
                                            <>
                                                <span>zredukowana postać:</span>
                                                <Formula formula={arithmeticSequence.getReducedFormula()} />
                                            </>)
                                        }

                                    </div>
                                </div>
                            </div>
                            <ArticleBorder styles="w-full" />
                            <div><b>Monotoniczność ciągu:</b></div>
                            {Number(watchR) > 0 && (<span>rosnący</span>)}
                            {Number(watchR) === 0 && (<span>stały</span>)}
                            {Number(watchR) < 0 && (<span>malejący</span>)}
                            {Number(watchR) < 0 && (<span>malejący</span>)}
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
                                    {arithmeticSequence.getSequence(Number(watchN)).map((sequence, index) => (
                                        <div key={index}>
                                            <Formula formula={sequence} />
                                        </div>
                                    ))}
                                    <span>Suma <b>n</b> początkowych wyrazów:</span>
                                    <Formula formula={"S_n=\\frac{a_1+a_n}{2}\\cdot n"} />

                                    {arithmeticSequence.getAn() < 0
                                        ?
                                        <Formula formula={`S_{${watchN}}=\\frac{${arithmeticSequence.getA1()}+(${arithmeticSequence.getAn()})}{2}\\cdot ${watchN}${arithmeticSequence.getSumFormula()}`} />
                                        :
                                        <Formula formula={`S_{${watchN}}=\\frac{${arithmeticSequence.getA1()}+${arithmeticSequence.getAn()}}{2}\\cdot ${watchN}${arithmeticSequence.getSumFormula()}`} />
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
                                        {showGraph ? 'odśwież wykres' : `generuj wykres dla ${watchN} wyrazów`}
                                    </button>
                                    {/* TODO: */}
                                    {/* <div className="max-w-full">
                                    <Proof steps={arithmeticSequence.getProof()} text={"Dowód, że ciąg jest arytmetyczny"} styles="min-w-[200px]">
                                        Teza:<Formula formula={"a_{n+1}-a_{n}=\\text{const.}"} />
                                        Dowód:
                                    </Proof>
                                </div> */}
                                </>
                            )}
                            {errors.n && (
                                <div>
                                    <span className={ErrorMessage}>{errors.n?.message}</span>
                                    <br />
                                </div>
                            )}
                        </PremiumContent>
                    </>)}
            </form >
        </>
    );
};
export default ArithmeticSequencesCalculatorContent;
