import { useState } from "react"
import { View, Text, StyleSheet, Button, TextInput } from "react-native"
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import app from '../configuracao/firebaseConfig'

export default function Register(){
    const [email, setEmail] = useState('maria@gmail.com')
    const [password, setPassword] = useState('123456')

   async function salvar(){
    try{
        const auth = getAuth(app)
        await  createUserWithEmailAndPassword(auth, email, password);
        setEmail('')
        setPassword('')
     }catch(erro){
        alert(erro)
     }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Criar novo usuario</Text>  
            
            <Text style={styles.rotulo}>Email</Text>
            <TextInput
               style={styles.input} 
               placeholder="Ex: maria@gmail.com"
               keyboardType="email-address" 
               value={email}          
               onChange={txt => setEmail(txt.target.value)}
            />  

            <Text style={styles.rotulo}>Password</Text>
            <TextInput
               style={styles.input} 
               placeholder="Ex:1234"
               value={password}          
               onChange={txt => setPassword(txt.target.value)}
               secureTextEntry={true}
            /> 
            <View>
                <Button title="Gravar" onPress={salvar}/>
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