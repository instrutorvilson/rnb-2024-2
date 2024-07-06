import 'react-native-gesture-handler'
import { ScrollView } from 'react-native';
import ListaContatos from './src/listaContatos';
import Toast from 'react-native-toast-message';
import CadContato from './src/cadContatos';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './src/home';
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>      
        <Stack.Navigator>
           <Stack.Screen name='home' component={home}/>
           <Stack.Screen name='cadastro' component={CadContato}/>
           <Stack.Screen name='lista' component={ListaContatos}/>
        </Stack.Navigator>      

        <Toast
          position='bottom'
          topOffset={100}
          visibilityTime={5000}
        />
      
    </NavigationContainer>
  );
}


