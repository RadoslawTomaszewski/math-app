import React, { FC } from 'react';
import useUserPostCount from '../../hooks/useUserPostCount';

const CountUserPosts: FC<{ nick: string }> = ({ nick }) => {
    const { postCount, loading } = useUserPostCount(nick);

    if (loading) {
        return <div>Liczę...</div>;
    }

    return <span>{postCount}</span>;
};

export default CountUserPosts;