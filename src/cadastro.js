import { StyleSheet, 
    Text, 
    TextInput, 
    View,
    Button
  } from 'react-native'

import styles from './estilos'
import { useRef, useState } from 'react'

export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [sobreNome, setSobreNome] = useState('')
    
    const refNome = useRef(null)

    function nomeCompleto(p1){
        if(nome === ''){
            alert('O nome deve ser informado')
            refNome.current.focus()
            return
        }
        alert(`${p1} ${nome} ${sobreNome}`)
        setNome('')
        setSobreNome('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Meu aplicativo
            </Text>

            <TextInput
                placeholder='Informe nome'
                style={styles.input}
                value={nome}
                onChange={text => setNome(text.target.value)}
                ref={refNome}
            />

            <TextInput
                placeholder='Informe sobrenome'
                style={styles.input}
                  /* defaultValue={sobreNome}
                   onChangeText={text => setSobreNome(text)}*/ 
                value={sobreNome}
                onChange={text => setSobreNome(text.target.value)}
            />
          
            <Button
                onPress={() => nomeCompleto('Buenas Tardes')}
                title='Cadastrar'
            />

            
        </View>
    )
}