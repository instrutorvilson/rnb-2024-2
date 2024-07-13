import React from 'react'
import { View, Text } from   'react-native'
import TUsuario from '../../types/typeUsuario'
import { TextInput } from 'react-native-gesture-handler'
import styles from '../../estilos/estilosform'
class Permissao extends React.Component{
    constructor(){
        super()
        this.state = { 
            nome: 'ana', 
            email:'ana@gmail'
        }
    }
    render(){
        return(
            <View>
                <Text>conceder permissao</Text>
                <TextInput 
                    style={styles.input}
                    value={this.state.nome}
                    onChange={text => 
                        this.setState({nome:text.target.value})}
                />

               <TextInput 
                    style={styles.input}
                    value={this.state.email}
                    onChange={text => this.setState({email:text.target.value})}
                />
                <Text>{this.state.nome}</Text>
                <Text>{this.state.email}</Text>
            </View>
        )
    }    
}

export default Permissao