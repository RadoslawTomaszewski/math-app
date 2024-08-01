import { useEffect, useState, useMemo } from "react";
import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

interface User {
    createdAt: Date;
    email: string;
    isAdmin: boolean;
    isGoogleAccount: boolean;
    isPremium: boolean;
    nick: string;
}

const useUserData = () => {
    const [userData, setUserData] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                try {
                    const userDocRef = doc(db, "Users", user.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        const data = userDoc.data();
                        setUserData({
                            createdAt: data.createdAt.toDate(),
                            email: data.email,
                            isAdmin: data.isAdmin,
                            isGoogleAccount: data.isGoogleAccount,
                            isPremium: data.isPremium,
                            nick: data.nick,
                        });
                    } else {
                        setUserData(null);
                    }
                } catch (error) {
                    console.error("Error fetching user document:", error);
                    setUserData(null);
                }
            } else {
                setUserData(null);
            }
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const memoizedUserData = useMemo(() => userData, [userData]);

    return { userData: memoizedUserData, loading };
};

export default useUserData;
