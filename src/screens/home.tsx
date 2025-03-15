import { Button as ButtonCustom } from "@/components/Button";
import { useTheme } from "@/hooks/useTheme";
import { AppRoutesNavigator } from "@/routes/appRoutes";
import { Box, Button, Center, Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const { isDarkMode, theme, alterarTheme } = useTheme();

  const navigation = useNavigation<AppRoutesNavigator>()

  function handleConfig() {
    navigation.navigate('config')
  }

  return (
    <Box bg="$background" gap='$4' flex={1} justifyContent="center" alignItems="center">
      <Text color={theme.theme.colors.text} size="xl">Modo {isDarkMode ? 'Dark' : 'Light'}</Text>

      {/* <Button bg="$button" mt="$4" h='$16' w='$full' onPress={alterarTheme}>
        <Text color={theme.theme.colors.text} size="xl">Alternar Tema</Text>
      </Button> */}

      <VStack >
        <Center gap='$2'>
          <ButtonCustom titulo="Alterar tema" onPress={alterarTheme} />

          <ButtonCustom titulo="Configuração" onPress={handleConfig} />
        </Center>
      </VStack>


    </Box>
  )
}