import { View, Text, FlatList } from 'react-native'
import CardContato from './cardContato'
export default function ListaFrutas() {
    const listaFrutas = ['maça', 'laranja', 'pera']
    const contatos = [
        {
            nome: 'maria',
            email: 'maria@gmail.com'
        },
        {
            nome: 'pedro',
            email: 'pedro@gmail.com'
        },
        {
            nome: 'joao',
            email: 'joao@gmail.com'
        },
        {
            nome: 'antonio',
            email: 'antonio@gmail.com'
        }
    ]
    return (
        <View>
           {/* <Text>Cesta de frutas</Text>
            <FlatList
                data={listaFrutas}
                renderItem={({ item }) => <Text>Nome: {item}</Text>}
           />*/}
            <View>
                <Text>Lista de contatos</Text>
                <FlatList
                    data={contatos}
                    renderItem={({ item }) =>                      
                       <CardContato contato={item} />
                    }

                     /*<CardContato 
                         nome={item.nome} 
                         email={item.email}
                       />*/
                />
            </View>
        </View>
    )
}