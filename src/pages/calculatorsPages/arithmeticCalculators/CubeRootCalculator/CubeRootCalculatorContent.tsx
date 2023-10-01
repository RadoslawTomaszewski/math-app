import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import { RegisterFormOptions } from "../../../../types/types";
import { InputRootCalculatorStyle } from "../../../../utilities/styles";
import CubeRootNumber from "../../../../types/objects/RootNumber/CubeRootNumber";
import { rootRegisterOptions } from "../../../../utilities/validation";

interface FormData {
    rootNumber: string;
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
    } = useForm<FormData>({ defaultValues: { rootNumber: "0" } });
    const watchRootNumber = watch("rootNumber");

    useEffect(() => {
        if (!errors.rootNumber) {
            setCubeRoot(new CubeRootNumber(Number(watchRootNumber)));
        }
    }, [watchRootNumber, errors.rootNumber]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setValue("rootNumber", inputValue, { shouldValidate: true });
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
                        {...register("rootNumber", rootRegisterOptions.rootNumber)}
                        onChange={handleInputChange}
                    />
                </label>
                {errors.rootNumber ? (
                    <span className="text-errorColor">{errors.rootNumber.message}</span>
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
