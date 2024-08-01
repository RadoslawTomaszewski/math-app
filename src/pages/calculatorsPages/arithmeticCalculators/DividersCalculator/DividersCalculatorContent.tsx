import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/Title/Title";
import { ErrorMessage, InputShortNumberStyle } from "../../../../styles/styles";
import { numberRegisterOptions } from "../../../../utilities/validation";
import ArticleBorder from "../../../../components/ArticleBorder/ArticleBorder";
import Dividers from "../../../../types/Dividers/Dividers";

interface FormData {
    dividend: string;
}

const DividersCalculatorContent: FC = () => {
    const [dividers, setDividers] = useState<Dividers>(
        new Dividers(0)
    );
    const {
        register,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormData>({ defaultValues: { dividend: "0" } });
    const watchDividend = watch("dividend");

    useEffect(() => {
        if (!errors.dividend) {
            setDividers(new Dividers(Number(watchDividend)));
        }
    }, [watchDividend, errors.dividend]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setValue("dividend", inputValue, { shouldValidate: true });
    };

    return (
        <>
            <Title
                text="Kalkulator wypisujący dzielniki liczby naturalnej"
                type="main-article"
            />
            <form className="text-center w-full">
                <label className="flex pt-4 flex-col items-center w-full">
                    Wprowadź liczbę naturalną:
                    <input
                        className={InputShortNumberStyle}
                        placeholder="0"
                        step="1"
                        type="number"
                        {...register("dividend", numberRegisterOptions.naturalNumberMaxMillion)}
                        onChange={handleInputChange}
                    />
                </label>
                {errors.dividend ? (
                    <span className={ErrorMessage}>{errors.dividend.message}</span>
                ) : (
                    <>
                        <ArticleBorder styles="w-full" />
                        <p>Dzielniki naturalne:</p>
                        <b>{dividers.getDividersSetString()}</b>
                        <br /><br />
                        <p>Dzielniki całkowite:</p>
                        <b>{dividers.getDividersSetWithMinusesString()}</b>
                    </>
                )}
            </form>
        </>
    );
};

export default DividersCalculatorContent;
