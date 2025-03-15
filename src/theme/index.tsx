import { config } from "../../config/gluestack-ui.config";

export const lightTheme = {
  ...config,
  theme: {
    ...config.tokens,
    colors: {
      ...config.tokens.colors,
      background: '#FFFFFF',
      text: '#000000',
      primary: '#2563EB', // Azul
      card: '#F3F4F6', // Cinza claro
      button: '#1E40AF', // Azul escuro
      icon: '#000000',
    },
  },
};

export const darkTheme = {
  ...config,
  theme: {
    ...config.tokens,
    colors: {
      ...config.tokens.colors,
      background: '#000000',
      text: '#FFFFFF',
      primary: '#3B82F6', // Azul claro
      card: '#1F2937', // Cinza escuro
      button: '#3B82F6',
      icon: '#FFFFFF',
    },
  },
};
