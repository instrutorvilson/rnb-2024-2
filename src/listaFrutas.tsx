import { View, Text, FlatList, TextInput, Pressable } from 'react-native'
import CardContato from './cardContato'
import styles from './estilos'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRef, useState } from 'react'
import Toast from 'react-native-toast-message'

export default function ListaFrutas() {
    const [nome, setNome] = useState('Joana')
    const [email, setEmail] = useState('joana@gmail.com')

    const refNome = useRef(null)
    const refEmail = useRef(null)

    const listaFrutas = ['maça', 'laranja', 'pera']
    /* const contatos = [
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
     ]*/
    const [contatos, setContatos] = useState([
        {
            nome: 'maria',
            email: 'maria@gmail.com'
        },
        {
            nome: 'pedro',
            email: 'pedro@gmail.com'
        }
    ])

    function adicionar() {
        if (nome == '') {
            Toast.show({
                type:'error',
                text1: 'Atenção',
                text2: 'O nome precisa ser informado'
            })
            refNome.current?.focus()
            return
        }
        if (email == '') {
            Toast.show({
                type:'error',
                text1: 'Atenção',
                text2: 'O email precisa ser informado'
            })
            refEmail.current?.focus()
            return
        }
        contatos.push({ nome: nome, email: email })
        setNome('')
        setEmail('')

        Toast.show({
            type:'success',
            text1: 'Parabéns',
            text2: 'Contato cadastrado com sucesso'
        })
    }
    return (
        <View>
            {/* <Text>Cesta de frutas</Text>
            <FlatList
                data={listaFrutas}
                renderItem={({ item }) => <Text>Nome: {item}</Text>}
           />*/}
            <View style={styles.container}>
                <Text style={styles.titulo}>Novo contato</Text>
                <Text style={styles.rotulo}>Informe nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder='informe nome'
                    value={nome}
                    onChangeText={txt => setNome(txt)}
                    ref={refNome}
                />
                <Text style={styles.rotulo}>Informe email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='informe email'
                    value={email}
                    onChangeText={txt => setEmail(txt)}
                    ref={refEmail}
                />
                <Pressable
                    style={styles.botao}
                    onPress={() => adicionar()}
                >
                    <Ionicons name='add' size={30} color='red'></Ionicons>
                    <Text style={{ color: '#4b86b4', fontWeight: '700' }}> Adicionar</Text>
                </Pressable>

            </View>
            <View style={{ marginTop: 30 }}>
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