import { ReactNode } from "react";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { HStack, VStack, Text, Heading } from "@gluestack-ui/themed";
import { gluestackUIConfig } from "../../config/gluestack-ui.config";
import { FotoUsuario } from "./FotoUsuario";
import { SafeAreaView } from "react-native-safe-area-context";

type props = {
  titulo?: string
  uriImage?: string
  nomeUsuario?: string
  children: ReactNode
}

export function Container({ titulo, uriImage, nomeUsuario, children }: props) {

  return (

    <VStack flex={1} p='$8'>
      <HStack justifyContent="space-between" pb='$2' alignItems="center" bgColor="$coolGray800">
        {titulo
          ?
          <HStack alignItems="center" h='$14'>
            <Heading color='$coolGray200' fontSize='$md'>{titulo}</Heading>
          </HStack>
          :
          <HStack alignItems="center" gap='$4'>
            <FotoUsuario source={{ uri: 'http://github.com/4demar.pngs' }} alt='imagem do usuario' w='$14' h='$14' />
            <VStack>
              <Text color='$coolGray200' fontSize='$sm'>Olá,</Text>
              <Heading color='$coolGray200' fontSize='$md'>Ademar junior</Heading>
            </VStack>
          </HStack>
        }
        <DrawerToggleButton />
      </HStack>

      {children}
    </VStack>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: {colors.blueGray600,
//     padding: 16
//   },
//   header: {
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 7,
//     marginBottom: 16
//   },
//   destaque: {
//     flex: 1,
//     justifyContent: 'center'

//   },
//   titulo: {
//     fontSize: theme.FONT_SIZE.MD,
//     fontFamily: theme.FONT_FAMILY.BOLD,
//     color: theme.COLORS.WHITE
//   },
//   subTitulo: {
//     fontSize: theme.FONT_SIZE.SM,
//     fontFamily: theme.FONT_FAMILY.REGULAR,
//     color: theme.COLORS.blueGray_200
//   }
// })