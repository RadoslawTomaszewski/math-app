import { auth, db, googleProvider } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, sendEmailVerification } from 'firebase/auth';
import { useNavigate } from "react-router-dom"
import Title from "../Title/Title"
import { BlueButtonStyle } from "../../styles/styles"
import { classNames } from "../../utilities"
import majzaLogo from "../../assets/images/majza.eu_logo.png";
import { useMemo, useState } from "react";
import GoogleIcon from "../../assets/icons/google.svg"
import ImageComponent from "../imageComponents/ImageComponent";
import ArticleBorder from "../ArticleBorder/ArticleBorder";
import { LoginFormInputs } from "./styles";
import { collection, setDoc, doc, query, where, getDocs } from "firebase/firestore";

interface IUserCredentials {
    email: string;
    password: string;
    nick: string;
}

export const Register = () => {

    const [userCredentials, setUserCredentials] = useState<IUserCredentials>({ email: '', password: '', nick: '' });
    const [repeatPassword, setRepeatPassword] = useState('');
    const [verificationSent, setVerificationSent] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const usersCollectionRef = useMemo(() => collection(db, "Users"), []);

    const handleCredentials = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError("");
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    }

    const checkNickAvailability = async (nick: string) => {
        const q = query(usersCollectionRef, where("nick", "==", nick));
        const querySnapshot = await getDocs(q);
        return querySnapshot.empty;
    }


    const handleSignUp = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!userCredentials.email.trim() || !userCredentials.password.trim() || !userCredentials.nick.trim()) {
            setError("Wszystkie pola muszą być wypełnione");
            return;
        }

        if (userCredentials.password !== repeatPassword) {
            setError("Wprowadzone hasła nie są identyczne");
            return;
        }
        e.preventDefault();
        try {
            const isNickAvailable = await checkNickAvailability(userCredentials.nick);
            if (!isNickAvailable) {
                setError("Podany nick jest już zajęty.");
                return;
            }
            await createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password);
            const user = auth.currentUser;
            if (user) {
                await setDoc(doc(usersCollectionRef, user.uid), {
                    nick: userCredentials.nick,
                    email: userCredentials.email,
                    createdAt: new Date(),
                    isPremium: false,
                    isAdmin: false,
                    isGoogleAccount: false,
                });

                try {
                    await sendEmailVerification(user);
                    setVerificationSent(true);
                }
                catch (verificationError) {
                    if (verificationError instanceof Error) {
                        setError(verificationError.message);
                    } else {
                        setError("Wystąpił błąd podczas wysyłania emaila weryfikacyjnego.");
                    }
                }

                try {
                    await auth.signOut();
                } catch (signOutError) {
                    if (signOutError instanceof Error) {
                        setError(signOutError.message);
                    } else {
                        setError("Wystąpił błąd podczas wylogowywania.");
                    }
                }
            }
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("Wystąpił nieznany błąd.");
            }
        }
    }

    const handleRepeatPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(e.target.value);
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("../");
        }
        catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="p-5 min-w-full flex justify-center items-center">
            <div className="grid m-1 md:grid-cols p-2 border-borderColor border-2 rounded max-h-fit md:w-[450px] bg-articleColor">
                <div className="col-span-2">
                    <Title text={"Rejestracja"} type={"main-article"} />
                    <button onClick={signInWithGoogle} className="w-full flex items-center justify-center rounded-md border border-[#4285f4] p-2 my-5 bg-[#ffffff3d] hover:bg-[#fff]  focus:outline-none">
                        <b>rejestracja za pomocą</b>
                        <img src={GoogleIcon} className="mx-2" alt="logo google" width="25" height="25" />
                    </button>
                    <form>
                        <p className="text-sm m-2">Po zarejestrowaniu konta za pomocą konta google będziesz mógł ustawić nick w <b>moje konto</b></p>
                        <p className="w-full text-center"><b>lub</b></p>
                        <p><b>nick</b> (widoczny dla innych użytkowników forum)</p>
                        <input placeholder="np. euler1707" className={LoginFormInputs} onChange={(e) => { handleCredentials(e) }} name="nick" type="text" required />
                        <p><b>e-mail:</b></p>
                        <input placeholder="np. euler.leonhard@majza.eu" onChange={(e) => { handleCredentials(e) }} name="email" className={LoginFormInputs} type="mail" required />
                        <p><b>hasło:</b></p>
                        <input placeholder="np. !M@jza.eu07" type="password" onChange={(e) => { handleCredentials(e) }} name="password" className={LoginFormInputs} required />
                        <p><b>potwierdź hasło:</b></p>
                        <input placeholder="Powtórz hasło" type="password" className={LoginFormInputs} onChange={(e) => { handleRepeatPassword(e) }} name="repeatPassword" required />
                        <button onClick={(e) => { handleSignUp(e) }} className={classNames(BlueButtonStyle, "w-full mb-3")}>Stwórz konto</button>
                        {error && <p className="text-[red] text-center">{error}</p>}
                        {verificationSent && <p className="text-center">Link weryfikacyjny został wysłany na wskazany adres email.</p>}
                    </form>
                    <ArticleBorder />
                    <ImageComponent src={majzaLogo} alt={"logo majza.eu"} styles="max-h-[50px] my-2" />
                </div>
            </div>
        </div>
    )
}