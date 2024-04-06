import { View, Text, Pressable } from "react-native"
import styles from "../estilos/estilos"
export default function Home({ navigation }) {
    return (
        <View>
            <Text>Home</Text>
            <View>
                <Pressable
                    style={styles.btacao}
                    onPress={() => navigation.navigate('nomecompleto')}
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>nome completo</Text>
                </Pressable>
                <Pressable
                    style={styles.btacao}
                    onPress={() => navigation.navigate('cadastro')}
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>cadastro de contatos</Text>
                </Pressable>

            </View>
        </View>
    )
}