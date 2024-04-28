import React, { FC, useEffect, useState } from "react";
import { auth } from "../../config/firebase";

const AccountBar: FC = () => {
    const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(String(auth.currentUser?.email));

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

    return (
        <div className="w-full text-center p-2 bg-[#7dcbf9]">
            {currentUserEmail && <p>Jesteś zalogowany jako {currentUserEmail}</p>}
            {!currentUserEmail && <p>Jesteś niezalogowany</p>}
        </div>
    );
};

export default AccountBar;