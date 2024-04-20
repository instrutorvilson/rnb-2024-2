import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
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

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Lista de Contatos</Text>
      
      <FlatList 
         data={contatos}
         renderItem={({item})=> <CardContato id={item.id} nome={item.nome}/>}
      />      
      <StatusBar style="auto" />
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
