import { useTheme } from "@/shared/theme/useTheme";
import "./styles/index.scss";

import { ThemeButton } from "@/widgets/ThemeButton";
import { classNames } from "@/shared/lib/helpers";
import { AppRouter } from "./providers/AppRouter";
import { Header } from "@/widgets/Header/ui/Header";

export function App() {
    const { theme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Header />
            <AppRouter />
        </div>
    );
}
