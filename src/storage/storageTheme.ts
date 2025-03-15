import { themeDto } from "@/contexts/themeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const keyStorageTheme = '@lightDarkApp.theme';

export async function storageGravarTema(modeTheme: string) {
  await AsyncStorage.setItem(keyStorageTheme, modeTheme)
}

export async function storageBuscarTema() {
  const storage = await AsyncStorage.getItem(keyStorageTheme);

  const theme = storage ? storage : 'light'

  return theme;
}