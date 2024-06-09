import { useTheme } from "@/shared/theme/useTheme";
import "./styles/index.scss";

import { classNames } from "@/shared/lib/classnames/classnames";
import { AppRouter } from "./providers/AppRouter";
import { Header } from "@/widgets/Header/ui/Header";
import { Sidebar } from "@/widgets/Sidebar";

import cls from "./App.module.scss";

export function App() {
    const { theme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Header />
            <main className={cls.app}>
                <Sidebar />
                <AppRouter />
            </main>
        </div>
    );
}
