import {
    Text,
    TextInput,
    View,
    Pressable
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons'
import styles from './estilos';
export default function Revisao() {
    return (
        <View>
            <Text style={styles.titulo}>Hello world</Text>
            <TextInput
                style={styles.input}
                placeholder='Informe seu nome'
            />
            <Pressable
                style={styles.botao}
            >
                <Ionicons name='add' size={30} color='red'></Ionicons>
                <Text style={{ color: '#4b86b4', fontWeight: '700' }}>Clique aqui</Text>
            </Pressable>
        </View>
    )
}