import React, { FC, useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase'; // Zakładając, że masz poprawną konfigurację Firebase

const CountUserPosts: FC<{ nick: string }> = ({ nick }) => {
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

    if (loading) {
        return <div>Loading...</div>;
    }

    return <span>{postCount}</span>;
};

export default CountUserPosts;
