import { useContext, useState } from "react"
import {View, Text, Button, TextInput} from 'react-native'
import MeuContexto from "../contexts/meuContext"

export default function Component1(){
    const [nome, setNome] = useState('Maria')
    const {valor, alterarValor} = useContext(MeuContexto)
    return(
        <View>
            <Text>Componente1</Text>
            <Text>Valor: {valor} </Text>

            <TextInput 
                style={{padding: 10, borderBottomWidth: 1}}
                value={nome}
                onChangeText={txt => setNome(txt)}
            />
            <Button title="clique aqui" onPress={() => alterarValor( nome )}>

                Trocar valor
            </Button>
        </View>
    )
}