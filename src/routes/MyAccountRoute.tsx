import React, { FC, useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../config/firebase';
import PageLoader from '../components/Loader/PageLoader';

const MyAccountRoute: FC = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
            try {
                setUser(currentUser);
            } catch (error) {
                console.error('Error fetching user:', error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        });
        return () => unsubscribe();
    }, []);

    const isUserVerifiedOrGoogle = (user: any) => {
        if (!user) return false;
        const emailVerified = user.emailVerified;
        const googleProvider = user.providerData.some((provider: any) => provider.providerId === 'google.com');
        return emailVerified || googleProvider;
    };

    if (loading) {
        return <PageLoader />;
    }

    if (user && isUserVerifiedOrGoogle(user)) {
        return <Navigate to="/moje-konto" replace />;
    }

    return <Outlet />;
};

export default MyAccountRoute;
