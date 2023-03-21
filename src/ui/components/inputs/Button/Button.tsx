import React from "react";

export interface ButtonProps {
    label: string;
    style?: string;
}

const Button: React.FC<ButtonProps> = ({ label, style }) => {
    return (
        <div
            className={`${style} max-w-xs rounded-full font-bold py-8 font-ubuntu text-base`}
        >
            {label}
        </div>
    );
};

export default Button;
