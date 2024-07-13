import {View, Button } from "react-native";

export default function Home({navigation}){
    return(
        <View>
            <Button 
                 title='Compras'
                 onPress={()=>navigation.navigate('compras')}
            />

        <Button 
                 title='adm'
                 onPress={()=>navigation.navigate('adm')}
            />
        </View>
    )
}