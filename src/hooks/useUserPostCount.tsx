import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';

const useUserPostCount = (nick: string) => {
    const [postCount, setPostCount] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const countPosts = async () => {
            try {
                const topicsCollectionRef = collection(db, 'Topics');
                const q = query(topicsCollectionRef, where('author', '==', nick));
                const querySnapshot = await getDocs(q);

                setPostCount(querySnapshot.size);
            } catch (error) {
                console.error('Error counting posts:', error);
            } finally {
                setLoading(false);
            }
        };

        countPosts();
    }, [nick]);

    return { postCount, loading };
};

export default useUserPostCount;
