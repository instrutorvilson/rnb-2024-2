import { View, Text, FlatList, TextInput, Pressable, Image } from 'react-native'
import CardContato from './cardContato'
import styles from './estilos'
import { useEffect, useState } from 'react'

export default function ListaContatos({navigation}) { 
    const[contatos, setContatos] = useState([])
    const[recarregar, setCarregar] = useState(false)
    
    useEffect(()=>{
       fetch('http://localhost:3000/contatos')
       .then(response => response.json())
       .then(dados => setContatos(dados))
    },[recarregar])

    return (
        <View>
            <Text style={[styles.rotulo, { alignSelf: 'center', marginBottom: 10 }]}>Lista de contatos</Text>
            <FlatList
                contentContainerStyle={{ marginHorizontal: 20 }}
                data={contatos}
                renderItem={({ item }) =>
                    <CardContato 
                       contato={item} 
                       atualizar={setCarregar}
                       navigation={navigation}
                    />
                }
                

            />
        </View>
    )
}