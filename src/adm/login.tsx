import { useState } from "react"
import {Text, View, Button, TextInput, StyleSheet} from 'react-native'
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../configuracao/firebaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({navigation}){
    const [email, setEmail] = useState('maria@gmail.com')
    const [password, setPassword] = useState('123456')

   async function logar(){
    try{
        const auth = getAuth(app)
       var userCredential = await  signInWithEmailAndPassword(auth, email, password);
       await AsyncStorage.setItem('userLogado', userCredential.user.email)
       navigation.navigate('compras')
        
     }catch(erro){
        alert(erro)
     }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Fazer login</Text>  
            
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
                <Button title="Logar" onPress={logar}/>
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