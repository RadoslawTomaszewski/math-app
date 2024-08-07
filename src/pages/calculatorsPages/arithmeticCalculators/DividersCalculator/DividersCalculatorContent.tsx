import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/Title/Title";
import { ErrorMessage, InputShortNumberStyle } from "../../../../styles/styles";
import { numberRegisterOptions } from "../../../../utilities/validation";
import ArticleBorder from "../../../../components/ArticleBorder/ArticleBorder";
import Dividers from "../../../../types/Dividers/Dividers";
import Explanation from "../../../../components/ProofAndExplanation/Explanation";
import NavigateTo from "../../../../components/NavigateTo/NavigateTo";
import Formula from "../../../../components/Formula/Formula";

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
            <div className="w-full max-w-full">
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
                            <br /><br /><p>Liczba dzielników naturalnych:</p>
                            <b>{dividers.getDividers().length}</b>
                            <br /><br />
                            <p>Dzielniki całkowite:</p>
                            <b>{dividers.getDividersSetWithMinusesString()}</b>
                            <br /><br /><p>Liczba dzielników całkowitych:</p>
                            <b>{dividers.getDividersWithMinuses().length}</b>
                        </>
                    )}
                </form>
                <ArticleBorder />
                <Explanation text={"Jak ustalić liczbę dzielników?"}>
                    <div className="w-full max-w-full">
                        <span>Aby określić ilość naturalnych dzielników danej liczby </span>
                        <NavigateTo to={"../rozklad-na-czynniki-pierwsze"}>rozłożonej na czynniki pierwsze</NavigateTo>
                        <span>&nbsp;i wyrażonej za pomocą iloczynu potęg rożnych liczb pierwszych należy pomnożyć przez siebie wykładniki tych potęg powiększone o jeden.</span>
                        <Explanation text={"Przykład"}>
                            <Formula formula={"504=2^3\\cdot 3^2 \\cdot 7"} styles="min-w-[145px]" />
                            <span>Liczba dzielników liczby <b>504</b> to:</span>
                            <Formula formula={"(3+1)\\cdot(2+1)\\cdot(1+1)=24"} styles="min-w-[245px]" />
                        </Explanation>
                    </div>
                </Explanation>
            </div>
        </>
    );
};

export default DividersCalculatorContent;
