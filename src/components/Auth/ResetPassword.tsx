import { auth, googleProvider } from "../../config/firebase";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom"
import Title from "../articleItems/Title"
import { BlueButtonStyle } from "../../utilities/styles"
import { classNames } from "../../utilities"
import majzaLogo from "../../assets/images/majza.eu_logo.png";
import { useState } from "react";
import ImageComponent from "../articleItems/ImageComponent";
import ArticleBorder from "../articleItems/ArticleBorder";

export const ResetPassword = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    console.log(auth.currentUser?.email);

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError("");
        setEmail(e.target.value);
    }

    const handlePasswordReset = () => {
        if (email) {
            sendPasswordResetEmail(auth, email);
            alert('Mail został wysłanym sprawdź skrzynkę odbiorczą')
        }
    }

    return (
        <div className="p-5 min-w-full flex justify-center items-center">
            <div className="grid m-1 md:grid-cols p-2 border-borderColor border-2 rounded max-h-fit md:w-[450px] bg-articleColor">
                <div className="col-span-2">
                    <Title text={"Odzyskiwanie hasła"} type={"main-article"} />
                    <form>
                        <p>Wprowadź adres e-mail dla konta, którego chcesz zrestartować hasło</p>
                        <p><b>*e-mail:</b></p>
                        <input placeholder="np. euler.leonhard@majza.eu" onChange={(e) => { handleEmail(e) }} name="email" className="rounded border-2 border-black px-3 py-2 mb-2 w-full" type="email" />
                        <button onClick={handlePasswordReset} className={classNames(BlueButtonStyle, "w-full mb-3")}>Resetuj hasło</button>
                        <p className="text-sm">* pola wymagane</p>
                        {error && <p className="text-[red] text-center">{error}</p>}
                    </form>
                    <ArticleBorder />
                    <ImageComponent src={majzaLogo} alt={"logo majza.eu"} styles="max-h-[50px] my-2" />
                </div>
            </div>
        </div>
    )
}