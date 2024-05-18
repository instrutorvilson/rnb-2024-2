import {Text, View} from 'react-native'
import { useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function Compra({navigation}){
 
  useEffect(async ()=>{
    var userLogado = await AsyncStorage.getItem('userLogado')
    console.log('user',userLogado)
    if(userLogado == null )
      navigation.navigate('login')
  },
  []
  )

    return(
        <View>
          <Text>Compra</Text>
        </View>
    )
}