import { createDrawerNavigator } from '@react-navigation/drawer'
import Compra from '../compras/compra'
import Pedido from '../compras/Pedido'
import Cotacao from '../compras/cotacao'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useState} from 'react'

const Drawer = createDrawerNavigator()

export default function RouteCompras({ navigation }) {
   return (
      <Drawer.Navigator>
         <Drawer.Screen
            name='compra'
            component={Compra}
            options={{ title: 'Compras' }}
         />
         <Drawer.Screen
            name='pedido'
            component={Pedido}
            options={{ title: 'Pedidos' }}
         />
         <Drawer.Screen
            name='cotacao'
            component={Cotacao}
            options={{ title: 'Cotações' }}
         />
      </Drawer.Navigator >
   )
}