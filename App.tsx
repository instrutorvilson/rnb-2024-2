import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native';
import Register from './src/adm/register';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/adm/login';
import ResetarSenha from './src/adm/resetarSenha';
import Home from './src/adm/home';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>
          <Stack.Screen name='register' component={Register}  />
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='resetar' component={ResetarSenha} />
          <Stack.Screen name='home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
