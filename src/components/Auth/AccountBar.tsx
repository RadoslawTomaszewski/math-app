import React, { FC, useEffect, useState } from "react";
import { auth, db } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { LoginButton, LogoutButton } from "./styles";
import { classNames } from "../../utilities";
import { getDoc, doc } from "firebase/firestore";
import PageLoader from "../Loader/PageLoader";

const AccountBar: FC = () => {
    const [currentUserNick, setCurrentUserNick] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [nickIsNull, setNickIsNull] = useState<boolean>(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                try {
                    const userDocRef = doc(db, "Users", user.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        setCurrentUserNick(userDoc.data().nick);
                    } else {
                        setCurrentUserNick(user.email);
                        setNickIsNull(true);
                    }
                } catch (error) {
                    console.error("Error fetching user document:", error);
                }
            } else {
                setCurrentUserNick(null);
            }
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const logout = async () => {
        try {
            await signOut(auth);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex flex-col flex-wrap justify-center items-center w-full text-center p-2 bg-[#7dcbf9]">
            {loading ? <PageLoader /> : (
                <>
                    {!currentUserNick && <p>Jesteś niezalogowany</p>}
                    {currentUserNick && <p>Jesteś zalogowany jako <NavLink to="moje-konto" className="hover:underline"><b>{currentUserNick}</b></NavLink></p>}
                    {nickIsNull && <p className="text-[red]">Aby mieć dostęp do forum <NavLink to="moje-konto" className="hover:underline"><b>ustaw nick</b></NavLink></p>}
                    <NavLink to="/logowanie">
                        {!currentUserNick && (
                            <button className={classNames(LoginButton, "lg:hidden block")}>Logowanie</button>
                        )}
                    </NavLink>
                    {currentUserNick && (
                        <button onClick={logout} className={classNames(LogoutButton, "lg:hidden block")}>Wyloguj</button>
                    )}
                </>
            )}
        </div>
    );
};

export default AccountBar;
