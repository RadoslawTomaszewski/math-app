import { collection, deleteDoc, doc, getDoc, addDoc, query, orderBy, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { FC, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Comment, Exercise } from "../types";
import useUserData from "../../../hooks/useUserData";
import { db } from "../../../config/firebase";
import PageLoader from "../../../components/Loader/PageLoader";
import ConfirmDialog from "../../../components/ConfirmDialog/ConfirmDialog";
import Formula from "../../../components/Formula/Formula";
import { ReactComponent as DeletePost } from "../../../assets/icons/delete.svg";
import { BlueButtonStyle } from "../../../styles/styles";
import NavigateTo from "../../../components/NavigateTo/NavigateTo";
import FormulaInline from "../../../components/Formula/FormulaInline";

const formatDate = (timestamp: any) => {
    const date = new Date(timestamp.seconds * 1000);
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    return new Intl.DateTimeFormat('pl-PL', options).format(date);
};

const ExerciseDetailPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const [exercise, setExercise] = useState<Exercise | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [postIdToDelete, setPostIdToDelete] = useState<string | null>(null);
    const [newComment, setNewComment] = useState<string>('');
    const [newCommentLatex, setNewCommentLatex] = useState<string>('');
    const { userData, loading: userLoading } = useUserData();
    const navigate = useNavigate();

    const exercisesCollectionRef = useMemo(() => collection(db, 'Exercises'), []);
    const commentsCollectionRef = useMemo(() => collection(db, 'Comments'), []);

    const deletePost = async (postId: string) => {
        try {
            await deleteDoc(doc(exercisesCollectionRef, postId));
            console.log('Post deleted successfully');
            navigate("../");
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const handleDelete = (postId: string) => {
        setPostIdToDelete(postId);
        setOpenDialog(true);
    };

    const confirmDelete = () => {
        if (postIdToDelete) {
            deletePost(postIdToDelete);
            setPostIdToDelete(null);
        }
        setOpenDialog(false);
    };

    const cancelDelete = () => {
        setOpenDialog(false);
        setPostIdToDelete(null);
    };

    const fetchExercise = async () => {
        try {
            const docRef = doc(exercisesCollectionRef, id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const docData = docSnap.data() as Omit<Exercise, 'id'>;
                setExercise({ id: docSnap.id, ...docData });
            } else {
                console.log('No such document!');
            }
        } catch (error) {
            console.error('Error getting document:', error);
        }
    };

    const fetchComments = async () => {
        try {
            const q = query(commentsCollectionRef, orderBy('createdAt', 'asc'));
            const querySnapshot = await getDocs(q);
            const commentsData = querySnapshot.docs
                .filter(doc => doc.data().postId === id)
                .map(doc => ({ id: doc.id, ...doc.data() } as Comment));
            setComments(commentsData);
        } catch (error) {
            console.error('Error getting comments:', error);
        }
    };

    const addComment = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!newComment) return;

        try {
            await addDoc(commentsCollectionRef, {
                postId: id,
                author: userData?.nick,
                content: newComment,
                latexContent: newCommentLatex,
                createdAt: new Date(),
            });
            setNewComment('');
            setNewCommentLatex('');
            fetchComments();
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    useEffect(() => {
        fetchExercise();
        fetchComments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    if (!exercise || userLoading) {
        return <PageLoader />;
    }


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
            <div className={`relative flex flex-col justify-between border-2 rounded border-black p-4 my-4 w-full shadow-lg`}>
                {userData && (userData.nick === exercise.author || userData.nick === "radek44413") && (
                    <button
                        onClick={() => handleDelete(exercise.id)}
                        className={`absolute top-2 right-2`}
                    >
                        <DeletePost className="h-[30px] w-[30px] red" />
                    </button>
                )}
                <span className="text-gray-800 font-medium"><b>{exercise.type} / {exercise.month} {exercise.year} / Poziom {exercise.level}</b></span>
                <span className="text-gray-800 font-medium  mt-1 bg-[#D5B8EA]"><b>Zadanie {exercise.no} ({exercise.points} p.) </b></span>
                <p className="text-gray-700 mb-4  mt-1 block">{parseTexExpressions(exercise.content)}</p>
                <div className="options-container mt-4">
    {exercise.isabcd && exercise.options.length > 0 && (
        <div>
            <span className="g">
                {exercise.options.map((option, index) => (
                    <div key={index} className="flex flex-row">
                        <span className="font-bold">{String.fromCharCode(65 + index)}: </span>
                        <FormulaInline text={option}/>
                    </div>
                ))}
            </span>
        </div>
    )}

</div>
                <div className="text-gray-600 text-sm mt-4">
                    <span>{exercise.category}</span>
                </div>
            </div>
            <ConfirmDialog
                open={openDialog}
                onClose={cancelDelete}
                onConfirm={confirmDelete}
                title="Potrzebne potwierdzenie"
                message="Czy na pewno chcesz usunąć ten post?"
            />
            <div className="border-t border-gray-300 pt-2 w-full">
                {comments.length === 0 ? (
                    <p className="text-gray-600">Brak komentarzy.</p>
                ) : (
                    comments.map(comment => (
                        <div
                            key={comment.id}
                            className="mb-4 p-4 border rounded shadow-sm bg-gray-100"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-medium">{comment.author}</span>
                                <span className="text-sm text-gray-500">
                                    {new Date(comment.createdAt.seconds * 1000).toLocaleDateString()}
                                    &nbsp;{new Date(comment.createdAt.seconds * 1000).toLocaleTimeString()}
                                </span>
                            </div>
                            <p className="text-gray-800 mb-2">{comment.content}</p>
                            {comment.latexContent && (
                                <div className="overflow-x-auto">
                                    <Formula
                                        formula={comment.latexContent}
                                        styles={`min-w-[1000px]`}
                                    />
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
            {userData && (
                <form onSubmit={addComment} className="border-t border-gray-300 pt-4 w-full">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Dodaj treść komentarza"
                        className="w-full border border-gray-400 rounded-md p-2 mb-2 min-h-[130px]"
                    ></textarea>
                    <p>Jeśli nie znasz dobrze LaTeX zerknij tutaj: <NavigateTo to="https://pl.wikibooks.org/wiki/LaTeX/Matematyka" target='_blank'>ściąga LaTex</NavigateTo></p>
                    {newCommentLatex ? <div className=""><Formula formula={newCommentLatex} /></div> : <div className='h-[60.39px]'></div>}


                    <div className="w-full flex justify-center">
                        <button
                            type="submit"
                            className={BlueButtonStyle}
                        >
                            Dodaj komentarz
                        </button>
                    </div>

                </form>
            )}
            {!userData && (
                <>
                    <p>
                        <NavigateTo to="/logowanie">Zaloguj się</NavigateTo>
                        &nbsp;aby mieć możliwość dodawania komentarzy
                    </p>
                </>
            )}
        </>
    );
};

export default ExerciseDetailPage;
