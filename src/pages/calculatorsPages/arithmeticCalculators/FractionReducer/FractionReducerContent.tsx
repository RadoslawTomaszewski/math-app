import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/articleItems/Title";
import { ErrorMessage, InputShortNumberStyle } from "../../../../utilities/styles";
import { numberRegisterOptions } from "../../../../utilities/validation";
import Fraction from "../../../../types/Fraction/Fraction";
import Formula from "../../../../components/articleItems/Formula";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import { joinUniqueWithApproximations, joinUniqueWithEquals } from "../../../../utilities";
import { NavLink } from "react-router-dom";

interface FormData {
    nominator: string;      //licznik
    denominator: string;    //mianownik
}

const FractionReducerContent: FC = () => {
    const [fraction, setFraction] = useState<Fraction>(new Fraction(0, 1));

    const {
        register,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormData>({ defaultValues: { nominator: "", denominator: "" } });

    const watchNominator = watch("nominator");
    const watchDenominator = watch("denominator");

    useEffect(() => {
        if (!errors.nominator && !errors.denominator) {
            setFraction(new Fraction(Number(watchNominator), Number(watchDenominator)));
        }
    }, [watchNominator, watchDenominator, errors.nominator, errors.denominator]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const inputName = event.target.name;
        if (inputName === 'nominator' || inputName === 'denominator')
            setValue(inputName, inputValue, { shouldValidate: true });
    };

    return (
        <>
            <Title
                text="Skracanie ułamków"
                type="main-article"
            />
            <form className="text-center">
                <label className="flex pt-4 flex-col items-center">
                    <span>Wprowadź licznik w postaci liczby całkowitej:</span>
                    <input
                        className={InputShortNumberStyle}
                        type="number"
                        {...register("nominator", numberRegisterOptions.nominator)}
                        onChange={handleInputChange}
                    />
                    {errors.nominator && (
                        <span className={ErrorMessage}>{errors.nominator.message}</span>
                    )}
                    <span>Wprowadź mianownik w postaci liczby całkowitej:</span>
                    <input
                        className={InputShortNumberStyle}
                        type="number"
                        {...register("denominator", numberRegisterOptions.denominator)}
                        onChange={handleInputChange}
                    />
                    {errors.denominator && (
                        <span className={ErrorMessage}>{errors.denominator.message}</span>
                    )}
                </label>
                <ArticleBorder />
                {(!errors.nominator && !errors.denominator && watchNominator && watchDenominator) && (
                    <>
                        {(Math.abs(fraction.getGCD()) !== 1) ? `Ten ułamek można skrócić przez ${fraction.getGCD()}` : "Nie da się skrócić tego ułamka"}
                        {(Math.abs(fraction.getGCD()) !== 1)
                            ?
                            <Formula formula={joinUniqueWithEquals(fraction.getFractionWithOriginalPlacedSign(), fraction.getOriginalFractionString(), fraction.getOriginalFractionStringReducedByGCD(), fraction.getFractionReducedString())} />
                            :
                            <Formula formula={joinUniqueWithEquals(fraction.getFractionWithOriginalPlacedSign(), fraction.getOriginalFractionString(), fraction.getFractionReducedString())} />}

                        <span>Dokładna lub przybliżona wartość tego ułamka to:</span>
                        {!fraction.getIsValueApproximate()
                            ?
                            <Formula formula={joinUniqueWithEquals(joinUniqueWithEquals(fraction.getFractionReducedString(), fraction.getMixedFractionString()), `${fraction.getValue()}`)} />
                            :
                            <Formula formula={joinUniqueWithApproximations(joinUniqueWithEquals(fraction.getFractionReducedString(), fraction.getMixedFractionString()), `${fraction.getValue()}`)} />
                        }
                        <ArticleBorder />
                    </>
                )}
                <Title text="Jak skracać ułamki?" type="submain-article" />
                <span>Skracanie ułamków polega na podzieleniu licznika i mianownika przez ich wspólny dzielnik.</span>
                <br />
                <span>Aby otrzymać ułamek w postaci nieskracalnej należy znaleźć <NavLink to="../nww-i-nwd"><b>największy wspólny dzielnik (NWD)</b></NavLink>.</span>
                <br />
                <span>Ten kalkulator wykorzystuje metodę znajdowania największego wspólnego dzielnika</span>
            </form>
        </>
    );
};

export default FractionReducerContent;
