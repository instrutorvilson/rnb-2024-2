import { Stack, AppBar, Button } from "@react-native-material/core"
export default function Home({navigation}){
    return(
        <Stack>
           <AppBar title="Minha Agenda" />
           <Button title="Logar" onPress={()=>navigation.navigate('login')} />
        </Stack>
    )
}