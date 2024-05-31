import { useTheme } from "@/shared/theme/useTheme";
import { Button } from "@/shared/ui/Button";

interface ThemeButtonProps {}

export const ThemeButton = (props: ThemeButtonProps) => {
    const { theme, toggleTheme } = useTheme();

    return <Button onClick={toggleTheme}>Toggle</Button>;
};
