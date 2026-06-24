import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('sdv_dark') === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('sdv_dark', isDark);
  }, [isDark]);

  const toggleDark = () => setIsDark(d => !d);

  return (
    <ThemeContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
