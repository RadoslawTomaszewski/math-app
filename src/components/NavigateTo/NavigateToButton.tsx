import React from 'react';
import { NavLink } from 'react-router-dom';
import { CKELinkButtonStyle } from '../../styles/styles';

interface NavigateToProps {
    to: string;
    children: React.ReactNode;
    target?: '_blank' | '_self' | '_parent' | '_top';
}

const NavigateToButton: React.FC<NavigateToProps> = ({ to, children, target = '_blank' }) => {
    return (
        <NavLink
            to={to}
            className="font-bold hover:underline"
            target={target}
        >
            <button className={CKELinkButtonStyle}>
                {children}
            </button>
        </NavLink>
    );
};

export default NavigateToButton;
