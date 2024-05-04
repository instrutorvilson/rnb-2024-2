import { StyleSheet, Text, View } from 'react-native'
import Toast from 'react-native-toast-message'

import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

import Caduser from './caduser'
import Login from './login'
import Home from './home'

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen name='home' component={Home}/>
           <Stack.Screen name='login' component={Login}/>
           <Stack.Screen name='register' component={Caduser}/>
        </Stack.Navigator>
      </NavigationContainer>

      <Toast

      />
    </>
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
