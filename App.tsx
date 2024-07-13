
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/home';
import RotasCompras from './src/rotas/rotasCompras';
import RotasAdm from './src/rotas/rotasAdm';
const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='compras' component={RotasCompras} />
      <Stack.Screen name='adm' component={RotasAdm} />
    </Stack.Navigator>
      
    </NavigationContainer>

  );
}
