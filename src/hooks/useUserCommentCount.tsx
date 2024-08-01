import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const useUserCommentCount = (nick: string) => {
    const [commentCount, setCommentCount] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const countComments = async () => {
            try {
                const commentsCollectionRef = collection(db, 'Comments');
                const q = query(commentsCollectionRef, where('author', '==', nick));
                const querySnapshot = await getDocs(q);

                setCommentCount(querySnapshot.size);
            } catch (error) {
                console.error('Error counting comments:', error);
            } finally {
                setLoading(false);
            }
        };

        countComments();
    }, [nick]);

    return { commentCount, loading };
};

export default useUserCommentCount;