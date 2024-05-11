import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContasReceber from '../financeiro/contasReceber';
import ContasPagar from '../financeiro/contasPagar';
import Extrato from '../financeiro/extrato';
const Tab = createBottomTabNavigator()

const RouteFinanceiro = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='contasreceber' component={ContasReceber} />
            <Tab.Screen name='contaspagar' component={ContasPagar} />
            <Tab.Screen name='extrato' component={Extrato} />
        </Tab.Navigator>
    )
}
export default RouteFinanceiro