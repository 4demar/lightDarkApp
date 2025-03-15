import { Button } from "@/components/Button";
import { useTheme } from "@/hooks/useTheme";
import { Box, VStack, Text } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

export function Configuracao() {
  const { isDarkMode, theme } = useTheme();
  const navigation = useNavigation()

  function handleVoltar() {
    navigation.goBack()
  }

  return (
    <Box p='$4' gap='$4' bg="$background" flex={1} justifyContent="center" alignItems="center">
      <Text color={theme.theme.colors.text} size="xl">Modo {isDarkMode ? 'Dark' : 'Light'}</Text>

      <Button titulo="Voltar para Home" onPress={handleVoltar} />

    </Box>
  )
}