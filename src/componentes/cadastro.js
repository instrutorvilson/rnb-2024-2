import { View, Text, TextInput, Pressable } from "react-native"

import styles from "../estilos/estilos"
import { useRef, useState } from "react"
import Toast from "react-native-toast-message"

export default function Cadastro() {
    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[fone, setFone] = useState('')
    const[senha, setSenha] = useState('')

    const nomeRef = useRef(null)
    const emailRef = useRef(null)
    const foneRef = useRef(null)
    const senhaRef = useRef(null)

    function gravar(){
        if(nome === ''){
            Toast.show({
              type: 'error',
              text1: 'Atenção',
              text2: 'O nome deve ser informado'
            });
            nomeRef.current.focus()
            return
          }
      
          if(email === ''){
            Toast.show({
              type: 'error',
              text1: 'Atenção',
              text2: 'O email deve ser informado'
            });
            emailRef.current.focus()
            return
          }

          if(fone === ''){
            Toast.show({
              type: 'error',
              text1: 'Atenção',
              text2: 'O fone deve ser informado'
            });
            foneRef.current.focus()
            return
          }
          if(senha === ''){
            Toast.show({
              type: 'error',
              text1: 'Atenção',
              text2: 'A senha deve ser informada'
            });
            senhaRef.current.focus()
            return
          }
    }

    return (
        <View style={styles.container}>
            <Text style={{textTransform: 'uppercase', marginBottom: 30}}>Novo usuario</Text>
            <View>
                <Text style={styles.label}>Informe nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Informe nome"
                    defaultValue={nome}
                    onChangeText={(txt) => setNome(txt)}
                    ref={nomeRef}
                />
                <Text style={styles.label}>Informe email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Informe email"
                    defaultValue={email}
                    onChangeText={(txt) => setEmail(txt)}
                    ref={emailRef}
                />
                <Text style={styles.label}>Informe fone</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Informe fone"
                    defaultValue={fone}
                    onChangeText={(txt) => setFone(txt)}
                    ref={foneRef}
                    keyboardType="phone-pad"
                />
                <Text style={styles.label}>Informe senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Informe senha"
                    defaultValue={senha}
                    onChangeText={(txt) => setSenha(txt)}
                    ref={senhaRef}
                    secureTextEntry={true}
                />
                <Pressable
                   style={styles.btacao}
                   onPress={gravar}
                >
                    <Text>Salvar</Text>
                </Pressable>
            </View>
        </View>
    )
}

