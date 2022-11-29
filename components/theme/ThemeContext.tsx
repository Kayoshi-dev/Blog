import { createContext } from "react";
import { StateValue } from "xstate";

export interface ThemeContextProps {
  theme: StateValue;
  toggleTheme: Function;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});

export default ThemeContext;
