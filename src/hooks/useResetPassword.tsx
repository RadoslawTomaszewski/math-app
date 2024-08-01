import { useState } from 'react';
import { auth } from '../config/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const usePasswordReset = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const resetPassword = async (email: string) => {
        setLoading(true);
        setErrorMessage(null);
        setSuccessMessage(null);

        try {
            await sendPasswordResetEmail(auth, email);
            setSuccessMessage("Wiadomość z resetowaniem hasła została wysłana na maila.");
        } catch (error) {
            console.error("Error sending password reset email:", error);
            setErrorMessage("Błąd podczas wysyłania emaila do resetowania hasła.");
        } finally {
            setLoading(false);
        }
    };

    return {
        resetPassword,
        loading,
        errorMessage,
        successMessage
    };
};

export default usePasswordReset;