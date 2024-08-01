import { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const usePremiumStatus = () => {
    const [isPremium, setIsPremium] = useState<boolean | null>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                try {
                    const userDocRef = doc(db, "Users", user.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        setIsPremium(userDoc.data().isPremium);
                    } else {
                        setIsPremium(false);
                    }
                } catch (error) {
                    console.error("Error fetching user document:", error);
                    setIsPremium(false);
                }
            } else {
                setIsPremium(null);
            }
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    return { isPremium, loading };
};

export default usePremiumStatus;
