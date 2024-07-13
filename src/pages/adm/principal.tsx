import { Button, View } from "react-native";

export default function Principal({ navigation } ){
    return(
        <View>
            <Button 
               onPress={() => navigation.navigate('createuser')}
               title="Novo usuário"
               />
               <Button 
               onPress={() => navigation.navigate('permissao')}
               title="permissao"
               />
        </View>
    )
}