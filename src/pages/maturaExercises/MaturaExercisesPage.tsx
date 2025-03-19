import { useEffect, useState, useMemo } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import { BlueButtonStyle } from "../../styles/styles";
import { classNames } from "../../utilities";
import useUserData from "../../hooks/useUserData";
import { Button } from "@mui/material";
import Formula from "../../components/Formula/Formula";

export default function MaturaExercisesPage() {
    const { userData } = useUserData();
    const [exercisesList, setExercisesList] = useState<Array<any>>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [filterLevel, setFilterLevel] = useState<string>(''); // Nowy stan dla poziomu trudności
    const exercisesPerPage = 12;
    const exercisesCollectionRef = useMemo(() => collection(db, "Exercises"), []);

    const getExercisesList = async () => {
        try {
            const data = await getDocs(exercisesCollectionRef);
            const filteredData = data.docs.map((doc) => {
                const docData = doc.data();
                return {
                    ...docData,
                    id: doc.id,
                    createdAt: docData.createdAt instanceof Timestamp ? docData.createdAt.toDate() : docData.createdAt,
                };
            });
            setExercisesList(filteredData);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getExercisesList();
    }, [exercisesCollectionRef]); // eslint-disable-line react-hooks/exhaustive-deps

    const highlightText = (text: string, query: string) => {
        if (!query.trim()) return text;

        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ? (
                <mark key={index} className="bg-yellow-300">
                    {part}
                </mark>
            ) : (
                part
            )
        );
    };

    const truncateText = (text: string, length: number) => {
        if (text.length <= length) return text;
        return text.substring(0, length) + "...";
    };

    const handleCategoryClick = (category: string) => {
        setSearchQuery(category);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleFilterLevelChange = (level: string) => {
        setFilterLevel(level);
    };

    const sortedExercisesList = exercisesList.sort((a, b) => b.postNumber - a.postNumber);

    const filteredExercises = sortedExercisesList.filter(exercise =>
        (exercise.year.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exercise.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exercise.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exercise.category.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (filterLevel ? exercise.level.toLowerCase() === filterLevel.toLowerCase() : true) // Filtrowanie poziomu
    );

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = filteredExercises.slice(indexOfFirstExercise, indexOfLastExercise);
    const totalPages = Math.ceil(filteredExercises.length / exercisesPerPage);

    const uniqueCategories = Array.from(new Set(exercisesList.map(exercise => exercise.category)));

    const parseTexExpressions = (text: string) => {
        const texRegex = /\\start(.*?)\\end/g;
        const parts: React.ReactNode[] = [];
        let lastIndex = 0;

        let match;
        while ((match = texRegex.exec(text)) !== null) {
            const [fullMatch, formulaContent] = match;
            const matchStart = match.index;

            if (lastIndex < matchStart) {
                parts.push(text.substring(lastIndex, matchStart));
            }

            parts.push(<Formula key={matchStart} formula={formulaContent} />);

            lastIndex = texRegex.lastIndex;
        }

        if (lastIndex < text.length) {
            parts.push(text.substring(lastIndex));
        }

        return parts;
    };

    return (
        <>
            <NavLink to={"../cke"}>
                <button className={classNames(BlueButtonStyle, "w-full mb-3")}>
                    Matury CKE z zeszłych lat
                </button>
            </NavLink>

            <div className="w-full p-4">
                <input
                    type="text"
                    placeholder="Wyszukiwanie po słowach kluczowych"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border border-gray-400 rounded-md p-2 mb-2"
                />
                <div className="flex gap-2 mt-2 justify-center">
                    <button
                        onClick={() => handleFilterLevelChange('podstawowy')}
                        className={`px-3 py-1 rounded ${filterLevel === 'podstawowy' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    >
                        Podstawowy
                    </button>
                    <button
                        onClick={() => handleFilterLevelChange('rozszerzony')}
                        className={`px-3 py-1 rounded ${filterLevel === 'rozszerzony' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    >
                        Rozszerzony
                    </button>
                    <button
                        onClick={() => handleFilterLevelChange('')}
                        className={`px-3 py-1 rounded ${filterLevel === '' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    >
                        Wszystkie
                    </button>
                </div>
            </div>

            {currentExercises.map((exercise) => (
                <div key={exercise.id} className="flex flex-row justify-between border-2 rounded border-black p-4 my-2 w-full shadow-md">
                    <div>
                        <NavLink to={`exercise/${exercise.id}`}>
                            <span className="text-gray-800 font-medium">
                                <b>{exercise.type} / {exercise.month} {exercise.year} / Poziom {exercise.level}</b>
                            </span><br />
                            <span className="text-gray-800 font-medium mt-1 bg-[#D5B8EA]">
                                <b>Zadanie {exercise.no} ({exercise.points} p.)</b>
                            </span>
                            <p className="flex flex-row">
                                {parseTexExpressions(exercise.content)}
                            </p>
                        </NavLink>
                    </div>
                </div>
            ))}

            <div className="w-full p-4">
                <p>Kategorie:</p>
                <div className="flex flex-wrap gap-2">
                    {uniqueCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className="bg-blue-200 hover:bg-blue-300 text-blue-800 font-semibold px-3 py-1 rounded-md"
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex justify-center my-4">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`mx-1 px-3 py-1 rounded ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    >
                        {page}
                    </button>
                ))}
            </div>
            {userData?.isAdmin && (
                <NavLink to={"nowe-zadanie"}>
                    <button className={classNames(BlueButtonStyle, "w-full mb-3")}>
                        Dodaj zadanie
                    </button>
                </NavLink>
            )}
        </>
    );
}
