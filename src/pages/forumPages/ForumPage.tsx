import { useEffect, useState, useMemo } from "react";
import { auth, db } from "../../config/firebase";
import { collection, getDocs, doc, Timestamp } from "firebase/firestore";
import ArticleBorder from "../../components/articleItems/ArticleBorder";
import { NavLink } from "react-router-dom";
import { BlueButtonStyle } from "../../utilities/styles";
import { classNames } from "../../utilities";

export default function ForumPage() {
    const [topicsList, setTopicsList] = useState<Array<any>>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const topicsCollectionRef = useMemo(() => collection(db, "Topics"), []);

    const getTopicsList = async () => {
        try {
            const data = await getDocs(topicsCollectionRef);
            const filteredData = data.docs.map((doc) => {
                const docData = doc.data();
                return {
                    ...docData,
                    id: doc.id,
                    createdAt: docData.createdAt instanceof Timestamp ? docData.createdAt.toDate() : docData.createdAt,
                };
            });
            setTopicsList(filteredData);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getTopicsList();
    }, [topicsCollectionRef]); // eslint-disable-line react-hooks/exhaustive-deps

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

    // Sort topicsList by postNumber in descending order
    const sortedTopicsList = topicsList.sort((a, b) => b.postNumber - a.postNumber);

    const filteredTopics = sortedTopicsList.filter(topic =>
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const uniqueCategories = Array.from(new Set(topicsList.map(topic => topic.category)));

    return (
        <>
            <div className="w-full p-4">
                <input
                    type="text"
                    placeholder="Wyszukiwanie po słowach kluczowych"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border border-gray-400 rounded-md p-2 mb-2"
                />
            </div>

            {filteredTopics.map((topic) => (
                <div key={topic.id} className={`flex flex-row justify-between border-2 border-black p-4 my-2 w-full shadow-md ${topic.author === 'radek44413' ? 'bg-[#7dcbf9]' : ''}`}>
                    <div>
                        <NavLink to={`topic/${topic.id}`}>
                            <span><b>#{topic.postNumber} </b></span>
                            <span>{topic.author}</span>
                            <span> / {new Date(topic.createdAt).toLocaleDateString()}</span>
                            <span> / {topic.category}</span>
                            <h2 className="text-lg font-semibold">
                                {highlightText(truncateText(topic.title, 200), searchQuery)}
                            </h2>
                            <p className="text-base">
                                {highlightText(truncateText(topic.content, 200), searchQuery)}
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

            {!auth.currentUser?.email && (
                <>
                    <ArticleBorder styles="w-full" />
                    <p>
                        <NavLink to="../logowanie" className="hover:underline">
                            <b>Zaloguj się </b>
                        </NavLink>{" "}
                        aby mieć możliwość dodawania i komentowania postów na forum
                    </p>
                </>
            )}

            {auth.currentUser?.email && (
                <NavLink to={"nowy-watek"}>
                    <button className={classNames(BlueButtonStyle, "w-full mb-3")}>
                        Nowy wątek
                    </button>
                </NavLink>
            )}

        </>
    );
}
