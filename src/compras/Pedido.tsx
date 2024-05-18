import {useState} from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import app from '../configuracao/firebaseConfig'
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"
import { useEffect } from 'react'

export default function Pedido({navigation}){
    const[cliente, setCliente] = useState('Ray da Silva')
    const[produto, setProduto] = useState('Torresmo')
    const[quantidade, setQuantidade] = useState('1')
    const[preco, setPreco] = useState('10.55')

    async function salvar(){
      var db = getFirestore(app)
      await addDoc(collection(db,'pedidos'),{cliente, produto, quantidade})
      alert('Pedido cadastrado com sucesso')
    }

    useEffect(() => { verificaUserLogado() }, [])

    async function verificaUserLogado() {
        let userLogado = await AsyncStorage.getItem('userLogado')
        if (userLogado == null) {
            navigation.navigate('login')
        }
    }


   async function carregar(){
      var db = getFirestore(app)
      var query = await getDocs(collection(db, 'pedidos'))
      query.forEach((doc) => console.log(`${doc.id} dados: ${doc.data().cliente}`))
    }

    return(
        <View style={styles.container}>
          <Text>Fazer pedido</Text>
          <Text style={styles.rotulo}>Cliente</Text>
            <TextInput
               style={styles.input} 
               placeholder="Ex: João"
               value={cliente}          
               onChange={txt => setCliente(txt.target.value)}
            />  

            <Text style={styles.rotulo}>Nome do Produto</Text>
            <TextInput
               style={styles.input} 
               placeholder="Ex:Milho"
               value={produto}          
               onChange={txt => setProduto(txt.target.value)}               
            /> 
            <Text style={styles.rotulo}>Quantidade do Produto</Text>
            <TextInput
               style={styles.input} 
               placeholder="Ex: 1"
               value={quantidade}          
               onChange={txt => setQuantidade(txt.target.value)}
               keyboardType='numbers-and-punctuation'
            /> 
            <View>
                <Button title="Gravar" onPress={salvar}/>
                <Button title='Carregar' onPress={carregar} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  input:{
      marginVertical: 5,
      borderBottomWidth: 1,
      padding: 10
  },
  title:{
      fontSize: 18,
      textTransform: "uppercase",
      textAlign: 'center'
  },
  rotulo:{
      fontSize: 14,
      marginTop: 10
  }
});