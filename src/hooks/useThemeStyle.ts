import { Theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.theme.colors.background,
    },
    text: {
      fontSize: 18,
      color: theme.theme.colors.text,
      marginBottom: 16,
    },
  });
