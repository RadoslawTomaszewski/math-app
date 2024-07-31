import { collection, deleteDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../config/firebase";
import { useParams } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { Topic } from "../types";
import { RedButtonStyle } from "../../../utilities/styles";
import { useNavigate } from "react-router-dom"

const PostDetailPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const [topic, setTopic] = useState<Topic | null>(null);
    const [currentUserNick, setCurrentUserNick] = useState<string | null>(null);
    const navigate = useNavigate();

    const topicsCollectionRef = collection(db, 'Topics');
    const usersCollectionRef = collection(db, 'Users');

    const deletePost = async (postId: string) => {
        try {
            await deleteDoc(doc(db, 'Topics', postId));
            console.log('Post deleted successfully');
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    useEffect(() => {
        const fetchTopic = async () => {
            try {
                const docRef = doc(topicsCollectionRef, id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const docData = docSnap.data() as Omit<Topic, 'id'>;
                    setTopic({ id: docSnap.id, ...docData });
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error('Error getting document:', error);
            }
        };

        const fetchCurrentUserNick = async () => {
            const user = auth.currentUser;
            if (user) {
                try {
                    const userDocRef = doc(usersCollectionRef, user.uid);
                    const userDocSnap = await getDoc(userDocRef);
                    if (userDocSnap.exists()) {
                        const userData = userDocSnap.data();
                        setCurrentUserNick(userData.nick);
                    }
                } catch (error) {
                    console.error('Error getting user document:', error);
                }
            }
        };

        fetchTopic();
        fetchCurrentUserNick();
    }, [id, topicsCollectionRef, usersCollectionRef]);

    if (!topic) {
        return <div>Loading...</div>;
    }

    const handleDelete = () => {
        if (topic && topic.id) {
            deletePost(topic.id);
            navigate("../");
        }
    };

    return (
        <>
            <div key={topic.id} className={`flex flex-row justify-between border-2 border-black p-4 my-2 w-full shadow-md ${topic.author === 'radek44413' ? 'bg-[#7dcbf9]' : ''}`}>
                <div>
                    <span>#{topic.postNumber}</span><br />
                    <span>{topic.author}</span>
                    {/* <span> / {new Date(topic.createdAt).toLocaleDateString()}</span> */}
                    <span> / {topic.category}</span>
                    <h2 className="text-lg font-semibold">
                        {topic.title}
                    </h2>
                    <p className="text-base">
                        {topic.content}
                    </p>
                </div>
            </div>
            {(currentUserNick === topic.author || currentUserNick === "radek44413") && (
                <button
                    onClick={handleDelete}
                    className={RedButtonStyle}
                >
                    Usuń post
                </button>
            )}
        </>
    );
};

export default PostDetailPage;
