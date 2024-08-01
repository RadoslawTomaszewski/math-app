import { useEffect, useState } from "react";
import { auth } from "../config/firebase";

const useAuthStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return { isLoggedIn };
};

export default useAuthStatus;
