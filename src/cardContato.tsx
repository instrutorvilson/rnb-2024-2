import {View, Text, StyleSheet } from  'react-native'
export default function CardContato( props:any ) {
    return (
        <View style={styles.container}>
            <Text>Nome: {props.contato.nome}</Text>
            <Text>Email: {props.contato.email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
      backgroundColor: '#e3e4e6',
      marginVertical: 5,
      padding: 10
   } 
})

