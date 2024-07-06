import {View, Pressable, Text} from 'react-native'
import styles from './estilos'
export default ({ navigation })=>{
    return(
        <View style={{flex: 1, marginHorizontal: 20}}>
            <Pressable
               style={styles.botao}
               onPress={()=> navigation.navigate('cadastro')}
            >
                <Text>Cadastro</Text>
            </Pressable>

            <Pressable
               style={styles.botao}
               onPress={()=> navigation.navigate('lista')}
            >
                <Text>Consulta</Text>
            </Pressable>
        </View>
    )
}