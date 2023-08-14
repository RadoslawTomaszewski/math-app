import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import { RegisterFormOptions } from "../../../../types/types";
import { InputRootCalculatorStyle } from "../../../../utilities/styles";
import CubeRootNumber from "../../../../types/objects/RootNumber/CubeRootNumber";

interface FormData {
    cubeNumber: string;
}

const CubeRootCalculatorContent: FC = () => {
    const [cubeRoot, setCubeRoot] = useState<CubeRootNumber>(
        new CubeRootNumber(0)
    );
    const {
        register,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormData>({ defaultValues: { cubeNumber: "0" } });
    const watchCubeNumber = watch("cubeNumber");

    useEffect(() => {
        if (!errors.cubeNumber) {
            setCubeRoot(new CubeRootNumber(Number(watchCubeNumber)));
        }
    }, [watchCubeNumber, errors.cubeNumber]);

    const registerOptions: RegisterFormOptions<FormData> = {
        cubeNumber: {
            max: {
                value: 10000000,
                message: "Maksymalna wartość to 10000000",
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
        setValue("cubeNumber", inputValue, { shouldValidate: true });
    };

    return (
        <>
            <Title
                text="Wyciąganie czynnika całkowitego przed pierwiastek kwadratowy"
                type="main-article"
            />
            <form className="text-center">
                <label className="flex pt-4 flex-col items-center">
                    Wprowadź liczbę naturalną pod pierwiastkiem:
                    <input
                        className={InputRootCalculatorStyle}
                        placeholder="0"
                        type="number"
                        min="0"
                        {...register("cubeNumber", registerOptions.cubeNumber)}
                        onChange={handleInputChange}
                    />
                </label>
                {errors.cubeNumber ? (
                    <span className="text-errorColor">{errors.cubeNumber.message}</span>
                ) : (
                    <>
                        {cubeRoot.getAllUniqueSteps().map((step, index) => (
                            <Formula key={index} formula={step} />
                        ))}
                    </>
                )}
            </form>
        </>
    );
};

export default CubeRootCalculatorContent;
