import { View, Text, TextInput, Image, Pressable } from "react-native"
import styles from "./estilos"
import { useEffect, useRef, useState } from "react"
import Toast from 'react-native-toast-message'
import Ionicons from '@expo/vector-icons/Ionicons'
import urlFotoBase from './utils'
import ListaContatos from "./listaContatos"

const CadContato = ({route, navigation }) => {
    const [nome, setNome] = useState('Joana')
    const [email, setEmail] = useState('joana@gmail.com')
    const [idFoto, setIdFoto] = useState('5')
    const refNome = useRef(null)
    const refEmail = useRef(null)

    const { id } = route.params

    useEffect(()=> {
            if(id){
                fetch(`http://localhost:3000/contatos/${id}`)
                .then(response => response.json())
                .then(dados => {
                    setNome(dados.nome)
                    setEmail(dados.email)
                    setIdFoto(dados.foto)
                })
            }
        }        
    ,[])

    function adicionar() {
        if (nome == '') {
            Toast.show({
                type: 'error',
                text1: 'Atenção',
                text2: 'O nome precisa ser informado'
            })
            refNome.current?.focus()
            return
        }
        if (email == '') {
            Toast.show({
                type: 'error',
                text1: 'Atenção',
                text2: 'O email precisa ser informado'
            })
            refEmail.current?.focus()
            return
        }
        
        let contato = {
            nome: nome, 
            email: email, 
            foto: `${urlFotoBase}${idFoto}.jpg`
        }
        fetch('http://localhost:3000/contatos',
            { method: 'POST', body: JSON.stringify(contato), 
            headers:{'Content-Type':'application/json'}}
        )
        .then(response => {
            setNome('')
            setEmail('')
            setIdFoto('')
    
            Toast.show({
                type: 'success',
                text1: 'Parabéns',
                text2: 'Contato cadastrado com sucesso'
            })
            navigation.navigate('lista')
        })        
    }

    return (
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
            <Text style={styles.rotulo}>Informe url da imagem</Text>
            <TextInput
                style={styles.input}
                placeholder='informe url imagem'
                value={idFoto}
                onChangeText={txt => setIdFoto(txt)}
                ref={refEmail}
            />
            <Image
                source={{ uri: `${urlFotoBase}${idFoto}.jpg` }}
                style={styles.foto}
            />
            <Pressable
                style={styles.botao}
                onPress={() => adicionar()}
            >
                <Ionicons name='add' size={30} color='red'></Ionicons>
                <Text style={{ color: '#4b86b4', fontWeight: '700' }}> Adicionar</Text>
            </Pressable>
         </View>
    )
}

export default CadContato