import React, { FC, useEffect, useState } from "react";
import { auth, db } from "../../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { getDoc, doc, setDoc, Timestamp, query, collection, where, getDocs } from "firebase/firestore";
import Title from "../../components/articleItems/Title";
import { classNames } from "../../utilities";
import { BlueButtonStyle } from "../../utilities/styles";
import { LoginFormInputs } from "../../components/Auth/styles";
import PageLoader from "../../components/Loader/PageLoader";
import CountUserPosts from "../../components/counters/CountUserPosts";

interface User {
    nick: string;
    email: string;
    createdAt: Date;
    posts: number;
    comments: number;
    isPremium: boolean;
    isAdmin: boolean;
    isGoogleAccount: boolean;
}

const AccountPage: FC = () => {
    const [userInfo, setUserInfo] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [newNick, setNewNick] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const user = auth.currentUser;
            if (user) {
                try {
                    const userDocRef = doc(db, "Users", user.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        const data = userDoc.data() as User;
                        const createdAt = data.createdAt instanceof Timestamp ? data.createdAt.toDate() : data.createdAt;
                        setUserInfo({
                            ...data,
                            createdAt,
                        });
                    } else {
                        setUserInfo({
                            nick: "",
                            email: user.email || "",
                            createdAt: new Date(),
                            posts: 0,
                            comments: 0,
                            isPremium: false,
                            isAdmin: false,
                            isGoogleAccount: true,
                        });
                    }
                } catch (error) {
                    console.error("Error fetching user document:", error);
                }
            }
            setLoading(false);
        };

        fetchUserInfo();
    }, []);

    const handlePasswordReset = async () => {
        const user = auth.currentUser;
        if (user && user.email) {
            try {
                await sendPasswordResetEmail(auth, user.email);
                setSuccessMessage("Wiadomość z resetowaniem hasła została wysłana na maila.");
                setErrorMessage(null);
            } catch (error) {
                console.error("Error sending password reset email:", error);
                setErrorMessage("Błąd podczas wysyłania emaila do resetowania hasła.");
                setSuccessMessage(null);
            }
        }
    };

    const handleNickSubmit = async () => {
        const user = auth.currentUser;
        if (user && newNick.trim()) {
            try {
                const usersCollectionRef = collection(db, "Users");
                const q = query(usersCollectionRef, where("nick", "==", newNick.trim()));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    setErrorMessage("Ten nick jest już zajęty.");
                    setSuccessMessage(null);
                    return;
                }

                const userDocRef = doc(db, "Users", user.uid);
                await setDoc(userDocRef, {
                    nick: newNick.trim(),
                    email: user.email,
                    createdAt: new Date(),
                    posts: 0,
                    comments: 0,
                    isPremium: false,
                    isAdmin: false,
                    isGoogleAccount: true,
                });

                setUserInfo({
                    nick: newNick.trim(),
                    email: user.email || "",
                    createdAt: new Date(),
                    posts: 0,
                    comments: 0,
                    isPremium: false,
                    isAdmin: false,
                    isGoogleAccount: true,
                });
                setSuccessMessage("Nick został zaktualizowany.");
                setErrorMessage(null);
                window.location.reload();
            } catch (error) {
                console.error("Error updating nick:", error);
                setErrorMessage("Błąd podczas zapisywania nicku.");
                setSuccessMessage(null);
            }
        } else {
            setErrorMessage("Nick nie może być pusty.");
            setSuccessMessage(null);
        }
    };

    if (loading) {
        return <PageLoader />;
    }

    return (
        <div className="p-5 min-w-full flex justify-center items-center">
            <div className="grid m-1 md:grid-cols p-2 border-borderColor border-2 rounded max-h-fit md:max-w-[600px] bg-articleColor">
                <div className="col-span-2">
                    <Title text={"Moje Konto"} type="main-article" />
                    {userInfo && userInfo.nick ? (
                        <>
                            <div className="grid md:grid-cols-2 md:text-start md:m-4 gap-2 text-center grid-cols-1">
                                <span><b>Nick:</b></span>
                                <span>{userInfo.nick}</span>
                                <span><b>e-mail:</b></span>
                                <span>{userInfo.email}</span>
                                <span><b>Data dołączenia do forum:</b></span>
                                <span>{new Date(userInfo.createdAt).toLocaleDateString()}</span>
                                <span><b>Ilość postów:</b></span>
                                <span> <CountUserPosts nick={userInfo.nick} /></span>
                                <span><b>Ilość komentarzy:</b></span>
                                <span> {userInfo.comments}</span>
                                <span><b>Sposób logowania:</b></span>
                                <span>{userInfo.isGoogleAccount ? "Google" : "e-mail + hasło"}</span>
                                <span><b>Konto Premium:</b></span>
                                <span>{userInfo.isPremium ? "Tak" : "Nie"}</span>
                            </div>
                            {userInfo.isGoogleAccount ? <span></span> : <button onClick={handlePasswordReset} className={classNames(BlueButtonStyle, "w-full mb-3")}>Zresetuj hasło</button>}
                            {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
                        </>
                    ) : (
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
                            <button onClick={handleNickSubmit} className={classNames(BlueButtonStyle, "w-full mb-3")}>Zapisz nick</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
