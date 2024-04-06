import { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import Toast from 'react-native-toast-message';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  label:{
     fontSize: 18 
  },
  btacao:{
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10
  }
});
