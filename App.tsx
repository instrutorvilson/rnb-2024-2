import 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { 
  createMaterialTopTabNavigator 
}
from '@react-navigation/material-top-tabs'

import RouteFinanceiro from './src/rotas/routeFinaceiro';
import RouteCompras from './src/rotas/routeCompras';
import RouteAdm from './src/rotas/routeAdm';

const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
       <Tab.Navigator>
          <Tab.Screen name='financeiro' component={RouteFinanceiro} />
          <Tab.Screen name='compras' component={RouteCompras} />
          <Tab.Screen name='adm' component={RouteAdm} />
       </Tab.Navigator>
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
