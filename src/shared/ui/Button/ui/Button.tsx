import React from "react";
import { ButtonHTMLAttributes, FC } from "react";

import cls from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = (props) => {
    const { children, ...otherProps } = props;

    return (
        <button className={cls.button} {...otherProps}>
            {children}
        </button>
    );
};
