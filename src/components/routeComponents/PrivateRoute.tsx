import React, { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../../config/firebase';


const PrivateRoute: FC = () => {
    const user = auth.currentUser;

    if (!user) {
        return <Navigate to="/logowanie" replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;
