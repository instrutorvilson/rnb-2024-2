import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, Alert } from 'react-native';
import CardContato from './CardContato';

const contatos = [
  {
    id:1,
    nome:'maria'
  },
  {
    id:2,
    nome:'Joao'
  }
]

function Filho(props){
  return(
     <View>
       <Text>Titulo {props.mensagem.title}</Text>
       <Text>Descrição {props.mensagem.descricao}</Text>
       <Button 
           title='Envia mensagem para o pai'
           onPress={()=>props.onFilhoFalaProPai('ola papai')}
       />
     </View>
  )
}

function Pai(){
  const mensagem = {title:'sei lá', descricao: 'vc está deserdado'}

  function mensagemRecebidaDoFilho(texto){
    Alert.alert(texto)
  }
  return(
    <View>
         <Filho mensagem={mensagem} onFilhoFalaProPai={mensagemRecebidaDoFilho}/>         
      </View>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lista de Contatos</Text>
      
      {/*<FlatList 
         data={contatos}
         renderItem={({item})=> <CardContato id={item.id} nome={item.nome}/>}
  />      */}
      
      <Pai />

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
});
