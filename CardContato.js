import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CardContato(props) {
    return (
        <View style={styles.container}>
            <View style={styles.containerContent}>
                <Text>Id:{props.id}</Text>
                <Text>Nome: {props.nome}</Text>
            </View>
            <View style={styles.containerBotao}>
                <TouchableOpacity style={styles.botao}>
                    <Text style={{color:'red'}}>Excluir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao}>
                    <Text style={{color:'blue'}}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        borderWidth: 1,
        margin: 2

    },
    containerBotao: {
        flexDirection: 'row',
    },
    containerContent:{
       margin: 5
    },
    botao: {
        padding: 3
    }
});

