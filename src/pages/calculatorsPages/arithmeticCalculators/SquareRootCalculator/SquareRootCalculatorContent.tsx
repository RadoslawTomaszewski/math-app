import React, { FC, useState } from "react";
import { useForm } from 'react-hook-form';
import Title from "../../../../components/articleItems/Title";
import { RegisterFormOptions } from "../../../../types/types";
import SquareRootNumber from "../../../../types/objects/RootNumber/SquareRootNumber";

interface FormData {
    squareNumber: number;
}

const SquareRootCalculatorContent: FC = () => {

    const [inputState, setInputState] = useState<{
        squareRoot: SquareRootNumber;
    }>({
        squareRoot: new SquareRootNumber(0),
    });


    const { register, watch, setValue, formState: { errors } } = useForm<FormData>();

    const watchSquareNumber = watch('squareNumber');

    const registerOptions: RegisterFormOptions<FormData> = {
        squareNumber: {
            valueAsNumber: true,
            max: {
                value: 10000000,
                message: 'Maksymalna wartość to 10000000'
            },
            min: {
                value: 0,
                message: 'Minimalna wartość to 0'
            },
        },
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = Number(event.target.value);
        setValue("squareNumber", inputValue, { shouldValidate: true });
        if (!errors.squareNumber) setInputState((prev) => ({
            ...prev,
            squareRoot: new SquareRootNumber(watchSquareNumber),
        }));
    };

    return (
        <div className="p-2 justify-center flex flex-col items-center">
            <Title
                text="Wyciąganie czynnika całkowitego przed pierwiastek kwadratowy"
                type="main-article"
            />
            <form>
                <label className="pt-4 flex flex-col items-center">
                    Wprowadź liczbę naturalną dodatnią pod pierwiastkiem:
                    <input
                        className="m-2 text-center w-[90px] font-math bg-articleColor border-2 border-black rounded appearance-none focus:outline-none"
                        placeholder="0"
                        type="number"
                        min="0"
                        {...register("squareNumber", registerOptions.squareNumber)}
                        onChange={handleInputChange}
                    />
                </label>
                {watchSquareNumber}
                {errors.squareNumber ? <span className="text-red-600">{errors.squareNumber.message}</span> : <span>LICZBA</span>}
            </form>
        </div>
    );
};

export default SquareRootCalculatorContent;
