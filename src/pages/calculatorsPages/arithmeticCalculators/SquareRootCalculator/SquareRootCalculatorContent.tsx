import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/articleItems/Title";
import Formula from "../../../../components/articleItems/Formula";
import { ErrorMessage, InputShortNumberStyle } from "../../../../utilities/styles";
import SquareRootNumber from "../../../../types/objects/Irrational/RootNumber/SquareRootNumber";
import ArticleBorder from "../../../../components/articleItems/ArticleBorder";
import { NavLink } from "react-router-dom";
import { integerRegisterOptions } from "../../../../utilities/validation";

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
                        {...register("rootNumber", integerRegisterOptions.squareRootNumber)}
                        onChange={handleInputChange}
                    />
                </label>
                {errors.rootNumber ? (
                    <span className={ErrorMessage}>{errors.rootNumber.message}</span>
                ) : (
                    <>
                        <ArticleBorder />
                        {squareRoot.getAllUniqueSteps().map((step, index) => (
                            <Formula key={index} formula={step} />
                        ))}
                        {squareRoot.getAllUniqueSteps().length < 3 && <span>Nie da się wyciągnąć całkowitego czynnika z tego pierwiastka</span>}
                    </>
                )}
                <ArticleBorder />
                <Title text="Jak wyciągać czynnik przed pierwiastek kwadratowy?" type="submain-article" />
                <span>Wyciąganie czynnika przed pierwiastek kwadratowy polega na rozłożeniu liczby pod pierwiastkiem na czynniki, wśród których są kwadraty liczb. </span>
                <br />
                <Formula formula={"\\sqrt{x^2 \\cdot y}=\\sqrt{x^2} \\cdot \\sqrt{y}=x\\sqrt{y}"} />
                <span>Następnie zgodnie z powyższą regułą można odseparować pierwiastki z kwadratów, a następnie obliczyć ich wartość.</span>
                <br />
                <span>Aby znaleźć wszystkie możliwe do uzyskania kwadraty należy dokonać <NavLink to="../rozklad-na-czynniki-pierwsze"><b>rozkładu na czynniki pierwsze (faktoryzacji)</b></NavLink> liczby pod pierwiastkiem.</span>
                <br />
                <span>Ten kalkulator wykorzystuje faktoryzację, a następnie łączy identyczne czynniki w pary w celu znalezienia kwadratów liczb.</span>
            </form>
        </>
    );
};

export default SquareRootCalculatorContent;
