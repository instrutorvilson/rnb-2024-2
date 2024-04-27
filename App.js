import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text, View, Button,
  FlatList,
  TextInput,
  Pressable
} from 'react-native'

import axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function App() {
  const [id, setId] = useState(0)
  const [contatos, setContatos] = useState([])
  const [nome, setNome] = useState('Antonio')
  const [email, setEmail] = useState('antonio@gmail.com')
  const [fone, setFone] = useState('(47)9090-5632')
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => { load() }, [contatos])

  function load() {
    axios.get('http://localhost:3000/contatos')
      .then(response => setContatos(response.data))

  }

  function salvar() {
    if (isEditing) {
      axios.put(`http://localhost:3000/contatos/${id}`,
        {
          id: id,
          nome: nome,
          email: email,
          fone: fone
        }
      )
        .then(response => load())
    } else {
      axios.post('http://localhost:3000/contatos',
        {
          nome: nome,
          email: email,
          fone: fone
        }
      )
        .then(response => load())
        .catch(error => console.log(error))
    }
    setId(0)
    setIsEditing(false)
  }

  async function editar(id) {
    setId(id)
    setIsEditing(true)
    /* fetch(`http://localhost:3000/contatos/${id}`)
       .then(response => response.json())
       .then(data => {
           setNome(data.nome)
           setEmail(data.email)
           setFone(data.fone)
       })*/
    let response = await fetch(`http://localhost:3000/contatos/${id}`)
    let data = await response.json()
    setNome(data.nome)
    setEmail(data.email)
    setFone(data.fone)
  }

  return (
    <View style={styles.container}>
      <Text>Agenda</Text>
      <View>
        <Text>Informe nome</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: Antonio'
          value={nome}
          onChange={txt => setNome(txt.target.value)}
        />
        <Text>Informe email</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: antonio@gmail.com'
          value={email}
          onChange={txt => setEmail(txt.target.value)}
        />
        <Text>Informe fone</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: (47)9090-8956'
          value={fone}
          onChange={txt => setFone(txt.target.value)}
        />
      </View>

      <Button
        title='Salvar'
        onPress={salvar}
      />
      <Text>Id:{id}</Text>
      <Text>isEditing: {isEditing}</Text>
      <FlatList
        data={contatos}
        renderItem={({ item }) => <Card contato={item} onEditar={editar} />}
      />
    </View>
  );
}

const Card = (props) => {

  async function excluir() {
    await axios.delete(`http://localhost:3000/contatos/${props.contato.id}`)
    load()
  }

  return (
    <View style={styles.container}>
      <Text>Nome: {props.contato.nome}</Text>
      <Text>Email: {props.contato.email}</Text>
      <Text>Fone: {props.contato.fone}</Text>
      <View style={styles.containerBotoes}>
        <Pressable
          onPress={excluir}
        >
          <View style={styles.icone}>
            <Text style={styles.excluir}>Excluir</Text>
            <Icon name='trash' size={25} color={'red'} />
          </View>
        </Pressable>
        <Pressable
           style={styles.icone}
           onPress={() => props.onEditar(props.contato.id)}
        >
          <Text style={styles.editar}>Editar</Text>
          <Icon name='edit' size={25} color={'green'} />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10
  },
  input: {
    marginVertical: 5,
    borderWidth: 1,
    padding: 10
  },
  containerBotoes: {
    marginVertical: 3,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
  ,
  excluir: {
    color: 'red',
    marginRight: 5
  },
  editar: {
    color: 'green'
  },
  icone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#aaa'
  }
});
