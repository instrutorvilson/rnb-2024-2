import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, Button, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
const dimensionWidth = Dimensions.get('window').width

export default function App() {  
  const[msg, setMsg] = useState('Hello world')
  //hook que gerencia estado do componente
  //array com duas posições
  //0 -> variavel
  //1 -> referencia a uma função
  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Text style={{ textTransform: 'uppercase' }}>Meu primeiro componente Reactnative</Text>
      </View>
      <View style={[styles.topo, styles.main,{padding: 10}]}>
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
        <Pressable>
          <Text>Clique aqui</Text>
        </Pressable>

        {/** lendo o valor do hook useState*/}
        <Text>{msg}</Text>
      </View>
      <View style={{flex: 4, backgroundColor: 'blue', width: dimensionWidth}}>
         <Text>Opa pessoal</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  topo:{
    flex: 1, 
    backgroundColor: 'red',
    width: dimensionWidth
  }, 
  main:{
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
    borderRadius: 10
  }
});
