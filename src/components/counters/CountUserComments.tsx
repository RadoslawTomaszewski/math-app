import React, { FC } from 'react';
import useUserCommentCount from '../../hooks/useUserCommentCount';

const CountUserComments: FC<{ nick: string }> = ({ nick }) => {
    const { commentCount, loading } = useUserCommentCount(nick);

    if (loading) {
        return <div>Liczę...</div>;
    }

    return <span>{commentCount}</span>;
};

export default CountUserComments;