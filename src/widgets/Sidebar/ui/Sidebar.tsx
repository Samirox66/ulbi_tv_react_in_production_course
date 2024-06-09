import { Button } from "@/shared/ui/Button";
import cls from "./Sidebar.module.scss";
import { ThemeButton } from "@/features/ThemeButton";
import { useState } from "react";
import { classNames } from "@/shared/lib/classnames/classnames";

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(true);
    return (
        <section
            className={classNames(
                cls.sidebar,
                { [cls.opened]: !collapsed },
                []
            )}
        >
            <Button onClick={() => setCollapsed(!collapsed)}>
                {collapsed ? "Open" : "Close"}
            </Button>
            <ThemeButton />
        </section>
    );
};
