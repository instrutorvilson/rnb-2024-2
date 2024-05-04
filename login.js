import { useRef, useState } from "react"
import { Stack, TextInput,Button, AppBar } from "@react-native-material/core"
import Toast from 'react-native-toast-message'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from './firebaseConfig'


export default function Login({navigation}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const refNome = useRef(null)
    const refPassword = useRef(null)
    
    function logar(){
       if(!validaUser()) {
        return
       }

       const auth = getAuth(app)
       signInWithEmailAndPassword(auth,email,password)
       .then((userCredential) => {
          const user = userCredential.user
          Toast.show({
            type:'success',
            text1:'Informação',
            text2:'Logado com sucesso'
          })
          //armazenar dados do login no asynstorage
          
           AsyncStorage.setItem('user', user.accessToken)
          //navegar para Home
       })
       .catch(error => Toast.show({
        type:'error',
        text1:'Atenção',
        text2:error.message
      }))
    }

    function validaUser(){
        if(email == ''){
            Toast.show({
                type:'info',
                text1:'Informação',
                text2:'O nome deve ser informado'
              })
              refNome.current.focus()
              return false 
        }

        if(password == ''){
            Toast.show({
                type:'info',
                text1:'Informação',
                text2:'Informe a senha'
              })
              refPassword.current.focus()
              return false  
        }

        return true
    }

    return(
        <>
        <AppBar 
           title="Fazer login" 
           style={{width: '100%', alignItems:'center', marginVertical: 15}}
           color={'#ccc'}
           elevation={false}
           />
        <Stack>
            <TextInput 
               placeholder="Informe email"
               value={email}
               onChange={txt => setEmail(txt.target.value)}
               ref={refNome}
               keyboardType="email-address"
            />
            <TextInput 
              placeholder="Informe  password"
              value={password}
              onChange={txt => setPassword(txt.target.value)}
              ref={refPassword}
              secureTextEntry={true}
            />

            <Stack style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                <Button title="Logar" onPress={logar}/>
                <Button title="Registrar" color="#080" onPress={() => navigation.navigate('register')}  />
            </Stack>
        </Stack>
        </>
    )
}