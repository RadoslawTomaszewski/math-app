import React, { FC, useState } from 'react';
import { LoginFormInputs } from "../../components/Auth/styles";
import { BlueButtonStyle } from "../../styles/styles";
import { classNames } from "../../utilities";

interface SetNickFormProps {
    onSubmit: (newNick: string) => void;
    errorMessage: string | null;
    successMessage: string | null;
}

const SetNickForm: FC<SetNickFormProps> = ({ onSubmit, errorMessage, successMessage }) => {
    const [newNick, setNewNick] = useState<string>("");

    const handleSubmit = () => {
        onSubmit(newNick.trim());
    };

    return (
        <div className="flex flex-col justify-center">
            <p>Twoje konto nie jest jeszcze w pełni aktywne. Aby to zmienić podaj swój <b>nick</b>, który będzie widoczny dla innych użytkowników forum.</p>
            <input
                placeholder="np. euler1707"
                className={LoginFormInputs}
                onChange={(e) => setNewNick(e.target.value)}
                name="nick"
                type="text"
                required
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
            <button onClick={handleSubmit} className={classNames(BlueButtonStyle, "w-full mb-3")}>Zapisz nick</button>
        </div>
    );
};

export default SetNickForm;
