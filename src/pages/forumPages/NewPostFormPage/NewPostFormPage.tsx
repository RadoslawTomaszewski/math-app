import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../../config/firebase';
import { addDoc, collection, doc, getDoc, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { ErrorMessageStyle } from '../../../components/Auth/styles';
import { classNames } from '../../../utilities';

const NewPostForm: FC = () => {
    const [postCredentials, setPostCredentials] = useState({
        title: '',
        content: '',
        category: 'Inne'
    });
    const [currentUserNick, setCurrentUserNick] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const topicsCollectionRef = collection(db, 'Topics');
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                try {
                    const userDocRef = doc(db, 'Users', user.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        setCurrentUserNick(userDoc.data().nick);
                    } else {
                        setCurrentUserNick(user.email);
                    }
                } catch (error) {
                    console.error('Wystąpił błąd podczas pobierania danych użytkownika', error);
                }
            } else {
                setCurrentUserNick(null);
            }
        });
        return unsubscribe;
    }, []);

    const generateUniqueId = async () => {
        try {
            const q = query(topicsCollectionRef, orderBy('postNumber', 'desc'), limit(1));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const lastDoc = querySnapshot.docs[0];
                const lastId = lastDoc.data().postNumber;
                return Number(lastId) + 1;
            } else {
                return 1;
            }
        } catch (error) {
            console.error('Wystąpił błąd podczas generowania ID', error);
            return null;
        }
    };

    const onSubmitTopic = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!postCredentials.title || !postCredentials.content) {
            setError('Wszystkie pola są wymagane.');
            return;
        }

        try {
            setError(null);
            const uniqueId = await generateUniqueId();

            if (uniqueId === null) {
                setError('Wystąpił błąd podczas generowania ID. Spróbuj ponownie.');
                return;
            }

            await addDoc(topicsCollectionRef, {
                postNumber: uniqueId,
                ...postCredentials,
                author: currentUserNick,
                createdAt: new Date(),
            });
            setPostCredentials({
                title: '',
                content: '',
                category: 'Inne'
            });
            navigate('../');
        } catch (err) {
            setError('Wystąpił błąd podczas dodawania tematu. Spróbuj ponownie.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setPostCredentials({
            ...postCredentials,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="w-full p-4">
            <form onSubmit={onSubmitTopic}>
                <p>Tworzysz nowy wątek jako <b>{currentUserNick || 'nieznany użytkownik'}</b></p><br />
                <div className='flex flex-row justify-start md:gap-5 items-center flex-wrap'>
                    <span className='w-[100px]'><b>Kategoria: </b></span>
                    <select
                        name="category"
                        value={postCredentials.category}
                        onChange={handleChange}
                        className="w-[500px] max-w-full border border-gray-400 rounded-md p-2 mb-2"
                    >
                        <option value="Analiza Matematyczna">Analiza Matematyczna</option>
                        <option value="Arytmetyka">Arytmetyka</option>
                        <option value="Ciągi">Ciągi</option>
                        <option value="Czworokąty">Czworokąty</option>
                        <option value="Funkcje">Funkcje</option>
                        <option value="Geometria">Geometria</option>
                        <option value="Koła i Okręgi">Koła i Okręgi</option>
                        <option value="Matematyka Dyskretna">Matematyka Dyskretna</option>
                        <option value="Statystyka">Statystyka</option>
                        <option value="Stałe Matematyczne">Stałe Matematyczne</option>
                        <option value="Symbole Matematyczne">Symbole Matematyczne</option>
                        <option value="Trójkąty">Trójkąty</option>
                        <option value="Wyrażenia Algebraiczne">Wyrażenia Algebraiczne</option>
                        <option value="Zbiory">Zbiory</option>
                        <option value="Inne">Inne</option>
                    </select>
                </div>
                <div className='flex flex-row justify-start md:gap-5 items-center flex-wrap'>
                    <span className='w-[100px]'><b>Tytuł wątku: </b></span>
                    <input
                        name="title"
                        value={postCredentials.title}
                        onChange={handleChange}
                        type="text"
                        className="w-[900px] max-w-full border border-gray-400 rounded-md p-2 mb-2"
                    />
                </div>
                <span className='w-[100px]'><b>Treść: </b></span>
                <textarea
                    name="content"
                    value={postCredentials.content}
                    onChange={handleChange}
                    placeholder="Treść wątku"
                    className="w-full border border-gray-400 rounded-md p-2 mb-2 min-h-[400px] md:min-h-[200px]"
                ></textarea>
                <button
                    className="bg-blue-500 text-white w-full px-4 py-2 rounded-md hover:bg-blue-600"
                    type='submit'
                >
                    Dodaj temat
                </button>
                {error && <><p className={classNames(ErrorMessageStyle, "mt-2")}>{error}</p></>}
            </form>
        </div>
    );
};

export default NewPostForm;
