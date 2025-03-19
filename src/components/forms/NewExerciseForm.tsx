import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../config/firebase';
import { addDoc, collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { ErrorMessageStyle } from '../../components/Auth/styles';
import { classNames } from '../../utilities';
import useUserData from '../../hooks/useUserData';
import Formula from '../Formula/Formula';
import { BlueButtonStyle } from '../../styles/styles';
import NavigateTo from '../NavigateTo/NavigateTo';

const NewExerciseForm: FC = () => {
    const [postCredentials, setPostCredentials] = useState({
        year: '',
        content: '',
        latexContent: '',
        category: 'Inne',
        level: '',
        type: '',
        points: '1',
        month: 'Maj',
        no: '1',
        isabcd: false,
        options: ['', '', '', ''],
    });

    const parseTexExpressions = (text: string) => {
        const texRegex = /\\start(.*?)\\end/g;// Regex znajdzie wszystkie wyrażenia w stylu \\start ... \\end }
        const parts: React.ReactNode[] = [];
        let lastIndex = 0;
    
        let match;
        while ((match = texRegex.exec(text)) !== null) {
            const [fullMatch, formulaContent] = match;
            const matchStart = match.index;
    
            // Dodaj zwykły tekst przed znalezionym dopasowaniem
            if (lastIndex < matchStart) {
                parts.push(text.substring(lastIndex, matchStart));
            }
    
            parts.push(<Formula key={matchStart} formula={formulaContent} />);
    
            lastIndex = texRegex.lastIndex;
        }
    
        // Dodaj pozostały tekst po ostatnim dopasowaniu
        if (lastIndex < text.length) {
            parts.push(text.substring(lastIndex));
        }
    
        return parts;
    };

    const { userData } = useUserData();
    const [error, setError] = useState<string | null>(null);
    const exercisesCollectionRef = collection(db, 'Exercises');
    const navigate = useNavigate();

    const generateUniqueId = async () => {
        try {
            const q = query(exercisesCollectionRef, orderBy('postNumber', 'desc'), limit(1));
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

    const onSubmitExercise = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!postCredentials.year || !postCredentials.content) {
            setError('Wypełnij wszystkie wymagane');
            return;
        }

        try {
            setError(null);
            const uniqueId = await generateUniqueId();

            if (uniqueId === null) {
                setError('Wystąpił błąd podczas generowania ID. Spróbuj ponownie.');
                return;
            }

            await addDoc(exercisesCollectionRef, {
                postNumber: uniqueId,
                ...postCredentials,
                author: userData?.nick,
                createdAt: new Date(),
            });
            setPostCredentials({
                year: '',
                content: '',
                latexContent: '',
                category: 'Inne',
                level: '',
                type: '',
                points: '',
                month: '',
                no: '',
                isabcd: true,
                options: ['', '', '', ''],
            });
            navigate('../');
        } catch (err) {
            setError('Wystąpił błąd podczas dodawania tematu. Spróbuj ponownie.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name.startsWith('option')) {
            const index = parseInt(name.replace('option', ''));
            const updatedOptions = [...postCredentials.options];
            updatedOptions[index] = value;
            setPostCredentials({ ...postCredentials, options: updatedOptions });
        } else {
            setPostCredentials({ ...postCredentials, [name]: value });
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostCredentials({ ...postCredentials, isabcd: e.target.checked });
    };

    const calculateMinWidth = (latexContent: string) => {
        if (!latexContent) return '0px';
        const length = latexContent.length;
        return `${length * 10}px`;
    };

    return (
        <div className="w-full p-4">
            <form onSubmit={onSubmitExercise}>
                <p>Dodajesz nowe zadanie jako <b>{userData?.nick || 'nieznany użytkownik'}</b></p><br />
                <div className='flex flex-row justify-start md:gap-5 items-center flex-wrap'>
                    <span className='w-[100px]'><b>Kategoria: </b></span>
                    <select
                        name="category"
                        value={postCredentials.category}
                        onChange={handleChange}
                        className="w-[500px] max-w-full border border-gray-400 rounded-md p-2 mb-2"
                    >
                        <option value="Liczby rzeczywiste">Liczby rzeczywiste</option>
                        <option value="Wyrażenia algebraiczne">Wyrażenia Algebraiczne</option>
                        <option value="Równania i nierówności">Równania i nierówności</option>
                        <option value="Układy równań">Układy równań</option>
                        <option value="Funkcje">Funkcje</option>
                        <option value="Ciągi">Ciągi</option>
                        <option value="Trygonometria">Trygonometria</option>
                        <option value="Planimetria">Planimetria</option>
                        <option value="Geometria analityczna">Geometria analityczna</option>
                        <option value="Stereometria">Stereometria</option>
                        <option value="Kombinatoryka">Kombinatoryka</option>
                        <option value="Rachunek prawdopodobieństwa i statystyka">Rachunek prawdopodobieństwa i statystyka</option>
                        <option value="Optymalizacja i rachunek różniczkowy">Optymalizacja i rachunek różniczkowy</option>
                        <option value="Inne">Inne</option>
                    </select>
                </div>
                <div className='flex flex-row justify-start md:gap-5 items-center flex-wrap'>
                    <span className='w-[100px]'><b>Rok: </b></span>
                      <select
                        name="month"
                        value={postCredentials.month}
                        onChange={handleChange}
                        className="w-[500px] max-w-full border border-gray-400 rounded-md p-2 mb-2"
                    >
                        <option value="Styczeń">Styczeń</option>
                        <option value="Luty">Luty</option>
                        <option value="Marzec">Marzec</option>
                        <option value="Kwiecień">Kwiecień</option>
                        <option value="Maj">Maj</option>
                        <option value="Czerwiec">Czerwiec</option>
                        <option value="Lipiec">Lipiec</option>
                        <option value="Sierpień">Sierpień</option>
                        <option value="Wrzesień">Wrzesień</option>
                        <option value="Październik">Październik</option>
                        <option value="Listopad">Listopad</option>
                        <option value="Grudzień">Grudzień</option>
                    </select>
                </div>
                <div className='flex flex-row justify-start md:gap-5 items-center flex-wrap'>
                    <span className='w-[100px]'><b>Rok: </b></span>
                      <select
                        name="year"
                        value={postCredentials.year}
                        onChange={handleChange}
                        className="w-[500px] max-w-full border border-gray-400 rounded-md p-2 mb-2"
                    >
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2022</option>
                        <option value="2020">2020</option>
                        <option value="Inny">Inny</option>
                    </select>
                </div>
                <div className='flex flex-row justify-start md:gap-5 items-center flex-wrap'>
                    <span className='w-[100px]'><b>Poziom: </b></span>
                      <select
                        name="level"
                        value={postCredentials.level}
                        onChange={handleChange}
                        className="w-[500px] max-w-full border border-gray-400 rounded-md p-2 mb-2"
                    >
                        <option value="podstawowy">podstawowy</option>
                        <option value="rozszerzony">rozszerzony</option>
                    </select>
                </div>
                <div className='flex flex-row justify-start md:gap-5 items-center flex-wrap'>
                    <span className='w-[100px]'><b>Typ: </b></span>
                      <select
                        name="type"
                        value={postCredentials.type}
                        onChange={handleChange}
                        className="w-[500px] max-w-full border border-gray-400 rounded-md p-2 mb-2"
                    >
                        <option value="Główny termin">główny termin</option>
                        <option value="Drugi termin">drugi termin</option>
                        <option value="Termin poprawkowy">termin poprawkowy</option>
                        <option value="Test diagnostyczny">test diagnostyczny</option>
                    </select>
                </div>
                <div className='flex flex-row justify-start md:gap-5 items-center flex-wrap'>
                    <span className='w-[100px]'><b>Zadanie nr.: </b></span>
                      <input
                        name="no"
                        type='number'
                        value={postCredentials.no}
                        onChange={handleChange}
                        className="w-[500px] max-w-full border border-gray-400 rounded-md p-2 mb-2"
                    />
                </div>
                <div className='flex flex-row justify-start md:gap-5 items-center flex-wrap'>
                    <span className='w-[100px]'><b>Punkty: </b></span>
                      <input
                        name="points"
                        type='number'
                        value={postCredentials.points}
                        onChange={handleChange}
                        className="w-[500px] max-w-full border border-gray-400 rounded-md p-2 mb-2"
                    />
                </div>
                <div className='flex flex-row justify-start md:gap-5 items-center flex-wrap'>
                    <span className='w-[100px]'><b>Zadanie zamknięte: </b></span>
                    <input
                        type="checkbox"
                        checked={postCredentials.isabcd}
                        onChange={handleCheckboxChange}
                        className="mb-2"
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
                {postCredentials.isabcd && (
                    <div className="mb-4">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="mb-2">
                                <label htmlFor={`option${index}`}><b>{String.fromCharCode(65 + index)}:</b></label>
                                <input
                                    type="text"
                                    name={`option${index}`}
                                    value={postCredentials.options[index]}
                                    onChange={handleChange}
                                    className="w-full border border-gray-400 rounded-md p-2"
                                />
                            </div>
                        ))}
                    </div>
                )}
                <p>Jeśli nie znasz dobrze LaTeX zerknij tutaj: <NavigateTo to="https://pl.wikibooks.org/wiki/LaTeX/Matematyka" target='_blank'>ściąga LaTex</NavigateTo></p>
                <span className='w-[100px]'><b>Podgląd z LaTex: </b></span>
            <div className="preview mt-4 p-4 border border-gray-200 rounded-md bg-gray-50">
                {parseTexExpressions(postCredentials.content)}
            </div>
                <div className='w-full flex justify-center'>
                    <button className={BlueButtonStyle} type='submit'>
                        Dodaj zadanie
                    </button>
                </div>
                {error && <><p className={classNames(ErrorMessageStyle, "mt-2")}>{error}</p></>}
            </form>
        </div>
    );
};

export default NewExerciseForm;
