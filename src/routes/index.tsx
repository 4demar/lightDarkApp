import { Loading } from '@/components/Loading';
import { useTheme } from '@/hooks/useTheme';
import { Box, GluestackUIProvider, Theme } from '@gluestack-ui/themed';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AppRoutes } from './appRoutes';
import { gluestackUIConfig } from '../../config/gluestack-ui.config';
import { useEffect } from 'react';


export function RouteNavigation() {
  const { isLoadTheme, theme } = useTheme()

  useEffect(() => {
    console.log('COLOR TEXT => ', theme.theme.colors.text)
  })

  const navigationTheme = DefaultTheme
  navigationTheme.colors.background = theme.theme.colors.background

  if (isLoadTheme) {
    return (
      <GluestackUIProvider config={gluestackUIConfig}>
        <Loading />
      </GluestackUIProvider>
    )
  }

  return (
    <GluestackUIProvider config={theme}>
      <Box bg={theme.theme.colors.background} flex={1}>
        <NavigationContainer theme={navigationTheme}>
          <AppRoutes />
        </NavigationContainer>
      </Box>
    </GluestackUIProvider>
  )
}