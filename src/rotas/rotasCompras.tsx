import { createDrawerNavigator } from '@react-navigation/drawer'
import Pedido from '../pages/compras/pedido'
import Orcamento from '../pages/compras/orcamento'
import NotaFiscal from '../pages/compras/notaFiscal'
const Stack = createDrawerNavigator()
export default function RotasCompras(){
    return(
        <Stack.Navigator>
        <Stack.Screen name='pedido' component={Pedido} />
        <Stack.Screen name='orcamento' component={Orcamento} />
        <Stack.Screen name='notafiscal' component={NotaFiscal} />
      </Stack.Navigator>
    )
}