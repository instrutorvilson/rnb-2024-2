import { createStackNavigator } from '@react-navigation/stack'
import Register from '../adm/register'
import Login from '../adm/login'
import ResetarSenha from '../adm/resetarSenha'
import Home from '../adm/home'
const Stack = createStackNavigator()
const RouteAdm = () => {
    return (
        <Stack.Navigator initialRouteName='home'>
            <Stack.Screen name='register' component={Register} />
            <Stack.Screen name='login' component={Login} />
            <Stack.Screen name='resetar' component={ResetarSenha} />
            <Stack.Screen name='home' component={Home} />
        </Stack.Navigator>
    )
}
export default RouteAdm