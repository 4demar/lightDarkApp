import { Center, Spinner } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";

export function Loading() {
  return (
    <SafeAreaView>
      <Center flex={1} bg='$gray700'>
        <Spinner color={'$green500'} size={35} />
      </Center>
    </SafeAreaView>
  )
}