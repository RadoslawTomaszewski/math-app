import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import { rootRegisterOptions } from "../../../../utilities/validation";
import { InputRootCalculatorStyle } from "../../../../utilities/styles";
import SquareRootNumber from "../../../../types/objects/RootNumber/SquareRootNumber";

interface FormData {
    squareNumber: string;
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
    } = useForm<FormData>({ defaultValues: { squareNumber: "0" } });
    const watchSquareNumber = watch("squareNumber");

    useEffect(() => {
        if (!errors.squareNumber) {
            setSquareRoot(new SquareRootNumber(Number(watchSquareNumber)));
        }
    }, [watchSquareNumber, errors.squareNumber]);



    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setValue("squareNumber", inputValue, { shouldValidate: true });
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
                        {...register("squareNumber", rootRegisterOptions.squareNumber)}
                        onChange={handleInputChange}
                    />
                </label>
                {errors.squareNumber ? (
                    <span className="text-errorColor">{errors.squareNumber.message}</span>
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
