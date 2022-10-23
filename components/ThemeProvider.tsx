import type { NextPage } from 'next'
import React, { useState } from "react";

type ThemeContext = { theme: boolean; toggleTheme: () => void };
type ChildProps = {children: React.ReactNode}

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

const ThemeProvider = ({ children }:ChildProps) => {

  const [theme, setTheme] = useState<boolean>(false);

  React.useEffect(() => {
    const isDark = localStorage.getItem('theme') == 'true';
    setTheme(isDark);
  }, [theme]);

  const toggleTheme = () => {
    const isDark = !theme;
    localStorage.setItem('theme', JSON.stringify(isDark))
    setTheme(isDark);
  };

  const color = theme === false ? "#000" : "#FFF";
  const backgroundColor = theme === false ? "#FFF" : "#000";

  if (typeof window !== 'undefined') {
    window.document.body.style.color = color;
    window.document.body.style.backgroundColor = backgroundColor;
  }


  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
