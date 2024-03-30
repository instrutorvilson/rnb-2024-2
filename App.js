import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, Button, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
const dimensionWidth = Dimensions.get('window').width

export default function App() {
  const [msg, setMsg] = useState('Hello world')
  //hook que gerencia estado do componente
  //array com duas posições
  //0 -> variavel
  //1 -> referencia a uma função

  const [nome, setNome] = useState('')
  const [sobreNome, setSobreNome] = useState('')
  const [nomeCompleto, setNomeCompleto] = useState('')

  function handleFormarNomeCompleto(){
    setNomeCompleto('')

    if(nome == ''){
      alert('Informe o nome')
      return
    }
    setNomeCompleto(nome + ' ' + sobreNome)
  }

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Text style={{ textTransform: 'uppercase' }}>Meu primeiro componente Reactnative</Text>
      </View>
      <View style={[styles.topo, styles.main, { padding: 10 }]}>
        <TextInput
          style={styles.input}
          placeholder='Informe sua mensagem'
          defaultValue={msg}
          onChangeText={txt => setMsg(txt)}
        />
        {/* <Button
           title='Clique aqui'
           onPress={()=>alert('')}
        />

        <TouchableOpacity>
          <Text>Clique aqui</Text>
        </TouchableOpacity>
        */}
        <Pressable
          style={styles.btacao}
          onPress={() => alert('ola')}
        >
          <Text style={{ textAlign: 'center' }}>Clique aqui</Text>
        </Pressable>

        {/** lendo o valor do hook useState*/}
        <Text>{msg}</Text>
      </View>
      <View style={{ flex: 4, backgroundColor: 'blue', width: dimensionWidth }}>
        <Text style={{ textTransform: 'uppercase', textAlign: 'center' }}>Formar nome completo</Text>
        
        <TextInput
          style={styles.input}
          placeholder='Informe primeiro nome'
          defaultValue={nome}
          onChangeText={txt => setNome(txt)}
        />

        <TextInput
          style={styles.input}
          placeholder='Informe ultimo nome'
          defaultValue={sobreNome}
          onChangeText={txt => setSobreNome(txt)}
        />

        <Pressable
           style={[styles.btacao,{backgroundColor:'silver', alignSelf: 'center'}]}
           onPress={handleFormarNomeCompleto}
        >
           <Text style={styles.btlabel}>Formar nome completo</Text>
        </Pressable>
        <View>
           <Text>{nomeCompleto}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  btlabel:{
     textAlign:'center'
  },
  btacao: {
    width: dimensionWidth / 2,
    backgroundColor: 'yellow',
    paddingVertical: 5,
    borderRadius: 10
  },
  topo: {
    flex: 1,
    backgroundColor: 'red',
    width: dimensionWidth
  },
  main: {
    flex: 2, backgroundColor: 'green'
  },
  container: {
    flex: 1,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    color: 'green',
    fontWeight: '700',
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 2,
    borderRadius: 10,
    margin: 10
  }
});
