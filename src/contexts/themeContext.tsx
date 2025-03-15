import React, { createContext, useEffect, useState } from 'react';
import { storageBuscarTema, storageGravarTema } from '@/storage/storageTheme';
import { darkTheme, lightTheme } from '@/theme';

export type themeDto = 'light' | 'dark'

interface ThemeContextType {
  isLoadTheme: boolean;
  theme: typeof lightTheme;
  alterarTheme: () => void;
  isDarkMode: boolean
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState(lightTheme);
  const [isLoadTheme, setIsLoadTheme] = useState(true);

  async function alterarTheme() {
    try {
      setIsLoadTheme(true)
      const newTheme = isDarkMode ? lightTheme : darkTheme;
      setTheme(newTheme);
      setIsDarkMode(!isDarkMode);
      await storageGravarTema(isDarkMode ? 'light' : 'dark')

    } catch (error) {
      console.error('Erro ao salvar o tema:', error);
      throw error
    }
    finally {
      setIsLoadTheme(false)
    }
  }

  async function carregarTheme() {
    try {
      setIsLoadTheme(true)
      const result = await storageBuscarTema()
      if (result === 'dark') {
        setIsDarkMode(true);
        setTheme(darkTheme);
      }
      setIsLoadTheme(false);
    } catch (error) {
      console.error('Erro ao carregar o tema:', error);
      throw error
    }
    finally {
      setIsLoadTheme(false)
    }
  }

  useEffect(() => {
    carregarTheme()
  }, [])

  return (
    <ThemeContext.Provider value={{ isDarkMode, theme, alterarTheme, isLoadTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
