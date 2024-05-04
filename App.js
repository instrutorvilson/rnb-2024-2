import { StyleSheet, Text, View } from 'react-native'
import Toast from 'react-native-toast-message'
import Caduser from './caduser';


export default function App() {
  return(
    <View style={styles.container}>
       <Caduser /> 
       <Toast 
       
       /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
