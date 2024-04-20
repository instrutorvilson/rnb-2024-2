import { StyleSheet, Text, View, FlatList, Button, Alert } from 'react-native';
import CardContato from './CardContato';
import { useState } from 'react';
import { TextInput } from 'react-native-web';

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

  const[nome, setNome] = useState('')
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

  function gravar(){
    if(nome === ''){
       alert('Informe nome')
       return
    }
     let contato = {id: contatos.length+1, nome:nome}
     setContatos([...contatos,contato])
     setNome('')
  }

  return (
    <View style={styles.container}>
      <Text>Lista de Contatos</Text>
      <View style={styles.containerNovo}>
          <Text>Novo Contato</Text>
          <TextInput 
              style={styles.input}
              placeholder='Informe nome'
              value={nome}
              onChange={txt => setNome(txt.target.value)}
          />
          <Button 
             title='Gravar'
             onPress={gravar}
          />
      </View>
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
  containerNovo:{
    backgroundColor: 'red',
    marginVertical: 10
  },
  input:{
    backgroundColor: 'white',
    marginVertical: 5,
    padding: 5
  }
});
