import { useTheme } from "@/shared/theme/useTheme";
import { Button } from "@/shared/ui/Button";

export const ThemeButton = () => {
    const { toggleTheme } = useTheme();

    return <Button onClick={toggleTheme}>Toggle</Button>;
};
