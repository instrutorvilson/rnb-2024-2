import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import styles from './estilos'
import Ionicons from '@expo/vector-icons/Ionicons'
import Toast from 'react-native-toast-message'

export default function CardContato(props: any) {
    function excluir(id:any){
        fetch(`http://localhost:3000/contatos/${id}`,{
            method: 'DELETE'
        })
        .then(response => {
            Toast.show({
                type: 'success',
                text1: 'Parabéns',
                text2: 'Contato excluido com sucesso'
            })
            props.atualizar(true)
        })
    }
    return (
        <View style={styles.containerCard}>
            <View>
                <Image
                    source={{ uri: props.contato.foto }}
                    style={styles.fotoCard}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.labelCard}>Nome:
                    <Text style={styles.dadosLabel}>{props.contato.nome}</Text>
                </Text>
                <Text style={styles.labelCard}>Email:
                    <Text style={styles.dadosLabel}>
                        {props.contato.email}
                    </Text></Text>

                <View style={
                    {
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        margin: 10
                    }
                }>
                    <Pressable
                       onPress={()=>excluir(props.contato.id)}
                    >
                        <Ionicons name='trash' size={20} color='red'></Ionicons>
                    </Pressable>
                    <Pressable>
                        <Ionicons name='pencil' size={20} color='blue'></Ionicons>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}



