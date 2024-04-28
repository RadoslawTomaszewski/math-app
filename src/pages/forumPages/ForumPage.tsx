import { useEffect, useState, useMemo } from "react";
import { ArticleWrapper } from "../../components/ArticleWrapper/ArticleWrapper";
import Title from "../../components/articleItems/Title";
import { auth, db } from "../../config/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import ArticleBorder from "../../components/articleItems/ArticleBorder";
import DeleteIcon from "../../assets/icons/delete.svg";
import { NavLink } from "react-router-dom";

export default function ForumPage() {

    //TODO: fix typing from any
    const [topicsList, setTopicsList] = useState<Array<any>>([]);
    const [newTopicTitle, setNewTopicTitle] = useState("");
    const [newTopicContent, setNewTopicContent] = useState("");

    const topicsCollectionRef = useMemo(() => collection(db, "topics"), []);

    const getTopicsList = async () => {
        try {
            const data = await getDocs(topicsCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setTopicsList(filteredData);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getTopicsList();
    }, [topicsCollectionRef]); // eslint-disable-line react-hooks/exhaustive-deps

    const onSubmitTopic = async () => {
        try {
            await addDoc(topicsCollectionRef, { title: newTopicTitle, content: newTopicContent });
            getTopicsList();
        } catch (err) {
            console.log(err);
        }
    };
    //TODO: FIX ANY
    const deleteTopic = async (topicId: any) => {
        try {
            await deleteDoc(doc(db, "topics", topicId));
            getTopicsList();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="p-3 justify-center flex flex-col items-center">
            <ArticleWrapper>
                <div className="flex flex-col items-center bg-articleColor">
                    <Title text={"Forum majza.eu"} type="main-article" />
                    {topicsList.map((topic) => (
                        <div key={topic.id} className="flex flex-row justify-between border-2 border-black p-4 my-2 w-full shadow-md">
                            <div>
                                <h2 className="text-lg font-semibold">{topic.title}</h2>
                                <p className="text-base">{topic.content}</p>
                            </div>
                            {auth.currentUser?.email && (
                                <button onClick={() => deleteTopic(topic.id)}>
                                    <img src={DeleteIcon} alt="przycisk kasujący wątek" width="30" height="30" />
                                </button>
                            )}
                        </div>
                    ))}
                    <ArticleBorder styles="w-full" />
                    {!auth.currentUser?.email && (
                        <p><NavLink to="../logowanie" className="hover:underline"><b>Zaloguj się </b></NavLink> aby mieć możliwość dodawania i komentowania postów na forum</p>
                    )}
                    {auth.currentUser?.email && (
                        <div className="w-full max-w-md p-4">
                            <input
                                onChange={(e) => setNewTopicTitle(e.target.value)}
                                type="text"
                                placeholder="Tytuł wątku"
                                className="w-full border border-gray-400 rounded-md p-2 mb-2"
                            />
                            <textarea
                                onChange={(e) => setNewTopicContent(e.target.value)}
                                placeholder="Treść wątku"
                                className="w-full border border-gray-400 rounded-md p-2 mb-2"
                            ></textarea>
                            <button
                                className="bg-blue-500 text-white w-full px-4 py-2 rounded-md hover:bg-blue-600"
                                onClick={onSubmitTopic}
                            >
                                Dodaj temat
                            </button>
                        </div>
                    )}
                </div>
            </ArticleWrapper>
        </div>
    );
}
