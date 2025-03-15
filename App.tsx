import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from './src/contexts/themeContext';
import { RouteNavigation } from '@/routes';

export default function App() {

  return (
    <ThemeProvider>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <RouteNavigation />
    </ThemeProvider>
  );
}