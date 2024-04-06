import { useRef, useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import Toast from 'react-native-toast-message';
import styles from  '../estilos/estilos'
export default function NomeCompleto() {
  const[nome, setNome] = useState('')
  const[sobreNome, setSobreNome] = useState('')
  const[nomeCompleto, setNomeCompleto] = useState('')

  const nomeRef = useRef(null)

  function gerarNomeCompleto(){
    if(nome === ''){
      Toast.show({
        type: 'error',
        text1: 'Atenção',
        text2: 'O nome deve ser informado'
      });
      nomeRef.current.focus()
      return
    }

    if(sobreNome === ''){
      Toast.show({
        type: 'error',
        text1: 'Atenção',
        text2: 'O sobrenome deve ser informado'
      });
      return
    }
    setNomeCompleto(nome + " " + sobreNome)
  }
  return (
    <View style={styles.container}>
      <Text style={{textTransform:'uppercase', marginBottom: 30}}>Nome Completo</Text>
      <View>
          <Text style={styles.label}>Informe nome</Text>
          <TextInput 
             style={styles.input}
             placeholder="Informe nome"
             defaultValue={nome}
             onChangeText={(txt)=>setNome(txt)}
             ref={nomeRef}
          />
          <Text style={styles.label}>Informe sobrenome</Text>
          <TextInput 
             style={styles.input}
             placeholder="Informe sobrenome"
             defaultValue={sobreNome}
             onChangeText={(txt)=>setSobreNome(txt)}
          />

          <Pressable
             style={styles.btacao}
             /*onPress={()=>setNomeCompleto(nome + " " + sobreNome)}*/
             onPress={gerarNomeCompleto}
          >
              <Text style={{color:'white', textAlign: 'center'}}>Gerar nome completo</Text>
          </Pressable>

          <Text>{nomeCompleto}</Text>
      </View>      
    </View>
  );
}


