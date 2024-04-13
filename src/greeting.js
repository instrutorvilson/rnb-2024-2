import { Text, Button, TextInput, View } from 'react-native'
import styles from './estilos'
import { useRef, useState } from 'react'
import Toast from 'react-native-toast-message'

export default function Greeting() {
    const [nome, setNome] = useState('')
    const refNome = useRef(null)
    return (
        <View style={styles.container}>
            <Text>Informe nome</Text>
            <TextInput
                ref={refNome}
                style={styles.input}
                placeholder='informe nome'
                defaultValue={nome}
                onChangeText={txt => setNome(txt)}
            //value={nome}
            //onChange={txt => setNome(txt.target.value)}
            />

            <Button
                title='clique aqui'
                onPress={() => {
                    if(nome === ''){
                        Toast.show({type:'error',text1:'Entrada inválida', text2:'O nome deve ser informado'})
                        refNome.current.focus()
                        return
                    }
                    Toast.show({ type: 'success', text1: 'Resultado', text2: `Olá ${nome}` })
                }
                }
            />
        </View>
    )
}
