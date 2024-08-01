import React, { FC, useState } from "react";
import Title from "../../../../components/Title/Title";
import LinearFunctionCoefficientsCalculator from "./LinearFunctionCoefficientsCalculator";
import LinearFunctionPointsCalculator from "./LinearFunctionPointsCalculator";

const LinearFunctionCalculatorContent: FC = () => {
    const [mode, setMode] = useState<'coefficients' | 'points'>('coefficients');

    const handleModeChange = (newMode: 'coefficients' | 'points') => {
        setMode(newMode);
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
                        <span className="text-wrap">Wybierz tryb wprowadzania danych:</span>
                        <div className="flex flex-wrap justify-center gap-2 mt-2">
                            <button
                                type="button"
                                className={`mx-2 py-1 min-w-[136px] px-3 focus:outline-none ${mode === 'coefficients' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                                onClick={() => handleModeChange('coefficients')}
                            >
                                Współczynniki
                            </button>
                            <button
                                type="button"
                                className={`mx-2 py-1 min-w-[136px] px-3 focus:outline-none ${mode === 'points' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                                onClick={() => handleModeChange('points')}
                            >
                                Punkty
                            </button>
                        </div>
                    </label>
                </div>
                {mode === 'coefficients' ? (
                    <LinearFunctionCoefficientsCalculator />
                ) : (
                    <LinearFunctionPointsCalculator />
                )}
            </form >
        </>
    );
};
export default LinearFunctionCalculatorContent;
