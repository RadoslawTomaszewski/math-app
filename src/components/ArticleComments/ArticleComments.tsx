import React, { FC, useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../../config/firebase';
import { collection, addDoc, query, orderBy, getDocs, serverTimestamp } from 'firebase/firestore';
import { BlueButtonStyle } from '../../styles/styles';
import useUserData from '../../hooks/useUserData';
import { ErrorMessageStyle } from '../Auth/styles';
import useAuthStatus from '../../hooks/useAuthStatus';
import NavigateTo from '../NavigateTo/NavigateTo';

interface Comment {
    id: string;
    author: string;
    content: string;
    createdAt: any;
}

const ArticleComments: FC = () => {
    const location = useLocation();
    const { userData } = useUserData();
    const { isLoggedIn } = useAuthStatus();
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const articlePath = location.pathname.replace(/\//g, '_'); // Use a safe document ID format
    const commentsCollectionRef = useMemo(() => collection(db, 'ArticleComments', articlePath, 'Comments'), [articlePath]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const q = query(commentsCollectionRef, orderBy('createdAt', 'desc'));
                const querySnapshot = await getDocs(q);
                const fetchedComments = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Comment[];
                setComments(fetchedComments);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, [commentsCollectionRef]);

    const handlePostComment = async () => {
        if (!newComment.trim()) {
            setError('Comment content cannot be empty.');
            return;
        }
        try {
            setError(null);
            await addDoc(commentsCollectionRef, {
                author: userData?.nick || 'Anonymous',
                content: newComment,
                createdAt: serverTimestamp()
            });
            setNewComment('');
            const q = query(commentsCollectionRef, orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            const fetchedComments = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Comment[];
            setComments(fetchedComments);
        } catch (err) {
            setError('Error posting comment. Please try again.');
            console.error('Error posting comment:', err);
        }
    };

    const memoizedComments = useMemo(() => comments, [comments]);

    return (
        <div className="w-full p-4">
            <div className="mb-4">
                {memoizedComments.map(comment => (
                    <div key={comment.id} className="border border-gray-300 rounded-md p-2 mb-2">
                        <p className="text-sm text-gray-500">
                            {comment.author} {comment.createdAt?.toDate().toLocaleString()}
                        </p>
                        <p className="text-base">{comment.content}</p>
                    </div>
                ))}
            </div>
            {isLoggedIn ? (
                <div className="mb-4">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Tu wpisz nowy komentarz..."
                        className="w-full border bg-articleColor rounded-md p-2 mb-2 min-h-[50px]"
                    ></textarea>
                    <div className='w-full flex justify-center'>
                        <button
                            onClick={handlePostComment}
                            className={BlueButtonStyle}
                        >
                            Zapisz komentarz
                        </button>
                    </div>
                    {error && <p className={ErrorMessageStyle}>{error}</p>}
                </div>
            ) : (
                <p className='text-center'>
                    <NavigateTo to="/logowanie">Zaloguj się</NavigateTo>
                    &nbsp;aby mieć możliwość dodawania i komentowania postów na forum
                </p>
            )}
        </div>
    );
};

export default ArticleComments;
