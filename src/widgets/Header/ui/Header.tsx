import { Link } from "react-router-dom";
import cls from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={cls.header}>
            <nav className={cls.nav}>
                <Link to="">Main</Link>
                <Link to="about">About</Link>
            </nav>
        </header>
    );
};
