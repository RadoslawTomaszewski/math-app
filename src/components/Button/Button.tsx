import React, { FC, ReactNode } from 'react';

interface ButtonProps {
    className: string;
    onClick: () => void;
    children: ReactNode;
}

//TODO: IS IT NECESSERY?

const Button: FC<ButtonProps> = ({ className, onClick, children }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;