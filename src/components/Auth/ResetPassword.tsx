import React, { useState } from 'react';
import Title from "../Title/Title";
import { BlueButtonStyle } from "../../styles/styles";
import { classNames } from "../../utilities";
import majzaLogo from "../../assets/images/majza.eu_logo.png";
import ImageComponent from "../imageComponents/ImageComponent";
import ArticleBorder from "../ArticleBorder/ArticleBorder";
import { LoginFormInputs } from "./styles";
import usePasswordReset from '../../hooks/useResetPassword';

export const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const { resetPassword, loading, errorMessage, successMessage } = usePasswordReset();

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordReset = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (email) {
            await resetPassword(email);
        }
    };

    return (
        <div className="p-5 min-w-full flex justify-center items-center">
            <div className="grid m-1 md:grid-cols p-2 border-borderColor border-2 rounded max-h-fit md:w-[450px] bg-articleColor">
                <div className="col-span-2">
                    <Title text={"Odzyskiwanie hasła"} type={"main-article"} />
                    <form>
                        <p>Wprowadź adres e-mail dla konta, którego chcesz zrestartować hasło</p>
                        <input
                            placeholder="np. euler.leonhard@majza.eu"
                            onChange={handleEmail}
                            name="email"
                            className={LoginFormInputs}
                            type="email"
                        />
                        <button
                            onClick={handlePasswordReset}
                            className={classNames(BlueButtonStyle, "w-full mb-3")}
                            disabled={loading}
                        >
                            {loading ? 'Trwa resetowanie...' : 'Resetuj hasło'}
                        </button>
                        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                        {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
                    </form>
                    <ArticleBorder />
                    <ImageComponent src={majzaLogo} alt={"logo majza.eu"} styles="max-h-[50px] my-2" />
                </div>
            </div>
        </div>
    );
};
