import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import { RegisterFormOptions } from "../../../../types/types";
import { InputNaturalNumberStyle } from "../../../../utilities/styles";
import PrimeFactors from "../../../../types/objects/PrimeFactors/PrimeFactors";

interface FormData {
    naturalNumber: string;
}

const PrimeFactorCalculatorContent: FC = () => {
    const [factorizedNumber, setFactorizedNumber] = useState<PrimeFactors>(
        new PrimeFactors(0)
    );
    const {
        register,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormData>({ defaultValues: { naturalNumber: "0" } });
    const watchNaturalNumber = watch("naturalNumber");

    useEffect(() => {
        if (!errors.naturalNumber) {
            setFactorizedNumber(new PrimeFactors(Number(watchNaturalNumber)));
        }
    }, [watchNaturalNumber, errors.naturalNumber]);

    const registerOptions: RegisterFormOptions<FormData> = {
        naturalNumber: {
            max: {
                value: 1_000_000_000_000,
                message: "Maksymalna wartość to 1'000'000'000'000 (bilion)",
            },
            min: {
                value: 0,
                message: "Minimalna wartość to 0",
            },
            pattern: {
                value: /^\d+$/,
                message: "Wprowadzona wartość musi być liczbą całkowitą",
            },
        },
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (inputValue !== "0,") setValue("naturalNumber", inputValue, { shouldValidate: true });
    };

    return (
        <>
            <Title
                text="Rozkład liczby naturalnej na czynniki całkowite"
                type="main-article"
            />
            <form className="text-center">
                <label className="flex pt-4 flex-col items-center">
                    Wprowadź liczbę naturalną:
                    <input
                        className={InputNaturalNumberStyle}
                        placeholder="0"
                        type="number"
                        min="0"
                        {...register("naturalNumber", registerOptions.naturalNumber)}
                        onChange={handleInputChange}
                    />
                </label>
                {errors.naturalNumber ? (
                    <span className="text-errorColor">{errors.naturalNumber.message}</span>
                ) : (
                    <>
                        <Formula formula={factorizedNumber.getValue() + "=" + (factorizedNumber.getValue() > 2 ? factorizedNumber.getFactorsInExponentialForm() : factorizedNumber.getValue())} />
                        {factorizedNumber.getDecomposition().map((step, index) => (
                            <>
                                <div className="flex w-full items-center justify-center">
                                    <div className="flex w-1/2 justify-end border-r-2 border-black px-2">
                                        {step[0]}
                                    </div>
                                    <div className="flex w-1/2 justify-start border-l-1 border-black px-2">
                                        {step[1] === 1 ? '\u0020' : step[1]}
                                    </div>
                                </div>
                            </>
                        ))}
                    </>
                )}
            </form>
        </>
    );
};
export default PrimeFactorCalculatorContent;
