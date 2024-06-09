import { Link } from "react-router-dom";

import cls from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
    return (
        <section className={cls.notFoundPage}>
            <p>Page was not found</p>
            <Link to={"/"}>Go to main</Link>
        </section>
    );
};
