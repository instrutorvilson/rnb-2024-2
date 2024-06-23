import { 
    Alert, 
    Platform, 
    Pressable, 
    Text, 
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Image
} from "react-native"

export default function Botoes() {
    function alerta(){
       if( Platform.OS === 'android'){
         Alert.alert('Ola')
       }

       if(Platform.OS === 'web'){
         alert('Ola')
       }
    }
    return (
        <View style={styles.container} >
            <Text>Botoes</Text>
            <Pressable
               onPress={()=> alerta()}
               style={styles.botao1}
            >
                 <Text 
                   style={{color:'white'}}
                 >
                    Clique aqui
                </Text>
            </Pressable>

            <TouchableOpacity
              onPress={()=> alert('ola de novo')}
            >
                <Text>Clique aqui também</Text>
            </TouchableOpacity>

            <TouchableHighlight
               onPress={()=> alert('ola de novo, novo')}
            >
               <Text>Clique aqui de novo</Text>
            </TouchableHighlight>

            <Pressable
               onPress={() => alert('opa onça pintada')}
            >
                <Image
                    source={require('../assets/onca.png')}
                    style={{width:200, height: 100}}
                />
            </Pressable>          

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        padding: 20
    },
    botao1:{
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 10
    }
})