import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import { RegisterFormOptions } from "../../../../types/types";
import { InputNaturalNumberStyle } from "../../../../utilities/styles";
import PrimeFactors from "../../../../types/objects/PrimeFactors/PrimeFactors";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import TwoNumberPrimeFactors from "../../../../types/objects/PrimeFactors/TwoNumberPrimeFactors";

interface FormData {
    naturalNumber1: string;
    naturalNumber2: string;
}

const GCDandLCMCalculatorContent: FC = () => {
    const [factorizedNumber1, setFactorizedNumber1] = useState<PrimeFactors>(
        new PrimeFactors(0)
    );
    const [factorizedNumber2, setFactorizedNumber2] = useState<PrimeFactors>(
        new PrimeFactors(0)
    );
    const [twoFactorizedNumbers, setTwoFactotizedNumbers] = useState<TwoNumberPrimeFactors>(
        new TwoNumberPrimeFactors(new PrimeFactors(0), new PrimeFactors(0))
    );

    const {
        register,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormData>({ defaultValues: { naturalNumber1: "0", naturalNumber2: "0" } });

    const watchNaturalNumber1 = watch("naturalNumber1");
    const watchNaturalNumber2 = watch("naturalNumber2");

    useEffect(() => {
        if (!errors.naturalNumber1 && Number(watchNaturalNumber1) >= 1) {
            setFactorizedNumber1(new PrimeFactors(Number(watchNaturalNumber1)));
        }
        if (!errors.naturalNumber2 && Number(watchNaturalNumber2) >= 1) {
            setFactorizedNumber2(new PrimeFactors(Number(watchNaturalNumber2)));
        }
        if (!errors.naturalNumber1 && !errors.naturalNumber2) {
            setTwoFactotizedNumbers(new TwoNumberPrimeFactors(new PrimeFactors(Number(watchNaturalNumber1)), new PrimeFactors(Number(watchNaturalNumber2))));
        }
    }, [watchNaturalNumber1, watchNaturalNumber2, errors.naturalNumber1, errors.naturalNumber2]);


    const registerOptions: RegisterFormOptions<FormData> = {
        naturalNumber1: {
            max: {
                value: 1_000_000_000,
                message: "Maksymalna wartość to 1'000'000'000 (miliard)",
            },
            min: {
                value: 1,
                message: "Minimalna wartość to 1",
            },
            pattern: {
                value: /^\d+$/,
                message: "Wprowadzona wartość musi być liczbą całkowitą",
            },
        },
        naturalNumber2: {
            max: {
                value: 1_000_000_000,
                message: "Maksymalna wartość to 1'000'000'000 (miliard)",
            },
            min: {
                value: 1,
                message: "Minimalna wartość to 1",
            },
            pattern: {
                value: /^\d+$/,
                message: "Wprowadzona wartość musi być liczbą całkowitą",
            },
        },
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const inputName = event.target.name;
        if (inputName === 'naturalNumber1' || inputName === 'naturalNumber2')
            setValue(inputName, inputValue, { shouldValidate: true });
    };

    return (
        <>
            <Title
                text="Największy wspólny dzielnik (NWD) i Najmniejsza wspólna wielokrotność (NWW)"
                type="main-article"
            />
            <form className="text-center">
                <div className="flex justify-center">
                    <label className="flex pt-4 flex-col items-center">
                        Wprowadź dwie liczby naturalne:
                        <div className="InputsWrapper">
                            <input
                                className={InputNaturalNumberStyle}
                                placeholder="0"
                                type="number"
                                min="0"
                                {...register("naturalNumber1", registerOptions.naturalNumber1)}
                                onChange={handleInputChange}
                            />
                            <input
                                className={InputNaturalNumberStyle}
                                placeholder="0"
                                type="number"
                                min="0"
                                {...register("naturalNumber2", registerOptions.naturalNumber2)}
                                onChange={handleInputChange}
                            />
                        </div>
                        {errors.naturalNumber1 && (
                            <span className="text-errorColor">{errors.naturalNumber1.message}</span>
                        )}
                        {errors.naturalNumber2 && (
                            <span className="text-errorColor">{errors.naturalNumber2.message}</span>
                        )}
                    </label>
                </div>

                <div className="flex flex-wrap justify-center text-center">
                    {!errors.naturalNumber1 && (
                        <div>
                            <Formula formula={factorizedNumber1.getValue() + "=" + (factorizedNumber1.getValue() > 2 ? factorizedNumber1.getFactorsInExponentialForm() : factorizedNumber1.getValue())} />
                            {factorizedNumber1.getDecomposition().map((step, index) => (
                                <div className="flex w-full items-center justify-center" key={index}>
                                    <div className="flex w-1/2 justify-end border-r-2 border-black px-2">
                                        {step[0]}
                                    </div>
                                    <div className="flex w-1/2 justify-start border-l-1 border-black px-2">
                                        {step[1] === 1 ? '\u0020' : step[1]}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {!errors.naturalNumber2 && (
                        <div>
                            <Formula formula={factorizedNumber2.getValue() + "=" + (factorizedNumber2.getValue() > 2 ? factorizedNumber2.getFactorsInExponentialForm() : factorizedNumber2.getValue())} />
                            {factorizedNumber2.getDecomposition().map((step, index) => (
                                <div className="flex w-full items-center justify-center" key={index}>
                                    <div className="flex w-1/2 justify-end border-r-2 border-black px-2">
                                        {step[0]}
                                    </div>
                                    <div className="flex w-1/2 justify-start border-l-1 border-black px-2">
                                        {step[1] === 1 ? '\u0020' : step[1]}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {!errors.naturalNumber1 && !errors.naturalNumber2 && (
                    <div>
                        <ArticleBorder />
                        <Title
                            text="Największy wspólny dzielnik:"
                            type="submain-article"
                        />
                        <Formula formula={"NWD(" + factorizedNumber1.getValue() + "," + factorizedNumber2.getValue() + ") = "} />
                        <Formula formula={twoFactorizedNumbers.getGCDString()} />
                        <ArticleBorder />
                        <Title
                            text="Najmniejsza wspólna wielokrotność:"
                            type="submain-article"
                        />
                        <Formula formula={"NWW(" + factorizedNumber1.getValue() + "," + factorizedNumber2.getValue() + ") = "} />
                        <Formula formula={twoFactorizedNumbers.getLCMString()} />
                    </div>
                )}
            </form>
        </>
    );
};
export default GCDandLCMCalculatorContent;
