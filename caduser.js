import { useRef, useState } from "react"
import { Stack, TextInput,Button, AppBar } from "@react-native-material/core"
import Toast from 'react-native-toast-message'
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import app from './firebaseConfig'


export default function Caduser(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const refNome = useRef(null)
    const refPassword = useRef(null)
    
    function criarUser(){
       if(!validaUser()) {
        return
       }

       const auth = getAuth(app)
       createUserWithEmailAndPassword(auth,email,password)
       .then(userCredential => {
          const user = userCredential.user
          Toast.show({
            type:'success',
            text1:'Informação',
            text2:'Usuário cadastrado com sucesso'
          })
         // limpar()
         setEmail('')
         setPassword('')
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

        if(password.length < 6){
            Toast.show({
                type:'info',
                text1:'Informação',
                text2:'A senha deve ter no mínimo 6 caracteres'
              })
              refPassword.current.focus()
              return false  
        }

        return true
    }

  /*  function limpar(){
        setEmail('')
        setPassword('')
    }*/
    return(
        <>
        <AppBar 
           title="Register User" 
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
                <Button title="Gravar" onPress={criarUser}/>
                <Button title="Cancelar" color="red" onPress={()=>{
                    setEmail('')
                    setPassword('')}}
                />
            </Stack>
        </Stack>
        </>
    )
}