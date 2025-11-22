import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState("light");

    const toogleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));

        // if(theme === "light") {
        //     setTheme("dark");
        // } else {
        //     setTheme("light")
        // }
    };

    const value = {
        theme,
        toogleTheme
    }

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}