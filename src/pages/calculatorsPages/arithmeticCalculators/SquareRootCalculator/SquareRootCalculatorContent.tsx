import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import { rootRegisterOptions } from "../../../../utilities/validation";
import { ErrorMessage, InputShortNumberStyle } from "../../../../utilities/styles";
import SquareRootNumber from "../../../../types/objects/RootNumber/SquareRootNumber";

interface FormData {
    rootNumber: string;
}

const SquareRootCalculatorContent: FC = () => {
    const [squareRoot, setSquareRoot] = useState<SquareRootNumber>(
        new SquareRootNumber(0)
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
            setSquareRoot(new SquareRootNumber(Number(watchRootNumber)));
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
                        className={InputShortNumberStyle}
                        placeholder="0"
                        type="number"
                        min="0"
                        {...register("rootNumber", rootRegisterOptions.rootNumber)}
                        onChange={handleInputChange}
                    />
                </label>
                {errors.rootNumber ? (
                    <span className={ErrorMessage}>{errors.rootNumber.message}</span>
                ) : (
                    <>
                        {squareRoot.getAllUniqueSteps().map((step, index) => (
                            <Formula key={index} formula={step} />
                        ))}
                    </>
                )}
            </form>
        </>
    );
};

export default SquareRootCalculatorContent;
