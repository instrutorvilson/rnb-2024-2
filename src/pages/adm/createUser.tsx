import { useState } from 'react'
import { View, Text, Button } from 'react-native'
import TUsuario from '../../types/typeUsuario'
import { Perfil } from '../../types/eperfil'
import { TextInput } from 'react-native-gesture-handler'
import styles from '../../estilos/estilosform'
import { Picker } from '@react-native-picker/picker'



export default function CreateUser({ navigation }) {
    const [user, setUser] = useState<TUsuario>(
        {
            nome: 'ana',
            email:'ana@gmail',
            senha: '',
            perfil: Perfil.OPERADOR
        }
    )

    function handleGravar(){
        console.log(user)
    }
    return (
        <View>
            <Text>criar usuario</Text>
            <TextInput 
               style={styles.input}
               value={user.nome}
               onChange={ (e)=> setUser({...user,nome:e.target.value})}
            />
            <TextInput 
               style={styles.input}
               value={user.email}
               onChange={ (e)=> setUser({...user, email:e.target.value})}
            />
            <TextInput 
               style={styles.input}
               value={user.senha}
               onChange={ (e)=> setUser({...user, senha:e.target.value})}
            />
            <Picker
               selectedValue={user.perfil}
               onValueChange={e => setUser({...user, perfil: e})}
               style={{width:100}}
            >
                <Picker.Item label={"ADM"} value={Perfil.ADM} />
                <Picker.Item label={"GERENTE"} value={Perfil.GERENTE} />
                <Picker.Item label={"OPERADOR"} value={Perfil.OPERADOR} />
            </Picker>
            <Text>{user.perfil}</Text>
        </View>
    )
}