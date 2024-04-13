import { useRef, useState } from "react"
import styles from "./estilos"
import {Text, TextInput, Button, Alert} from 'react-native'
import Toast from 'react-native-toast-message'

export default function Idade(){
    const [idade, setIdade] = useState()
    const refIdade = useRef(null)

    const verificarIdade = () => {
        if(idade === undefined){
            Toast.show({
                type: 'error',
                text1: 'Entrada inválida',
                text2: 'A idade deve ser informada'
              })
            refIdade.current.focus()
            return
        }

        let msg = ''
        if(idade < 18){
            msg = 'Menor de idade'
        }else{
            msg = 'Maior de idade'
        }
        
        Toast.show({
            type: 'success',
            text1: 'Resultado',
            text2: msg
          })

    }
10
    return(
        <>
           <Text>Informe sua idade</Text>
           <TextInput 
              style={[styles.input,{textAlign:'right'}]}
              placeholder='Informe sua idade'
              defaultValue={idade}
              onChangeText={txt => setIdade(txt) }
              keyboardType='numeric'
              ref={refIdade}
           />
           <Button 
               title='clique aqui' 
               onPress={verificarIdade}   
            />
        </>
    )
}