import React from "react";

export interface ButtonProps {
    label: string;
    style?: string;
    url?: string;
}

const Button: React.FC<ButtonProps> = ({ label, style, url }) => {
    return (
        <a
            href={`${url != null ? url : "#"}`}
            className={`max-w-xs rounded-full font-bold py-8 font-ubuntu text-base ${style}`}
        >
            {label}
        </a>
    );
};

export default Button;
