import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../components/Title/Title";
import Formula from "../../../../components/Formula/Formula";
import { ErrorMessage, InputShortNumberStyle } from "../../../../styles/styles";
import CubeRootNumber from "../../../../MajzaMath/RootNumber/CubeRootNumber";
import { numberRegisterOptions } from "../../../../utilities/validation";
import ArticleBorder from "../../../../components/ArticleBorder/ArticleBorder";
import { NavLink } from "react-router-dom";
import Explanation from "../../../../components/ProofAndExplanation/Explanation";

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
            <div className="w-full">
                <Title
                    text="Wyciąganie czynnika całkowitego przed pierwiastek sześcienny"
                    type="main-article"
                />
                <form className="text-center">
                    <label className="flex pt-4 flex-col items-center">
                        Wprowadź liczbę naturalną pod pierwiastkiem:
                        <input
                            className={InputShortNumberStyle}
                            placeholder="0"
                            type="number"
                            {...register("rootNumber", numberRegisterOptions.cubeRootNumber)}
                            onChange={handleInputChange}
                        />
                    </label>
                    {errors.rootNumber ? (
                        <span className={ErrorMessage}>{errors.rootNumber.message}</span>
                    ) : (
                        <>
                            <ArticleBorder />
                            <div className="min-h-[180px] flex flex-col justify-center items-center">
                                {cubeRoot.getAllUniqueSteps().map((step, index) => (
                                    <Formula key={index} formula={step} />
                                ))}
                                {watchRootNumber !== "1" && (cubeRoot.getAllUniqueSteps().length < 3 && cubeRoot.getSign() !== "-") && <span>Nie da się wyciągnąć całkowitego czynnika z tego pierwiastka</span>}
                            </div>
                        </>
                    )}
                    <ArticleBorder />
                    <Explanation text={"Jak wyciągać czynnik przed pierwiastek sześcienny?"}>
                        <span>Wyciąganie czynnika przed pierwiastek sześcienny polega na rozłożeniu liczby pod pierwiastkiem na czynniki, wśród których są sześciany liczb. </span>
                        <br />
                        <Formula formula={"\\sqrt[3]{x^3 \\cdot y}=\\sqrt[3]{x^3} \\cdot \\sqrt[3]{y}=x\\sqrt[3]{y}"} />
                        <span>Następnie zgodnie z powyższą regułą można odseparować pierwiastki z sześcianów, a następnie obliczyć ich wartość.</span>
                        <br />
                        <span>Aby znaleźć wszystkie możliwe do uzyskania sześciany należy dokonać <NavLink to="../rozklad-na-czynniki-pierwsze"><b>rozkładu na czynniki pierwsze (faktoryzacji)</b></NavLink> liczby pod pierwiastkiem.</span>
                        <br />
                        <span>Ten kalkulator wykorzystuje faktoryzację, a następnie łączy identyczne czynniki w trójki w celu znalezienia sześcianów liczb.</span>
                    </Explanation>
                </form>
            </div>
        </>
    );
};

export default CubeRootCalculatorContent;
