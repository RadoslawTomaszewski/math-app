import React, { FC, useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { LoginButton, LogoutButton } from "./styles";
import { classNames } from "../../utilities";

const AccountBar: FC = () => {
    const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(String(null));

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUserEmail(user.email);
            } else {
                setCurrentUserEmail(null);
            }
        });
        return unsubscribe;
    }, []);

    const logout = async () => {
        try {
            await signOut(auth);
            window.location.reload();
        }
        catch (err) {
            console.log(err);
        }
    }


    return (
        <>
            <div className="flex flex-col flex-wrap justify-center items-center w-full text-center p-2 bg-[#7dcbf9]">
                {!currentUserEmail && <p>Jesteś niezalogowany</p>}
                {currentUserEmail && <p>Jesteś zalogowany jako <b>{currentUserEmail}</b></p>}

                <NavLink to="/logowanie">
                    {!currentUserEmail && <button className={classNames(LoginButton, "lg:hidden block")}>Logowanie</button>}
                </NavLink>
                {currentUserEmail && <button onClick={logout} className={classNames(LogoutButton, "lg:hidden block")}>Wyloguj</button>}
            </div>
        </>
    );
};

export default AccountBar;