import { StyleSheet, Text, View, FlatList, Button, Alert } from 'react-native';
import CardContato from './CardContato';
import { useState } from 'react';

/*var contatos = [
  {
    id:1,
    nome:'mariaz'
  },
  {
    id:2,
    nome:'Joao'
  }
]*/

/*function Filho(props){
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

/*
function Pai(){
  const mensagem = {title:'sei lá', descricao: 'vc está deserdado'}

  function mensagemRecebidaDoFilho(texto){
    alert(texto)
  }
  return(
    <View>
         <Filho mensagem={mensagem} onFilhoFalaProPai={mensagemRecebidaDoFilho}/>         
      </View>
  )
}
*/


export default function App() {
  const[contatos, setContatos] = useState([
    {
      id:1,
      nome:'mariaz'
    },
    {
      id:2,
      nome:'Joao'
    }
  ])
  function excluir(id){
    /* let oldData = contatos;
     console.log(oldData)
     let newData = oldData.filter(ct => ct.id != id)
     console.log(newData)
     contatos = newData
     console.log(contatos)*/

     let oldData = [...contatos]
     console.log(oldData)
     let newData = oldData.filter(ct => ct.id != id)
     console.log(newData)
     setContatos(newData)
  }

  return (
    <View style={styles.container}>
      <Text>Lista de Contatos</Text>
      
      <FlatList 
         data={contatos}
         renderItem={({item})=> 
            <CardContato  
              id={item.id} 
              nome={item.nome}
              onDelete={excluir}
            />}
     />   
     
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
