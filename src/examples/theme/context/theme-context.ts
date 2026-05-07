import { createContext } from "react";
import type { Theme } from "../../../types/theme/theme-types";

export const ThemeContext = createContext<{
    theme: Theme;
    setTheme: (t: Theme) => void
}>({
    theme: "dark",
    setTheme: () => {}
})