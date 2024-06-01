import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MeuProvider from './providers/meuProvider';
import Component1 from './componentes/componente1';
import Component2 from './componentes/componente2';

export default function App() {
  return (
    <MeuProvider>
      <View style={styles.container}>
         <Component1 />
         <Component2 />
      </View>
       
    </MeuProvider>
   
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
