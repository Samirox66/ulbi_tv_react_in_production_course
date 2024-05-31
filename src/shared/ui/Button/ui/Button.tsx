import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = (props) => {
    const { children, ...otherProps } = props;

    return <button {...otherProps}>{children}</button>;
};
