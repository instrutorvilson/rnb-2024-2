import { StyleSheet,  View } from 'react-native';
import Toast from 'react-native-toast-message';
import NomeCompleto from './src/componentes/nomeCompleto';

export default function App() { 
  return (
    <View style={styles.container}>
       <NomeCompleto />
      
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }  
});
