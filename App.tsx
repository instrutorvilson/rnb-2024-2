import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import styles from './src/estilos'
import { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState('Ana')
  const [peso, setPeso] = useState('95.5')
  const [altura, setAltura] = useState('1.60')
  const [status, setStatus] = useState('')
 
  function calcularIMC() {
    let al = Number(altura)
    let imc = Number(peso) / (al * al)
    
    if(imc < 18.5){
      setStatus('Magreza')
      return
    }

    if(imc < 24.9){
      setStatus('Normal')
      return
    }

    if(imc < 29.9){
      setStatus('Sobrepeso')
      return
    }

    if(imc < 39.9){
      setStatus('Obesidade')
      return
    }

    if(imc > 40.0 ){
      setStatus('Obesidade grave')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem vindos ao IMC Calculator</Text>
       <TextInput 
          placeholder='Inform nome'
          style={styles.input}
          value={nome}
          onChangeText={text => setNome(text)}
       />
       <TextInput 
          placeholder='Inform altura'
          style={styles.input}
          value={altura}
          onChangeText={text => setAltura(text)}
       />
       <TextInput 
          placeholder='Inform peso'
          style={styles.input}
          value={peso}
          onChangeText={text => setPeso(text)}
       />
       <Button
         title='Carregar'
         onPress={calcularIMC}
       />

       <View style={{marginTop: 10 }}>
         Status: <Text style={{color: status == 'Normal' ? 'black' : 'red' }}>{status}</Text> 
       </View>
       
    </View>
  );
}


