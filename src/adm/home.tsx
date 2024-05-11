import {Pressable, Text, View} from 'react-native'
export default function Home({ navigation }){
    return(
        <View>
            <Pressable
               onPress={() => navigation.navigate('login')}
            >
               <Text>Fazer login</Text>
            </Pressable>

            <Pressable
               onPress={() => navigation.navigate('register')}
            >
               <Text>Registrar novo usuário</Text>
            </Pressable>

            <Pressable
               onPress={() => navigation.navigate('resetar')}
            >
               <Text>Resetar Senha</Text>
            </Pressable>
                
        </View>
    )
}