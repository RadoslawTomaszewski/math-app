import { FC, useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import useUserData from '../../hooks/useUserData';
import BrandPremium from "../../assets/images/majza.eu_logo_premium.png";
import GraphImage from '../imageComponents/GraphImage';
import Formula from '../Formula/Formula';
import { BlueButtonStyle } from '../../styles/styles';
import { auth, db } from '../../config/firebase';
import PageLoader from '../Loader/PageLoader';

const NewPostForm: FC = () => {
    const { userData, loading } = useUserData();
    const [answer, setAnswer] = useState<string>('');
    const [message, setMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isSubmitting) return;
        setIsSubmitting(true);

        if (answer.toLowerCase() === 'szesnaście' || answer.toLowerCase() === 'szesnascie') {
            try {
                const user = auth.currentUser;
                if (user) {
                    const userDocRef = doc(db, "Users", user.uid);
                    await updateDoc(userDocRef, { isPremium: true });
                    setMessage("Gratulacje! Konto premium zostało aktywowane.");
                } else {
                    setMessage("Wystąpił błąd. Spróbuj ponownie.");
                }
            } catch (error) {
                console.error("Error updating user document:", error);
                setMessage("Błąd podczas aktywacji konta premium.");
            }
        } else {
            setMessage("Odpowiedź niepoprawna, spróbuj ponownie :)");
        }

        setIsSubmitting(false);
    };

    if (loading) {
        return <PageLoader />;
    }

    return (
        <div className="w-full p-4">
            <form onSubmit={handleSubmit}>
                {userData?.isPremium ? (
                    <p className='text-center'>Masz aktywne konto majza.eu premium.</p>
                ) : (
                    <>
                        <p>Aktualnie konto premium jest darmowe. Wystarczy, że rozwiążesz poprawnie poniższą zagadkę i zapiszesz wynik słownie.</p><br />
                        <Formula formula={'8 : 2 \\left(2+2)\\right)='} />
                        <div className='flex flex-col justify-center items-center flex-wrap'>
                            <input
                                name="answer"
                                type="text"
                                placeholder='odpowiedź'
                                className="w-[200px] max-w-full border border-gray-400 rounded-md p-2 mb-2"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                            />
                            <button
                                className={BlueButtonStyle}
                                type='submit'
                                disabled={isSubmitting}
                            >
                                Sprawdź odpowiedź
                            </button>
                        </div>
                        <br />
                        {message && <p className="text-center">{message}</p>}
                    </>
                )}
                <br /><br /><GraphImage size={"logo"} src={BrandPremium} alt={"Logo majza.eu premium"} /><br />
            </form>
        </div>
    );
};

export default NewPostForm;
