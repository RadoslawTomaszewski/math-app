import { auth, googleProvider } from "../../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { NavLink, useNavigate } from "react-router-dom"
import Title from "../Title/Title"
import { BlueButtonStyle } from "../../styles/styles"
import { classNames } from "../../utilities"
import majzaLogo from "../../assets/images/majza.eu_logo.png";
import { useState } from "react";
import GoogleIcon from "../../assets/icons/google.svg"
import ImageComponent from "../imageComponents/ImageComponent";
import ArticleBorder from "../ArticleBorder/ArticleBorder";
import { LoginFormInputs } from "./styles";
import NavigateTo from "../NavigateTo/NavigateTo";

interface IUserCredentials {
    email: string;
    password: string;
}

export const LogIn = () => {

    const [userCredentials, setUserCredentials] = useState<IUserCredentials>({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleCredentials = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError("");
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    }

    const handleSignIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user && !user.emailVerified) {
                    setError("Twój adres e-mail nie został zweryfikowany. Sprawdź skrzynkę pocztową.");
                } else {
                    navigate('/..');
                }
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate('/');
        }
        catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="p-5 min-w-full flex justify-center items-center">
            <div className="grid m-1 md:grid-cols p-2 border-borderColor border-2 rounded max-h-fit md:w-[450px] bg-articleColor">
                <div className="col-span-2">
                    <Title text={"Logowanie"} type={"main-article"} />

                    <button onClick={signInWithGoogle} className="w-full flex items-center justify-center rounded-md border border-[#4285f4] p-2 my-5 bg-[#ffffff3d] hover:bg-[#fff]  focus:outline-none">
                        <b>zaloguj za pomocą</b>
                        <img src={GoogleIcon} className="mx-2" alt="logo google" width="25" height="25" />
                    </button>

                    <p className="w-full text-center"><b>lub</b></p>

                    <p><b>e-mail:</b></p>
                    <input onChange={(e) => { handleCredentials(e) }} name="email" className={LoginFormInputs} placeholder="np. euler.leonhard@majza.eu" type="mail" />
                    <p><b>hasło:</b></p>
                    <input placeholder="np. !M@jza.eu07" type="password" onChange={(e) => { handleCredentials(e) }} name="password" className={LoginFormInputs} />
                    <button onClick={(e) => { handleSignIn(e) }} className={classNames(BlueButtonStyle, "w-full mb-3")}>Zaloguj się</button>
                    {error && <p className="text-[red] text-center">{error}</p>}
                    <div className="text-center m-5"><NavigateTo to="../odzyskiwanie-hasla">Nie pamiętam hasła</NavigateTo></div>
                    <div className="text-center m-5">Nie masz jeszcze konta?<NavLink to="../rejestracja" className="hover:underline"><p><b> Zarejestruj się</b></p></NavLink></div>
                    <ArticleBorder />
                    <ImageComponent src={majzaLogo} alt={"logo majza.eu"} styles="max-h-[50px] my-2" />
                </div>

            </div>
        </div>
    )
}