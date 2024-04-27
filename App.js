import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text, View, Button,
  FlatList,
  TextInput,
  Pressable
} from 'react-native';

export default function App() {
  const[id, setId] = useState(0)
  const [contatos, setContatos] = useState([])
  const [nome, setNome] = useState('Antonio')
  const [email, setEmail] = useState('antonio@gmail.com')
  const [fone, setFone] = useState('(47)9090-5632')
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => { load() }, [contatos])

  function load() {
    fetch('http://localhost:3000/contatos')
      .then(response => response.json())
      .then(data => setContatos(data))
  }

  function salvar() {
    let payload = {
      nome: nome,
      email: email,
      fone: fone
    }
    if (isEditing) {
      fetch(`http://localhost:3000/contatos/${id}`,
      {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload)
      })
      .then(response => load())
    } else {
      fetch('http://localhost:3000/contatos',
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(payload)
        })
        .then(response => load())
    }
    setId(0)
    setIsEditing(false)
  }

  function editar(id){
    setId(id)
    setIsEditing(true)
    fetch(`http://localhost:3000/contatos/${id}`)
      .then(response => response.json())
      .then(data => {
          setNome(data.nome)
          setEmail(data.email)
          setFone(data.fone)
      })
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
      <FlatList
        data={contatos}
        renderItem={({ item }) => <Card contato={item} onEditar={editar} />}
      />
    </View>
  );
}

const Card = (props) => {

  function excluir() {
    fetch(`http://localhost:3000/contatos/${props.contato.id}`,
      {
        method: 'DELETE'
      })
      .then(response => load())
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
          <Text style={styles.excluir}>Excluir</Text>
        </Pressable>
        <Pressable
          onPress={()=>props.onEditar(props.contato.id)}
        >
          <Text style={styles.editar}>Editar</Text>
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
    color: 'red'
  },
  editar: {
    color: 'green'
  }
});
