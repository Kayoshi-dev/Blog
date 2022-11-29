import { useMachine } from "@xstate/react";
import { useEffect } from "react";
import ThemeContext from "../components/theme/ThemeContext";
import themeMachine from "../machines/ThemeMachine";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [state, send] = useMachine(themeMachine);

  const { value: theme } = state;

  console.log(theme);

  const toggleTheme = () => {
    window.localStorage.setItem("theme", theme as string);

    if (theme === "light") {
      document.documentElement.classList.add("dark");
      send("TOGGLE_THEME");
    } else {
      document.documentElement.classList.remove("dark");
      send("TOGGLE_THEME");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
