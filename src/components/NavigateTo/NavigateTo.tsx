import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavigateToProps {
    to: string;
    children: React.ReactNode;
    target?: '_blank' | '_self' | '_parent' | '_top';
}

const NavigateTo: React.FC<NavigateToProps> = ({ to, children, target = '_self' }) => {
    return (
        <NavLink
            to={to}
            className="font-bold hover:underline"
            target={target}
        >
            {children}
        </NavLink>
    );
};

export default NavigateTo;
