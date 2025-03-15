import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Home } from '../screens/home';
import { Configuracao } from '../screens/config';

type AppRoutesProps = {
  home: undefined;
  config: undefined;
}

export type AppRoutesNavigator = NativeStackNavigationProp<AppRoutesProps>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutesProps>();

export function AppRoutes() {

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="config" component={Configuracao} />
    </Navigator>
  )
}