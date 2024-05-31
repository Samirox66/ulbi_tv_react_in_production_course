import { ThemeButton } from "@/widgets/ThemeButton";
import { Link } from "react-router-dom";
import cls from "./Header.module.scss";

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
    return (
        <header className={cls.header}>
            <ThemeButton />
            <nav className={cls.nav}>
                <Link to="">Main</Link>
                <Link to="about">About</Link>
            </nav>
        </header>
    );
};
