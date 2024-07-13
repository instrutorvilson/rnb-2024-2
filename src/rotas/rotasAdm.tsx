import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CreateUser from '../pages/adm/createUser'
import Permissao from '../pages/adm/permissao'
import Principal from '../pages/adm/principal'
const Stack = createBottomTabNavigator()
export default function RotasAdm(){
    return(
      <Stack.Navigator>
          <Stack.Screen name='principal' component={Principal} />
          <Stack.Screen name='createuser' component={CreateUser}/>
          <Stack.Screen name='permissao' component={Permissao} />
      </Stack.Navigator> 
    )
}