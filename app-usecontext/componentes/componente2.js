import { useContext } from "react"
import {View, Text} from 'react-native'
import MeuContexto from "../contexts/meuContext"

export default function Component2(){
    const {valor} = useContext(MeuContexto)
    return(
        <View>
            <Text>Componente2</Text>
            <Text>Valor: {valor} </Text>
        </View>
    )
}