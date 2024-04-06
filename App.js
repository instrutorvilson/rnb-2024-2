import { View } from 'react-native';
import Toast from 'react-native-toast-message';
import NomeCompleto from './src/componentes/nomeCompleto';
import styles from './src/estilos/estilos';
import Cadastro from './src/componentes/cadastro';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/componentes/home';
const Stack = createNativeStackNavigator()

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen name='nomecompleto' component={NomeCompleto} />
          <Stack.Screen name='cadastro' component={Cadastro} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

