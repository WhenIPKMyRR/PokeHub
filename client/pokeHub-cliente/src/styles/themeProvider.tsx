import React, { createContext, ReactNode } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

interface Theme {
  background: {
    primary: string;
    secondary: string;
    third: string;
  };
  text: {
    primary: string;
    secondary: string;
    third: string;
  };
  fontSizes: {
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
  };
  fontWeight: {
    light: string;
    regular: string;
    medium: string;
    bold: string;
    extraBold: string;
  };
}

const lightTheme: Theme = {
  background: {
    primary: '#ffffff',
    secondary: '#0f0f0f',
    third: '#212121',
  },
  text: {
    primary: '#1c1c1e',
    secondary: '#ffffff',
    third: '#767676f5',
  },
  fontSizes: {
    small: '12px',
    medium: '14px',
    large: '20px',
    extraLarge: '36px',
  },
  fontWeight: {
    light: '400',
    regular: '500',
    medium: '600',
    bold: '800',
    extraBold: '900',
  },
};

const darkTheme: Theme = {
  background: {
    primary: '#0f0f0f',
    secondary: '#6c757d',
    third: '#ffffff1a',
  },
  text: {
    primary: '#ffffff',
    secondary: '#1c1c1e',
    third: '#AAAAAA',
  },
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '20px',
    extraLarge: '36px',
  },
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
    extraBold: '800',
  },
};

interface ThemeContextProps {
  isDarkMode: boolean;
  children: ReactNode;
}

export const ThemeContext = createContext<Theme | undefined>(undefined);

const ThemeProvider: React.FC<ThemeContextProps> = ({ isDarkMode, children }) => {
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
