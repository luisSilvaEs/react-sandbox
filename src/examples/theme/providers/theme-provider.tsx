import { useState, useEffect, useRef } from "react";
import { ThemeContext } from "../context/theme-context";
import type { Theme } from "../../../types/theme/theme-types";
import { getCookie, setCookie } from "../../skills/cookieUtils";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const isMounted = useRef(false);

  // Apply the theme to the document root whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    root.classList.toggle("dark", isDark);

    // Skip writing the cookie on first mount, only write when user changes the theme
    if (isMounted.current) {
      setCookie("theme", theme, 3);
    }
  }, [theme]);

  // Read the cookie once on mount and restore the saved theme
  useEffect(() => {
    const doesThemeCookieExist = getCookie("theme");
    const validThemes: Theme[] = ["light", "dark", "system"];
    if (
      doesThemeCookieExist &&
      validThemes.includes(doesThemeCookieExist as Theme)
    ) {
      setTheme(doesThemeCookieExist as Theme);
      /**
       * You need a cast (as) when:

        You have a broad type (like string) coming from an external source (API, cookie, localStorage, URL params)
        But your code expects a narrow type (like a union "light" | "dark" | "system")
        And TypeScript can't automatically infer the connection between the two
       */
    } else {
      setTheme("light");
    }
    // Mark as mounted after the cookie has been read
    isMounted.current = true;
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
