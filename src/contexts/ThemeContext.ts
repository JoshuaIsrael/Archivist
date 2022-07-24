import { createContext } from "react";
import { ThemeType } from "../app/types";

export interface ThemeContextInterface {
  theme: ThemeType | null,
  setTheme: (newType: ThemeType) => void
}

export const ThemeContext = createContext<ThemeContextInterface | null>(null);

export default ThemeContext;