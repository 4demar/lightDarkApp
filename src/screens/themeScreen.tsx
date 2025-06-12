import React from 'react';
import { View, Text, Button } from 'react-native';

import { useTheme } from '@/hooks/useTheme';
import { createStyles } from '@/hooks/useThemeStyle';

export const ThemedScreen = () => {
  const { theme, alterarTheme, isDarkMode } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tema atual: {isDarkMode}</Text>
      <Button title="Alternar Tema" onPress={alterarTheme} color={theme.tokens.colors.primary0} />
    </View>
  );
};
