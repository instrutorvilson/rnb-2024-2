import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Toast from 'react-native-toast-message'
import { NavigationContainer } from '@react-navigation/native'
import { useRef } from 'react'

import Greeting from './src/greeting'
import Idade from './src/idade';
import { Button } from 'react-native';

export default function App() {
  const Stack = createNativeStackNavigator()
  const navigationContainerRef = useRef()
  return (
    <>      
     <NavigationContainer ref={navigationContainerRef}>
     <Stack.Navigator>
               <Stack.Screen name='greeting' component={Greeting} options={
                { headerRight: () => (
                        <Button
                          onPress={() => navigationContainerRef.current.navigate('idade')}
                          title="Idade"    
                        />
                )}}
                />
               <Stack.Screen name='idade' component={Idade}/>
           </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
      <Toast 
         position='bottom'
      />
    </>
  );
}


